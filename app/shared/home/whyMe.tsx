"use client";

export default function WhyMeSection() {
  return (
    <section id="whyme" className=" font-[family-name:var(--font-geist-sans)">
      <div className="flex flex-col items-center justify-center px-8 py-32 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex flex-col h-full gap-3">
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
              <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] bg-cover bg-center" style={{ backgroundImage: "url('/badge4.png')" }}></div>
              <h4 className="font-semibold text-sm sm:text-2xl text-(--color-primary)">Kenapa Memilih Kami?</h4>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-center lg:text-left text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">Kami Hadir dengan Solusi Inovatif dan Konsultasi Terpercaya</h1>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-center lg:text-left text-[24px] sm:text-[28px] xl:text-[32px] text-(--color-description)">Tujuan Kami</h4>
                <p className="text-center lg:text-left text-(--color-description) text-sm sm:text-xl lg:text-2xl">
                  Mitra konsultasi terpercaya yang memberdayakan klien lewat solusi inovatif dan berbasis data, mendorong pertumbuhan berkelanjutan di pasar global.
                </p>
              </div>
            </div>
          </div>
          <div className="relative block w-full">
            <div className="w-full h-full bg-contain bg-no-repeat bg-center min-h-[232px] md:h-[490px]" style={{ backgroundImage: "url('/whyme-img.png')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
