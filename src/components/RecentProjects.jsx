import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import PrivateProjectModal from './PrivateProjectModal';
import ProjectModal from './ProjectModal';
import { usePortfolioData } from '../hooks/usePortfolioData';

const RecentProjects = () => {
    const { data, loading } = usePortfolioData();
    const projectsData = data.projects || [];
  const [visibleCount, setVisibleCount] = React.useState(3);
  const [activeProject, setActiveProject] = React.useState(null);
  // Which modal is open, if any. Kept separate from `activeProject` so the
  // project (and its content) stays in place during the close animation
  // instead of vanishing the instant the modal starts to exit.
  const [activeModalType, setActiveModalType] = React.useState(null); // 'private' | 'showcase' | null

  const displayedProjects = projectsData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(projectsData.length);
  };

  const handleCardOpen = (project) => {
    setActiveProject(project);
    setActiveModalType(project.url || project.githubUrl ? 'showcase' : 'private');
  };

  const closeModal = () => setActiveModalType(null);

  if (loading) return <div className="text-white text-center py-20">Loading Projects...</div>;

  return (
    <section className="w-full flex flex-col items-center md:items-start py-10 md:py-20 px-0 relative z-10" id="projects" aria-labelledby="projects-heading">
      {/* Title */}
      <motion.h2
        id="projects-heading"
        className="text-white text-[clamp(50px,8vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-10 md:mb-16 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="sr-only">Recent Projects</span>
        <span className="block text-white" aria-hidden="true">RECENT</span>
        <span className="block text-[#333333]" aria-hidden="true">PROJECTS</span>
      </motion.h2>

      {/* Grid/List */}
      <div className="w-full flex flex-col gap-12 mb-16">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={handleCardOpen}
          />
        ))}
      </div>

      <PrivateProjectModal
        isOpen={activeModalType === 'private'}
        onClose={closeModal}
        projectTitle={activeProject?.title}
      />

      <ProjectModal
        project={activeProject}
        isOpen={activeModalType === 'showcase'}
        onClose={closeModal}
      />

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
    </section>
  );
};

export default RecentProjects;
