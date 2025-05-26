import Navbar from "@/app/components/navbar";

export default function Header() {
    return (
      <header className="select-none absolute inset-0 w-full overflow-hidden z-50 bg-transparent">
        <Navbar />
      </header>
    );
}