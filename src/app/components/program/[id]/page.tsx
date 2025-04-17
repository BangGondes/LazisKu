// app/program/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


// Tipe data untuk Program
interface Program {
  id: string;
  title: string;
  description: string;
  image: string; // Menambahkan properti image
}

const programList: Program[] = [
  {
    id: "beasiswa-santri",
    title: "Beasiswa Santri",
    description: "Bantuan pendidikan untuk santri kurang mampu.",
    image: "/images/beasiswa-santri.jpg", // Gambar untuk program ini
  },
  {
    id: "orang-tua-asuh",
    title: "Orang Tua Asuh",
    description:
      "Program Orang Tua Asuh Santri Yatim Piatu adalah inisiatif mulia dari Pondok Pesantren Khoiro Ummah yang bertujuan untuk memberikan dukungan penuh kepada para santri yatim dan yatim piatu dalam menempuh pendidikan agama dan umum. Melalui program ini, kami mengajak para dermawan untuk mengambil peran sebagai ‘orang tua asuh’...",
    image: "/images/orang-tua-asuh.jpg", // Gambar untuk program ini
  },
  {
    id: "pembangunan-pondok",
    title: "Pembangunan Pondok",
    description: "Ayo bantu renovasi dan pembangunan pondok pesantren.",
    image: "/images/pembangunan-pondok.jpg", // Gambar untuk program ini
  },
];

// Pastikan props params diterima dengan benar
export default function ProgramDetail({ params }: { params: { id: string } }) {
  const program = programList.find((p) => p.id === params.id);

  if (!program) return notFound(); // otomatis ke halaman 404 bawaan next

  return (
    <div className="flex flex-col items-center container py-16 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        {program.title}
      </h1>

      <Image
        src={program.image}
        width={600} // Atur ukuran gambar
        height={400} // Atur ukuran gambar
        className="rounded-lg mb-8"
        alt={""}
      />

      <p className="max-w-2xl text-lg text-gray-600">{program.description}</p>
      <div className="mt-8">
        <Link
          href="/donasi"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Donasi Sekarang
        </Link>
      </div>
    </div>
  );
}
