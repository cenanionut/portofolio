import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

// Import icons
import reactIcon from '../assets/icons/react.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import firebaseIcon from '../assets/icons/firebase.svg';
import pythonIcon from '../assets/icons/python.svg';
import uipathIcon from '../assets/icons/uipath.svg';
import antigravityIcon from '../assets/icons/antigravity.svg';
import claudeIcon from '../assets/icons/claude.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import githubIcon from '../assets/icons/github.svg';

const iconMap = {
  react: reactIcon,
  nodejs: nodejsIcon,
  typescript: typescriptIcon,
  firebase: firebaseIcon,
  python: pythonIcon,
  uipath: uipathIcon,
  antigravity: antigravityIcon,
  claude: claudeIcon,
  mongodb: mongodbIcon,
  github: githubIcon,
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="flex items-center justify-center md:justify-start gap-4 py-2 group cursor-default"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    {/* Icon */}
    <div className="w-[44px] h-[44px] flex-shrink-0 flex items-center justify-center">
      <img
        src={iconMap[skill.icon]}
        alt={skill.name}
        className="w-full h-full object-contain"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col">
      <h3 className="text-white text-[17px] font-bold leading-tight font-sans">
        {skill.name}
      </h3>
      <span className="text-[#999999] text-[14px] leading-snug">
        {skill.category}
      </span>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center md:items-start py-10 md:py-20 px-0 relative z-10" id="skills" aria-labelledby="skills-heading">
      {/* Title */}
      <motion.h2
        id="skills-heading"
        className="text-white text-[clamp(50px,8vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-10 md:mb-16 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="sr-only">Skills & Tools</span>
        <span className="block text-white" aria-hidden="true">SKILLS &</span>
        <span className="block text-[#333333]" aria-hidden="true">TOOLS</span>
      </motion.h2>

      {/* 2-Column Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
