'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true); // Set loading to true when the form is submitted

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        // Open the Calendly URL in a new tab
        window.open('https://calendly.com/actnow4family', '_blank');
      } else {
        console.error('Failed to submit form');
      }
    } catch (err) {
      console.error('Something went wrong:', err);
    } finally {
      setLoading(false); // Set loading to false when the request is finished
    }
  };

  return (
    <section className="py-16 bg-[#F0F4F8]" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#374151]">
            Get <span className="text-[#0C99D5]">Insured Today</span>
          </h2>
          <p className="text-[#374151]">
            Fill out the form below to get in touch with one of our experts and find the best insurance coverage for your needs.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-[#A5C9EA] rounded-md focus:ring-[#7FBEEB] focus:border-[#7FBEEB]"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-[#A5C9EA] rounded-md focus:ring-[#7FBEEB] focus:border-[#7FBEEB]"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 border border-[#A5C9EA] rounded-md focus:ring-[#7FBEEB] focus:border-[#7FBEEB]"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="insuranceType" className="block text-sm font-medium text-[#374151] mb-1">
                Type of Insurance
              </label>
              <select
                id="insuranceType"
                required
                className="w-full px-4 py-2 border border-[#A5C9EA] rounded-md focus:ring-[#7FBEEB] focus:border-[#7FBEEB]"
                value={formState.insuranceType}
                onChange={(e) => setFormState({ ...formState, insuranceType: e.target.value })}
              >
                <option value="">Select an insurance type</option>
                <option value="Health Insurance">Health Insurance</option>
                <option value="Auto Insurance">Auto Insurance</option>
                <option value="Homeowners Insurance">Homeowners Insurance</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Business Insurance">Business Insurance</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-[#A5C9EA] rounded-md focus:ring-[#7FBEEB] focus:border-[#7FBEEB]"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-[#0C99D5] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#A5C9EA] transition-colors"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Submitting...' : 'Submit'} {/* Show loading text */}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
