import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-4xl px-6">
          {/* Brand */}
          <div className=" md:text-left max-w-lg space-y-2">
            <h2 className="text-2xl text-center font-bold text-green-400">
              LAZISKU
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 tracking-wide indent-6">
              LAZISKU (Lembaga Amil Zakat Khoiro Ummah) adalah lembaga amil
              zakat yang bernaung di bawah Yayasan Khoiro Ummah. Kami hadir
              sebagai jembatan kebaikan untuk mengelola dan menyalurkan zakat,
              infak, serta sedekah guna mendukung kesejahteraan umat, khususnya
              dalam mendukung ekonomi Pondok Pesantren Khoiro Ummah.
            </p>
          </div>

          {/* Media Sosial */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-400">Follow us on:</p>
            <div className="flex gap-4">
              {[
                {
                  href: "https://wa.me/+6281225147373",
                  src: "/logo.png",
                  alt: "WhatsApp",
                },
                {
                  href: "https://www.facebook.com/laziskhoiroummah",
                  src: "/facebook.png",
                  alt: "Facebook",
                },
                {
                  href: "https://www.instagram.com/bkpp_khoiro_ummah",
                  src: "/instagram.png",
                  alt: "Instagram",
                },
              ].map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-full transition-transform transform hover:scale-110"
                >
                  <Image src={icon.src} alt={icon.alt} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="w-full max-w-4xl border-t mb-1 border-gray-700"></div>
        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} LAZISKU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
