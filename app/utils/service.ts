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
    description: "Membantu penerapan dan proses sertifikasi ISO untuk memastikan kepatuhan standar, efisiensi, dan kepercayaan pelanggan.",
    icon: "/badge3.1.png",
  },
  {
    title: "KONSULTAN LINGKUNGAN",
    description: "Membantu pendampingan Proper, dokumen lingkungan, dekarbonisasi, dan strategi keberlanjutan untuk pengelolaan lingkungan.",
    icon: "/badge3.2.png",
  },
  {
    title: "KONSULTAN K3",
    description: "Membantu pendampingan pada proses mendapatkan sertifikat terkait K3 seperti sertifikat SMK3 dan ISO 45001.",
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
      "Membantu penerapan dan proses sertifikasi ISO untuk memastikan kepatuhan standar, efisiensi, dan kepercayaan pelanggan. Kami menyediakan proses sertifikasi ISO dalam bidang-bidang berikut:",
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
    description: "Membantu perusahaan dalam memenuhi regulasi, mengelola dampak lingkungan secara bertanggung jawab, serta membangun citra perusahaan yang peduli terhadap kelestarian lingkungan. Kami menyediakan layanan konsultasi lingkungan yang mencakup: ",
    icon: "/service1.2.png",
    checked: "service-check.png",
    status: [
      "Proper (Program Penilaian Peringkat Kinerja Perusahaan dalam Pengelolaan Lingkungan Hidup)",
      "Perizinan Lingkungan (AMDAL, UKL-UPL, Pertek, Rintek)",
      "SGS’s, layanan atau pendekatan berbasis standar SGS",
      "Inventarisasi Emisi Gas Rumah Kaca (GRK)",
      "Roadmap Dekarbonisasi",
      "Dokumen Rencana Aksi Mitigasi (DRAM)",
      "Laporan Capain Aksi Mitigasi (LCAM)",
      "Pendampingan Sistem Registri Nasional (SRN)",
      "Life Cycle Assessment (LCA)",
      "Green Building",
      "Sustainability Report (SR)",
    ],
  },
  {
    title: "KONSULTAN K3",
    description: "Kami menyediakan layanan konsultasi dan pendampingan dalam penerapan Sistem Manajemen Kesehatan dan Keselamatan Kerja (K3) untuk mendukung terciptanya lingkungan kerja yang aman, produktif, dan sesuai regulasi. Layanan ini mencakup:",
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
    description: "Kami memberikan layanan konsultasi teknik untuk mendukung penerbitan proses sertifikasi peralatan dan bangunan sesuai regulasi dan standar keselamatan yang berlaku. Layanan ini penting untuk menunjang operasional yang aman, efisien, dan bebas dari risiko hukum. Layanan ini mencakup:",
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
    description: "Kami menyediakan program training awareness yang dirancang untuk meningkatkan pemahaman karyawan terhadap aspek teknis, K3 (Keselamatan dan Kesehatan Kerja), serta lingkungan. Guna mendukung kepatuhan regulasi serta terciptanya budaya kerja yang aman. Layanan ini mencakup:",
    icon: "/service1.5.png",
    checked: "service-check.png",
    status: [
      "Keselamatan dan Kesehatan Kerja",
       "Lingkungan",
       "Marine"
      ],
  },
];
