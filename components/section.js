'use client';

import { motion } from 'framer-motion';

export default function Section({ 
  title, 
  description, 
  children,
  className = "",
  dark = false 
}) {
  return (
    <div className={`py-16 ${dark ? 'bg-gradient-to-r from-[#A5C9EA] to-[#7FBEEB] text-white' : 'bg-[#F0F4F8]'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {title && (
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-[#7FBEEB]'}`}>
              {title}
            </h2>
          )}
          {description && (
            <p className={`text-xl ${dark ? 'text-[#E8F4FB]' : 'text-[#374151]'}`}>
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </div>
  );
}
