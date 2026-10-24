# Justin Edrique Reyes - Portfolio

A responsive personal portfolio for Justin Edrique Reyes, a Web Developer at Pilipinas Micro-Matrix Technology, Inc. (PMTI). The site presents professional experience, education, technical skills, and contact details in a modern single-page layout.

## Highlights

- Responsive, Bootstrap-powered single-page experience
- Light and dark themes with a persistent header toggle
- Custom navy, teal, and coral visual system
- Professional hero portrait and resume-based content
- Experience, education, skills, and contact sections
- Accessible navigation, semantic markup, and reduced-motion support

## Tech stack

- HTML5
- CSS3
- JavaScript
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- Google Fonts: Manrope and DM Mono

## Project structure

```text
portfolio/
├── assets/
│   └── justin-reyes.jpg       # Header portrait
├── css/
│   └── styles.css             # Site styles, palette, responsive rules, themes
├── js/
│   └── scripts.js             # Theme switcher and navigation behavior
├── index.html                 # Portfolio page
└── README.md
```

## Run locally

This is a static site, so no build step or package installation is required.

1. Open `index.html` directly in a browser, or
2. Use a local development server, such as the **Live Server** extension in Visual Studio Code.

## Customize

Most portfolio content lives in `index.html`.

- Update professional information, skills, and contact details in the relevant sections.
- Replace the hero image at `assets/justin-reyes.jpg` and retain the same filename, or update the image path in `index.html`.
- Adjust the theme colors at the top of `css/styles.css`.
- The light/dark preference is saved in the browser under `portfolio-theme`.

## Color palette

| Purpose | Color |
| --- | --- |
| Navy / primary | `#001730` |
| Teal / interactive accent | `#4ad7d1` |
| Coral / featured accent | `#fe4a49` |

## Contact

Justin Edrique Reyes<br>
Web Developer, PMTI<br>
[dev.edrique@gmail.com](mailto:dev.edrique@gmail.com)
