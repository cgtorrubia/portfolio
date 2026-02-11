"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/cgtorrubia", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/cgtorrubia", label: "LinkedIn" },
  { icon: Mail, href: "mailto:cgtorrubia@gmail.com", label: "Email" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "hero");
          }
        });
      },
      { root: main, threshold: 0, rootMargin: "0px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="mobile-header fixed top-0 left-0 right-0 lg:hidden z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-2xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent"
          >
            CGT
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={closeMobileMenu} />
        <nav className="absolute top-20 left-0 right-0 p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-2xl font-medium transition-colors ${
                activeSection === link.id ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-card-border flex items-center gap-6">
            <a
              href="/cristobal_torrubia_cv_2026.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent hover:text-background transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </nav>
      </div>

      <aside className="desktop-sidebar group fixed left-0 top-0 h-screen w-16 hover:w-48 hidden lg:flex flex-col justify-between py-8 px-4 hover:px-6 z-50 bg-background/60 hover:bg-background/80 backdrop-blur-md border-r border-card-border/50 hover:border-card-border transition-all duration-500 ease-out overflow-hidden">
        <a
          href="#hero"
          className="sidebar-logo font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 flex flex-col text-base leading-snug"
        >
          <span className="group-hover:hidden">C</span>
          <span className="hidden group-hover:block">Cristobal</span>
          <span>G</span>
          <span className="group-hover:hidden">T</span>
          <span className="hidden group-hover:block">Torrubia</span>
        </a>

        <nav className="sidebar-nav flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm transition-all duration-200 flex items-center gap-2 ${
                activeSection === link.id
                  ? "text-accent font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all duration-200 flex-shrink-0 ${
                  activeSection === link.id
                    ? "w-6 group-hover:w-8 bg-accent"
                    : "w-3 group-hover:w-4 bg-muted"
                }`}
              />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom flex flex-col gap-6">
          <a
            href="/cristobal_torrubia_cv_2026.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 px-2 group-hover:px-4 py-2 text-sm border border-accent text-accent rounded hover:bg-accent hover:text-background transition-all duration-200"
          >
            <FileText className="w-4 h-4 flex-shrink-0" />
            <span className="hidden group-hover:inline">Resume</span>
          </a>

          <div className="social-links flex flex-col gap-3 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
