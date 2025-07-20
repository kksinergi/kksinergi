interface FormData {
  name: string;
  email: string;
  date: string;
  message: string;
}

const sendMessage = async (formData: FormData) => {
  try {
    const ENDPOINT_WA = `https://api.whatsapp.com/send/?phone=${process.env.WA_NUMBER}`;
    const [year, month, day] = formData.date.split("-");
    const formattedName = formData.name.charAt(0).toUpperCase() + formData.name.slice(1);
    const formattedDate = `${day}-${month}-${year}`;

    const message = `Mau konsultasi dong kak,\n\nNama: *${formattedName}*\nEmail: *${formData.email}*\nJadwal: *${formattedDate}*\nPesan: ${formData.message}`;
    const url = `${ENDPOINT_WA}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  } catch (error) {
    console.error("Gagal kirim pesan:", error);
    throw error;
  }
};


const sendMessageTemplate = () => {
  const url = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WA_NUMBER}&text=${encodeURIComponent(
    "Halo Kak, saya ingin konsultasi dengan PT. Kapita Konsul Sinergi. Bisa dibantu ya? 😊"
  )}`;
  window.open(url, "_blank");
};

export { sendMessage, sendMessageTemplate };
