interface FormData {
  name: string;
  email: string;
  date: string;
  message: string;
}

const ENDPOINT = "https://api.whatsapp.com/send/?phone=628213123456";

const sendMessage = async (formData: FormData) => {
  try {
    const ENDPOINT_WA = `${ENDPOINT}`;

    // Format tanggal ke DD-MM-YYYY
    const [year, month, day] = formData.date.split("-");

    // Capitalize nama
    const formattedName = formData.name.charAt(0).toUpperCase() + formData.name.slice(1);
    const formattedDate = `${day}-${month}-${year}`;

    // Buat isi pesan WhatsApp
    const message = `Mau konsultasi dong kak,\n\nNama: *${formattedName}*\nEmail: *${formData.email}*\nJadwal: *${formattedDate}*\nPesan: ${formData.message}`;

    // Buka link WhatsApp
    const url = `${ENDPOINT_WA}&text=${encodeURIComponent(message)}`;
    window.open(url, "/");
  } catch (error) {
    console.error("Gagal kirim pesan:", error);
    throw error;
  }
};

export { sendMessage };
