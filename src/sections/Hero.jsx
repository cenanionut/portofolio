import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full min-h-[auto] mb-6 lg:mb-0">
      <h1 className="text-[clamp(50px,11vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-5 md:mb-8">
        <span className="sr-only">Software Engineer</span>
        <span className="text-white block" aria-hidden="true">Software</span>
        <span className="text-[#333333] block" aria-hidden="true">Engineer</span>
      </h1>
      
      <p className="text-[#999999] text-[16px] md:text-[18px] leading-relaxed max-w-[600px] font-medium">
        I build production-ready web applications and intelligent automation systems that solve real business problems. With a strong foundation in full-stack development and a growing edge in AI-driven solutions, I thrive at the intersection of clean code, scalable architecture, and smart automation.
      </p>
    </div>
  );
};

export default Hero;
