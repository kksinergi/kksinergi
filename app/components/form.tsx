"use client";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { sendMessage } from "@/app/utils/submitSchedule";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function Form({ toggleForm }: { toggleForm: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isValidEmail = (email: string) => {
    // RegEx validasi email standar
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    sendMessage(formData);
    toggleForm();
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Gagal kirim email!");

      alert("Email berhasil dikirim!");
      toggleForm(); // tutup form
    } catch (error) {
      console.error("Error kirim email:", error);
      alert("Terjadi kesalahan saat mengirim email.");
    }
  };

  const validateForm = () => {
    const { name, email, date, message } = formData;

    if (!name || !email || !date || !message) {
      alert("Semua field wajib diisi!");
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Format email tidak valid!");
      return false;
    }

    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      alert("Tanggal tidak boleh di masa lalu!");
      return false;
    }

    return true;
  };


  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full max-w-lg mx-auto bg-white p-6 font-[family-name:var(--font-geist-sans)] gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Buat Jadwal</h1>
        <button type="button" aria-label="Tutup Formulir" onClick={toggleForm}>
          <CloseRoundedIcon className="cursor-pointer" fontSize="large" />
        </button>
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nama
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Nama"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label htmlFor="tanggal" className="block text-gray-700 font-bold mb-2">
          Tanggal
        </label>
        <input
          id="tanggal"
          type="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Pesan
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Pesan"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          type="button"
          onClick={handleSubmitWhatsApp}
          className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition cursor-pointer"
        >
          <WhatsAppIcon />
          Kirim via WA
        </button>

        <button
          type="button"
          onClick={handleSubmitEmail}
          className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition cursor-pointer"
        >
          <EmailRoundedIcon />
          Kirim via Email
        </button>
      </div>
    </form>
  );
}
