import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-[auto] mb-10 lg:mb-0">
      <h1 className="text-[clamp(50px,11vw,100px)] font-[900] leading-[0.9] -tracking-[0.04em] uppercase font-sans mb-8">
        <span className="text-white block">Software</span>
        <span className="text-[#333333] block">Engineer</span>
      </h1>
      
      <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed max-w-[600px] font-medium">
        I design and build modern digital experiences across web, mobile, and automation. 
        My focus is on creating elegant, scalable solutions that bridge innovation with real-world impact.
      </p>
    </div>
  );
};

export default Hero;
