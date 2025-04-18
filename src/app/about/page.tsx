"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek apakah ukuran layar adalah mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      <div
        className={clsx(
          "text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto transition-all duration-500 overflow-hidden",
          {
            "max-h-[400px]": isMobile && !isExpanded,
            "max-h-[2000px]": isMobile && isExpanded,
          }
        )}
      >
        <p>
          LAZISKU (Lembaga Amil Zakat Khoiro Ummah) adalah lembaga resmi yang
          berada di bawah naungan Yayasan Khoiro Ummah, hadir sebagai jembatan
          kebaikan untuk menyalurkan zakat, infaq, dan sedekah kepada mereka
          yang benar-benar membutuhkan.
        </p>

        <p className="mt-6">
          Kami berkomitmen memberikan layanan yang mudah diakses, amanah, dan
          transparan, didukung oleh sistem yang profesional dan tim yang
          berdedikasi. Setiap rupiah dari para donatur dikelola dengan penuh
          tanggung jawab dan disalurkan melalui program-program nyata yang
          berdampak langsung—seperti beasiswa santri, orangtua asuh, pembangunan
          pondok, zakat, dan qurban.
        </p>

        <p className="mt-6">
          Bersama <strong>LAZISKU</strong>, kebaikan Anda akan sampai lebih
          cepat, lebih tepat, dan lebih berarti.
          <br />
          <span className="block mt-4">
            🌱 <strong>Mari jadi bagian dari perubahan.</strong> Wujudkan
            harapan mereka bersama Anda.
          </span>
          <span className="block">
            📌 Karena setiap donasi adalah{" "}
            <em>investasi amal yang tak pernah rugi</em>.
          </span>
        </p>
      </div>

      {/* Tombol toggle hanya muncul di mobile */}
      {isMobile && (
        <div className="text-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-green-600 hover:text-green-800 font-semibold underline transition"
          >
            {isExpanded ? "Tutup" : "Baca Selengkapnya"}
          </button>
        </div>
      )}
    </motion.div>
  );
}
