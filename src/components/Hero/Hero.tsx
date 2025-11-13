// Hero.tsx (المكون النهائي النظيف)
import React from "react";

import ScrollIndicator from "./components/ScrollIndicator";
import ParticleSystem from "./components/FloatingParticles";
import HeroContent from "./components/HeroContent";
import HeroAvatarCard from "./components/HeroAvatarCard";

// يمكن نقل الدوال المساعدة العامة إلى ملف utils/
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const coreTechs = ["ReactJS", "NextJS", "Flutter", "TypeScript"];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16"
    >
     
      <ParticleSystem />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
          <HeroContent
            scrollToSection={scrollToSection}
            coreTechs={coreTechs}
          />

         
          <HeroAvatarCard />
        </div>

      
        <ScrollIndicator scrollToSection={scrollToSection} targetId="about" />
      </div>
    </section>
  );
};

export default Hero;
