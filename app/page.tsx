import PhotoGallery from "./photo-gallery";

type Project = {
  title: string;
  description: string;
  images: string[];
  github: string;
  live?: string;
  color: string;
  gradientTo?: string;
  dark?: boolean;
  gallery?: boolean;
  contain?: boolean;
};

const projects: Project[] = [
  {
    title: "AMO",
    description: "An AI studying and note-taking platform where you can chat with several models at once, drop in your own API keys, and sign in with Google, all in one place. Built with React, FastAPI, PostgreSQL, and Docker.",
    images: ["/projects/amo/amo1.png", "/projects/amo/amo2.png", "/projects/amo/amo3.png"],
    github: "https://github.com/ryjchen24",
    live: "https://amo-xt5x.onrender.com",
    color: "#4f6d7a",
    gradientTo: "#2b4562",
    dark: true,
    gallery: true,
    contain: true,
  },
  {
    title: "neural network from scratch",
    description: "A neural network built with no machine learning libraries at all, just to really understand what happens inside one. It learns to read handwritten digits and pictures of clothing. Written in Python with NumPy.",
    images: ["/projects/neural-network/nn1.svg"],
    github: "https://github.com/ryjchen24/neural-network-from-scratch",
    color: "#141318",
    dark: true,
  },
  {
    title: "next-word predictor",
    description: "A small language model trained from the ground up that guesses the next word as you type. It runs behind a simple API that hands back its top few guesses. Built with Python, PyTorch, and FastAPI.",
    images: ["/projects/next-word-predictor/nwp1.svg"],
    github: "https://github.com/ryjchen24/next-word-predictor",
    color: "#273346",
    dark: true,
  },
  {
    title: "NYC ride demand forecasting",
    description: "A model that predicts how many Uber and Lyft rides New Yorkers will request across the city each hour. Trained on more than 70 million real trips plus weather and holiday data, then mapped out where and when demand spikes. Built in R with Tidymodels and XGBoost.",
    images: [
      "/projects/nyc-demand/nyc1.png",
      "/projects/nyc-demand/nyc2.png",
      "/projects/nyc-demand/nyc3.png",
      "/projects/nyc-demand/nyc4.png",
      "/projects/nyc-demand/nyc5.png",
      "/projects/nyc-demand/nyc6.png",
    ],
    github: "https://github.com/ryjchen24/nyc-fhv-demand-forecasting",
    color: "#6ee7b7",
    gallery: true,
    contain: true,
  },
  {
    title: "internship alert bot",
    description: "A Discord bot that watches internship trackers and company career boards, then pings me the moment a new CS internship I'm actually eligible for gets posted. Built with Python, discord.py, and REST APIs.",
    images: ["/projects/internship-bot/bot1.png"],
    github: "https://github.com/ryjchen24/internship-bot",
    color: "#334155",
    dark: true,
  },
  {
    title: "olympic swimming medal predictor",
    description: "An interactive R Shiny app that predicts Olympic swimming medals from an athlete's stats, letting you compare linear and LASSO regression models side by side. Built with R, Shiny, and glmnet.",
    images: [
      "/projects/swim-predictor/swim1.png",
      "/projects/swim-predictor/swim2.png",
      "/projects/swim-predictor/swim3.png",
    ],
    github: "https://github.com/ryjchen24/r-olympic-swimming-predictor",
    color: "#e8f0f8",
    gallery: true,
    contain: true,
  },
];

const experience: Project[] = [
  {
    title: "Ding Lab, UC Irvine: Undergraduate Researcher",
    description: "Computer vision software that watches microscope footage and follows the tiny beads attached to RNA molecules on its own, so the lab no longer has to find and track them by hand. Feb 2026 to present.",
    images: ["/experience/ding-lab/ding1.svg", "/experience/ding-lab/ding2.svg", "/experience/ding-lab/ding3.svg"],
    github: "https://github.com/ryjchen24",
    color: "#fff4ec",
    gallery: true,
  },
];

const hackathons: Project[] = [
  {
    title: "Muve",
    description: "A tool that tells you whether a home is actually livable for you before you ever tour it. You give it an address and describe what you need, and it pulls the listing photos, reads every one of them for things like entry stairs, tight doorways, and narrow hallways, and hands back a scored accessibility report. Built for IrvineHacks 2026 with React, TypeScript, and Google Gemini vision.",
    images: ["/hackathons/muve/muve1.png", "/hackathons/muve/muve2.png", "/hackathons/muve/muve3.png"],
    github: "https://github.com/ParzivalPerhaps/muve",
    color: "#8fdcae",
    gallery: true,
  },
  {
    title: "AlterEgo",
    description: "A future simulator that takes who you are today, your work, your hours, your ambitions, your fears, and walks it twenty years forward, then lets you talk to the person waiting at the other end in your own aged voice. You can rewind to any year, change one decision, and watch the rest of the timeline rewrite itself. Built for LA Hacks 2026 with React, FastAPI, Claude, ElevenLabs, and Gemini.",
    images: [
      "/hackathons/alterego/alterego1.png",
      "/hackathons/alterego/alterego2.png",
      "/hackathons/alterego/alterego3.png",
      "/hackathons/alterego/alterego4.png",
    ],
    github: "https://github.com/SVAH-X/AlterEgo",
    color: "#17110f",
    dark: true,
    gallery: true,
  },
];

function Links({ project, dark }: { project: Project; dark: boolean }) {
  const filter = dark ? "invert" : "";
  return (
    <div className="flex gap-5">
      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
        <img src="/icons/github.svg" alt="" width="32" height="32" className={`transition hover:scale-125 ${filter}`} />
      </a>
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
          <img src="/icons/link-svgrepo-com.svg" alt="" width="32" height="32" className={`transition hover:scale-125 ${filter}`} />
        </a>
      )}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition group-hover:scale-125"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// `height` is a literal Tailwind class so JIT picks it up. Title panels use a
// short fade so the section heading isn't stranded far below the section above.
function Gradient({ from, to, height = "h-96" }: { from: string; to: string; height?: string }) {
  return <div className={height} style={{ backgroundImage: `linear-gradient(to bottom, ${from}, ${to})` }} />;
}

function ProjectSection({ project }: { project: Project }) {
  const dark = project.dark ?? false;
  return (
    <article className={dark ? "text-white" : "text-slate-950"} style={{ background: project.gradientTo ? `linear-gradient(to bottom, ${project.color}, ${project.gradientTo})` : project.color }}>
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[2fr_1fr] ${project.gallery ? "min-h-[50rem]" : "min-h-[32rem]"}`}>
        {project.gallery ? (
          <PhotoGallery images={project.images} alt={`${project.title} screenshot`} contain={project.contain} />
        ) : (
          <div className="flex justify-center">
            <img src={project.images[0]} alt={`${project.title} screenshot`} className="max-h-[500px] max-w-full rounded-md shadow-xl" />
          </div>
        )}
        <div className="space-y-7">
          <h2 className="text-4xl font-bold sm:text-5xl">{project.title}</h2>
          <p className="text-lg leading-relaxed sm:text-xl">{project.description}</p>
          <Links project={project} dark={dark} />
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 z-50 flex w-full gap-6 px-6 py-5 font-semibold text-white mix-blend-difference">
        <a href="#top" className="hover:underline">Home</a>
        <a href="#bio" className="hover:underline">Bio</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#hackathons" className="hover:underline">Hackathons</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      <section id="top" className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#191c23] px-6 py-24 text-white">
        <div className="w-full max-w-2xl rounded-lg bg-[#0f1015] p-8 shadow-2xl sm:p-12">
          <h1 className="text-5xl font-semibold sm:text-6xl">Hi, I&apos;m Ryan</h1>
          <p className="mt-6 text-lg">A Computer Science student studying at UCI.</p>

          <div className="mt-8 flex items-center gap-5">
            <a href="https://github.com/ryjchen24" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/icons/github.svg" alt="" width="32" height="32" className="invert transition hover:scale-125" />
            </a>
            <a href="https://linkedin.com/in/ryan-chen-324v" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="/icons/iconmonstr-linkedin-3.svg" alt="" width="32" height="32" className="invert transition hover:scale-125" />
            </a>
            <a href="mailto:ryanjchen24@gmail.com" aria-label="Email Ryan" className="group flex items-center gap-3">
              <img src="/icons/maildotru.svg" alt="" width="32" height="32" className="invert transition group-hover:scale-125" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-300 group-hover:max-w-64 group-hover:opacity-100 group-focus-within:max-w-64 group-focus-within:opacity-100">ryanjchen24@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="w-full max-w-xl rounded-lg bg-[#0f1015] p-6 text-center">
          <h2 className="font-bold">Tech Stacks</h2>
          <div className="mt-5 flex items-center justify-around gap-3">
            {[{ logo: "python.svg", invert: false }, { logo: "pytorch.svg", invert: false }, { logo: "react-javascript-js-framework-facebook-svgrepo-com.svg", invert: false }, { logo: "fastapi.svg", invert: false }, { logo: "sql-database-generic-svgrepo-com.svg", invert: true }, { logo: "docker.svg", invert: false }].map(({ logo, invert }) => (
              <img key={logo} src={`/icons/${logo}`} alt="" width="42" height="42" className={`max-w-10 transition hover:scale-125 ${invert ? "invert" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="bio" className="flex min-h-screen flex-col items-center justify-center bg-[#191c23] px-6 py-28 text-white">
        <div className="w-full max-w-6xl rounded-lg bg-[#0f1015] p-8 shadow-2xl sm:p-12">
          <h2 className="text-4xl font-semibold sm:text-5xl">Bio</h2>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_3fr]">
            <img
              src="/profile.jpg"
              alt="Ryan Chen"
              className="w-full max-w-[240px] rounded-lg object-cover shadow-lg lg:max-w-none"
            />

            <div className="space-y-5 text-base leading-relaxed text-white/70">
              <p>
                Hi, I&apos;m Ryan! I&apos;m a Computer Science student at UC Irvine, originally from Naperville, IL. I
                love all things AI and ML.
              </p>
              <p>
                Right now I&apos;m getting ready for my second year at UCI. I&apos;m hoping to join another research lab
                focused on computer vision, so I&apos;ve been reviewing material to make sure I can start contributing to
                projects as soon as the year kicks off. I&apos;m also working on two projects of my own: AMO, an AI
                powered note taking and studying app, and a separate computer vision project I&apos;m building on the
                side.
              </p>
              <p>
                On top of all that, I&apos;m keeping up with my DSA practice to get ready for the 2027 internship cycle.
                When I&apos;m not coding, I love playing pickleball, swimming, playing poker, and hanging out with
                friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Gradient from="#191c23" to="#4f6d7a" height="h-24" />
        <div id="projects" className="flex min-h-screen items-center justify-center bg-[#4f6d7a] px-6">
          <h2 className="text-center text-5xl font-semibold text-white sm:text-6xl">Projects</h2>
        </div>
        {projects.map((project, index) => (
          <div key={project.title}>
            <ProjectSection project={project} />
            {projects[index + 1] && <Gradient from={project.gradientTo ?? project.color} to={projects[index + 1].color} />}
          </div>
        ))}
        <Gradient from={projects[projects.length - 1].color} to={experience[0].color} height="h-24" />
      </section>

      <section>
        <div id="experience" className="flex min-h-screen items-center justify-center bg-[#fff4ec] px-6">
          <h2 className="text-center text-5xl font-semibold text-black/70 sm:text-6xl">Experience</h2>
        </div>
        {experience.map((project, index) => (
          <div key={project.title}>
            <ProjectSection project={project} />
            {experience[index + 1] && <Gradient from={project.color} to={experience[index + 1].color} />}
          </div>
        ))}
        <Gradient from={experience[experience.length - 1].color} to={hackathons[0].color} height="h-24" />
      </section>

      <section>
        <div id="hackathons" className="flex min-h-screen items-center justify-center bg-[#8fdcae] px-6">
          <h2 className="text-center text-5xl font-semibold text-black/70 sm:text-6xl">Hackathons</h2>
        </div>
        {hackathons.map((project, index) => (
          <div key={project.title}>
            <ProjectSection project={project} />
            {hackathons[index + 1] && <Gradient from={project.color} to={hackathons[index + 1].color} />}
          </div>
        ))}
      </section>

      <Gradient from={hackathons[hackathons.length - 1].color} to="#191c23" />

      <section id="contact" className="flex min-h-screen flex-col items-center justify-center bg-[#191c23] px-6 py-28 text-white">
        <div className="w-full max-w-2xl rounded-lg bg-[#0f1015] p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-4xl font-semibold sm:text-5xl">Contact</h2>
          <p className="mt-6 text-lg text-white/70">
            Thanks for scrolling all the way down. Feel free to reach out about research, internships, or anything
            you&apos;re building.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5">
            <a href="tel:+12242390420" className="group flex items-center gap-3 text-lg hover:underline">
              <PhoneIcon />
              (224) 239-0420
            </a>
            <a href="mailto:ryanjchen24@gmail.com" className="group flex items-center gap-3 text-lg hover:underline">
              <img src="/icons/maildotru.svg" alt="" width="28" height="28" className="invert transition group-hover:scale-125" />
              ryanjchen24@gmail.com
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a href="https://github.com/ryjchen24" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/icons/github.svg" alt="" width="32" height="32" className="invert transition hover:scale-125" />
            </a>
            <a href="https://linkedin.com/in/ryan-chen-324v" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="/icons/iconmonstr-linkedin-3.svg" alt="" width="32" height="32" className="invert transition hover:scale-125" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
