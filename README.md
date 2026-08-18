# San Chain Tun - Personal Portfolio Website

A modern, responsive portfolio website built with plain **HTML / CSS / JavaScript** - no build step, no dependencies. Perfect for hosting on **GitHub Pages**.

![Tech](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JS-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- Fully responsive (mobile, tablet, desktop)
- Dark / light theme toggle (remembers your choice, respects system preference)
- Typing animation in the hero
- Scroll-reveal animations & animated stat counters
- Filterable projects grid
- Timeline for experience & education, plus publications and awards sections
- Contact form with client-side validation (demo)
- Accessible: semantic HTML, ARIA labels, keyboard focus styles, `prefers-reduced-motion` support
- SEO basics: meta description, Open Graph tags, favicon

## Structure

```
profolio/
|-- index.html      # All page content & sections
|-- css/
|   |-- style.css   # All styles & theming
|   |-- extras.css  # Publications & awards section styles
|-- js/
|   |-- script.js   # Interactivity
|-- README.md
```

## Deploy to GitHub Pages (username.github.io)

### Option A - User site (recommended for a portfolio)

1. Create a new repository on GitHub named exactly:

   ```
   <your-username>.github.io
   ```

   (Replace `<your-username>` with your GitHub username, e.g. `octocat.github.io`.)

2. Push this project to the repo:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. Open `https://<your-username>.github.io` in your browser - your site is live!

### Option B - Project site

1. Push this project to any repository (e.g. `portfolio`).
2. In the repo, go to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then click **Save**.
5. Your site will be available at:
   ```
   https://<your-username>.github.io/portfolio/
   ```

## Customize It (make it yours!)

| What                    | Where                                                     |
| ----------------------- | --------------------------------------------------------- |
| Name, title, bio        | `<title>`, meta tags & hero section in `index.html`       |
| About text & stats      | `#about` section numbers (`data-count` attributes)        |
| Skills                  | `#skills` section tags                                    |
| Projects                | `#projects` cards - update titles, links, `data-category` |
| Publications            | `#publications` entries                                   |
| Awards & certifications | `#awards` entries                                         |
| Experience / education  | `#experience` timeline items                              |
| Email & social links    | Search for `SanChainn` and `sanchaintunucsy@gmail.com`    |
| Colors                  | CSS variables at the top of `css/style.css`               |
| Typing phrases          | `phrases` array in `js/script.js`                         |

### Real profile photo

Replace the SVG placeholder avatar in `index.html` with:

```html
<img src="assets/profile.jpg" alt="San Chain Tun" class="avatar__svg" />
```

(and put `profile.jpg` in an `assets/` folder).

### Working contact form

Static hosting can't send email by itself. Sign up at [Formspree](https://formspree.io) (free) and either set the form's `action` attribute, or follow their AJAX guide and wire it into the submit handler in `js/script.js`.

## Run Locally

No build tools needed - just open `index.html` in a browser, or serve it:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then visit `http://localhost:8080`.

## License

MIT - free to use and modify for your own portfolio.
