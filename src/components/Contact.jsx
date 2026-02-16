import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Extra guard against rapid clicks

    // Custom email validation
    if (!EMAIL_REGEX.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email (e.g. name@domain.com).' });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate async submission (swap for real API call later)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', budget: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section className="w-full flex flex-col items-center md:items-start py-10 md:py-20 px-0 relative z-10" id="contact" aria-labelledby="contact-heading">
      {/* Title */}
      <motion.h2
        id="contact-heading"
        className="text-white text-[clamp(50px,8vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-10 md:mb-20 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="sr-only">Let's Work Together</span>
        <span className="block text-white" aria-hidden="true">LET'S WORK</span>
        <span className="block text-[#333333]" aria-hidden="true">TOGETHER</span>
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
              className={`w-full bg-[#2A2A2A] border rounded-[12px] px-5 py-4 text-white text-[16px] font-sans placeholder-[#666666] outline-none transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/5 focus:border-[#FF6B00]/50'
              }`}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-red-400 text-sm font-sans mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
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
          disabled={isSubmitting}
          className={`w-full text-white font-bold py-4 px-8 rounded-[12px] text-[18px] transition-all mt-2 flex items-center justify-center gap-3 ${
            isSubmitting
              ? 'bg-[#FF6B00]/60 cursor-not-allowed'
              : 'bg-[#FF6B00] hover:bg-[#e65e00] cursor-pointer'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>

        {/* Success Message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full text-center py-3 px-4 rounded-[12px] bg-emerald-500/10 border border-emerald-500/20"
              role="status"
              aria-live="polite"
            >
              <p className="text-emerald-400 font-sans font-medium">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
};

export default Contact;
