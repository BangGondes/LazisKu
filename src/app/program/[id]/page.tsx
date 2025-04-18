import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProgramPageProps {
  params: {
    id: string;
  };
}

// Data statis
const programList: Program[] = [
  {
    id: "beasiswa-santri",
    title: "Beasiswa Santri",
    description: "Bantuan pendidikan untuk santri kurang mampu.",
    image: "/images/beasiswa-santri.jpg",
  },
  {
    id: "orang-tua-asuh",
    title: "Orang Tua Asuh",
    description:
      "Program Orang Tua Asuh Santri Yatim Piatu adalah inisiatif mulia dari Pondok Pesantren Khoiro Ummah yang bertujuan untuk memberikan dukungan penuh kepada para santri yatim dan yatim piatu...",
    image: "/images/orang-tua-asuh.jpg",
  },
  {
    id: "pembangunan-pondok",
    title: "Pembangunan Pondok",
    description: "Ayo bantu renovasi dan pembangunan pondok pesantren.",
    image: "/images/pembangunan-pondok.jpg", // Pastikan file ini ada di folder public/images
  },
];

export const metadata = {
  viewport: {
    themeColor: "#ffffff", // Pindahkan konfigurasi themeColor ke sini
  },
};

export default async function ProgramDetail({ params }: ProgramPageProps) {
  // Pastikan params.id diakses dengan await
  const programId = (await params).id;
  const program = programList.find((item) => item.id === programId);

  if (!program) return notFound();

  return (
    <div className="flex flex-col items-center container py-16 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        {program.title}
      </h1>
      <Image
        src={program.image} // Path gambar sesuai dengan program
        alt={program.title} // Alt text untuk SEO dan aksesibilitas
        width={600} // Atur ukuran gambar
        height={400} // Atur ukuran gambar
        className="rounded-lg mb-8" // Styling tambahan (opsional)
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
