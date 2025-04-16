"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type DonationFormData = {
  name: string;
  email: string;
  whatsapp: string;
  amount: string;
  formattedAmount: string;
  paymentMethod: string;
  message: string;
};

export default function DonationForm() {
  const [formData, setFormData] = useState<DonationFormData>({
    name: "",
    email: "",
    whatsapp: "",
    amount: "",
    formattedAmount: "",
    paymentMethod: "bank",
    message: "",
  });

  const router = useRouter(); // Tambahkan useRouter

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "amount") {
      const numericValue = value.replace(/\D/g, ""); // Hanya angka
      setFormData({ ...formData, amount: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBlur = () => {
    const formatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(parseInt(formData.amount || "0"));
    setFormData((prev) => ({ ...prev, formattedAmount: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(formData.amount) < 10000) {
      alert("⚠️ Minimal donasi adalah Rp10.000.");
      return;
    }

    if (!/^\d+$/.test(formData.whatsapp)) {
      alert("⚠️ Nomor WhatsApp hanya boleh berisi angka.");
      return;
    }

    try {
      const response = await fetch("/api/auth/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("❌ Server Error:", text);
        alert("⚠️ Server mengembalikan kesalahan.");
        return;
      }

      const result = await response.json();
      if (result.success) {
        // Simpan data ke localStorage sebelum redirect
        localStorage.setItem("donationData", JSON.stringify(formData));

        // Redirect ke halaman pembayaran
        router.push("/donasi/pembayaran");
      } else {
        alert("❌ Gagal mengirim data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Terjadi kesalahan.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-32 px-6 pb-32">
      <div className="max-w-md w-full bg-white p-6 border rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Form Donasi
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
            autoFocus
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="Nomor WhatsApp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <div>
            <input
              type="number"
              name="amount"
              placeholder="Nominal Donasi (Minimal Rp10.000)"
              value={formData.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              min="10000"
            />
          </div>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="bank">Transfer Bank</option>
            <option value="ewallet">E-Wallet</option>
          </select>
          <textarea
            name="message"
            placeholder="Pesan untuk donasi (Contoh: Semoga berkah)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-all duration-200"
          >
            Selanjutnya
          </button>
        </form>
      </div>
    </div>
  );
}
