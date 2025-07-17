"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Form from "@/app/components/form";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
 
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const formRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isFormOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);
  return (
    <section id="home" className={`font-[family-name:var(--font-geist-sans)]`}>
      <div className="flex flex-col gap-10 items-center justify-center bg-cover bg-center py-32 sm:py-36 xl:py-40 px-8" style={{ backgroundImage: "url('/hero-bg.png')" }}>
        <div className="flex w-full flex-col lg:flex-row gap-5 lg:gap-8 items-center lg:justify-between">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center justify-center lg:justify-start sm:w-full gap-3">
                <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] bg-cover bg-center" style={{ backgroundImage: "url('/badge1.png')" }}></div>
                <h4 className="font-semibold text-sm sm:text-2xl text-(--color-primary)">Mitra Konsultasi Terpercaya</h4>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-center lg:text-left text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">Strategi & Solusi Tepat untuk Pertumbuhan Bisnis Anda!</h1>
                <p className="text-center lg:text-left text-(--color-description) text-sm sm:text-xl lg:text-2xl">
                  Kami membantu bisnis Anda mencapai kinerja optimal dengan layanan konsultasi Teknik, K3, dan Lingkungan berbasis strategi dan data.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:w-full sm:flex-row sm:justify-start gap-10">
              <button className="px-6 py-4 text-center bg-(--color-secondary) text-(--color-buttonSecondary) rounded-[20px] font-semibold cursor-pointer text-[16px] sm:text-[20px]" onClick={toggleForm}>
                Konsultasi Sekarang
              </button>
              <Link href="#layanan" className="px-6 py-4 text-center bg-transparent text-(--color-buttonSecondary) rounded-[20px] font-semibold cursor-pointer underline text-[14px] xl:text-[20px]">
                Lihat Layanan Kami
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-center w-full">
            <div
              className="flex flex-col items-center justify-center h-[372px] w-full bg-no-repeat bg-contain sm:bg-repeat sm:w-[317px] md:bg-contain lg:w-[468px] lg:h-[556px] lg:bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-img.png')" }}
            ></div>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-sky-700/60 backdrop-blur-sm">
          <div ref={formRef} className="w-full max-w-md bg-black mx-auto rounded-[20px] overflow-hidden">
            <Form toggleForm={toggleForm} />
          </div>
        </div>
      )}
    </section>
  );
}
