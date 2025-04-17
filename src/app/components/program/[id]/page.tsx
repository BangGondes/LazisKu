"use client";

import { useSearchParams } from "next/navigation";

// Tipe data untuk Program
interface Program {
  id: string;
  title: string;
  description: string;
}

const ProgramDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Data program yang dapat diperluas jika diambil dari API
  const programList: Program[] = [
    {
      id: "beasiswa-santri",
      title: "Beasiswa Santri",
      description: "Bantuan pendidikan untuk santri kurang mampu.",
    },
    {
      id: "orang-tua-asuh",
      title: "Orang Tua Asuh",
      description:
        "Program Orang Tua Asuh Santri Yatim Piatu adalah inisiatif mulia dari Pondok Pesantren Khoiro Ummah yang bertujuan untuk memberikan dukungan penuh kepada para santri yatim dan yatim piatu dalam menempuh pendidikan agama dan umum. Melalui program ini, kami mengajak para dermawan untuk mengambil peran sebagai ‘orang tua asuh’ yang peduli terhadap masa depan generasi Islam yang kurang beruntung. Tujuan Program, Bentuk Bantuan Orang Tua Asuh, Nominal Donasi & Skema Asuh, Manfaat Menjadi Orang Tua Asuh, dan banyak lagi...",
    },
    {
      id: "pembangunan-pondok",
      title: "Pembangunan Pondok",
      description: "Ayo bantu renovasi dan pembangunan pondok pesantren.",
    },
  ];

  // Cari program berdasarkan id
  const program = programList.find((program) => program.id === id);

  if (!program) return <p>Program tidak ditemukan!</p>;

  return (
    <div className="container py-16 px-6">
      <h1 className="text-4xl font-extrabold text-gray-800">{program.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{program.description}</p>
      {/* Kamu bisa menambahkan elemen lain seperti gambar, tombol donasi, dll. */}
    </div>
  );
};

export default ProgramDetail;
