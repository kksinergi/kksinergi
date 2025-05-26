"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function Header() {
  return (
    <footer id="Kontak" className="mb-[87px] font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <div className="flex items-center justify-between bg-transparent text-white max-h-[436px] bg-cover bg-center" style={{ backgroundImage: "url('/footer.png')" }}>
        <div className="block bg-[#0061FF]/70 w-full h-full">
          <div className="flex justify-center items-center sm:pt-32 py-16 px-8 md:px-6 gap-11">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-base lg:text-xl text-left w-full font-bold">PT. Kapita Konsul Sinergi</h1>
              <div className="flex gap-4">
                <div className="flex flex-col pb-0 sm:flex-row gap-8 lg:gap-4 xl:gap-60">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-xl sm:text-[20px] md:text-[24px] lg:text-[32px] font-bold">Siap Berkolaborasi Untuk Solusi Terbaik Bersama Kami?</h2>
                    <button className="px-4 py-3 md:px-6 md:py-4 sm:mr-20 text-(--color-buttonSecondary) text-sm lg:text-lg xl:text-xl bg-(--color-secondary) rounded-[14px] sm:rounded-[20px] font-semibold hover:bg-[#EBB92F]">
                      Hubungi Kami dan Atur Jadwal Konsultasi
                    </button>
                  </div>
                  <div className="flex flex-col md:w-[333px] gap-4">
                    <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold">Kontak Kami</h2>
                    <div className="flex flex-col w-full gap-4">
                      <div className="flex justify-center items-center gap-2">
                        <InstagramIcon />
                        <p className="text-sm sm:text-base w-full">@kapitakonsulsinergi</p>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <WhatsAppIcon />
                        <p className="text-sm sm:text-base w-full">0893 9389 9839</p>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <EmailRoundedIcon />
                        <p className="text-sm sm:text-base w-full">kapitakonsulsinergi@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
