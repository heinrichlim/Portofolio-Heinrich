# My Portfolio

A fast, dependency-free portfolio site (plain HTML, CSS and JavaScript). No build step, no installs.

## 1. Add your content

Open `js/data.js` and replace the placeholder name, projects, skills, timeline and contact details. That is the only file you need to edit. Each project's `tags` must match a skill area name in `skills`.

## 2. Run it locally

Double-click `index.html`, or from this folder run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## 3. Put it on GitHub

1. Create a new empty repository on GitHub. Name it `your-username.github.io` to get the address `https://your-username.github.io`, or use any name for `https://your-username.github.io/repo-name`.
2. In this folder run:

```bash
git init -b main
git add .
git commit -m "Add portfolio"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

3. On GitHub open **Settings → Pages**, set **Source** to **GitHub Actions**. The included workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`. The first deploy takes about a minute.

## Structure

```
index.html            page structure
css/style.css         styling
js/data.js            your content (edit this)
js/main.js            renders the page and the skill diagram
assets/favicon.svg    browser tab icon
```

Licensed under MIT.
