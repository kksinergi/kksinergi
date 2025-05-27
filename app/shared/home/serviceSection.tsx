'"use client";'

import {serviceItems} from "@/app/utils/service";

export default function ServiceSection() {
  return (
    <section id="tentangkami2" className=" font-[family-name:var(--font-geist-sans)">
      <div className="flex flex-col gap-10 items-center justify-center bg-cover bg-center py-32 sm:py-36 xl:py-40 px-8" style={{ backgroundImage: "url('/about-bg.png')" }}>
        <div className="flex flex-col max-w-[850px] gap-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] bg-cover bg-center" style={{ backgroundImage: "url('/badge3.png')" }}></div>
            <h4 className="font-semibold text-sm sm:text-2xl text-(--color-primary)">Layanan Kami</h4>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <h1 className="font-semibold text-center text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">Melayani Konsultasi Hingga Proses Sertifikasi</h1>
            <p className="text-center text-(--color-description) text-sm sm:text-xl align-center lg:text-2xl">
              Kami melayani jasa konsultasi professional hingga pendampingan dalam audit sertifikasi. Layanan ini bertujuan untuk memastikan organisasi siap dan berhasil mendapatkan sertifikasi yang diinginkan.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center max-w-[1244px] h-full gap-10">
          {serviceItems.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className={`w-full h-full flex flex-col sm:flex-row lg:flex-col items-start justify-center gap-4 bg-[#F7FAFF] rounded-3xl drop-shadow-sm p-6`}
            >
              <div className="flex items-center justify-center h-[50px] w-[50px] mx-auto sm:mx-0 sm:h-[55px] sm:w-[60px] md:h-[65px] md:w-[70px] lg:h-[70px] lg:w-[70px]">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.icon})` }}></div>
              </div>
              <div className="flex flex-col w-full h-fit gap-2">
                <h3 className="text-2xl text-center sm:text-left font-bold">{item.title}</h3>
                <p className="text-center sm:text-left text-(--color-description) text-sm sm:text-xl align-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-[1244px] h-full gap-10">
          {serviceItems.slice(3).map((item) => (
            <div
              key={item.title}
              className={`lg:max-w-[388px] h-full flex flex-col sm:flex-row lg:flex-col items-start justify-center gap-4 bg-[#F7FAFF] rounded-3xl drop-shadow-sm p-6`}
            >
              <div className="flex items-center justify-center h-[50px] w-[50px] mx-auto sm:mx-0 sm:h-[55px] sm:w-[60px] md:h-[65px] md:w-[70px] lg:h-[70px] lg:w-[70px]">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.icon})` }}></div>
              </div>
              <div className="flex flex-col w-full h-fit gap-2">
                <h3 className="text-2xl text-center sm:text-left font-bold">{item.title}</h3>
                <p className="text-center sm:text-left text-(--color-description) text-sm sm:text-xl align-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <button className="bg-(--color-primary) text-white text-xl text-center py-3 px-6 rounded-[20px] font-bold hover:bg-(--color-primary) hover:opacity-80">Lihat Detail Layanan</button>
        </div>
      </div>
    </section>
  );
}
