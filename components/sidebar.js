'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Coverage Plans', href: '#conditions' },
    { name: 'Contact Us', href: '#footer' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/30 backdrop-blur-md shadow-md' // More opacity for better contrast
            : 'bg-white/50 backdrop-blur-lg' // Lightly transparent background
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Branding - Updated for Better Visibility */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-yellow-800 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] font-[Open Sans]">
                Actnow<span className="text-yellow-600">4family</span>
              </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-yellow-600 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition shadow-lg font-medium"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[280px] bg-white/80 backdrop-blur-md shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    Actnow4family
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Nav Items */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="space-y-2 px-4">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight size={18} className="text-gray-400" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Get a Quote Button */}
                <div className="p-4 border-t">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition font-medium"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
