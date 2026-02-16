import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import avatarImage from '../assets/avatar.webp';

const ProfileCard = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">

      {/* Dashed Orange Arc — curves from top-center, around top-left, down the left side */}
      <svg
        className="absolute pointer-events-none z-10"
        aria-hidden="true"
        style={{
          top: '-30px',
          left: '-35px',
          width: 'calc(100% + 70px)',
          height: 'calc(100% + 60px)',
        }}
        viewBox="0 0 390 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 220 18 C 160 2, 80 8, 45 55 C 10 102, 5 170, 15 230 C 25 290, 40 330, 65 370"
          stroke="#FF5D01"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Fire Icon Badge — positioned on the arc, left side near the name */}
      <div
        className="absolute z-20 flex items-center justify-center"
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          backgroundColor: '#FF5D01',
          top: '58%',
          left: '-17px',
          boxShadow: '0 4px 12px rgba(255, 93, 1, 0.4)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 23c-3.866 0-7-3.134-7-7 0-3.107 1.956-5.47 3.5-7.5.378-.497.837-1.044 1.225-1.575C10.475 5.87 11 4.677 11 3c0 0 2.5 1 3.5 3.5.25.625.5 1.625.5 2.5 0 1.236-.484 2.284-1 3-.516.716-1 1.414-1 2.5 0 1.381 1.119 2.5 2.5 2.5 .524 0 1.01-.161 1.411-.436C16.088 18.674 14.2 23 12 23z"/>
        </svg>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[40px] overflow-visible flex flex-col items-center text-center relative">

        {/* Avatar Section */}
        <div className="w-full flex justify-center pt-10 pb-3 px-10">
          <div className="w-[180px] h-[200px] relative">
            <img 
              src={avatarImage}
              alt="Ionut Cenan"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-[26px] font-black text-[#1A1A1A] tracking-tight font-sans px-8">
          Ionut Cenan
        </h2>

        {/* Bio */}
        <p className="text-[#767676] text-[15px] leading-relaxed px-10 mt-5 mb-6 font-medium">
          Blending creativity with code to craft impactful digital products.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 pb-10">
          <a 
            href="https://www.linkedin.com/in/ionut-cenan/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-[11px] text-[#FF5D01] hover:scale-110 transition-transform duration-200"
          >
            <Linkedin size={22} aria-hidden="true" />
          </a>
          <a 
            href="https://github.com/cenanionut" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-[11px] text-[#FF5D01] hover:scale-110 transition-transform duration-200"
          >
            <Github size={22} aria-hidden="true" />
          </a>
          <a 
            href="mailto:contact@ionutcenan.com" 
            aria-label="Send email"
            className="p-[11px] text-[#FF5D01] hover:scale-110 transition-transform duration-200"
          >
            <Mail size={22} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
