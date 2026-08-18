# How to Update Your Portfolio

A quick guide for changing content and publishing updates.

## The 3-Step Update Workflow

Whenever you change anything, run these commands in the `profolio` folder:

```
git add .
git commit -m "Describe your change here"
git push
```

Your live site (https://sanchainn.github.io/) rebuilds automatically in about 1 minute.

## What to Edit for Each Change

| I want to change...     | Edit this file  | Look for...                               |
| ----------------------- | --------------- | ----------------------------------------- |
| Name, bio, tagline      | `index.html`    | `<title>`, hero section, meta description |
| Typing phrases in hero  | `js/script.js`  | `const phrases = [...]`                   |
| About text / stats      | `index.html`    | `#about` section, `data-count` values     |
| Skills tags             | `index.html`    | `#skills` section                         |
| Projects                | `index.html`    | `#projects` cards + `data-category`       |
| Publications            | `index.html`    | `#publications` entries                   |
| Awards / certifications | `index.html`    | `#awards` entries                         |
| Experience / education  | `index.html`    | `#experience` timeline items              |
| Email, GitHub, LinkedIn | `index.html`    | `#contact` and footer links               |
| Colors / theme          | `css/style.css` | `:root` CSS variables at the top          |
| Profile photo           | `index.html`    | Replace the SVG avatar (see README.md)    |

## Common Examples

### Add a new project card

In `index.html`, inside `#projects`, copy an existing card and edit it:

```html
<article class="project-card reveal" data-category="ml">
  <div class="project-card__body">
    <h3 class="project-card__title">My New Project</h3>
    <p class="project-card__desc">Short description of what it does.</p>
    <div class="project-card__tags">
      <span>PyTorch</span><span>Docker</span>
    </div>
    <div class="project-card__links">
      <a
        href="https://github.com/SanChainn/new-repo"
        target="_blank"
        rel="noopener"
        >Code</a
      >
    </div>
  </div>
</article>
```

Categories for `data-category`: `web`, `ml`, `research` (must match the filter buttons).

### Change a stat number (e.g. publications count)

In `#about`, edit the number in `data-count`:

```html
<div class="stat-card__value" data-count="4">0</div>
```

(The visible "0" is replaced by an animated counter on scroll.)

### Add a typing phrase

In `js/script.js`, add a line to the phrases array:

```js
const phrases = ["AI / Machine Learning Engineer", "My New Phrase"];
```

## Tips

- Test locally first: just double-click `index.html` to preview before pushing.
- Small, frequent commits are fine: "Update projects", "Fix typo in about".
- If `git push` asks for login, sign in with your GitHub account in the browser window that opens.
- Made a mistake? `git checkout -- filename` restores a file to the last commit.
