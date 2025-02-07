'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* First Section - Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black-900">
              Simplifying Coverage at{' '}
              <span className="text-yellow-600">Actnow4family</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-900">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  At Actnow4family, our mission is to provide accessible, 
                  transparent, and comprehensive insurance solutions for individuals 
                  and businesses. We aim to remove the complexities of insurance 
                  and ensure that every policyholder gets the best coverage tailored 
                  to their needs. With our cutting-edge technology and a customer-first 
                  approach, we are revolutionizing the way insurance works.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="/images/services/about-us.webp"
              alt="Our Mission"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Second Section - Our Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="/images/services/our-values.avif"
              alt="Our Values"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black-900">
              Core Values of <span className="text-yellow-600">Actnow4family</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-900">
                  What We Stand For
                </h3>
                <p className="text-gray-600">
                  At Actnow4family, our values define our commitment to excellence and trust. 
                  We believe in:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                  <li><span className="text-yellow-800 font-semibold">Transparency:</span> Clear and honest communication with every policyholder.</li>
                  <li><span className="text-yellow-800 font-semibold">Reliability:</span> Delivering consistent and trustworthy insurance solutions.</li>
                  <li><span className="text-yellow-800 font-semibold">Customer-Centric Approach:</span> Putting families and businesses first with tailored coverage options.</li>
                  <li><span className="text-yellow-800 font-semibold">Innovation:</span> Leveraging the latest technology to simplify the insurance process.</li>
                  <li><span className="text-yellow-800 font-semibold">Empowerment:</span> Providing knowledge and tools so clients make informed decisions about their coverage.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
