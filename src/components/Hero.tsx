import { Github, Linkedin, Mail, MapPin } from "lucide-react";

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
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-muted mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Manchester, UK</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Cristobal Gutierrez
          <span className="block text-accent">Torrubia</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-muted mb-8">
          Frontend Software Engineer
        </h2>

        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed">
          Building high-impact features with an analytical approach rooted in Linguistics.
          Framework-versatile, passionate about infrastructure and performance optimisation.
        </p>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-card-border bg-card hover:border-accent hover:text-accent transition-colors duration-200"
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
