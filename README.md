# Drake Perkins | Developer Portfolio

**[View the Live Portfolio](https://dvperks.github.io/portfolio/)**

A personal portfolio showcasing my work as a front-end software engineer, including interactive applications developed professionally at KnowBe4 and independent projects built to explore different front-end technologies.

I have over seven years of experience building responsive interfaces, interactive applications, and digital learning experiences, with a particular focus on JavaScript, TypeScript, and accessible UI development.

## What's Included

### Professional Work — KnowBe4

- **Incident Reporting:** Developed an interactive training experience end to end, including a custom SRT subtitle parser, time-synchronized accessible captions, video controls, and quiz functionality.
- **Knowledge Race:** Built a multiplayer quiz game featuring peer-to-peer communication and real-time game-state synchronization.
- **Workplace Hazard Patrol:** Developed an interactive safety game with 3D environments, 2D overlays, quiz logic, configurable settings, and SCORM integration.
- **Double Trouble Trivia** and **Who Wants to Be a Human Firewall:** Supported maintenance and localization of existing production games; I was not their original developer.

Professional work is presented through screenshots, video clips, and descriptions of my specific contributions. The original company application source code is not included in this repository.

### Personal Projects

| Project | Focus |
|---|---|
| [React To-do List](https://github.com/DVPerks/todo-react) | React components and Hooks, task management, local storage, accessible interactions |
| [Game Show App](https://github.com/DVPerks/techdegree-project-6) | JavaScript, DOM manipulation, event-driven word-guessing gameplay |
| [WebApp Dashboard](https://github.com/DVPerks/techdegree-project-7) | Chart.js visualizations, form validation, and local storage |
| [Interactive Photo Gallery](https://github.com/DVPerks/techdegree-project-5) | CSS Grid, SCSS, asynchronous data loading, search filtering, and lightbox navigation |

Each personal project has a source-code link and a live demo. A dedicated project viewer lets visitors return to the portfolio without altering the individual applications.

## Built With

The portfolio site itself uses **HTML5, SCSS (Sass), JavaScript, Bootstrap, and Bootstrap Icons** and is hosted on **GitHub Pages**. The showcased projects use additional technologies, including React, Vite, Chart.js, and Construct 3.

The site's styling is organized into SCSS partials for shared design tokens, components, layouts, and sections. Interactive professional-work galleries are implemented with JavaScript and native HTML5 media elements.

## Accessibility Considerations

The portfolio includes semantic page landmarks, a skip-to-main-content link, visible keyboard-focus styles, descriptive media labels, and reduced-motion-aware smooth scrolling. Its professional galleries provide keyboard-operated navigation and native video controls.

Accessibility is an ongoing part of development and testing; this README does not claim a formal WCAG conformance certification.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/DVPerks/portfolio.git
cd portfolio
```

Serve it from a local web server (rather than opening `index.html` directly):

```bash
python -m http.server 8000
```

Then open **http://localhost:8000/**. On Windows, `py -m http.server 8000` is an alternative.

The compiled CSS is included. To edit the SCSS, use Sass to regenerate the stylesheets:

```bash
npx sass scss/main.scss css/main.css
npx sass scss/viewer.scss css/viewer.css
```

The original applications in `projects/` remain separate from the portfolio's main page.

## Project Layout

```text
├── index.html              # Portfolio homepage
├── project-viewer.html     # Embedded personal-project viewer
├── scss/                   # Sass source organized by component/section
├── css/                    # Compiled stylesheets
├── js/                     # Interactive gallery behavior
├── images/                 # Portfolio and project imagery
├── videos/                 # Professional project clips
├── projects/               # Standalone personal-project demos
└── resume/                 # Resume PDF
```

## Contact

- **Website:** [dvperks.github.io/portfolio](https://dvperks.github.io/portfolio/)
- **GitHub:** [DVPerks](https://github.com/DVPerks)
- **LinkedIn:** [Drake Perkins](https://www.linkedin.com/in/drake-p-0a9472398/)

## Attribution and Usage

KnowBe4 product names, screenshots, videos, and related creative assets belong to their respective owners. They are included to document professional work and should not be treated as reusable assets or open-source material. No separate open-source license is declared here for this repository.
