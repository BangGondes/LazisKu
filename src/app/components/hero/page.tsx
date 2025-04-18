"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const images = [
  "https://cdn.pixabay.com/photo/2014/12/19/17/00/child-573351_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/19/11/19/children-1207321_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/31/17/33/people-2020716_1280.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="mt-0 border-none shadow-xl bg-gray-50 flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-6 sm:px-6 sm:py-10 lg:p-16 gap-6 lg:gap-16">
      {/* Kontainer Teks */}
      <div className="mt-12 lg:mt-24 flex-1 text-center lg:text-left px-4 sm:px-0">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-['Montserrat']">
          Mulai Perjalanan Kebaikanmu
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          “Barang siapa yang menjadikan mudah urusan orang lain, pasti Allah
          akan memudahkannya di dunia dan di akhirat.” (HR. Muslim)
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Dukung program zakat, infaq, dan sedekah bersama LAZISKU.
        </p>
        <Link href="/program">
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition duration-300">
            Zakat Sekarang
          </button>
        </Link>
      </div>

      {/* Kontainer Slideshow */}
      <div className="mt-12 lg:mt-24 flex-1 flex justify-center relative w-full max-w-md">
        <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={index}
              src={images[index]}
              alt="Slideshow"
              className="absolute w-full h-full object-cover"
              initial={{ x: direction * 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Indikator slide */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tombol Navigasi */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-800 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-800 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </Card>
  );
}
