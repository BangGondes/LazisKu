"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  interface Donation {
    id: string;
    amount: number;
  }

  const [donation, setDonation] = useState<Donation | null>(null);
  const [proof, setProof] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("donationData");
    if (storedData) {
      setDonation(JSON.parse(storedData));
    } else {
      router.push("/donasi"); // Redirect jika tidak ada data
    }
  }, [router]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proof || !donation) {
      alert("⚠️ Harap unggah bukti pembayaran.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("proof", proof);
    formData.append("donationId", donation.id);

    try {
      const response = await fetch("/api/auth/upload-proof", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        alert("✅ Bukti pembayaran berhasil diunggah!");
        router.push("/donasi/success");
      } else {
        alert("❌ Gagal mengunggah bukti pembayaran.");
      }
    } catch (error) {
      console.error("Error uploading proof:", error);
      alert("⚠️ Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white p-6 border rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Pembayaran Donasi
        </h2>
        {donation ? (
          <>
            <p className="mb-3 text-gray-700">Silakan transfer ke:</p>
            <div className="p-3 border rounded-md bg-gray-50 mb-4 text-center">
              <strong>Bank BRI - Lazis KHOIRO UMMAH</strong>
              <p className="text-lg font-semibold">587201015509530</p>
              <button
                onClick={() => navigator.clipboard.writeText("587201015509530")}
                className="mt-2 text-sm text-blue-500 hover:underline"
              >
                Salin Nomor Rekening
              </button>
            </div>
            <p className="text-gray-700">Jumlah Donasi:</p>
            <div className="p-3 border rounded-md bg-gray-50 mb-4 text-center">
              <strong>Rp {donation.amount}</strong>
            </div>
            <form onSubmit={handleUpload} className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProof(e.target.files?.[0] || null)}
                className="w-full p-2 border rounded-md"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-all duration-200"
                disabled={loading}
              >
                {loading ? "Mengunggah..." : "Kirim Bukti Pembayaran"}
              </button>
            </form>
          </>
        ) : (
          <p className="text-center text-gray-500">Memuat data...</p>
        )}
      </div>
    </div>
  );
}
