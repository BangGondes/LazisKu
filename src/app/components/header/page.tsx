"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Calculator } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[90%] z-50 p-4 lg:p-6 bg-white/30 backdrop-blur-md shadow-md rounded-2xl flex items-center justify-between lg:grid lg:grid-cols-3">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <p className="text-2xl font-extrabold text-white bg-green-500 rounded-full p-1 w-10 h-10 flex items-center justify-center font-poppins">
          ا<span>خ</span>
        </p>
        <h1 className="text-2xl font-bold text-green-400 hover:text-green-600 transition-all">
          Lazis<span className="text-green-500 hover:text-green-600">ku</span>
        </h1>
      </Link>

      {/* Menu Hamburger (Mobile) */}
      <button
        ref={buttonRef}
        className="lg:hidden text-green-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigasi */}
      <nav
        ref={navRef}
        className={`fixed top-[80px] left-1/2 transform -translate-x-1/2 w-[95%] z-40 bg-white shadow-md flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 ease-in-out rounded-xl p-4
        ${isOpen ? "block" : "hidden"}
        lg:static lg:w-auto lg:flex-row lg:flex lg:shadow-none lg:bg-transparent lg:space-x-6 lg:p-0 lg:justify-center`}
      >
        {/* Link Navigasi */}
        <div className="flex flex-col lg:flex-row text-green-600 items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="relative hover:text-green-800 after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:w-0 after:h-[2px] after:bg-green-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0"
            >
              {item}
            </Link>
          ))}
        </div>
        {/* Kalkulator Button di Mobile */}
        <div className="flex items-center justify-center w-full lg:hidden gap-4 mt-2 flex-wrap">
          <Link href="/donasi">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2.5 rounded-full flex items-center justify-center text-white transition-all">
              Zakat Now
            </button>
          </Link>
          {/* <Link href="/kalkulator">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center justify-center text-white transition-all">
              <span>kalkulator Zakat</span> <Calculator size={20} />
            </button>
          </Link> */}
        </div>
      </nav>

      {/* Tombol kalkulator (Desktop) */}
      <div className="hidden lg:flex items-center justify-end space-x-4">
        <Link href="/donasi">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center justify-center text-white transition-all">
            Zakat Now
          </button>
        </Link>
        <Link href="/kalkulator">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center justify-center text-white transition-all">
            <span>kalkulator Zakat</span> <Calculator size={20} />
          </button>
        </Link>
      </div>
    </header>
  );
}
