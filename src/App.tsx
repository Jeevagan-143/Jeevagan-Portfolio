import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Phone, MapPin, Code2, Sparkles, Menu, X, ExternalLink,
  Terminal, Database, Globe, Cpu, BriefcaseBusiness, Layers,
  Search, GraduationCap
} from "lucide-react";
import "./App.css";

type Project = {
  name: string;
  desc: string;
  stack: string;
  tag: string;
  url: string;
};

const projects: Project[] = [
  {
    name: "To-Do List Web App",
    desc: "Responsive task management application.",
    stack: "HTML · CSS · JavaScript",
    tag: "Web Development",
    url: "https://jeevagantodo.ccbp.tech"
  },
  {
    name: "BMI Calculator",
    desc: "Interactive BMI calculator to calculate body mass index.",
    stack: "HTML · CSS · JavaScript",
    tag: "Web Development",
    url: "https://jeevabmi.ccbp.tech"
  },
  {
    name: "Food Munch",
    desc: "Responsive food ordering and restaurant website.",
    stack: "HTML · CSS · Bootstrap · JavaScript",
    tag: "Web Development",
    url: "https://jeevafood.ccbp.tech"
  },
  {
    name: "Digital Clock",
    desc: "Real-time digital clock application.",
    stack: "HTML · CSS · JavaScript",
    tag: "Web Development",
    url: "https://jeevaclock.ccbp.tech"
  },
  {
    name: "Simple Calculator",
    desc: "Calculator for everyday mathematical operations.",
    stack: "HTML · CSS · JavaScript",
    tag: "Web Development",
    url: "https://jeevacalculator.ccbp.tech"
  },
  {
    name: "Chat Room",
    desc: "Browser-based chat room web application.",
    stack: "Web Development",
    tag: "Web Development",
    url: "https://jeevagan.ccbp.tech"
  },
  {
    name: "MERN Code Snippet Manager",
    desc: "Full-stack application to create, manage and organize code snippets.",
    stack: "MongoDB · Express · React · Node.js",
    tag: "Full Stack",
    url: "https://deploy-mernstack.vercel.app"
  },
  {
    name: "Tom Light",
    desc: "Interactive web application project.",
    stack: "HTML · CSS · JavaScript",
    tag: "Web Development",
    url: "https://tomlight.ccbp.tech"
  },
  {
    name: "Counter App",
    desc: "Interactive counter application.",
    stack: "HTML · CSS · JavaScript",
    tag: "Web Development",
    url: "https://jeevacounter.ccbp.tech"
  },
  {
    name: "AI Research Knowledge Assistant",
    desc: "AI-powered knowledge assistant that retrieves information and answers questions from a knowledge base.",
    stack: "Python · FastAPI · Groq · RAG",
    tag: "AI / ML",
    url: "https://ai-research-knowledge-assistant-j87b.onrender.com"
  },
  {
    name: "RenewCred CMS API",
    desc: "Backend content management API for managing application data and workflows.",
    stack: "Node.js · REST API · Backend",
    tag: "Backend",
    url: "https://renewcred-cms-api-jeevagan-143s-projects.vercel.app"
  },
  {
    name: "Contactless Fingerprint",
    desc: "Computer vision application focused on contactless fingerprint processing.",
    stack: "Python · Streamlit · Computer Vision",
    tag: "AI / ML",
    url: "https://contactless-fingerprint.streamlit.app/"
  },
  {
    name: "Kapture Collections Voicebot",
    desc: "AI voicebot designed to support automated customer collection conversations.",
    stack: "Voice AI · Python · Automation",
    tag: "AI / ML",
    url: "https://kapture-collections-voicebot-snnc.onrender.com/"
  },
  {
    name: "Task Management App",
    desc: "Task management application for organizing tasks and tracking progress.",
    stack: "React · Full Stack · Web",
    tag: "Full Stack",
    url: "https://task-management-app-virid-psi.vercel.app"
  },
  {
    name: "Travel Unbounded",
    desc: "Travel website experience for discovering destinations and exploring travel information.",
    stack: "React · JavaScript · CSS",
    tag: "Web Development",
    url: "https://travel-unbounded-git-main-jeevagan-143s-projects.vercel.app/"
  },
  {
    name: "Store Rating App",
    desc: "Full-stack application for submitting and viewing store ratings.",
    stack: "React · Backend · Database",
    tag: "Full Stack",
    url: "https://store-rating-app-hazel-phi.vercel.app/"
  },
  {
    name: "Custom Employee Portal",
    desc: "Employee portal for managing employee information and internal workflows.",
    stack: "React · Full Stack · Web",
    tag: "Full Stack",
    url: "https://custom-employee-portal-iota.vercel.app"
  },
  {
    name: "Lenny Growth Assistant",
    desc: "AI-powered assistant designed to provide product growth insights and guidance.",
    stack: "AI · LLM · Web Application",
    tag: "AI / ML",
    url: "https://lenny-growth-assistant-eta.vercel.app"
  },
  {
    name: "Agentic AI RAG Chatbot",
    desc: "Document-based chatbot using retrieval augmented generation and agentic workflows.",
    stack: "Python · LangGraph · Pinecone · RAG",
    tag: "AI / ML",
    url: "https://jeeva-agenticai-rag-chatbot.streamlit.app/"
  },
  {
    name: "TIS Modern School Experience",
    desc: "Modern school website redesign with responsive layouts and engaging animations.",
    stack: "React · TypeScript · CSS · Framer Motion",
    tag: "Web Development",
    url: "https://tis-modern-school-experience-five.vercel.app/"
  },
  {
    name: "HomeCredit Voice AI",
    desc: "Voice AI assistant for preliminary Loan Against Property customer qualification.",
    stack: "Python · Streamlit · Gemini · Voice AI",
    tag: "AI / ML",
    url: "https://homecredit-voice-ai-jeevagan.streamlit.app/"
  },
  {
    name: "AI Inbox Agent",
    desc: "AI-powered email classification and draft generation with human approval workflow.",
    stack: "Node.js · TypeScript · AI Automation",
    tag: "AI / ML",
    url: "https://jeevagan-ai-inbox-agent.onrender.com/"
  },
  {
    name: "AI Review Analytics",
    desc: "AI-powered review analytics project for understanding customer feedback and sentiment.",
    stack: "Python · NLP · Sentiment Analysis",
    tag: "AI / ML",
    url: "https://jeeva-ai-review-analytics.streamlit.app/"
  },
  {
    name: "AvocadoVision AI",
    desc: "Computer vision application for image-based avocado analysis.",
    stack: "Python · Streamlit · Computer Vision",
    tag: "AI / ML",
    url: "https://jeevagan-avocadovision-ai.streamlit.app/"
  }
];

const skills = [
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React.js", "Flexbox"],
    icon: Globe,
    level: 88
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    icon: Terminal,
    level: 78
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "SQL", "Pinecone"],
    icon: Database,
    level: 76
  },
  {
    title: "AI & Developer Tools",
    items: ["Python", "Git", "GitHub", "MERN Stack", "Generative AI", "RAG"],
    icon: Cpu,
    level: 82
  }
];

const certificates = [
  "Build Your Own Static Website",
  "Build Your Own Responsive Website",
  "Build Your Own Dynamic Web",
  "Programming Foundations",
  "Developer Foundations",
  "Responsive Web Design using Flexbox",
  "JavaScript Essentials",
  "React JS – Getting Started",
  "Introduction to Databases",
  "Node.js",
  "Setting Priorities",
  "Getting Started with AI-ML",
  "Getting Started with Data Science",
  "Introduction to Operating Systems",
  "Getting Started wutg XR Technologies",
  "Getting Started with Blockchain",
  "Getting Started with Cyber Security",
  "Getting Started with Internet of Things"
];

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.tag)))
  ];

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (p) =>
          (filter === "All" || p.tag === filter) &&
          `${p.name} ${p.desc} ${p.stack}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [filter, query]
  );

  const selectedProject =
    selected === null ? null : projects[selected];

  const changeProject = (direction: number) => {
    if (selected === null) return;

    setSelected(
      (selected + direction + projects.length) % projects.length
    );
  };

  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Journey", "journey"],
    ["Contact", "contact"]
  ];

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home">
            <span className="brand-mark">G.</span>
            <span>JEEVAGAN<span className="brand-dot">.</span></span>
          </a>

          <div className={`nav-links ${open ? "nav-open" : ""}`}>
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="live-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Building digital
              <br />
              experiences that
              <br />
              <span className="gradient-text">make an impact.</span>
            </motion.h1>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <strong>G. Jeevagan</strong> — a Full Stack Developer
              passionate about turning ideas into clean, useful and engaging
              web experiences.
            </motion.p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a className="btn secondary" href="mailto:jeeva500j@gmail.com">
                Get in touch <Mail size={16} />
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/Jeevagan-143"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/jeevagan-g-5a2ba42aa"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>

              <span className="social-line" />
            </div>
          </div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />

            <div className="code-card">
              <div className="code-top">
                <i />
                <i />
                <i />
                <span>developer.js</span>
              </div>

              <div className="code-body">
                <p><b>const</b> developer = {"{"}</p>
                <p className="indent"><em>name</em>: <strong>'Jeevagan'</strong>,</p>
                <p className="indent"><em>role</em>: <strong>'Full Stack Dev'</strong>,</p>
                <p className="indent"><em>passion</em>: <strong>'Building things'</strong>,</p>
                <p className="indent"><em>learning</em>: <strong>true</strong></p>
                <p>{"}"};</p>
                <p className="code-comment">// Let's build something great ✦</p>
                <p><b>developer</b>.<em>create</em>(); <span className="cursor">|</span></p>
              </div>
            </div>

            <div className="float-icon float-react"><Code2 size={26} /></div>
            <div className="float-icon float-spark"><Sparkles size={23} /></div>
            <div className="float-icon float-cpu"><Cpu size={24} /></div>

            <div className="art-caption">
              <span className="caption-line" />
              CREATIVE MIND · DEVELOPER'S HEART
            </div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section container" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>

          <div className="about-grid">
            <div>
              <h2 className="section-title">
                Curious by nature.
                <br />
                <span className="gradient-text">Developer by choice.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                I'm a recent <strong>B.Sc. Computer Science graduate</strong>
                {" "}with a passion for Full Stack Development. I enjoy creating
                responsive websites, building practical applications and
                exploring emerging technologies.
              </p>

              <p>
                I'm eager to learn, solve real-world problems and contribute
                to a team where I can keep growing as a software developer.
              </p>

              <div className="location">
                <MapPin size={16} />
                Arni, Thiruvannamalai district, Tamil Nadu, India
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-kicker">02 / WHAT I WORK WITH</div>

          <div className="section-heading">
            <h2 className="section-title">
              My <span className="gradient-text">toolkit.</span>
            </h2>
            <p>Technologies I use to bring ideas to life.</p>
          </div>

          <div className="skill-grid">
            {skills.map((skill, i) => (
              <motion.div
                className="skill-card"
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="skill-icon">
                  <skill.icon size={22} />
                </div>

                <h3>{skill.title}</h3>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="skill-level">
                  <div>
                    <span>EXPERIENCE</span>
                    <b>{skill.level}%</b>
                  </div>

                  <div className="skill-track">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="soft-skills">
            <span>ALSO BRINGING</span>
            <b>Communication</b>
            <b>Problem Solving</b>
            <b>Teamwork</b>
            <b>Adaptability</b>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>

          <div className="section-heading">
            <h2 className="section-title">
              Things I've <span className="gradient-text">built.</span>
            </h2>
            <p>
              Explore my published projects across web development, AI and automation.
            </p>
          </div>

          <div className="project-tools">
            <label className="project-search">
              <Search size={17} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
              />
            </label>

            <span className="project-count">
              {filteredProjects.length} PROJECTS
            </span>
          </div>

          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? "filter-active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => {
              const originalIndex = projects.findIndex(
                (p) => p.name === project.name
              );

              return (
                <motion.article
                  className="project-card"
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="project-top">
                    <span className="project-index">
                      {String(originalIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="project-tag">{project.tag}</span>

                    <a
                      className="project-arrow"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} demo`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <button
                    className="project-open"
                    onClick={() => setSelected(originalIndex)}
                  >
                    <div className="project-symbol">
                      <Code2 size={28} />
                    </div>

                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>

                    <div className="project-bottom">
                      <span>{project.stack}</span>
                      <b>VIEW DETAILS <ArrowUpRight size={13} /></b>
                    </div>
                  </button>

                  <a
                    className="project-demo-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LIVE DEMO <ExternalLink size={14} />
                  </a>
                </motion.article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <p className="empty-projects">
              No projects found. Try another search.
            </p>
          )}
        </section>

        <section className="section container" id="journey">
          <div className="section-kicker">04 / MY JOURNEY</div>

          <div className="journey-grid">
            <div>
              <h2 className="section-title">
                Learning.
                <br />
                <span className="gradient-text">Growing.</span>
              </h2>

              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-year">2022 — 2025</span>
                  <h3>B.Sc. Computer Science</h3>
                  <p>Dr. MGR Chockalingam Arts College</p>
                  <small>Thiruvalluvar University · 85%</small>
                </div>

                <div className="timeline-item">
                  <span className="timeline-year">2021 — 2022</span>
                  <h3>Higher Secondary (HSC)</h3>
                  <p>Government Higher Secondary School</p>
                  <small>Computer Science · 80%</small>
                </div>

                <div className="timeline-item">
                  <span className="timeline-year">2019 — 2020</span>
                  <h3>SSLC</h3>
                  <p>Government Higher Secondary School</p>
                  <small>75%</small>
                </div>
              </div>
            </div>

            <div className="cert-panel">
              <div className="cert-heading">
                <div className="skill-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3>Certifications</h3>
                  <p>Always learning, always improving.</p>
                </div>
              </div>

              <div className="cert-list">
                {certificates.map((certificate, i) => (
                  <div className="cert-item" key={certificate}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {certificate}
                    <span className="cert-check">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="section-kicker">05 / LET'S CONNECT</div>

            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>

            <p>
              I'm open to entry-level software developer opportunities,
              collaborations and interesting conversations.
            </p>

            <a
              className="btn primary contact-btn"
              href="mailto:jeeva500j@gmail.com"
            >
              Say hello <ArrowUpRight size={18} />
            </a>

            <div className="contact-details">
              <a href="mailto:jeeva500j@gmail.com">
                <Mail size={17} /> jeeva500j@gmail.com
              </a>

              <a href="tel:+919080445471">
                <Phone size={17} /> +91 90804 45471
              </a>

              <a
                href="https://linkedin.com/in/jeevagan-g-5a2ba42aa"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>

              <a
                href="https://github.com/Jeevagan-143"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#home">
          <span className="brand-mark">G.</span>
          <span>JEEVAGAN<span className="brand-dot">.</span></span>
        </a>

        <span>
          Designed & built with care by G. Jeevagan © {new Date().getFullYear()}
        </span>

        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.name} details`}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close details"
              >
                <X />
              </button>

              <div className="modal-kicker">
                <Layers size={16} />
                PROJECT {String(selected! + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>

              <div className="modal-icon">
                <BriefcaseBusiness size={30} />
              </div>

              <span className="project-tag">{selectedProject.tag}</span>
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.desc}</p>

              <div className="modal-stack-label">
                TECHNOLOGIES / STACK
              </div>

              <div className="modal-stack">
                {selectedProject.stack.split(" · ").map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>

              <div className="modal-actions">
                <a
                  className="btn primary"
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <ExternalLink size={16} />
                </a>

                <button
                  className="btn secondary"
                  onClick={() => changeProject(-1)}
                >
                  <ArrowLeft size={16} /> Previous
                </button>

                <button
                  className="btn secondary"
                  onClick={() => changeProject(1)}
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>

              <div className="modal-progress">
                <span
                  style={{
                    width: `${((selected! + 1) / projects.length) * 100}%`
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;