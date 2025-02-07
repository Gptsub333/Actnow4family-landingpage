'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const conditions = [
  {
    title: 'Comprehensive Health Insurance',
    description: [
      'We provide tailored health insurance solutions designed to cover medical expenses and ensure peace of mind.',
      'Our plans cater to individuals, families, and businesses, ensuring top-tier healthcare access.',
    ],
    image: '/images/services/CHI.webp',
    href: '#contact',
  },
  {
    title: 'Auto Insurance for Every Journey',
    description: [
      'Protect your vehicle and yourself with our customizable auto insurance plans.',
      'We offer accident coverage, liability protection, and flexible premiums to fit your needs.',
    ],
    image: '/images/services/AIJ.webp',
    href: '#contact',
  },
  {
    title: 'Homeowners & Property Insurance',
    description: [
      'Safeguard your home and property with policies that protect against unexpected events.',
      'Coverage includes theft, fire, natural disasters, and liability protection for homeowners and renters.',
    ],
    image: '/images/services/PI.webp',
    href: '#contact',
  },
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
    <section className="py-16 bg-gray-50" id="conditions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-yellow-800 mb-12"
        >
          Explore Our Coverage Plans
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h3 className="text-lg font-semibold text-black-900">
                    {condition.title}
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-98 p-4 rounded-2xl shadow-md scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  {condition.title}
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 text-left">
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
