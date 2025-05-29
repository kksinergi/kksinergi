'use client';
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/app/shared/home/heroSection"))
const AboutUsSection = dynamic(() => import("@/app/shared/home/aboutUsSection"))
const ServiceSection = dynamic(() => import("@/app/shared/home/serviceSection"))
const WhyMeSection = dynamic(() => import("@/app/shared/home/whyMe"))

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
