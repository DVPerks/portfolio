# Drake Perkins | Developer Portfolio

**[View the Live Portfolio](https://dvperks.github.io/portfolio/)**

A personal portfolio showcasing my work as a Frontend Software Engineer, including interactive applications developed professionally at KnowBe4 and independent projects demonstrating modern frontend development practices.

I have over seven years of professional experience building responsive interfaces, interactive web applications, and digital learning experiences, with a focus on JavaScript, TypeScript, reusable UI components, web accessibility, and automated testing.

## What's Included

### Professional Work — KnowBe4

#### End-to-End Development

- **Workplace Hazard Patrol:** Developed an interactive workplace safety game integrating 3D environments, 2D interfaces, hazard-based scenarios, quiz logic, configurable settings, and SCORM integration.
- **Incident Reporting:** Developed an interactive training experience featuring a custom SRT subtitle parser written from scratch, time-synchronized accessible captions, custom video controls, scrubbing, and quiz functionality.
- **Knowledge Race:** Developed a multiplayer quiz game featuring peer-to-peer communication, real-time game-state synchronization, and competitive leaderboards.

#### Maintenance & Localization

- **Double Trouble Trivia:** Supported ongoing maintenance and the creation of localized versions of an existing interactive trivia game.
- **Who Wants to Be a Human Firewall:** Maintained and supported localized versions of an established security awareness quiz game.

My contributions to the latter two projects focused on maintenance and localization rather than original development.

Professional work is presented through screenshots, video clips, and descriptions of my individual contributions and technical challenges. Proprietary application source code is not included in this repository.

### Personal Projects

| Project | Technical Focus | Live Demo |
|---|---|---|
| [React To-do List](https://github.com/DVPerks/todo-react) | React, React Hooks, component-based development, state management, local storage, and web accessibility | [Playground](https://dvperks.github.io/portfolio/project-viewer.html?project=1) |
| [Wheel of Success](https://github.com/DVPerks/Game-Show-App-Remastered) | Modular JavaScript, SCSS/Sass, Vite, REST APIs, asynchronous programming, state management, web accessibility, and automated testing | [Play Game](https://dvperks.github.io/portfolio/project-viewer.html?project=2) |
| [WebApp Dashboard](https://github.com/DVPerks/Webapp-Dashboard) | JavaScript, Chart.js, data visualization, responsive design, form validation, and local storage | [View Dashboard](https://dvperks.github.io/portfolio/project-viewer.html?project=3) |
| [Interactive Photo Gallery](https://github.com/DVPerks/Interactive-Photo-Gallery) | JavaScript, SCSS/Sass, CSS Grid, Fetch API, asynchronous programming, search filtering, and lightbox navigation | [View Gallery](https://dvperks.github.io/portfolio/project-viewer.html?project=4) |

Each personal project includes a source-code link and a playable or interactive demonstration. A dedicated project viewer provides consistent navigation back to the portfolio while keeping the individual applications self-contained.

## Built With

The portfolio website itself is built with:

- **HTML5** — Semantic markup and page structure
- **CSS3 and SCSS/Sass** — Custom styling, responsive layouts, and reusable design components
- **JavaScript (ES6+)** — Interactive galleries, project navigation, and dynamic UI behavior
- **Bootstrap** — Responsive layout and interface components
- **Bootstrap Icons** — Interface iconography
- **GitHub Pages** — Static website hosting

The showcased applications use additional technologies, including React, Vite, Chart.js, REST APIs, and Construct 3.

The portfolio's styling is organized into SCSS partials for shared design tokens, components, layouts, and individual sections. Professional project galleries use JavaScript and native HTML5 media elements.

Standalone applications that require a build process are included as production-ready builds within the portfolio.

## Accessibility

Accessibility is an integral part of my approach to frontend development.

The portfolio incorporates:

- Semantic HTML and accessible page landmarks
- Skip-to-main-content navigation
- Visible keyboard-focus indicators
- Descriptive alternative text and accessible control labels
- Keyboard-accessible gallery navigation
- Responsive layouts
- Reduced-motion-aware smooth scrolling
- Native video playback controls

Accessibility considerations extend to the individual personal projects, including keyboard interactions, focus management, and accessible interface controls.

Accessibility is an ongoing part of development and testing. This portfolio does not claim formal WCAG conformance certification.

## Education & Certifications

### Bachelor of Science in Computer Engineering

**Florida Polytechnic University | 2020**

Minor in Machine Intelligence (Artificial Intelligence)

### Front End Web Development Techdegree

**Team Treehouse | November 2026**

Completed as part of my ongoing professional development, reinforcing and expanding my frontend development skills through hands-on application development and practical assessments.

**[Verify Credential](https://www.credential.net/c7e0c7c2-3877-42ee-92cd-28d78d5bdbed#acc.JsXe2Ql4)**

## Run Locally

Clone the repository:

```bash
git clone https://github.com/DVPerks/portfolio.git
cd portfolio
```

Serve the portfolio using a local web server rather than opening `index.html` directly:

```bash
python -m http.server 8000
```

On Windows, you can alternatively run:

```bash
py -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/) in your browser.

The portfolio includes compiled CSS and standalone project builds, so no additional build step is required to view the site.

### Updating Stylesheets

To modify the portfolio's SCSS source files, use Sass to regenerate the compiled stylesheets:

```bash
npx sass scss/main.scss css/main.css
npx sass scss/viewer.scss css/viewer.css
```

### Updating Personal Projects

The applications within `projects/` are maintained independently from the main portfolio website.

For projects that use Vite or another build tool:

1. Make changes in the original project repository.
2. Run the project's development server and applicable tests.
3. Generate a production build.
4. Replace the corresponding standalone project files within the portfolio.
5. Verify that the application works locally before deploying.

Refer to each project's individual repository for its development and build instructions.

## Project Layout

```text
portfolio/
├── index.html              # Portfolio homepage
├── project-viewer.html     # Standalone project viewer
├── scss/                   # Sass source files
├── css/                    # Compiled stylesheets
├── js/                     # Interactive gallery behavior
├── images/                 # Portfolio and project imagery
├── videos/                 # Professional project clips
├── projects/               # Standalone personal-project demos
│   ├── project-1/          # React To-do List
│   ├── project-2/          # Wheel of Success
│   ├── project-3/          # WebApp Dashboard
│   └── project-4/          # Interactive Photo Gallery
├── resume/                 # Professional resume (PDF)
└── README.md               # Project documentation
```

## Contact

I'm interested in opportunities to contribute to accessible, maintainable, and user-focused software applications.

- **Portfolio:** [dvperks.github.io/portfolio](https://dvperks.github.io/portfolio/)
- **GitHub:** [DVPerks](https://github.com/DVPerks)
- **LinkedIn:** [Drake Perkins](https://www.linkedin.com/in/drake-p-0a9472398/)
- **Resume:** [View Resume (PDF)](https://dvperks.github.io/portfolio/resume/Drake-Perkins-Resume.pdf)

## Attribution & Usage

Professional work showcased in this portfolio was completed during my employment at KnowBe4.

KnowBe4 product names, screenshots, videos, and related creative assets belong to their respective owners. These materials are included to document my professional experience and individual contributions and should not be treated as reusable assets or open-source material.

Personal projects are maintained in their respective repositories. Any applicable licensing terms are provided within those repositories.

No separate open-source license is declared for this portfolio repository.
