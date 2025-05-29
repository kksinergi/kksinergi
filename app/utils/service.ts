interface serviceItem {
  title: string;
  description: string;
  icon: string;
  checked?: string;
  status?: Array<string>;
}

export const serviceHomeItems: serviceItem[] = [
  {
    title: "KONSULTAN ISO",
    description: "Membantu penerapan dan sertifikasi ISO untuk memastikan kepatuhan standar, efisiensi, dan kepercayaan pelanggan.",
    icon: "/badge3.1.png",
  },
  {
    title: "KONSULTAN LINGKUNGAN",
    description: "Pendampingan PROPER, dokumen lingkungan, dan strategi keberlanjutan untuk pengelolaan lingkungan.",
    icon: "/badge3.2.png",
  },
  {
    title: "KONSULTAN K3",
    description: "Membantu pendampingan pada proses mendapatkan sertifikat terkait K3 seperti sertifikat SMK3, ISO 45001, dll.",
    icon: "/badge3.3.png",
  },
  {
    title: "KONSULTAN ENGINEERING",
    description: "Membantu penerbitan sertifikat peralatan dan bangunan untuk memastikan kepatuhan terhadap regulasi dan standar keselamatan.",
    icon: "/badge3.4.png",
  },
  {
    title: "TRAINING AWARENESS",
    description: "Memberikan training terkait teknik, K3 maupun lingkungan, guna meningkatkan pemahaman & kepatuhan terhadap regulasi.",
    icon: "/badge3.5.png",
  },
];

export const servicePageItems: serviceItem[] = [
  {
    title: "KONSULTAN ISO",
    description:
      "Membantu penerapan dan sertifikasi ISO untuk memastikan kepatuhan standar, efisiensi, dan kepercayaan pelanggan. Membantu penerapan dan sertifikasi ISO untuk memastikan kepatuhan standar, efisiensi, dan kepercayaan pelanggan.Kami menyediakan sertifikasi ISO dalam bidang-bidang berikut:",
    icon: "/service1.1.png",
    checked: "service-check.png",
    status: [
      "ISO 9001, standar internasional untuk sistem manajemen mutu",
      "ISO 45001, manajemen kesehatan dan keselamatan kerja (K3)",
      "ISO 14001, standar internasional untuk sistem manajemen lingkungan",
      "ISO 50001, manajemen energi yang efisien",
      "ISO 22001, standar internasional untuk sistem manajemen keamanan pangan",
    ],
  },
  {
    title: "KONSULTAN LINGKUNGAN",
    description: "Pendampingan PROPER, dokumen lingkungan, dan strategi keberlanjutan untuk pengelolaan lingkungan.",
    icon: "/service1.2.png",
    checked: "service-check.png",
    status: [
      "PROPER (Program Penilaian Peringkat Kinerja Perusahaan dalam Pengelolaan Lingkungan Hidup)",
      "Perizinan Lingkungan (AMDAL, UKL-UPL, Pertek, Rintek)",
      "SGS’s, layanan atau pendekatan berbasis standar SGS",
      "MACC (Marginal Abatement Cost Curve)",
      "Roadmap Dekarbonisasi",
      "Dokumen Rencana Aksi Mitigasi (DRAM)",
      "Laporan Capain Aksi Mitigasi (LCAM)",
      "Pendampingan Sistem Registri Nasional (SRN)",
      "Life Cycle Assessment (LCA)",
      "Green Building",
    ],
  },
  {
    title: "KONSULTAN K3",
    description: "Membantu pendampingan pada proses mendapatkan sertifikat terkait K3 seperti sertifikat SMK3, ISO 45001, dll.",
    icon: "/service1.3.png",
    checked: "service-check.png",
    status: [
      "Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3)",
      "Contractor Safety Management System (CSMS)",
      "Safety Level Maturity (SLM)",
      "Health Risk Assessment (HRA)",
      "Safety Leadership",
      "HIRADC",
      "Dokumen Potensi Bahaya Kimia Menengah/Besar",
      "Program Kerja K3",
      "Pengukuran ergonomi",
    ],
  },
  {
    title: "KONSULTAN ENGINEERING",
    description: "Membantu penerbitan sertifikat peralatan dan bangunan untuk memastikan kepatuhan terhadap regulasi dan standar keselamatan.",
    icon: "/service1.4.png",
    checked: "service-check.png",
    status: [
      "Sertifikat Laik Fungsi (SLF)",
       "Alat Pengangkat",
       "Fabrikasi Struktur Baja",
       "Mekanikal, Elektrikal, dan Perpipaan", 
       "Modifikasi Kontainer",
       "Perhitungan dan Desain Teknik",
       "Tangki Penyimpanan dan Bejana Tekan",
       "Marine"
      ],
  },
  {
    title: "TRAINING AWARENESS",
    description: "Memberikan training terkait teknik, K3 maupun lingkungan, guna meningkatkan pemahaman & kepatuhan terhadap regulasi.",
    icon: "/service1.5.png",
    checked: "service-check.png",
    status: [
      "Keselamatan dan Kesehatan Kerja",
       "Lingkungan",
       "Marine"
      ],
  },
];
