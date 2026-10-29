(() => {
  const D = window.PORTFOLIO;
  const $ = (sel) => document.querySelector(sel);
  const h = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) if (v !== false && v != null) n.setAttribute(k, v);
    kids.flat().forEach((k) => n.append(k instanceof Node ? k : document.createTextNode(k)));
    return n;
  };
  const NS = "http://www.w3.org/2000/svg";
  const s = (tag, attrs = {}) => {
    const n = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    return n;
  };

  /* ---- static text ---- */
  document.title = `${D.name}, ${D.role}`;
  $("#name").textContent = D.name;
  $("#role").textContent = D.role;
  $("#tagline").textContent = D.tagline;
  $("#about-text").append(...D.about.map((t) => h("p", {}, t)));
  $("#skills").append(...Object.entries(D.skills).map(([cat, items]) =>
    h("div", {}, h("h3", {}, cat), h("p", {}, items.join(", ")))));
  $("#timeline-list").append(...D.timeline.map((t) =>
    h("li", {}, h("span", { class: "when" }, t.when),
      h("div", {}, h("h3", {}, t.title), h("p", { class: "place" }, t.place), h("p", {}, t.detail)))));
  $("#contact-text").textContent = D.contact.text;
  $("#contact-links").append(
    h("a", { href: `mailto:${D.contact.email}` }, D.contact.email),
    ...D.contact.links.map((l) => h("a", { href: l.url, rel: "noopener" }, l.label)));
  $("#foot").textContent = `© ${new Date().getFullYear()} ${D.name}`;

  /* ---- filter state ---- */
  const tags = Object.keys(D.skills);
  const count = (t) => D.projects.filter((p) => p.tags.includes(t)).length;
  let active = null;

  /* ---- hero diagram: skill areas as nodes around the name ---- */
  const svg = $("#map");
  const cx = 300, cy = 210, rx = 215, ry = 140;
  const hubW = Math.min(D.name.length * 10 + 40, 230);
  const edges = [], nodes = [];
  tags.forEach((tag, i) => {
    const a = (-90 + (360 / tags.length) * i) * Math.PI / 180;
    const x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
    const w = tag.length * 8.4 + 52;
    edges.push(s("line", { x1: cx, y1: cy, x2: x, y2: y, class: "edge", pathLength: 1, style: `animation-delay:${0.15 * i}s` }));
    const g = s("g", { class: "node", tabindex: 0, role: "button", "aria-pressed": "false", "aria-label": `${tag}, ${count(tag)} projects` });
    g.append(s("rect", { x: x - w / 2, y: y - 18, width: w, height: 36, rx: 6 }));
    const t = s("text", { x: x - w / 2 + 14, y: y + 5 });
    t.textContent = tag;
    const c = s("tspan", { dx: 8, class: "n" });
    c.textContent = count(tag);
    t.append(c);
    g.append(t);
    g.addEventListener("click", () => setFilter(tag));
    g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFilter(tag); } });
    nodes.push({ tag, g });
  });
  const hub = s("g", { class: "hub" });
  hub.append(s("rect", { x: cx - hubW / 2, y: cy - 26, width: hubW, height: 52, rx: 8 }));
  const ht = s("text", { x: cx, y: cy + 6, "text-anchor": "middle" });
  ht.textContent = D.name;
  hub.append(ht);
  svg.append(...edges, ...nodes.map((n) => n.g), hub);

  /* ---- chips ---- */
  const chipBox = $("#chips");
  const chips = [null, ...tags].map((tag) => {
    const b = h("button", { type: "button", class: "chip" }, tag ?? "All");
    b.addEventListener("click", () => setFilter(tag));
    chipBox.append(b);
    return { tag, b };
  });

  /* ---- projects ---- */
  function renderProjects() {
    const list = D.projects.filter((p) => !active || p.tags.includes(active));
    $("#status").textContent = active
      ? `Showing ${list.length} of ${D.projects.length} projects in ${active}.`
      : `Showing all ${D.projects.length} projects.`;
    $("#project-list").replaceChildren(...list.map((p) => h("article", { class: "project" },
      h("p", { class: "year" }, String(p.year)),
      h("div", {},
        h("h3", {}, p.title),
        h("p", {}, p.summary),
        h("p", { class: "stack" }, p.stack.join(", ")),
        h("p", { class: "plinks" },
          p.repo ? h("a", { href: p.repo, rel: "noopener" }, "View code") : "",
          p.demo ? h("a", { href: p.demo, rel: "noopener" }, "Live demo") : "")))));
  }

  function setFilter(tag) {
    active = tag === active ? null : tag;
    nodes.forEach(({ tag: t, g }) => {
      g.classList.toggle("on", t === active);
      g.setAttribute("aria-pressed", String(t === active));
    });
    edges.forEach((e, i) => e.classList.toggle("dim", !!active && nodes[i].tag !== active));
    chips.forEach(({ tag: t, b }) => b.setAttribute("aria-pressed", String(t === active)));
    renderProjects();
  }
  setFilter(null);
})();
