const PROJECTS = [
  {
    name: "VoxPOC",
    tag: "AI / Voice",
    description:
      "An outbound AI voice agent. A form triggers a real phone call carried out by an AI, in real time, with a structured summary generated once the conversation ends.",
    stack: "Node.js, Express, WebSocket, Twilio Programmable Voice, Gemini Live API, React",
    links: [
      { label: "Code", href: "https://github.com/InoussaLouqmane/voxpoc" },
      { label: "Live demo", href: "https://frontend-inky-alpha-78.vercel.app" },
    ],
  },
  {
    name: "WDS",
    tag: "Full stack",
    description:
      "Corporate website and careers platform for a consulting firm: services, job listings, applications, and a content admin panel.",
    stack: "React, Vite, Tailwind CSS, Laravel, Sanctum",
    links: [
      { label: "Frontend", href: "https://github.com/InoussaLouqmane/wds-front" },
      { label: "Backend", href: "https://github.com/InoussaLouqmane/wds-api" },
    ],
  },
  {
    name: "Dojo Manager",
    tag: "Degree project",
    description:
      "A management platform for martial arts clubs and dojos: grading exams with jury validation, events, club transfers, and membership billing.",
    stack: "Laravel, Sanctum, MySQL",
    links: [{ label: "Code", href: "https://github.com/InoussaLouqmane/dojo-manager-api" }],
  },
  {
    name: "Figma Challenge",
    tag: "Backend",
    description:
      "Backend for a creative design competition: project submissions, jury scoring, and a live ranking of participants.",
    stack: "Laravel, Sanctum, MySQL",
    links: [{ label: "Code", href: "https://github.com/InoussaLouqmane/figma-challenge" }],
  },
];

const EXPERIENCE = [
  {
    role: "Product Designer",
    org: "ASIN",
    place: "Benin",
    period: "Since 04/2025",
    detail:
      "Design and follow-up of government platforms, including the National Public Services Portal and a distance-learning platform.",
  },
  {
    role: "UX Content Strategist",
    org: "SRTB x Epitech Innovation Hub",
    place: "Benin",
    period: "09/2025 to 03/2026",
    detail:
      "Content and accessibility strategy to strengthen the reach of a media group's channels and adapt them to new consumption habits.",
  },
  {
    role: "Design Lead",
    org: "Fiwe, Africa Design School",
    place: "Benin",
    period: "11/2025 to 01/2026",
    detail:
      "An intelligent, experiential tourism platform integrating virtual reality, real-time localization, interactive games, and 3D representation of spaces.",
  },
  {
    role: "UX Designer & Software Engineer",
    org: "Seed For The Future, Huawei",
    place: "Morocco",
    period: "06/2024 to 07/2024",
    detail:
      "GleTche, a smart agricultural greenhouse system built to improve yields in arid regions of Morocco and Benin.",
  },
  {
    role: "Software Engineering Intern",
    org: "Reseau Francophone d'Intelligence Artificielle",
    place: "France",
    period: "10/2023 to 08/2024",
    detail: "Development and maintenance of the association's website, alongside content planning for social media.",
  },
  {
    role: "UI/UX Designer",
    org: "Fiscathon, Direction Generale des Impots",
    place: "Benin",
    period: "11/2023 to 12/2023",
    detail: "An inclusive, accessible solution to simplify tax collection for street vendors.",
  },
];

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">
          Louqmane
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Cotonou, Benin</p>
          <h1>
            Product Designer <span className="amp">&amp;</span> Software Engineer.
          </h1>
          <p className="hero-lead">
            I work across the design and development boundary: UX research and product design on one
            side, full-stack and AI engineering on the other. Currently finishing my degree in Digital
            Design at Africa Design School.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See my work
            </a>
            <a className="btn btn-ghost" href="mailto:a.inoussa@africadesign.school">
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>
            I hold a background in software engineering (Licence Genie Logiciel, IFRI-UAC) and am
            completing a DN MADE Numerique, a French-accredited diploma in digital design, at Africa
            Design School. I am drawn to complex, intelligent systems and to the different ways design
            and technology can make the world we live in better.
          </p>
          <p>
            My work spans product design, UX research, full-stack development, and increasingly,
            AI-driven products, applied to fields as different as public services, tourism, agriculture,
            and tax administration.
          </p>
        </section>

        <section id="work" className="work">
          <h2>Selected work</h2>
          <div className="project-grid">
            {PROJECTS.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-head">
                  <h3>{project.name}</h3>
                  <span className="project-tag">{project.tag}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <p className="project-stack">{project.stack}</p>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience">
          <h2>Experience</h2>
          <ul className="timeline">
            {EXPERIENCE.map((item) => (
              <li key={item.role + item.org}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-body">
                  <h3>
                    {item.role} <span className="timeline-org">at {item.org}</span>
                  </h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="details">
          <div>
            <h2>Skills</h2>
            <ul className="pill-list">
              <li>Product design</li>
              <li>UX research</li>
              <li>React</li>
              <li>Angular</li>
              <li>Spring Boot</li>
              <li>Laravel</li>
              <li>WordPress</li>
              <li>Webflow</li>
              <li>LLM &amp; AI engineering</li>
            </ul>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul className="plain-list">
              <li>Google UX Design</li>
              <li>Google Project Management</li>
              <li>Meta Frontend Engineering (React)</li>
              <li>Machine Learning &amp; Python, Don Vallet Fondation</li>
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            <ul className="plain-list">
              <li>DN MADE Numerique, Africa Design School (2023 to 2026)</li>
              <li>Licence Genie Logiciel, IFRI-UAC (2021 to 2024)</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Let's talk</h2>
          <p>
            Open to product design and engineering opportunities, academic collaborations, and
            interesting problems in general.
          </p>
          <a className="btn btn-primary" href="mailto:a.inoussa@africadesign.school">
            a.inoussa@africadesign.school
          </a>
          <a className="btn btn-ghost" href="https://github.com/InoussaLouqmane" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            className="btn btn-ghost"
            href="https://linkedin.com/in/louqmane-inoussa"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>Louqmane Inoussa. Cotonou, Benin.</p>
      </footer>
    </>
  );
}
