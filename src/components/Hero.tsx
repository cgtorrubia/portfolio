import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/cgtorrubia",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/cgtorrubia",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:cgtorrubia@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative snap-start">
      <div className="max-w-3xl mx-auto text-center relative z-10">


        <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-foreground to-muted bg-clip-text text-transparent">
            Cristobal Gutierrez
          </span>
          <span className="block bg-gradient-to-r from-accent via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Torrubia
          </span>
        </h1>
        <p className="text-sm md:text-base text-muted/60 mb-4 font-fira-code">
          [kɾisˈtoβal ɣuˈtjeɾeθ toˈruβja]
        </p>

        <h2 className="text-xl md:text-2xl text-muted mb-8 flex items-baseline justify-center gap-3 flex-wrap">
          <span>Software Engineer</span>
          <span className="text-muted/50">·</span>
          <span className="flex items-baseline gap-1.5 text-base">
            <MapPin className="w-4 h-4 translate-y-0.5" />
            Manchester, UK
          </span>
        </h2>

        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed">
          Building high-impact features with an analytical approach rooted in Linguistics.
          Framework-versatile, passionate about infrastructure and performance optimisation.
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="/cristobal_torrubia_cv_2026.pdf"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-card-border bg-card/50 backdrop-blur-sm hover:border-accent hover:text-accent hover:scale-110 transition-all duration-300"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-muted hover:text-accent transition-colors">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
