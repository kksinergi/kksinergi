"use client";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

export default function Form({ toggleForm }: { toggleForm: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tanggal: new Date().toISOString().split("T")[0],
    pesan: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, tanggal, pesan } = formData;

    if (!name || !email || !tanggal || !pesan) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Format email tidak valid!");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (tanggal < today) {
      alert("Tanggal tidak boleh di masa lalu!");
      return;
    }

    // Reset form setelah submit
    setFormData({
      name: "",
      email: "",
      tanggal: new Date().toISOString().split("T")[0],
      pesan: "",
    });

    // Tutup form jika diinginkan
    toggleForm();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg mx-auto bg-white p-6 font-[family-name:var(--font-geist-sans)] gap-4">
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
          value={formData.tanggal}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label htmlFor="pesan" className="block text-gray-700 font-bold mb-2">
          Pesan
        </label>
        <textarea
          id="pesan"
          value={formData.pesan}
          onChange={handleChange}
          required
          placeholder="Pesan"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
        Kirim
      </button>
    </form>
  );
}
