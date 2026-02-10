const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML5", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["Ember.js", "React", "Next.js", "SCSS", "Tailwind"],
  },
  {
    title: "Backend & Data",
    skills: ["Node", "Express", "GraphQL", "Apollo", "tRPC", "Zod", "PostgreSQL"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Git", "Vercel", "AWS", "Supabase", "Docker", "CI/CD"],
  },
  {
    title: "Testing",
    skills: ["Cypress", "RTL", "Mocha", "Vitest", "Jest", "QUnit"],
  },
  {
    title: "Practices",
    skills: ["Agile", "Pair Programming", "TDD"],
  },
];

export default function AboutSkills() {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6 snap-start bg-card/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div className="about-section">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-accent">#</span> About Me
            </h2>

            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Software Engineer with over two years of commercial
                experience in high-complexity warehouse management systems.
              </p>

              <p>
                I apply an{" "}
                <span className="text-foreground font-medium">analytical-thinking approach</span>{" "}
                rooted in a background in Linguistics to deliver high-impact features
                and technical autonomy.
              </p>

              <p>
                <span className="text-foreground font-medium">Framework-versatile</span> —
                from Ember.js to React and TypeScript. Passionate about{" "}
                <span className="text-accent">infrastructure</span> and{" "}
                <span className="text-accent">performance optimisation</span>.
              </p>

              <div className="pt-6 border-t border-card-border">
                <p className="text-sm text-muted">
                  <span className="text-foreground font-medium">Education:</span>{" "}
                  BA English Literature & Linguistics (1st) — Granada
                </p>
              </div>
            </div>
          </div>

          <div id="skills" className="skills-section">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-accent">#</span> Skills
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <div key={category.title} className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted uppercase tracking-wider">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-card border border-card-border rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
