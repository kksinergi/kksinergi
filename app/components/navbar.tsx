"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navbarItems } from "@/app/utils/navbar";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import Form from "@/app/components/form";

const ClientScrollLink = dynamic(() => import("./clientScrollLink"), {
  ssr: false,
});

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavbarItem, setActiveNavbarItem] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNavbarItemClick = (item: string) => {
    setActiveNavbarItem(item);
    setIsOpen(false);
  };
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // hanya aktif ketika isOpen true

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
  }, [isFormOpen]); // hanya aktif ketika isFormOpen true

  return (
    <nav className="flex items-center bg-white justify-between py-4 px-8 text-black">
      <Link href="/" className="flex items-center w-[180px] h-[50px] md:w-[200px] md:h-[50px]">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/logo.png')" }}></div>
      </Link>
      <ul className="hidden lg:flex space-x-4">
        {navbarItems.map((item) => (
          <li key={item.name} className="flex items-center group">
            {item.type === "scroll" ? (
              <ClientScrollLink
                to={item.id}
                smooth={true}
                spy={
                  pathname !== "/" ? false : true
                }
                offset={-300}
                duration={500}
                activeClass="text-black font-semibold"
                onClick={() => {
                  if (pathname !== "/") {
                    router.push(item.href);
                  } else {
                    handleNavbarItemClick(item.name);
                  }
                }}
                className={`cursor-pointer text-sm font-light sm:text-base md:text-lg text-[#969696] group-hover:text-black`}
              >
                {item.name}
              </ClientScrollLink>
            ) : (
              <Link
                href={item.href}
                onClick={() => handleNavbarItemClick(item.name)}
                className={`flex items-center text-sm font-light sm:text-base md:text-lg text-[#969696] group-hover:text-black ${activeNavbarItem === item.name ? "text-black font-semibold" : ""}`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}

        <li className="group px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-[20px] text-white ml-8">
          <button className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl cursor-pointer" onClick={toggleForm}>
            Buat Jadwal
          </button>
        </li>
      </ul>

      <button className="block lg:hidden cursor-pointer" onClick={handleToggle}>
        {isOpen ? <CloseRoundedIcon sx={{ fontSize: "34px" }} /> : <MenuRoundedIcon sx={{ fontSize: "34px" }} />}
      </button>
      {isOpen && (
        <div ref={toggleRef} className="absolute top-[80px] left-0 w-full bg-white z-20 lg:hidden shadow-md transition-all duration-300">
          <ul className="flex flex-col justify-center items-center space-y-4 py-6">
            {navbarItems.map((item) => (
              <li key={item.name} className="flex items-center group">
                {item.type === "scroll" ? (
                  <ClientScrollLink
                    to={item.id}
                    smooth={true}
                    spy={
                      pathname !== "/" ? false : true // Disa
                    }
                    offset={-200}
                    duration={500}
                    activeClass="text-black font-semibold"
                    onClick={() => {
                      if (pathname !== "/") {
                        router.push(item.href); // Redirect ke homepage dengan hash
                      } else {
                        handleNavbarItemClick(item.name);
                      }
                    }}
                    className={`cursor-pointer text-sm font-light sm:text-base md:text-lg text-[#969696] group-hover:text-black`}
                  >
                    {item.name}
                  </ClientScrollLink>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleNavbarItemClick(item.name)}
                    className={`flex items-center text-sm font-light sm:text-base md:text-lg text-[#969696] group-hover:text-black ${activeNavbarItem === item.name ? "text-black font-semibold" : ""}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="w-full flex justify-center">
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-[20px] text-white text-sm font-semibold sm:text-base md:text-lg lg:text-xl transition-colors duration-200 cursor-pointer" onClick={toggleForm}>
                Buat Jadwal
              </button>
            </li>
          </ul>
        </div>
      )}
      {isFormOpen && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-sky-700/60 backdrop-blur-sm">
          <div ref={formRef} className="w-full max-w-md bg-black mx-auto rounded-[20px] overflow-hidden">
            <Form toggleForm={toggleForm} />
          </div>
        </div>
      )}
    </nav>
  );
}
