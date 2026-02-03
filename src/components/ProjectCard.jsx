import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.a
      href={project.link}
      className="flex flex-col md:flex-row gap-8 w-full group text-left"
      whileHover={{ x: 10, transition: { duration: 0.2 } }}
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
      <div className="flex flex-col flex-grow py-2 relative">
         <div className="flex justify-between items-start w-full">
             <div>
                <h3 className="text-white text-[32px] font-bold font-sans leading-tight mb-2">
                  {project.title}
                </h3>
             </div>
             
             {/* Arrow Icon */}
             <div className="text-[#FF6B00] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                 </svg>
             </div>
         </div>
         
         <p className="text-[#999999] text-[16px] leading-relaxed max-w-[600px] mb-4">
           {project.description}
         </p>

         <p className="text-[#FF6B00] text-[16px] font-medium mt-auto">
           {project.tags.join(', ')}
         </p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
