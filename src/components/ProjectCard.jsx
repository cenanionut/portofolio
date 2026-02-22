import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onPrivateClick }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleClick = (e) => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    } else {
      onPrivateClick();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title}${!project.url ? ' (Private)' : ''}`}
      className="flex flex-col items-center md:items-start md:flex-row gap-8 w-full group text-center md:text-left cursor-pointer outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-4 focus:ring-offset-[rgb(21,19,18)] rounded-[24px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: 10, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image - Rounded square with White Content */}
      <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] flex-shrink-0 rounded-[24px] overflow-hidden bg-white relative shadow-sm">
         {project.image && !imageError ? (
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover" 
               onError={() => setImageError(true)}
             />
         ) : (
           <div className="w-full h-full flex items-center justify-center bg-gray-100">
              {/* Fallback pattern */}
              <div className="w-12 h-12 rounded-full bg-gray-200" />
           </div>
         )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow py-2 relative text-left">
         <div className="flex justify-between items-center md:items-start gap-3 w-full">
             <div className="text-left">
                <h3 className="text-white text-[clamp(24px,5vw,32px)] font-bold font-sans leading-tight mb-2">
                  {project.title}
                </h3>
             </div>
             
             {/* Arrow Icon or Lock */}
             <div className="text-[#FF6B00] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                {project.url ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                )}
             </div>
         </div>
         
         <p className="text-[#999999] text-[16px] leading-relaxed max-w-[600px] mb-4 text-left">
           {project.description}
         </p>

         <p className="text-[#FF6B00] text-[16px] font-medium mt-auto text-left">
           {project.tags.join(', ')}
         </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
