"use client";

import { whyMeItems } from "@/app/utils/whyMe";

export default function WhyMeSection() {
  return (
    <section id="whyme" className="font-[family-name:var(--font-geist-sans)]">
      <div className=" flex flex-col items-center justify-center px-8 py-32 gap-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
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
            <div className="w-full h-full bg-contain bg-no-repeat bg-center lg:bg-right min-h-[232px] md:h-[490px]" style={{ backgroundImage: "url('/whyme-img.png')" }}></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <h1 className="font-bold w-full text-center sm:text-left text-[24px] sm:text-[28px] xl:text-[32px] text-(--color-description)">Cara Kami Bekerja</h1>
          <div className="grid grid-cols-2 items-center justify-center w-full gap-6">
            {whyMeItems.map((item) => (
              <div key={item.id} className="w-full h-full flex flex-col sm:flex-row sm:items-start items-center justify-center gap-4 bg-transparent border-[#D4D4D4] border rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-center h-[55px] w-[40px] sm:h-[40px] sm:w-[55px] md:h-[50px] md:w-[65px] lg:h-[60px] lg:w-[75px] xl:h-[70px] xl:w-[80px]">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.icon})` }}></div>
                </div>
                <div className="flex flex-col w-full h-full gap-2">
                  <p className="text-center sm:text-left text-(--color-description) text-sm sm:text-xl align-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative block w-full h-full overflow-hidden">
          <div className="w-full h-full bg-cover bg-center rounded-3xl drop-shadow-sm overflow-hidden" style={{ backgroundImage: "url('/whyme-img-organisasi.png')" }}>
            <div className="block bg-[#0061FF]/70 w-full h-full">
              <div className="flex flex-col items-center justify-center w-full h-full py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 gap-4">
                <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                  <h1 className="font-bold text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-[32px]">Lihat Susunan Tim Profesional Kami!</h1>
                  <p className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
                    Kenali susunan tim kerja kami yang terstruktur dan Lihat bagaimana peran dan kolaborasi tim kami untuk mendukung solusi terbaik untuk Anda
                  </p>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button className="flex px-4 py-2 sm:px-6 sm:py-4 bg-(--color-secondary) text-(--color-buttonSecondary) rounded-[20px] font-semibold cursor-pointer text-[16px] sm:text-[20px] text-center">Lihat Susuan Organisasi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
