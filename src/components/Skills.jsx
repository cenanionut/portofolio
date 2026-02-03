import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const SkillCard = ({ skill, index }) => (
  <motion.div 
    className="flex flex-col gap-2 p-6 rounded-[24px] border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between items-start mb-2">
       <h3 className="text-white text-2xl font-bold font-sans">
        {skill.name}
       </h3>
       {/* Decorative Dot or Icon */}
       <div className="w-2 h-2 rounded-full bg-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <span className="text-[#FF6B00] font-mono text-sm tracking-widest uppercase">
      {skill.category}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-start py-20 px-0 relative z-10" id="skills">
      {/* Title */}
      <h2 className="text-white text-[clamp(50px,8vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-20">
        <span className="block text-white">SKILLS &</span>
        <span className="block text-[#333333]">TOOLS</span>
      </h2>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
