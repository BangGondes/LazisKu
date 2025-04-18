"use client";

import { motion } from "framer-motion";
import Link from "next/link";


const MotionLink = motion(Link);
// Tipe data untuk Program
interface Program {
  title: string;
  description: string;
  link: string;
}

export default function Program() {
  const programList: Program[] = [
    {
      title: "Beasiswa Santri",
      description: "Bantuan pendidikan untuk santri kurang mampu.",
      link: "/program/beasiswa-santri",
    },
    {
      title: "Orang Tua Asuh",
      description:
        "Program Orang Tua Asuh Santri Yatim Piatu adalah inisiatif mulia dari Pondok Pesantren Khoiro Ummah yang bertujuan untuk memberikan dukungan penuh kepada para santri yatim dan yatim piatu dalam menempuh pendidikan agama dan umum. Melalui program ini, kami mengajak para dermawan untuk mengambil peran sebagai ‘orang tua asuh’ yang peduli terhadap masa depan generasi Islam yang kurang beruntung. Tujuan Program, Bentuk Bantuan Orang Tua Asuh, Nominal Donasi & Skema Asuh, Manfaat Menjadi Orang Tua Asuh, dan banyak lagi...",
      link: "/program/orang-tua-asuh",
    },
    {
      title: "Pembangunan Pondok",
      description: "Ayo bantu renovasi dan pembangunan pondok pesantren.",
      link: "/program/pembangunan-pondok",
    },
      {
      title: "Qurban",
      description: "Ayo bantu renovasi dan pembangunan pondok pesantren.",
      link: "/program/pembangunan-pondok",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-800 leading-snug font-[Poppins]"
        >
          Program Kami ✨
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 text-lg text-gray-500 max-w-lg font-[Poppins]"
        >
          Yuk, temukan program yang paling cocok untukmu dan bergabung bersama
          kami! 🚀
        </motion.p>
      </div>

      <div className="py-24 px-6 bg-gray-50 mb-4 shadow-lg">
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-12 lg:gap-16">
          {programList.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-2xl p-6 lg:p-10 shadow-lg text-center lg:text-left max-w-md w-full min-h-[400px] hover:shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                {program.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {program.description.length > 150
                  ? program.description.substring(0, 150) + "..."

                  : program.description}
              </p>

<MotionLink
  href={program.link}
  whileHover={{ scale: 1.05 }}
  className="mt-auto inline-block text-center bg-green-600 text-white px-6 py-3 rounded-lg shadow transition duration-300 hover:bg-green-700 hover:shadow-xl"
>
  Learn More
</MotionLink>

            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
