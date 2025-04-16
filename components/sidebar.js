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
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/30 backdrop-blur-md shadow-md'
          : 'bg-white/50 backdrop-blur-lg'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">  {/* Increased height */}
            {/* Branding with Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex  items-center">
                <img
                  src="/images/canva2.png"  // Adjust path if needed
                  alt="ActNow4Family Logo"
                  className="h-32 sm:h-40 pt-2"  // Increased logo size for better visibility
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#374151] hover:text-[#0C99D5] transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-[#0C99D5] text-white px-6 py-2 rounded-full hover:bg-[#7FBEEB] transition shadow-lg font-medium"
              >
                Book a call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#374151] p-2"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[280px] bg-[#F0F4F8]/90 backdrop-blur-md shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <img
                    src="/images/ActNow_Logo-1.png"  // Adjust path if needed
                    alt="ActNow4Family Logo"
                    className="h-16 sm:h-20"  // Adjust the logo size for mobile if needed
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-[#E1EFFA] transition-colors"
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
                          className="flex items-center justify-between p-3 rounded-lg text-[#374151] hover:bg-[#E1EFFA] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight size={18} className="text-[#A5C9EA]" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-4 border-t">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full bg-[#0C99D5] text-white px-6 py-3 rounded-full hover:bg-[#6CB3D8] transition font-medium"
                  >
                    Book a call
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
