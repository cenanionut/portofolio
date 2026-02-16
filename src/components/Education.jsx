import React from 'react';
import { motion } from 'framer-motion';
import educationData from '../data/education.json';

const Icons = {
  uipath: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
       <rect width="24" height="24" fill="#FA4616" rx="2"/>
       <path d="M7 10h10M7 14h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  unity: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white" aria-hidden="true">
      <path d="M11.765 0l-5.6 3.28 2.053 3.65L12 5.093l3.784 1.838 2.05-3.652L12.238 0h-.473zM5.526 4.31L0 7.58l.195 9.475 8.164 4.8 2.1-3.664-5.917-3.41V8.006l5.06-2.92-3.87-1.187-.206.41zm12.948.002L18.267 5.5l5.059 2.92v6.775l-5.918 3.409 2.102 3.664 8.163-4.8.196-9.475-5.528-3.27h-.002.002zm-6.02 2.768L8.33 9.47l4.123 2.425 4.125-2.425-4.124-2.39z"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
       <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  react_redux: (
     <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
       <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
       <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M10.5 16v-1.5c0-.828 0-1.5.672-1.5h1.328V16h1.5v-4.5h-3.828C9.07 11.5 8.5 12.172 8.5 13v1.5c0 .828.57 1.5 1.328 1.5H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 11.5v4.5m-2.25 0h4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 11.5h3m-1.5 0v4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="11">TS</text> 
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
};

const EducationCard = ({ item }) => (
  <motion.div 
    className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-12 group"
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
       {item.iconType === 'typescript' && Icons.typescript}
       {item.iconType === 'google' && Icons.google}
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2 text-center md:text-left">
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
    const [visibleCount, setVisibleCount] = React.useState(4);
    const displayedEducation = educationData.slice(0, visibleCount);
  
    const handleLoadMore = () => {
      setVisibleCount(educationData.length);
    };

  return (
    <section className="w-full flex flex-col items-center md:items-start py-10 md:py-20 px-0 relative z-10" id="education" aria-labelledby="education-heading">
      {/* Title */}
      <motion.h2
        id="education-heading"
        className="text-white text-[clamp(50px,8vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-10 md:mb-20 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="sr-only">Certificates & Education</span>
        <span className="block text-white" aria-hidden="true">CERTIFICATES</span>
        <span className="block text-[#333333]" aria-hidden="true">EDUCATION</span>
      </motion.h2>

      {/* List */}
      <div className="w-full flex flex-col">
        {displayedEducation.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>

            {/* Load More Button */}
            {visibleCount < educationData.length && (
       <div className="w-full flex justify-center mt-8">
            <button 
              onClick={handleLoadMore}
              className="bg-[#FF6B00] hover:bg-[#e65e00] text-white font-bold py-3 px-8 rounded-[12px] transition-colors cursor-pointer"
            >
                Load More
            </button>
       </div>
      )}
    </section>
  );
};


export default Education;
