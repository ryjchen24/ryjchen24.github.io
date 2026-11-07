import EntryItem, { type Entry } from "./entry-item";

const experience: Entry[] = [
  {
    title: "Undergraduate Researcher, Ding Lab",
    meta: "UC Irvine · Research",
    description: "LabVIEW and C-based software that watches microscope footage and follows the tiny beads attached to RNA molecules. Writing pipelines to automate the tracking of RNA beads to reduce tracking time.",
    links: [],
    images: ["/experience/ding-lab/ding1.png"],
  },
];

const projects: Entry[] = [
  {
    title: "AMO",
    meta: "React · FastAPI · PostgreSQL · Docker",
    description: "An AI studying and note-taking platform, think Google Docs and ChatGPT combined. Drop in your own API keys, and sign in with Google, and study better. Built with React, FastAPI, PostgreSQL, and Docker.",
    links: [
      { label: "Website", href: "https://amo-xt5x.onrender.com" },
      { label: "GitHub", href: "https://github.com/ryjchen24" },
    ],
    images: ["/projects/amo/amo1.png", "/projects/amo/amo2.png", "/projects/amo/amo3.png"],
  },
  {
    title: "Neural Network from Scratch",
    meta: "Python · NumPy",
    description: "A neural network built with just numpy and calculations. Tested using MNIST-784 and Fashion MNIST, it benchmarks against equivalent PyTorch models within 1%.",
    links: [{ label: "GitHub", href: "https://github.com/ryjchen24/neural-network-from-scratch" }],
    images: [
      "/projects/neural-network/nn1.png",
      "/projects/neural-network/nn2.png",
      "/projects/neural-network/nn3.png",
      "/projects/neural-network/nn4.png",
    ],
  },
  {
    title: "Next-Word Predictor",
    meta: "Python · PyTorch · FastAPI",
    description: "A small language model trained from the ground up that guesses the next word as you type. It runs behind a simple API that hands back its top few guesses. Built with Python, PyTorch, and FastAPI.",
    links: [{ label: "GitHub", href: "https://github.com/ryjchen24/next-word-predictor" }],
    images: ["/projects/next-word-predictor/nextword1.png"],
  },
  {
    title: "NYC Ride Demand Forecasting",
    meta: "R · Tidymodels · XGBoost",
    description: "A model that predicts how many Uber and Lyft rides New Yorkers will request across the city each hour. Trained on more than 70 million real trips plus weather and holiday data, then mapped out where and when demand spikes. Built in R with Tidymodels and XGBoost.",
    links: [{ label: "GitHub", href: "https://github.com/ryjchen24/nyc-fhv-demand-forecasting" }],
    images: [
      "/projects/nyc-demand/nyc1.png",
      "/projects/nyc-demand/nyc2.png",
      "/projects/nyc-demand/nyc3.png",
      "/projects/nyc-demand/nyc4.png",
      "/projects/nyc-demand/nyc5.png",
      "/projects/nyc-demand/nyc6.png",
    ],
  },
  {
    title: "Internship Alert Bot",
    meta: "Python · discord.py",
    description: "A Discord bot that watches internship trackers and company career boards, then pings me the moment a new CS internship I'm actually eligible for gets posted. Built with Python, discord.py, and REST APIs.",
    links: [{ label: "GitHub", href: "https://github.com/ryjchen24/internship-bot" }],
    images: ["/projects/internship-bot/bot1.png"],
  },
  {
    title: "Olympic Swimming Medal Predictor",
    meta: "R · Shiny · glmnet",
    description: "An interactive R Shiny app that predicts Olympic swimming medals from an athlete's stats, letting you compare linear and LASSO regression models side by side. Built with R, Shiny, and glmnet.",
    links: [{ label: "GitHub", href: "https://github.com/ryjchen24/r-olympic-swimming-predictor" }],
    images: [
      "/projects/swim-predictor/swim1.png",
      "/projects/swim-predictor/swim2.png",
      "/projects/swim-predictor/swim3.png",
    ],
  },
];

const hackathons: Entry[] = [
  {
    title: "AlterEgo",
    meta: "2026 · LA Hacks",
    description: "A future simulator that takes who you are today, your work, your hours, your ambitions, your fears, and walks it many years forward, then lets you talk to the person waiting at the other end in your own aged voice. You can rewind to any year, change one decision, and watch the rest of the timeline rewrite itself.",
    links: [{ label: "GitHub", href: "https://github.com/SVAH-X/AlterEgo" }],
    images: [
      "/hackathons/alterego/alterego1.png",
      "/hackathons/alterego/alterego2.png",
      "/hackathons/alterego/alterego3.png",
      "/hackathons/alterego/alterego4.png",
    ],
  },
  {
    title: "Muve",
    meta: "2026 · IrvineHacks",
    description: "A tool that scores houses based on their accessability needs. Give it an address and describe any disabilities or needs, and it pulls the listing photos, and hands back a scored accessibility report.",
    links: [{ label: "GitHub", href: "https://github.com/ParzivalPerhaps/muve" }],
    images: ["/hackathons/muve/muve1.png", "/hackathons/muve/muve2.png", "/hackathons/muve/muve3.png"],
  },
];

const sections = [
  { id: "experience", heading: "Experience", entries: experience },
  { id: "projects", heading: "Projects", entries: projects },
  { id: "hackathons", heading: "Hackathons", entries: hackathons },
];

export default function Home() {
  return (
    <>
      <header className="top-nav-wrap" aria-label="Primary">
        <nav className="top-nav">
          <a className="top-nav-brand" href="/">Ryan Chen</a>
          <div>
            {sections.map((section) => (
              <a key={section.id} className="top-nav-tab" href={`#${section.id}`}>{section.heading}</a>
            ))}
          </div>
        </nav>
      </header>

      <main className="page-shell">
        <section className="hero" aria-label="Intro">
          <div>
            <p>
              Hi! I&apos;m Ryan! I&apos;m a Computer Science student at UC Irvine, originally from Naperville, IL.
            </p>
            <p>
              Right now I&apos;m a second year at UCI. I love coding, playing poker and pickleball, swimming, and hanging out with my friends. I&apos;m interested in AI/ML and startup culture. Please feel free to reach out or connect!
            </p>
            <p className="contact">ryanjchen24[at]gmail[dot]com</p>
            <nav aria-label="Social links">
              <ul className="links-list">
                <li><a href="https://github.com/ryjchen24" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/ryan-chen-324v" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:ryanjchen24@gmail.com">Email</a></li>
              </ul>
            </nav>
          </div>
          <figure className="profile-frame">
            <img src="/profile.jpg" alt="Portrait of Ryan Chen" width="480" height="480" />
          </figure>
        </section>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="paper-section" aria-labelledby={`${section.id}-heading`}>
            <div className="section-header">
              <h2 id={`${section.id}-heading`}>{section.heading}</h2>
            </div>
            <ol className="paper-list" aria-label={section.heading}>
              {section.entries.map((entry) => (
                <EntryItem key={entry.title} entry={entry} />
              ))}
            </ol>
          </section>
        ))}
      </main>
    </>
  );
}
