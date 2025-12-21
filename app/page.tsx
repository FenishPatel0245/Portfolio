import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { CoreStack } from "@/components/sections/core-stack";
import { ProjectsSection } from "@/components/sections/projects";


export default function Home() {
  return (
    <main className="min-h-screen relative text-white selection:bg-white/20">
      <Navbar />

      <HeroSection />

      <div className="relative z-10 w-full flex flex-col items-center gap-0 sm:gap-4 text-center sm:text-left mt-64">
        <AboutSection />
        <CoreStack />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>

      <footer className="relative z-10 py-6 text-center text-white/20 text-sm pb-12">
        <p>&copy; {new Date().getFullYear()} Fenish Patel. All rights reserved.</p>
      </footer>
    </main>
  );
}
