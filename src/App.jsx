import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  Code2,
  Download,
  FileText,
  Globe2,
  Send,
  Sparkles,
  Zap,
} from 'lucide-react'
import heroImg from './assets/rafay-photo.jpeg'
import './App.css'

function GitHubLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.02-1.91-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.29 9.29 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.44a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.01H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  )
}

function GmailLogo(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#EA4335" d="M3.6 6.1 12 12.4l8.4-6.3v12.3c0 .9-.7 1.6-1.6 1.6h-2.4v-8.5L12 14.8l-4.4-3.3V20H5.2c-.9 0-1.6-.7-1.6-1.6V6.1Z" />
      <path fill="#FBBC04" d="M3.6 6.1v-.5c0-1.1 1.3-1.8 2.2-1.1L12 9.1l6.2-4.6c.9-.7 2.2 0 2.2 1.1v.5L12 12.4 3.6 6.1Z" />
      <path fill="#34A853" d="M16.4 20v-8.5l4-3v9.9c0 .9-.7 1.6-1.6 1.6h-2.4Z" />
      <path fill="#4285F4" d="M3.6 8.5v9.9c0 .9.7 1.6 1.6 1.6h2.4v-8.5l-4-3Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rafaymirzaa', Icon: GitHubLogo },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafaymirzaa/', Icon: LinkedInLogo },
  { label: 'Gmail', href: 'mailto:mirzaaravi@gmail.com', Icon: GmailLogo },
]

const cvUrl = `${import.meta.env.BASE_URL}Rafay_Mirza_CV.pdf`

const stats = [
  { value: '21', label: 'Age' },
  { value: '2', label: 'Years of independent projects' },
  { value: '3', label: 'Projects worked on' },
  { value: '1', label: 'Project deployed' },
]

const projects = [
  {
    title: 'AI Document Assistant',
    eyebrow: 'RAG-Based AI App',
    description:
      'Upload PDFs and ask natural-language questions with source-aware answers powered by semantic search and LLM context injection.',
    href: 'https://github.com/rafaymirzaa/AI-Document-Analyser-RAG-REACT-',
    tags: ['React', 'FastAPI', 'FAISS', 'Groq', 'Tailwind'],
    Icon: BrainCircuit,
    variant: 'document',
  },
  {
    title: 'Memory Wars',
    eyebrow: 'Real-Time Multiplayer Game',
    description:
      'A deployed multiplayer memory game with live opponents, chat, cloud scoreboards, Firebase auth, and a Node/Socket.io backend.',
    href: 'https://github.com/rafaymirzaa/Live-Multiplayer-Game',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
    Icon: Zap,
    variant: 'game',
  },
  {
    title: 'Rush Hour',
    eyebrow: 'OpenGL C++ Puzzle Game',
    description:
      'A desktop Rush Hour puzzle game built in C++ with OpenGL, focused on grid movement, collision rules, and classic sliding-block logic.',
    href: 'https://github.com/rafaymirzaa',
    tags: ['C++', 'OpenGL', 'GLUT', 'Game Logic', 'Graphics'],
    Icon: Code2,
    variant: 'rush',
  },
]

function ProjectPreview({ variant, Icon }) {
  if (variant === 'document') {
    return (
      <div className="preview-shell document-preview" aria-hidden="true">
        <div className="preview-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="document-grid">
          <div className="document-page">
            <FileText size={34} />
            <div className="doc-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="chat-panel">
            <div className="chat-bubble wide"></div>
            <div className="chat-bubble"></div>
            <div className="answer-card">
              <Sparkles size={16} />
              <span>Grounded answer</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'rush') {
    return (
      <div className="preview-shell rush-preview" aria-hidden="true">
        <div className="road-grid">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index}></span>
          ))}
          <div className="car hero-car"></div>
          <div className="car truck vertical"></div>
          <div className="car compact"></div>
          <div className="exit-lane">EXIT</div>
        </div>
        <div className="gl-badge">
          <Icon size={16} />
          OpenGL
        </div>
      </div>
    )
  }

  return (
    <div className="preview-shell game-preview" aria-hidden="true">
      <div className="memory-board">
        {Array.from({ length: 12 }).map((_, index) => (
          <span className={index % 4 === 0 ? 'matched' : ''} key={index}>
            {index % 4 === 0 ? <Icon size={16} /> : null}
          </span>
        ))}
      </div>
      <div className="score-panel">
        <span>ONLINE</span>
        <strong>2 players</strong>
      </div>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090912] text-white">
      <div className="site-grid fixed inset-0"></div>
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-16">
        <header className="flex items-center justify-between py-6">
          <a className="brand" href="#home" aria-label="Rafay Mirza home">
            RafayMirza <span>.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            <a className="nav-link active" href="#professional">
              Professional
            </a>
            <a className="nav-link" href="#personal">
              Personal
            </a>
            <a className="nav-link" href="mailto:rafaymirzaa@gmail.com">
              Contact
            </a>
            <button className="language-pill" type="button">
              <Globe2 size={22} />
              English
              <ChevronDown size={18} />
            </button>
          </nav>

          <a className="mobile-contact" href="mailto:rafaymirzaa@gmail.com" aria-label="Email Rafay">
            <Send size={20} />
          </a>
        </header>

        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="role">Full Stack Dev</p>
            <h1>
              Hello I'm <span>Rafay Mirza</span>
            </h1>
            <p className="bio">
              Sophomore Bachelor of Science Artificial Intelligence student at USF Bellini College building full-stack AI,
              realtime web apps, and graphics projects from Tampa.
            </p>

            <div className="hero-actions">
              <a className="cv-button" href={cvUrl} download="Rafay_Mirza_CV.pdf">
                View CV
                <Download size={18} />
              </a>

              <div className="social-row" aria-label="Social profile links">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a className="social-link" href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="avatar-wrap" aria-label="Rafay Mirza portrait">
            <div className="avatar-ring">
              <img src={heroImg} alt="Rafay Mirza avatar placeholder" />
            </div>
          </div>
        </section>

        <section className="stats-row" aria-label="Portfolio stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="professional" className="projects-section">
          <h2>
            A small selection of <span>recent projects</span>
          </h2>

          <div id="personal" className="project-grid">
            {projects.map(({ title, eyebrow, description, href, tags, Icon, variant }) => (
              <article className="project-card" key={title}>
                <ProjectPreview variant={variant} Icon={Icon} />
                <div className="project-body">
                  <p className="project-eyebrow">
                    <Icon size={17} />
                    {eyebrow}
                  </p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="project-footer">
                  <div className="tag-row">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={href} target="_blank" rel="noreferrer">
                    Check Site
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
