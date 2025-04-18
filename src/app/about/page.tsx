"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 mt-32 bg-gray-50 mb-4 shadow-lg"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center leading-snug font-[Poppins]">
        Tentang Kami ✨
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mt-0 leading-relaxed max-w-3xl mx-auto">
        LAZISKU (Lembaga Amil Zakat Khoiro Ummah) adalah lembaga resmi yang
        berada di bawah naungan Yayasan Khoiro Ummah, hadir sebagai jembatan
        kebaikan untuk menyalurkan zakat, infaq, dan sedekah kepada mereka yang
        benar-benar membutuhkan.
      </p>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6">
        Kami berkomitmen memberikan layanan yang mudah diakses, amanah, dan
        transparan, didukung oleh sistem yang profesional dan tim yang
        berdedikasi. Setiap rupiah dari para donatur dikelola dengan penuh
        tanggung jawab dan disalurkan melalui program-program nyata yang
        berdampak langsung—seperti beasiswa santri, orangtua asuh, pembangunan
        pondok, zakat, dan qurban.
      </p>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6">
        Bersama <strong>LAZISKU</strong>, kebaikan Anda akan sampai lebih cepat,
        lebih tepat, dan lebih berarti.
        <br />
        <span className="block mt-4">
          🌱 <strong>Mari jadi bagian dari perubahan.</strong> Wujudkan harapan
          mereka bersama Anda.
        </span>
        <span className="block">
          📌 Karena setiap donasi adalah{" "}
          <em>investasi amal yang tak pernah rugi</em>.
        </span>
      </p>
    </motion.div>
  );
}
