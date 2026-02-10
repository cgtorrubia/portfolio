"use client";

import { useState, useEffect, useRef } from "react";

const experiences = [
  {
    year: "Present",
    title: "Software Engineer",
    company: "Clarus Software",
    location: "Remote",
    period: "Oct 2024 - Present",
    description: "Owning frontend initiatives end-to-end — from architecture decisions to deployment strategy — with full technical autonomy across the WMS platform.",
    highlights: [
      "Network monitoring & retry mechanisms for offline-capable handheld devices (HHD)",
      "Image capture system with local storage, compression, and deferred upload for camera-enabled HHDs",
      "Packing Desk: touch-based interface for complex packing warehouse workflows",
      // "Blue/Green deployment strategy: planned and executed zero-downtime releases with CloudFront & S3, enabling instant rollback",
      "Cross-functional leadership across engineering, product, and QA teams",
      "Framework-agnostic refactor enabling Ember → React migration",
    ],
  },
  {
    year: "Oct 2023",
    title: "Junior Software Engineer",
    company: "Clarus Software",
    location: "Remote",
    period: "Oct 2023 - Oct 2024",
    description: "Delivered complex features independently while maintaining high code quality standards across the WMS platform.",
    highlights: [
      "Promoted within 12 months through independent delivery and cross-team collaboration",
      "Built Booking Diary scheduling system and PDF Template Builder with Liquid templating",
      "Drove +80% test coverage and pioneered Cypress E2E adoption across multiple codebases",
      "Navigated 3 interconnected codebases (Frontend, HHD and its Components) with deep architectural understanding",
    ],
  },
  {
    year: "Mar 2023",
    title: "Trainee Full-Stack Developer",
    company: "Northcoders",
    location: "Manchester",
    period: "Mar 2023 - Jun 2023",
    description: "Intensive bootcamp transitioning from linguistics to software engineering, building full-stack applications.",
    highlights: [
      "13-week intensive full-stack JavaScript bootcamp",
      "Built NC News with Node.js, Express, PostgreSQL, React",
      "Created Love Birds app with React Native & Firebase",
    ],
  },
  {
    year: "Before",
    title: "Previous Life",
    company: "Various roles",
    location: "Manchester",
    period: "2021 - 2023",
    description: "From teaching Spanish to children and adults, to cataloguing in an archive library, to pulling pints in a pub. A winding path that built communication, patience, and problem-solving before finding software engineering.",
    highlights: [
      "Pub-turned-nightclub: thick skin and fast-paced problem-solving",
      "Library assistant: organisation and attention to detail",
      "Spanish teacher: tailoring approach per audience, from teenagers to retirees",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerReference = useRef<HTMLDivElement>(null);
  const cardsReferences = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerReference.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardsReferences.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - window.innerHeight / 2);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    const main = document.querySelector("main");
    if (main) {
      main.addEventListener("scroll", handleScroll, { passive: true });

      handleScroll();
      
      return () => main.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section id="experience" className="min-h-screen py-24 px-6">
      <div ref={containerReference} className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-accent">#</span> Experience
        </h2>

        <div className="relative">
          <div className="timeline-line absolute left-4 md:left-15 top-0 bottom-0 w-px bg-card-border" />

          <div
            className="timeline-active-dot hidden md:block absolute left-15 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-2 border-accent shadow-lg shadow-accent/50 transition-all duration-700 ease-out z-10"
            style={{
              top: (cardsReferences.current[activeIndex]?.offsetTop ?? 0) + 16,
            }}
          />

          <div className="space-y-8 pb-[15vh]">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { cardsReferences.current[index] = el; }}
                className="relative flex gap-4 md:gap-8"
              >
                <div className="year-marker w-16 md:w-15 shrink-0 text-left md:text-right pl-0 md:pr-4 pt-5">
                  <span
                    className={`text-xs md:text-sm font-medium transition-colors duration-500 ${
                      activeIndex === index ? "text-accent" : "text-muted"
                    }`}
                  >
                    {exp.year}
                  </span>
                </div>

                <div className="timeline-dot absolute left-4 md:left-15 top-6 -translate-x-1/2">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? "bg-transparent md:bg-transparent"
                        : "bg-card-border"
                    }`}
                  />
                </div>

                <div className="cards-container flex-1 pb-4 flex flex-col lg:flex-row gap-4 items-start">
                  <div
                    className={`experience-card p-5 bg-card border rounded-lg transition-all duration-500 w-full lg:w-96 lg:shrink-0 cursor-pointer hover:scale-[1.02] ${
                      activeIndex === index
                        ? "border-accent shadow-lg shadow-accent/10"
                        : "border-card-border"
                    }`}
                    onClick={() => {
                      const card = cardsReferences.current[index];

                      if (card) {
                        card.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                  >
                    <h3 className="text-lg font-semibold leading-tight">{exp.title}</h3>
                    <p className="text-accent text-sm mt-1">{exp.company}</p>
                    <p className="text-xs text-muted mt-2">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="lg:hidden mt-4">
                      <p className="text-xs text-accent uppercase tracking-wider mb-2 font-medium">Key Achievements</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-foreground/80 text-sm flex items-start gap-2"
                          >
                            <span className="text-accent mt-0.5 shrink-0">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`details-panel hidden lg:block w-95 shrink-0 transition-all duration-500 ease-out ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4 pointer-events-none"
                    }`}
                  >
                    <div className="p-5 bg-card/50 border border-accent/30 rounded-lg h-full">
                      <p className="text-xs text-accent uppercase tracking-wider mb-3 font-medium">Key Achievements</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className={`text-foreground/80 text-sm flex items-start gap-2 transition-all duration-300 ${
                              activeIndex === index
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-2"
                            }`}
                            style={{
                              transitionDelay: activeIndex === index ? `${i * 100}ms` : "0ms",
                            }}
                          >
                            <span className="text-accent mt-0.5 shrink-0">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
