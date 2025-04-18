import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-t from-slate-900 to-slate-800 text-white py-10"
    >
      <div className="container mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand + Deskripsi */}
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-2">
              <p className="text-1xl font-extrabold text-white bg-green-500 rounded-full p-1 w-10 h-10 flex items-center justify-center font-poppins">
                ا<span>خ</span>
              </p>
              <h2 className="text-2xl font-bold text-green-400">LAZISKU</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              LAZISKU (Lembaga Amil Zakat Khoiro Ummah) adalah lembaga amil
              zakat yang bernaung di bawah Yayasan Khoiro Ummah. Kami hadir
              sebagai jembatan kebaikan untuk mengelola dan menyalurkan zakat,
              infak, serta sedekah guna mendukung kesejahteraan umat, khususnya
              dalam mendukung ekonomi Pondok Pesantren Khoiro Ummah.
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-4 text-sm text-gray-400">
            <h3 className="text-lg font-semibold text-green-400">
              Kontak Kami
            </h3>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-500 mt-1" />
              <p>Jl.Pasar manis ,Bentar,Salem,Brebes,Jawa Tengah</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              <p>+62 812-2514-7373</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <p>info@lazisku.or.id</p>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-sm font-medium text-gray-400">Follow us on:</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/+62 812-2514-7373"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:scale-110 transition-transform"
              >
                <FaWhatsapp className="text-green-400" size={24} />
              </a>
              <a
                href="https://www.facebook.com/laziskhoiroummah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:scale-110 transition-transform"
              >
                <FaFacebookF className="text-blue-400" size={24} />
              </a>
              <a
                href="https://www.instagram.com/bkpp_khoiro_ummah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-pink-400" size={24} />
              </a>
            </div>

            {/* CTA Donasi  */}

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-6">
              <Link
                href="/donasi"
                className="px-5 py-2 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition"
              >
                Donasi Sekarang
              </Link>
              <Link
                href="/kalkulator"
                className="px-5 py-2 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition"
              >
                Kalkulator Zakat
              </Link>
            </div>
          </div>
        </div>

        {/* Navigasi Link */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 border-t pt-6 border-gray-700">
          {["Home", "About", "Program", "Donasi", "Kontak"].map((item, i) => (
            <li key={i} className="hover:text-green-400 transition">
              <Link
                href={
                  item.toLowerCase() === "home"
                    ? "/"
                    : item.toLowerCase() === "kontak"
                    ? "/footer"
                    : `/${item.toLowerCase()}`
                }
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs text-center text-gray-500 pt-4 border-t border-gray-700">
          © {new Date().getFullYear()} LAZISKU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
