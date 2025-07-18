interface NavbarItem {
    name: string;
    href: string;
    id: string;
    type: "scroll" | "route";
}

export const navbarItems: NavbarItem[] = [
    { name: "Home", href: "/#home", id: "home", type: "scroll" },
    { name: "Tentang Kami", href: "/#tentangkami", id: "tentangkami", type: "scroll" },
    { name: "Layanan", href: "/#layanan", id: "layanan", type: "scroll" },
    { name: "Keunggulan", href: "/#keunggulan", id: "keunggulan", type: "scroll" },
    { name: "Mitra Kami", href: "/#mitra-kami", id: "mitra-kami", type: "scroll" },
    { name: "Kontak", href: "/#kontak", id: "kontak", type: "scroll" },
];
