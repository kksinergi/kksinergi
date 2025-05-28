"use client";

import { aboutItems } from "@/app/utils/aboutUs";

export default function AboutUsSection() {
  return (
    <section id="tentangkami" className=" font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-start px-8 py-32 h-full gap-20">
        <div className="flex flex-col-reverse lg:flex-row w-full gap-4 md:gap-10 xl:gap-14">
          <div className="block lg:bg-left w-full min-h-[232px] bg-contain bg-no-repeat xl:h-[444px] md:rounded-2xl md:bg-contain lg:bg-no-repeat bg-center" style={{ backgroundImage: "url('/aboutUs.png')" }}></div>
          <div className="flex flex-col items-center justify-center w-full h-fit gap-3">
            <div className="flex flex-row items-center justify-center lg:justify-start sm:w-full gap-3">
              <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] bg-cover bg-center" style={{ backgroundImage: "url('/badge2.png')" }}></div>
              <h4 className="font-semibold text-sm sm:text-2xl text-(--color-primary)">Tentang Kami</h4>
            </div>
            <div className="flex flex-col items-start justify-start w-full h-full gap-5">
              <h1 className="font-semibold text-center lg:text-left text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">Mitra Konsultasi Professional Anda</h1>
              <p className="text-center lg:text-left text-(--color-description) text-sm sm:text-xl align-center lg:text-2xl">
                Kapita Konsul Sinergi adalah perusahaan konsultasi yang memberikan solusi strategis di bidang Teknik, K3, dan Lingkungan. Dengan tim ahli berpengalaman, kami membantu bisnis memperoleh sertifikasi dan mengoptimalkan
                operasional secara berkelanjutan.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-10">
          {aboutItems.map((item) => (
            <div key={item.title} className="w-full h-full flex flex-col sm:flex-row sm:items-start items-center justify-center gap-4 bg-transparent p-6">
              <div className="flex items-center justify-center h-[40px] w-[40px] sm:h-[50px] sm:w-[60px] xl:h-[60px] xl:w-[70px]">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.icon})` }}></div>
              </div>
              <div className="flex flex-col w-full h-full gap-2">
                <h3 className="text-2xl sm:text-left text-center lg:text-left font-semibold" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="text-center sm:text-left text-(--color-description) text-sm sm:text-xl align-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
