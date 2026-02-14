import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook up to a backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', budget: '', message: '' });
  };

  return (
    <div className="w-full flex flex-col items-start py-20 px-0 relative z-10" id="contact">
      {/* Title */}
      <motion.h2
        className="text-white text-[clamp(40px,8vw,90px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="block text-white">LET'S WORK</span>
        <span className="block text-[#333333]">TOGETHER</span>
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Name & Email Row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Name */}
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-[#999999] text-sm font-sans">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#2A2A2A] border border-white/5 rounded-[12px] px-5 py-4 text-white text-[16px] font-sans placeholder-[#666666] outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-[#999999] text-sm font-sans">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#2A2A2A] border border-white/5 rounded-[12px] px-5 py-4 text-white text-[16px] font-sans placeholder-[#666666] outline-none focus:border-[#FF6B00]/50 transition-colors"
            />
          </div>
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-budget" className="text-[#999999] text-sm font-sans">
            Budget
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-[#2A2A2A] border border-white/5 rounded-[12px] px-5 py-4 text-white text-[16px] font-sans outline-none focus:border-[#FF6B00]/50 transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center'
            }}
          >
            <option value="" className="bg-[#1A1A1A]">Select...</option>
            <option value="500-1000" className="bg-[#1A1A1A]">$500 - $1,000</option>
            <option value="1000-3000" className="bg-[#1A1A1A]">$1,000 - $3,000</option>
            <option value="3000-5000" className="bg-[#1A1A1A]">$3,000 - $5,000</option>
            <option value="5000+" className="bg-[#1A1A1A]">$5,000+</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="text-[#999999] text-sm font-sans">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full bg-[#2A2A2A] border border-white/5 rounded-[12px] px-5 py-4 text-white text-[16px] font-sans placeholder-[#666666] outline-none focus:border-[#FF6B00]/50 transition-colors resize-y"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF6B00] hover:bg-[#e65e00] text-white font-bold py-4 px-8 rounded-[12px] text-[18px] transition-colors cursor-pointer mt-2"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
