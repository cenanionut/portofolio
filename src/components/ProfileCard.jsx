import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import avatarImage from '../assets/avatar.webp';

const ProfileCard = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">

      {/* Dashed Orange Arc — SVG overlay that extends beyond the card */}
      <svg
        className="absolute -top-8 -left-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none z-10"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 200 40 C 60 40, 30 120, 40 220 C 50 340, 80 420, 140 480"
          stroke="#FF6B00"
          strokeWidth="3"
          strokeDasharray="12 8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] overflow-visible flex flex-col items-center text-center relative">

        {/* Avatar Section */}
        <div className="w-full flex justify-center pt-8 pb-4 px-8">
          <div className="w-[180px] h-[200px] relative">
            <img 
              src={avatarImage}
              alt="Ionut Cenan"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-[26px] font-black text-[#1A1A1A] tracking-tight font-sans px-6">
          Ionut Cenan
        </h2>

        {/* Fire Icon */}
        <div className="my-3">
          <div className="w-9 h-9 bg-[#FF6B00] rounded-full flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 23c-3.866 0-7-3.134-7-7 0-3.107 1.956-5.47 3.5-7.5.378-.497.837-1.044 1.225-1.575C10.475 5.87 11 4.677 11 3c0 0 2.5 1 3.5 3.5.25.625.5 1.625.5 2.5 0 1.236-.484 2.284-1 3-.516.716-1 1.414-1 2.5 0 1.381 1.119 2.5 2.5 2.5 .524 0 1.01-.161 1.411-.436C16.088 18.674 14.2 23 12 23z"/>
            </svg>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[#888888] text-[15px] leading-relaxed px-8 mb-6 font-medium">
          Blending creativity with code to craft impactful digital products.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-7 pb-8">
          <a 
            href="https://www.linkedin.com/in/ionut-cenan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#FF6B00] hover:scale-110 transition-transform duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a 
            href="https://github.com/cenanionut" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#FF6B00] hover:scale-110 transition-transform duration-200"
          >
            <Github size={22} />
          </a>
          <a 
            href="mailto:contact@ionutcenan.com" 
            className="text-[#FF6B00] hover:scale-110 transition-transform duration-200"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
