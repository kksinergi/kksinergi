"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);

  if (pathname === "/layanan") {
    return (
      <header className="select-none bg-transparent">
        <Navbar />
      </header>
    );
  }

  return (
    <header className="select-none absolute w-full z-50">
      <Navbar />
    </header>
  );
}
