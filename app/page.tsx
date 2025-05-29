'use client';
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/app/shared/home/heroSection"), {
  ssr: false
})
const AboutUsSection = dynamic(() => import("@/app/shared/home/aboutUsSection"), {
  ssr: false
})
const ServiceSection = dynamic(() => import("@/app/shared/home/serviceSection"), {
  ssr: false
})
const WhyMeSection = dynamic(() => import("@/app/shared/home/whyMe"), {
  ssr: false
})

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
