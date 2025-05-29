"use client";
export default function TeamSection() {
  return (
    <section className="font-[family-name:var(--font-geist-sans)] bg-white">
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-10 items-center justify-center bg-cover bg-center py-32 sm:py-36 xl:py-40 px-8" style={{ backgroundImage: "url('/hero-bg.png')" }}>
        <div className="flex flex-col items-center justify-center mb-[20px] md:mb-[40px] lg:mb-[60px] xl:mb-[80px]">
          <div className="flex flex-col items-center justify-center w-full h-full gap-[18px]">
            <h1 className="font-semibold text-center text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">Struktur Organisasi Perusahaan</h1>
            <p className="text-center text-(--color-description) text-sm sm:text-xl align-center lg:text-2xl">
              Struktur organisasi kami dirancang untuk memastikan koordinasi yang efisien, pengambilan keputusan yang tepat, serta kolaborasi antar tim yang solid. Setiap posisi memiliki peran dan tanggung jawab yang jelas untuk mendukung
              pencapaian visi dan misi perusahaan
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-full aspect-video bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/struktur-tim.png')" }}></div>
        </div>
      </div>
    </section>
  );
}
