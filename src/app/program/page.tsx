"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX } from "react";
import {
  FaHandsHelping,
  FaQuran,
  FaMosque,
  FaDonate,
  FaRegSmile,
} from "react-icons/fa";

const MotionLink = motion(Link);

interface Program {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Program() {
  const programList: Program[] = [
    {
      title: "Zakat",
      description:
        "Penyaluran zakat secara tepat sasaran kepada mustahik (yang berhak menerima), untuk membantu memberdayakan ekonomi umat dan memenuhi kebutuhan dasar mereka.",
      link: "/program/zakat",
      icon: <FaDonate className="text-green-600 text-4xl mb-4" />,
    },
    {
      title: "Beasiswa Santri",
      description:
        "Bantuan biaya pendidikan bagi santri berprestasi dan kurang mampu agar dapat terus belajar dan menghafal Al-Qur’an tanpa hambatan finansial.",
      link: "/program/beasiswa-santri",
      icon: <FaQuran className="text-green-600 text-4xl mb-4" />,
    },
    {
      title: "Orang Tua Asuh",
      description:
        "Program kepedulian untuk mendukung kebutuhan hidup dan pendidikan santri kurang mampu dengan menjadi orangtua asuh secara berkala.",
      link: "/program/orang-tua-asuh",
      icon: <FaHandsHelping className="text-green-600 text-4xl mb-4" />,
    },
    {
      title: "Pembangunan Pondok",
      description:
        "Program penggalangan dana untuk pembangunan dan renovasi fasilitas pondok pesantren demi kenyamanan belajar dan ibadah para santri.",
      link: "/program/pembangunan-pondok",
      icon: <FaMosque className="text-green-600 text-4xl mb-4" />,
    },
    {
      title: "Qurban",
      description:
        "Program penyaluran hewan qurban ke wilayah pelosok dan pesantren, sebagai bentuk kepedulian sosial dan ibadah kepada Allah di Hari Raya Idul Adha.",
      link: "/program/qurban",
      icon: <FaRegSmile className="text-green-600 text-4xl mb-4" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center py-16 px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-extrabold text-gray-800 leading-snug font-[Poppins]"
        >
          Program Kami ✨
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="mt-2 text-lg text-gray-500 max-w-lg font-[Poppins]"
        >
          Yuk, temukan program yang paling cocok untukmu dan bergabung bersama
          kami! 🚀
        </motion.p>
      </div>

      <div className="py-16 px-4 sm:px-6 bg-gray-50 shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programList.map((program, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              layout
            >
              <div className="flex justify-center">{program.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                {program.title}
              </h2>
              <p className="mt-4 text-gray-600 text-sm mb-3 sm:text-base">
                {program.description.length > 150
                  ? program.description.substring(0, 150) + "..."
                  : program.description}
              </p>
              <MotionLink
                href={program.link}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-auto inline-block bg-green-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-green-700 transition font-semibold text-sm mt-6"
              >
                Selengkapnya
              </MotionLink>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
