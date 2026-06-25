import { CTABanner } from "@/components/home/CTABanner";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeTeamSection } from "@/components/home/HomeTeamSection";
import { LatestProjects } from "@/components/home/LatestProjects";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { StatsCounter } from "@/components/home/StatsCounter";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSnapshot />
      <WhyChooseUs />
      <StatsCounter />
      <TechStack />
      <Testimonials />
      <HomeTeamSection />
      <LatestProjects />
      <CTABanner />
    </>
  );
}

