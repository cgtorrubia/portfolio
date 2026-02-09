import { ExternalLink, Github } from "lucide-react";

const featuredProject = {
  title: "D_Crypto",
  description:
    "A cryptography learning platform with daily puzzle challenges. Features procedural puzzle generation using multiple cipher types (Caesar, Vigenère, Atbash) with deterministic seeded randomness. Built with strategy/factory patterns for extensible cipher architecture.",
  tech: ["Next.js 16", "React 19", "TypeScript", "tRPC", "Supabase", "Zod", "Vitest"],
  github: "https://github.com/cgtorrubia/dcrypto",
  live: "https://dcrypto.vercel.app",
};

const otherProjects = [
  {
    title: "NC News",
    description: "Reddit-style news portal with articles, comments, and voting system.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Love Birds",
    description: "Mobile app for couples to share moments and stay connected.",
    tech: ["React Native", "TypeScript", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-card/30 snap-start">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-accent">#</span> Projects
        </h2>

        <div className="group mb-16 p-6 bg-card border border-card-border rounded-lg relative overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
          <div className="absolute inset-0 bg-linear-to-r from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-accent font-medium">Featured Project</span>
              <div className="flex gap-3">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent hover:scale-110 transition-all duration-200"
                  aria-label="Live site"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
              {featuredProject.title}
            </h3>
            <p className="text-foreground/80 mb-6">{featuredProject.description}</p>

            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm bg-background border border-card-border rounded-full text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-6 text-muted">Other Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group p-5 bg-card border border-card-border rounded-lg hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
