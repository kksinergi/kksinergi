"use client";

import { servicePageItems } from "@/app/utils/service";

export default function LayananSection() {
  return (
    <section className="font-[family-name:var(--font-geist-sans)] bg-white py-[40px] xl:pt-[60px] pb-[100px]">
      <div className="flex flex-col items-center justify-center px-8 mb-[60px]">
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <h1 className="font-semibold text-center text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">Maksimalkan Kinerja dan Kepatuhan Bisnis Anda Bersama Kami</h1>
          <p className="text-center text-(--color-description) text-sm sm:text-xl align-center lg:text-2xl">
            Kami menyediakan berbagai layanan konsultasi dan pelatihan Dengan tim ahli yang berpengalaman di bidangnya untuk membantu perusahaan mencapai standar terbaik dalam operasional, keselamatan, lingkungan, dan sistem manajemen.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-8 gap-[60px]">
        {servicePageItems.map((item, index) => (
          <div key={index} className="w-full h-full flex flex-col sm:flex-row sm:items-start items-center justify-center gap-4 rounded-2xl p-4 sm:p-6 bg-(--bg-primary)">
            <div className="min-w-[50px] h-auto aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.icon})` }}></div>
            </div>
            <div className="flex flex-col w-full h-fit gap-4">
              <h3 className="text-base sm:text-2xl text-center sm:text-left font-bold">{item.title}</h3>
              <p className="text-center sm:text-left text-(--color-description) text-sm sm:text-xl align-center">{item.description}</p>
              <div className="flex flex-col w-full h-fit gap-5 sm:gap-3">
                {item.status?.map((status, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="min-w-[20px] sm:min-w-[24px] h-auto aspect-square flex items-center justify-center">
                      <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.checked})` }}></div>
                    </div>
                    <p className="text-left text-(--color-description) text-sm sm:text-xl align-center">{status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
