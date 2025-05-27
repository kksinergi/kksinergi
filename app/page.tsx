import HeroSection from "@/app/shared/home/heroSection";
import AboutUsSection from "@/app/shared/home/aboutUsSection";

export default function Home() {
  return (
    <main id="home" className="font-[family-name:var(--font-geist-sans)">
      <HeroSection />
      <AboutUsSection />
    </main>
  );
}
