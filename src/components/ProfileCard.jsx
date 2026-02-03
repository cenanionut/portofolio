import React from 'react';
import { Linkedin, Github, Mail, Sparkles } from 'lucide-react';
import avatarImage from '../assets/avatar.webp';

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-full max-w-[400px] mx-auto h-fit">
      {/* Avatar Container */}
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6 bg-gray-100 relative group">
          <img 
            src={avatarImage}
            alt="Ionut Cenan"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-[#FF5722] p-1.5 rounded-full border-2 border-white">
             <Sparkles size={16} color="white" fill="white" />
          </div>
      </div>

      {/* Name & Headline */}
      <h1 className="text-[28px] font-black text-black mb-2 font-sans tracking-tight">
        Ionut Cenan
      </h1>
      <p className="text-[#666666] text-[16px] leading-relaxed mb-8 font-medium">
        Blending creativity with code to craft impactful digital products.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mt-auto">
        <a href="#" className="text-[#FF5722] hover:scale-110 transition-transform duration-200">
          <Linkedin size={24} />
        </a>
        <a href="#" className="text-[#FF5722] hover:scale-110 transition-transform duration-200">
          <Github size={24} />
        </a>
        <a href="#" className="text-[#FF5722] hover:scale-110 transition-transform duration-200">
           <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
