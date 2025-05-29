"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navbarItems } from "@/app/utils/navbar";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavbarItem, setActiveNavbarItem] = useState<string | null>(null);

  const handleNavbarItemClick = (item: string) => {
    setActiveNavbarItem(item);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center bg-white justify-between py-4 px-8 text-black">
      <Link href="/" className="flex items-center w-[180px] h-[50px] md:w-[200px] md:h-[50px]">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/logo.png')" }}></div>
      </Link>
      <ul className="hidden lg:flex space-x-4">
        {navbarItems.map((item) => (
          <li key={item.name} className="flex items-center group">
            <Link
              href={item.href}
              onClick={handleNavbarItemClick.bind(null, item.name)}
              className={`flex items-center  text-sm font-light sm:text-base md:text-lg text-[#969696] group-hover:text-black w-full h-full ${
                activeNavbarItem === item.name ? "group-focus-within:text-black group-focus-within:font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="group px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-[20px] text-white ml-8">
          <Link href="/jadwal" className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
            Buat Jadwal
          </Link>
        </li>
      </ul>

      <button className="block lg:hidden cursor-pointer" onClick={handleToggle}>
        {isOpen ? <CloseRoundedIcon sx={{ fontSize: "34px" }} /> : <MenuRoundedIcon sx={{ fontSize: "34px" }} />}
      </button>
      {isOpen && (
        <div ref={toggleRef} className="absolute top-[80px] left-0 w-full bg-white z-20 lg:hidden shadow-md transition-all duration-300">
          <ul className="flex flex-col justify-center items-center space-y-4 py-6">
            {navbarItems.map((item) => (
              <li key={item.name} className="w-full text-center group">
                <Link href={item.href} className={`block text-sm font-light sm:text-base md:text-lg text-[#969696] group-hover:text-black transition-colors duration-200 py-2`} onClick={handleToggle}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="w-full flex justify-center">
              <Link href="/jadwal" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-[20px] text-white text-sm font-semibold sm:text-base md:text-lg lg:text-xl transition-colors duration-200" onClick={handleToggle}>
                Buat Jadwal
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
