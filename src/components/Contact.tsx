import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:cgtorrubia@gmail.com",
    icon: Mail,
    label: "cgtorrubia@gmail.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/cgtorrubia",
    icon: Github,
    label: "github.com/cgtorrubia",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/cgtorrubia",
    icon: Linkedin,
    label: "linkedin.com/in/cgtorrubia",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 px-6 snap-end">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-accent">#</span> Get In Touch
        </h2>

        <p className="text-foreground/80 mb-12">
          I&apos;m currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>

        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-card border border-card-border rounded-lg hover:border-accent hover:text-accent transition-colors group"
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-card-border">
          <p className="text-sm text-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
