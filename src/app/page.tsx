import Sidebar from "@/components/Sidebar";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Hero from "@/components/Hero";
import AboutSkills from "@/components/AboutSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground relative">
      <BackgroundBlobs />
      <Sidebar />
      <main className="snap-y snap-proximity h-screen overflow-y-auto scroll-smooth">
        <Hero />
        <AboutSkills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
