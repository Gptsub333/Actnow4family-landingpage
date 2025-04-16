'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    title: 'Welcome to Actnow4family',
    description: 'Providing secure and comprehensive insurance plans that protect your future and ensure peace of mind.',
    image: '/images/carousel/Slide1.jpg',
    link: '#conditions',
  },
  {
    title: 'Insurance Solutions Tailored for You',
    description: 'From health and auto to homeowners and life insurance, we customize plans that meet your unique needs.',
    image: '/images/carousel/Slide2.jpg',
    link: '#conditions',
  },
  {
    title: 'Reliable Coverage, Anytime & Anywhere',
    description: 'Our experts offer virtual consultations to help you choose the right insurance plans with clarity and confidence.',
    image: '/images/carousel/Slide3.jpg',
    link: '#conditions',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#A5C9EA]/80 via-[#7FBEEB]/60 to-transparent"></div>

          {/* Text & CTA */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 text-white">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl max-w-2xl"
            >
              {slide.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <Link
                href={slide.link}
                className="bg-[#539ECF] hover:bg-[#7FBEEB] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#539ECF] text-white p-3 rounded-full hover:bg-[#7FBEEB] shadow-lg transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#539ECF] text-white p-3 rounded-full hover:bg-[#7FBEEB] shadow-lg transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
