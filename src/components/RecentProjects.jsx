import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

const RecentProjects = () => {
  const [visibleCount, setVisibleCount] = React.useState(3);
  const displayedProjects = projectsData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(projectsData.length);
  };

  return (
    <div className="w-full flex flex-col items-center md:items-start py-10 md:py-20 px-0 relative z-10" id="projects">
      {/* Title */}
      <motion.h2
        className="text-white text-[clamp(50px,8vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-10 md:mb-16 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="block text-white">RECENT</span>
        <span className="block text-[#333333]">PROJECTS</span>
      </motion.h2>

      {/* Grid/List */}
      <div className="w-full flex flex-col gap-12 mb-16">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < projectsData.length && (
       <div className="w-full flex justify-center mt-8">
            <button 
              onClick={handleLoadMore}
              className="bg-[#FF6B00] hover:bg-[#e65e00] text-white font-bold py-3 px-8 rounded-[12px] transition-colors cursor-pointer"
            >
                Load More
            </button>
       </div>
      )}
    </div>
  );
};

export default RecentProjects;
