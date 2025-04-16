'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const conditions = [
  {
    title: 'Life Insurance for a Secure Future',
    description: [
      'Ensure financial stability for your loved ones with our flexible life insurance plans.',
      'We offer term life, whole life, and universal life coverage options to fit your long-term goals.',
    ],
    image: '/images/services/movement.jpg',
    href: '#contact',
  },
  {
    title: 'Business Insurance Solutions',
    description: [
      'Protect your business with comprehensive insurance tailored for entrepreneurs and corporations.',
      'Coverage includes general liability, property protection, and employee benefits.',
    ],
    image: '/images/services/dementia.jpg',
    href: '#contact',
  },
  {
    title: 'Travel Insurance for Stress-Free Trips',
    description: [
      'Enjoy worry-free travel with coverage for medical emergencies, cancellations, and lost luggage.',
      'Our travel insurance policies ensure that you’re protected wherever you go.',
    ],
    image: '/images/services/ocd.jpg',
    href: '#contact',
  },
  {
    title: 'Disability & Income Protection',
    description: [
      'Secure your income with disability insurance that provides financial support in case of injury or illness.',
      'Our plans help cover lost wages so you can focus on recovery.',
    ],
    image: '/images/services/Amyotrophic Lateral Sclerosis.png',
    href: '#contact',
  },
  {
    title: 'A Commitment to Your Security',
    description: [
      'Actnow4family Insurance is dedicated to delivering trusted, accessible, and affordable insurance coverage.',
      'We prioritize customer satisfaction and tailor solutions to fit your unique needs.',
    ],
    image: '/images/services/other.jpg',
    href: '#contact',
  },
];

export default function ConditionsGrid() {
  return (
    <section className="py-16 bg-[#F0F4F8]" id="conditions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#0C99D5] mb-12"
        >
          Explore Our Coverage Plans
        </motion.h2>
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-[300px] w-full transition-transform transform group-hover:scale-105 duration-300">
                <div className="relative h-4/6">
                  <img
                    src={condition.image}
                    alt={condition.title}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#374151]">
                    {condition.title}
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-98 p-4 rounded-2xl shadow-md scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                <h3 className="text-xl font-bold text-[#374151] mb-4 text-center">
                  {condition.title}
                </h3>
                <ul className="list-disc list-inside text-sm text-[#374151] text-left">
                  {condition.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
