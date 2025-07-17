import { ourPartnersItems } from "@/app/utils/ourPartners";

export default function OurPartners() {
  return (
    <section className="font-[var(--font-geist-sans)] bg-white px-4 sm:px-8 py-24 sm:py-32 lg:py-40" id="mitra-kami">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 items-center">
        {/* Judul Section */}
        <div className="flex flex-col gap-4 items-center text-center px-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-cover bg-center" style={{ backgroundImage: "url('/badge4.png')" }} />
            <h4 className="font-semibold text-sm sm:text-xl text-[#0086FF]">Mitra Kami</h4>
          </div>
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">Menjalin Sinergi Untuk Tujuan Bersama</h1>
        </div>

        {/* Grid Partner */} 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {ourPartnersItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 p-6  rounded-2xl bg-[#F7FAFF] border border-[#D4D4D4]">
              <div className="aspect-square w-full rounded-xl overflow-hidden">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">{item.title}</h2>
              <p className="text-sm sm:text-base text-(--color-description) font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
