import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Icons from './EducationIcons';

const EducationCard = ({ item }) => {
  const icon = Icons[item.iconType];

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mb-12 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-[16px] bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 shadow-lg border border-white/5 overflow-hidden">
        {icon || (
          <span className="text-white/40 text-xs font-medium">N/A</span>
        )}
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
};

const Education = () => {
    const { data, loading } = usePortfolioData();
    const educationData = data.education || [];
    const [visibleCount, setVisibleCount] = React.useState(4);
    const displayedEducation = educationData.slice(0, visibleCount);
  
    const handleLoadMore = () => {
      setVisibleCount(educationData.length);
    };

    if (loading) return <div className="text-white text-center py-20">Loading Education...</div>;

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
