"use client";
import { useState } from "react";
import { Menu, X, Calculator } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
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
        className="lg:hidden text-green-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigasi */}
      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center lg:static lg:w-auto lg:flex-row lg:shadow-none lg:space-x-6 p-4 lg:p-0 transition-all ${
          isOpen ? "block" : "hidden lg:flex"
        }`}
      >
        {/* kalkulator B di Mobile */}
        <div className="flex items-center justify-center w-full lg:hidden gap-6 mt-4 flex-wrap">
          <Link href="/donasi">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-white transition-all w-full sm:w-auto">
              Zakat Now
            </button>
          </Link>

          <Link href="/kalkulator">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-white transition-all flex items-center justify-center w-full sm:w-auto">
              <span className="mr-2">Kalkulator</span> <Calculator size={20} />
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row text-green-600 items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
          {/* Link navigasi */}
          <Link
            className="relative hover:text-green-800 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0"
            href="/"
          >
            Home
          </Link>
          <Link
            className="relative hover:text-green-800 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0"
            href="/about"
          >
            About
          </Link>
          <Link
            className="relative hover:text-green-800 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="relative hover:text-green-800 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="relative hover:text-green-800 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </nav>

      {/* Search Bar di Desktop */}
      {/* <div className="hidden lg:flex items-center border border-green-400 rounded-full overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-green-500 transition-all">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="p-1 text-black w-40 sm:w-60 border-none focus:outline-none"
        />
        <button className="bg-green-600 hover:bg-green-700 p-1.5 flex items-center justify-center text-white transition-all">
          <Search size={20} />
        </button>
      </div> */}
      {/* Tombol kalkulator */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link href="/donasi">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center justify-center text-white transition-all">
            Zakat Now
          </button>
        </Link>

        <Link href="/kalkulator">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center justify-center text-white transition-all">
            <span> kalkulator</span> <Calculator size={20} />
          </button>
        </Link>
      </div>
    </header>
  );
}
