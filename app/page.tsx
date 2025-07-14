import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/app/shared/home/heroSection"), { ssr: true });
const AboutUsSection = dynamic(() => import("@/app/shared/home/aboutUsSection"), { ssr: true });
const ServiceSection = dynamic(() => import("@/app/shared/home/serviceSection"), { ssr: true });
const WhyMeSection = dynamic(() => import("@/app/shared/home/whyMe"), { ssr: true });
const OurPartners = dynamic(() => import("@/app/shared/home/ourPartners"), { ssr: true });
const SOT = dynamic(() => import("@/app/components/scrollOnTop"), { ssr: true });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <ServiceSection />
      <WhyMeSection />
      <OurPartners />
      <SOT />
    </main>
  );
}
