import React from 'react';
import { motion } from 'framer-motion';
import educationData from '../data/education.json';

const Icons = {
  uipath: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
       <rect width="24" height="24" fill="#FA4616" rx="2"/>
       <path d="M7 10h10M7 14h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  unity: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
      <path d="M11.765 0l-5.6 3.28 2.053 3.65L12 5.093l3.784 1.838 2.05-3.652L12.238 0h-.473zM5.526 4.31L0 7.58l.195 9.475 8.164 4.8 2.1-3.664-5.917-3.41V8.006l5.06-2.92-3.87-1.187-.206.41zm12.948.002L18.267 5.5l5.059 2.92v6.775l-5.918 3.409 2.102 3.664 8.163-4.8.196-9.475-5.528-3.27h-.002.002zm-6.02 2.768L8.33 9.47l4.123 2.425 4.125-2.425-4.124-2.39z"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="w-8 h-8">
       <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  react_redux: (
     <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="w-8 h-8">
       <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  )
};

const EducationCard = ({ item }) => (
  <motion.div 
    className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-12 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Icon */}
    <div className="w-16 h-16 rounded-[16px] bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 shadow-lg border border-white/5">
       {item.iconType === 'uipath' && <span className="text-white font-bold text-xs bg-[#FA4616] w-full h-full rounded-[16px] flex items-center justify-center">UiPath</span>}
       {item.iconType === 'unity' && Icons.unity}
       {item.iconType === 'react' && Icons.react}
       {item.iconType === 'react_redux' && Icons.react_redux}
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-[24px] font-bold font-sans leading-tight group-hover:text-[#FF6B00] transition-colors">
        {item.title}
      </h3>
      
      <p className="text-[#999999] text-[16px]">
        {item.issuer} <span className="text-[#666666] mx-2">–</span> {item.date}
      </p>

      <p className="text-[#666666] text-[14px] mt-1">
        Technologies: <span className="text-[#999999]">{item.technologies}</span>
      </p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="w-full flex flex-col items-start py-20 px-0 relative z-10" id="education">
      {/* Title */}
      <h2 className="text-white text-[clamp(40px,8vw,90px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-20">
        <span className="block text-white">CERTIFICATES</span>
        <span className="block text-[#333333]">EDUCATION</span>
      </h2>

      {/* List */}
      <div className="w-full flex flex-col">
        {educationData.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
