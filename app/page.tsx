import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import ParticleBackground from "@/components/particle-background";
import ProofSection from "@/components/proof-section";
import ProjectsSection from "@/components/projects-section";
import ScrollEffects from "@/components/scroll-effects";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main id="main-content" className="relative isolate overflow-hidden">
      <ScrollEffects />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#1E293B]/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-[#334155]/18 blur-3xl" />
      </div>
      <HeroSection particleBackground={<ParticleBackground />} />
      <ProofSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
