'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// const conditions = [
//   {
//     title: 'Life Insurance for a Secure Future',
//     description: [
//       'Ensure financial stability for your loved ones with our flexible life insurance plans.',
//       'We offer term life, whole life, and universal life coverage options to fit your long-term goals.',
//     ],
//     image: '/images/services/movement.jpg',
//     href: '#contact',
//   },
//   {
//     title: 'Business Insurance Solutions',
//     description: [
//       'Protect your business with comprehensive insurance tailored for entrepreneurs and corporations.',
//       'Coverage includes general liability, property protection, and employee benefits.',
//     ],
//     image: '/images/services/dementia.jpg',
//     href: '#contact',
//   },
//   {
//     title: 'Travel Insurance for Stress-Free Trips',
//     description: [
//       'Enjoy worry-free travel with coverage for medical emergencies, cancellations, and lost luggage.',
//       'Our travel insurance policies ensure that you’re protected wherever you go.',
//     ],
//     image: '/images/services/ocd.jpg',
//     href: '#contact',
//   },
//   {
//     title: 'Disability & Income Protection',
//     description: [
//       'Secure your income with disability insurance that provides financial support in case of injury or illness.',
//       'Our plans help cover lost wages so you can focus on recovery.',
//     ],
//     image: '/images/services/Amyotrophic Lateral Sclerosis.png',
//     href: '#contact',
//   },
//   {
//     title: 'A Commitment to Your Security',
//     description: [
//       'Actnow4family Insurance is dedicated to delivering trusted, accessible, and affordable insurance coverage.',
//       'We prioritize customer satisfaction and tailor solutions to fit your unique needs.',
//     ],
//     image: '/images/services/other.jpg',
//     href: '#contact',
//   },
// ];

const conditions = [
  {
    title: 'Estate Planning (Will & Trust)',
    description: [
      'Estate planning is an important part of any financial strategy.',
      'At Nest4Future, we help you develop an effective estate plan to protect your loved ones and your legacy.',
    ],
    image: '/images/services/movement.jpg',
    href: '#contact',
  },
  {
    title: 'Term Life Insurance',
    description: [
      'No-one can predict the future, but we can help you prepare for the unexpected.',
      'Term life insurance could provide your loved ones with the financial support they need to maintain their lifestyle if you were to pass away unexpectedly.',
    ],
    image: '/images/services/movement.jpg',
    href: '#contact',
  },
  {
    title: 'Indexed Universal Life Insurance',
    description: [
      'Indexed universal life (IUL) is a permanent life insurance policy that provides a death benefit and a cash value component.',
      'IUL policies allow policyholders to grow their cash value through the performance of an equity index like S&P 500, with a zero-floor guarantee.',
    ],
    image: '/images/services/movement.jpg',
    href: '#contact',
  },
  {
    title: 'Children College Planning',
    description: [
      'With education costs rising, finding ways to help our children pay for college is a priority for many of us.',
      'We provide you with solutions where you are in control of your college funds and can plan to pay for your children’s education.',
    ],
    image: '/images/services/movement.jpg',
    href: '#contact',
  },
  {
    title: 'Retirement Planning',
    description: [
      'Our retirement planning advice enables you to understand how much you need to save and how long you need to work.',
      'We provide insights on tax diversification, balanced portfolios, and guaranteed retirement paychecks to help mitigate potential risks.',
    ],
    image: '/images/services/Amyotrophic Lateral Sclerosis.png',
    href: '#contact',
  },
  {
    title: 'Indexed Annuities',
    description: [
      'A fixed indexed annuity is a tax-deferred, long-term financial vehicle that protects your principal when the market drops.',
      'It also provides an opportunity for growth and is designed to deliver guaranteed lifetime income, much like a private pension.',
    ],
    image: '/images/services/dementia.jpg',
    href: '#contact',
  },
  {
    title: 'Health Insurance',
    description: [
      'Choosing the right Health Insurance plan can be overwhelming with so many options and variables.',
      'At Nest4Future, we simplify your decision-making and help you find the right health care insurance solution.',
    ],
    image: '/images/services/ocd.jpg',
    href: '#contact',
  },
  {
    title: 'Long Term Care',
    description: [
      'Long-term care (LTC) supports individuals who can no longer perform everyday activities independently.',
      'We help assess the right LTC coverage based on age, cost estimates, and affordability.',
    ],
    image: '/images/services/other.jpg',
    href: '#contact',
  },
  {
    title: 'Medicare',
    description: [
      'Medicare Advantage plans offer additional benefits beyond Original Medicare.',
      'We help you choose the right Medicare Advantage or Supplement plan to reduce out-of-pocket expenses.',
    ],
    image: '/images/services/dementia.jpg',
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
