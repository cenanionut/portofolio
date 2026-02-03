import React, { useState } from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const ExperienceCard = ({ item }) => (
  <motion.div 
    className="flex flex-col gap-4 py-8 first:pt-0 group mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Company Name (Orange) */}
    <h3 className="text-[#FF6B00] text-[32px] font-bold font-sans leading-tight">
        {item.company}
    </h3>

    {/* Role & Description */}
    <p className="text-[#999999] text-[18px] leading-relaxed max-w-[800px]">
        <strong className="text-white block mb-1">{item.role}</strong>
        {item.description}
    </p>

    {/* Date */}
    <span className="text-[#666666] font-mono text-sm tracking-widest uppercase">
        {item.period}
    </span>
  </motion.div>
);

const Experience = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const displayedExperience = experienceData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(experienceData.length);
  };

  return (
    <div className="w-full flex flex-col items-start py-20 px-0 relative z-10" id="experience">
      {/* Title */}
      <h2 className="text-white text-[clamp(50px,8vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-20">
        <span className="block text-white">4 YEARS OF</span>
        <span className="block text-[#333333]">EXPERIENCE</span>
      </h2>

      {/* List */}
      <div className="w-full flex flex-col">
        {displayedExperience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < experienceData.length && (
       <div className="w-full flex justify-start mt-8">
            <button 
              onClick={handleLoadMore}
              className="text-white hover:text-[#FF6B00] font-bold text-lg transition-colors cursor-pointer flex items-center gap-2"
            >
                Load More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
            </button>
       </div>
      )}
    </div>
  );
};

export default Experience;
