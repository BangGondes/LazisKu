"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const images = [
  "https://cdn.pixabay.com/photo/2014/12/19/17/00/child-573351_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/19/11/19/children-1207321_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/31/17/33/people-2020716_1280.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Auto slideshow setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
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
    <Card className="flex flex-col lg:flex-row items-center justify-center py-24 px-10 bg-gray-50 gap-16 mb-4 shadow-lg" >
      {/* Kontainer Teks */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Your Journey Starts Here
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the best way to elevate your experience with our exclusive
          services.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl">
          Get Started
        </button>
      </div>

      {/* Kontainer Slideshow */}
      <div className="flex-1 flex justify-center relative w-full max-w-md">
        <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={index}
              src={images[index]}
              alt="Slideshow Image"
              className="absolute w-full h-full object-cover"
              initial={{ x: direction * 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Tombol Navigasi */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-3  transition duration-300"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-3  transition duration-300"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </Card>
  );
}
