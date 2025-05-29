"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar";

const page = [
  "/layanan"
]

export default function Header() {
  const pathname = usePathname();
  if (page.includes(pathname)) {
    return (
      <header className="select-none fixed w-full z-50">
        <Navbar />
      </header>
    );
  }

  return (
    <header className="select-none fixed w-full z-50">
      <Navbar />
    </header>
  );
}
