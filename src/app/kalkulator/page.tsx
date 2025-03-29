"use client";

import { useState, useEffect, JSX } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button as UIButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";

export default function Kalkulator() {
  const [activeCalculator, setActiveCalculator] = useState<string >("mal");

  const handleShowCalculator = (type: string) => {
    setActiveCalculator(type ?? ""); // Fallback to an empty string if type is null
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <Header />
      </header>
      <section id="kalkulator" className="py-16 px-4 pt-41 text-center bg-white z-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Masih Bingung Untuk Berzakat?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-6">
          Silahkan pilih zakat yang ingin Anda hitung
        </p>

        {/* Container tombol dengan flex-wrap agar rapi di ponsel */}
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
          <UIButton onClick={() => handleShowCalculator("mal") }  className={`p-2 rounded-md ${
            activeCalculator === "mal" ? "bg-green-600 text-white" : "bg-gray-400 text-black"
          }`}>
            Zakat Mal
          </UIButton>
          <UIButton onClick={() => handleShowCalculator("perusahaan")} className={`p-2 rounded-md ${
            activeCalculator === "perusahaan" ? "bg-green-600 text-white" : "bg-gray-400 text-black"
          }`}>
            Zakat Perusahaan
          </UIButton>
          <UIButton onClick={() => handleShowCalculator("profesi")} className={`p-2 rounded-md ${
            activeCalculator === "profesi" ? "bg-green-600 text-white" : "bg-gray-400 text-black"
          }`}>
            Zakat Profesi
          </UIButton>
          <UIButton onClick={() => handleShowCalculator("pertanian")} className={`p-2 rounded-md ${
            activeCalculator === "pertanian" ? "bg-green-600 text-white" : "bg-gray-400 text-black"
          }`}>
            Zakat Pertanian
          </UIButton>
        </div>

        {/* Menampilkan kalkulator berdasarkan tombol yang dipilih */}
        <div className="mt-6">
          {activeCalculator === "mal" && <ZakatMalCalculator />}
          {activeCalculator === "perusahaan" && <ZakatPerusahaanCalculator />}
          {activeCalculator === "profesi" && <ZakatProfesiCalculator />}
          {activeCalculator === "pertanian" && <ZakatPertanianCalculator />}
        </div>
      </section>
      <Footer />
    </>
  );
}

// Komponen Button yang responsif
function LocalButton({
  children,
  onClick,
  className,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-green-600 text-white rounded-md text-sm md:text-base font-medium transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
    >
      {children}
    </button>
  );
}

function ZakatMalCalculator() {
  const [harta, setHarta] = useState({
    tabungan: "",
    emas: "",
    piutang: "",
    utang: "",
  });

  const hargaEmasPerGram = 1200000; // Harga emas per gram dalam Rupiah
  const nisab = 85 * hargaEmasPerGram; // Nisab dalam Rupiah

  // Fungsi menghapus angka nol diawal input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/^0+/, ""); // Hapus nol di awal angka
    setHarta({ ...harta, [name]: cleanedValue });
  };

  // Konversi ke format Rupiah
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  // Hitung total harta
  const totalHarta =
    (parseFloat(harta.tabungan) || 0) +
    (parseFloat(harta.emas) || 0) +
    (parseFloat(harta.piutang) || 0) -
    (parseFloat(harta.utang) || 0);

  const zakatWajib = totalHarta >= nisab ? totalHarta * 0.025 : 0;

  return (
    
    <div className="p-6 max-w-lg mx-auto mt-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Kalkulator Zakat Mal</h2>

      <div className="space-y-3">
        <InputField
          label="Uang & Tabungan"
          name="tabungan"
          value={harta.tabungan}
          onChange={handleInputChange}
        />
        <InputField
          label="Investasi Emas"
          name="emas"
          value={harta.emas}
          onChange={handleInputChange}
        />
        <InputField
          label="Piutang (yang bisa diterima)"
          name="piutang"
          value={harta.piutang}
          onChange={handleInputChange}
        />
        <InputField
          label="Utang (jatuh tempo)"
          name="utang"
          value={harta.utang}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p>
          Total Harta: <strong>{formatRupiah(totalHarta)}</strong>
        </p>
        <p>
          Nisab: <strong>{formatRupiah(nisab)}</strong>
        </p>
        <p>
          Zakat Wajib Dibayar: <strong>{formatRupiah(zakatWajib)}</strong>
        </p>
      </div>

      {zakatWajib > 0 ? (
        <button
          onClick={() => (window.location.href = "/donasi")}
          className="mt-4 w-full bg-green-600 text-white p-2 rounded-md"
        >
          Salurkan Zakat
        </button>
      ) : (
        <button
          disabled
          className="mt-4 w-full bg-gray-400 text-white p-2 rounded-md"
        >
          Belum Wajib Zakat
        </button>
      )}
    </div>
  );
}

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ label, name, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium">{label} (Rp)</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
function ZakatPerusahaanCalculator() {
  const [aset, setAset] = useState({
    kas: "",
    piutang: "",
    persediaan: "",
    investasi: "",
    utang: "",
  });

  const hargaEmasPerGram = 1200000; // Harga emas per gram dalam Rupiah
  const nisab = 85 * hargaEmasPerGram; // Nisab dalam Rupiah

  // Fungsi menghapus angka nol diawal input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/^0+/, ""); // Hapus nol di awal angka
    setAset({ ...aset, [name]: cleanedValue });
  };

  // Konversi ke format Rupiah
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  // Hitung total aset bersih
  const totalAset =
    (parseFloat(aset.kas) || 0) +
    (parseFloat(aset.piutang) || 0) +
    (parseFloat(aset.persediaan) || 0) +
    (parseFloat(aset.investasi) || 0) -
    (parseFloat(aset.utang) || 0);

  const zakatWajib = totalAset >= nisab ? totalAset * 0.025 : 0;

  return (
    <div className="p-6 max-w-lg mx-auto mt-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Kalkulator Zakat Perusahaan</h2>

      <div className="space-y-3">
        <InputField
          label="Kas & Saldo Bank"
          name="kas"
          value={aset.kas}
          onChange={handleInputChange}
        />
        <InputField
          label="Piutang (yang dapat ditagih)"
          name="piutang"
          value={aset.piutang}
          onChange={handleInputChange}
        />
        <InputField
          label="Persediaan Barang"
          name="persediaan"
          value={aset.persediaan}
          onChange={handleInputChange}
        />
        <InputField
          label="Investasi Jangka Pendek"
          name="investasi"
          value={aset.investasi}
          onChange={handleInputChange}
        />
        <InputField
          label="Utang Jangka Pendek"
          name="utang"
          value={aset.utang}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p>
          Total Aset Bersih: <strong>{formatRupiah(totalAset)}</strong>
        </p>
        <p>
          Nisab: <strong>{formatRupiah(nisab)}</strong>
        </p>
        <p>
          Zakat Wajib Dibayar: <strong>{formatRupiah(zakatWajib)}</strong>
        </p>
      </div>

      {zakatWajib > 0 ? (
        <button
          onClick={() => (window.location.href = "/donasi")}
          className="mt-4 w-full bg-green-600 text-white p-2 rounded-md"
        >
          Salurkan Zakat
        </button>
      ) : (
        <button
          disabled
          className="mt-4 w-full bg-gray-400 text-white p-2 rounded-md"
        >
          Belum Wajib Zakat
        </button>
      )}
    </div>
  );
}

// Removed duplicate InputField function
function ZakatProfesiCalculator() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [zakat, setZakat] = useState<number | null>(null);
  const router = useRouter();

  // Nisab bulanan dihitung dari 85 gram emas * Rp1.200.000, lalu dibagi 12 bulan
  const nisab = (85 * 1200000) / 12; // Rp8.500.000 per bulan

  useEffect(() => {
    const netIncome = Number(income) - Number(expenses);
    if (netIncome >= nisab) {
      setZakat(netIncome * 0.025);
    } else {
      setZakat(0);
    }
  }, [income, expenses, nisab]); // Otomatis update tanpa tombol

  return (
    <Card className="p-6 max-w-lg mx-auto mt-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center ">
        Kalkulator Zakat Profesi
      </h2>

      <div className="mt-4">
        <label className="block text-gray-700">Pendapatan Bulanan (Rp)</label>
        <Input
          type="number"
          value={income}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIncome(e.target.value)
          }
          placeholder="Masukkan pendapatan..."
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Pengeluaran Dasar (Rp)</label>
        <Input
          type="number"
          value={expenses}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setExpenses(e.target.value)
          }
          placeholder="Masukkan pengeluaran..."
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Progress Bar Nisab */}
      <div className="mt-6">
        <p className="text-sm text-gray-600">
          Nisab: Rp{nisab.toLocaleString()} / bulan
        </p>
        <Progress
          value={
            (Math.min(Number(income) - Number(expenses), nisab) / nisab) * 100
          }
          max={100}
          className="mt-2"
        />
      </div>

      {/* Hasil Perhitungan Zakat */}
      {zakat !== null && (
        <p className="mt-4 text-lg font-semibold text-center">
          Jumlah Zakat:{" "}
          <span className="text-green-700">Rp{zakat.toLocaleString()}</span>
        </p>
      )}

      {/* Tombol Salurkan Zakat atau Belum Wajib Zakat */}
      <div>
        {zakat !== null && zakat > 0 ? (
          <LocalButton
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={() => router.push(`/donasi?nominal=${zakat}`)}
          >
            Salurkan Zakat
          </LocalButton>
        ) : (
          <button
            disabled
            className="mt-4 w-full bg-gray-400 text-white p-2 rounded-md"
          >
            Belum Wajib Zakat
          </button>
        )}
      </div>
    </Card>
  );
}
function ZakatPertanianCalculator() {
  const [beratPanen, setBeratPanen] = useState<string>("");
  const [hargaPerKg, setHargaPerKg] = useState<string>("");
  const [jenisHasilBumi, setJenisHasilBumi] = useState<string>("gabah");
  const [airHujan, setAirHujan] = useState<boolean>(true);

  // Konversi ke number
  const beratPanenNumber = Number(beratPanen) || 0;
  const hargaPerKgNumber = Number(hargaPerKg) || 0;

  // Nisab (minimal wajib zakat)
  const nisab = jenisHasilBumi === "gabah" ? 653 : 522;
  const wajibZakat = beratPanenNumber >= nisab;

  // Hitung zakat (10% atau 5%)
  const kadarZakat = airHujan ? 0.1 : 0.05;
  const jumlahZakatKg = beratPanenNumber * kadarZakat;
  const jumlahZakatRupiah = jumlahZakatKg * hargaPerKgNumber;

  // Format rupiah
  const formatRupiah = (angka: number) =>
    angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  return (
    <div className="p-6 max-w-lg mx-auto mt-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Kalkulator Zakat Pertanian</h2>

      {/* Input Berat Panen */}
      <label className="block mb-2">Berat Panen (kg):</label>
      <input
        type="number"
        value={beratPanen}
        onChange={(e) => setBeratPanen(e.target.value)}
        className="w-full p-2 border rounded"
      />

      {/* Input Harga per Kg */}
      <label className="block mt-4 mb-2">Harga per Kg (Rp):</label>
      <input
        type="number"
        value={hargaPerKg}
        onChange={(e) => setHargaPerKg(e.target.value)}
        className="w-full p-2 border rounded"
      />

      {/* Pilihan Jenis Hasil Bumi */}
      <label className="block mt-4 mb-2">Jenis Hasil Bumi:</label>
      <select
        value={jenisHasilBumi}
        onChange={(e) => setJenisHasilBumi(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="gabah">Gabah</option>
        <option value="beras">Beras</option>
      </select>

      {/* Pilihan Irigasi atau Air Hujan */}
      <label className="block mt-4 mb-2">Sumber Irigasi:</label>
      <div className="flex gap-4">
        <label>
          <input
            type="radio"
            name="air"
            checked={airHujan}
            onChange={() => setAirHujan(true)}
          />
          <span className="ml-2">Air Hujan (10%)</span>
        </label>
        <label>
          <input
            type="radio"
            name="air"
            checked={!airHujan}
            onChange={() => setAirHujan(false)}
          />
          <span className="ml-2">Irigasi/Pompa (5%)</span>
        </label>
      </div>

      {/* Hasil Perhitungan */}
      {beratPanenNumber > 0 && hargaPerKgNumber > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p>
            Nisab: <strong>{nisab} kg</strong>
          </p>
          <p>
            Zakat Wajib:{" "}
            <strong className={wajibZakat ? "text-green-600" : "text-red-600"}>
              {wajibZakat ? "Ya ✅" : "Tidak ❌"}
            </strong>
          </p>
          {wajibZakat && (
            <>
              <p>
                Jumlah Zakat: <strong>{jumlahZakatKg.toFixed(0)} kg</strong>
              </p>
              <p>
                Konversi Nominal:{" "}
                <strong>{formatRupiah(jumlahZakatRupiah)}</strong>
              </p>
            </>
          )}
        </div>
      )}

      {/* Tombol Salurkan Zakat */}
      {wajibZakat ? (
        <Link
          href="/donasi"
          className="mt-4 block w-full text-center bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Salurkan Zakat
        </Link>
      ) : (
        <button
          className="mt-4 w-full bg-gray-400 text-white p-2 rounded-md" 
          disabled
        >
          Belum wajib Zakat
        </button>
      )}
    </div>
  );
}
