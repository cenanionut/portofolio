import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { IconVariants } from './EducationIcons';

const VARIANT_LABELS = {
  1: 'Solid',
  2: 'Gradient',
  3: 'Neon',
};

const VARIANT_DESCRIPTIONS = {
  1: 'Bold filled icons with vibrant brand colors',
  2: 'Gradient fills with modern glassmorphic look',
  3: 'Neon-outlined icons with glow effects',
};

const EducationCard = ({ item, icons }) => {
  const currentIcon = icons[item.iconType];

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
        <AnimatePresence mode="wait">
          <motion.div
            key={item.iconType}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            {currentIcon || (
              <span className="text-white/40 text-xs font-medium">N/A</span>
            )}
          </motion.div>
        </AnimatePresence>
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
    const [iconVariant, setIconVariant] = React.useState(1);
    const displayedEducation = educationData.slice(0, visibleCount);
    const currentIcons = IconVariants[iconVariant];
  
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

      {/* Icon Variant Selector */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-3 mb-10 md:mb-14"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <span className="text-[#666] text-sm font-medium tracking-wide uppercase">Icon Style:</span>
        <div className="flex gap-2">
          {[1, 2, 3].map((v) => (
            <button
              key={v}
              onClick={() => setIconVariant(v)}
              title={VARIANT_DESCRIPTIONS[v]}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                iconVariant === v
                  ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25'
                  : 'bg-[#1A1A1A] text-[#888] hover:bg-[#252525] hover:text-white border border-white/5'
              }`}
            >
              {VARIANT_LABELS[v]}
            </button>
          ))}
        </div>
      </motion.div>

      {/* List */}
      <div className="w-full flex flex-col">
        {displayedEducation.map((item) => (
          <EducationCard key={`${item.id}-${iconVariant}`} item={item} icons={currentIcons} />
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
