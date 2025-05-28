import HeroSection from "@/app/shared/home/heroSection";
import AboutUsSection from "@/app/shared/home/aboutUsSection";
import ServiceSection from "@/app/shared/home/serviceSection";
import WhyMeSection from "./shared/home/whyMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <ServiceSection />
      <WhyMeSection />
    </main>
  );
}
