import React from 'react';
import { Layers, Layout, ArrowRight } from 'lucide-react'; 

const OrangeCardSVG = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 422 284" 
    fill="none"
    className="absolute -right-[36px] -top-[60px] w-[422px] h-[284px] pointer-events-none"
    style={{ mixBlendMode: 'overlay', opacity: 0.3 }}
  >
    <path 
      d="M18.828 273.744C66.529 203.018 107.828 73.13 135.5 137.5C163.172 201.87 236 295.5 282 209C328 122.5 352 14.0001 405.5 147.5" 
      stroke="black" 
      strokeWidth="43" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

const GreenCardSVG = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 422 284" 
    fill="none"
    className="absolute -right-[36px] -top-[60px] w-[422px] h-[284px] pointer-events-none"
  >
    <path 
      d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353" 
      fill="transparent" 
      stroke="rgba(108,227,182,0.5)" 
      strokeWidth="5" 
      strokeMiterlimit="10" 
    />
  </svg>
);

const FocusCards = () => {
  return (
    <div className="w-full max-w-[800px] flex flex-col items-center md:flex-row gap-[20px] md:gap-[30px] mb-10 lg:mb-0">
      
      {/* Orange Card - Fixed Width */}
      <div 
        className="relative overflow-hidden rounded-[10px] p-[32px] flex flex-col justify-between min-h-[260px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02] shrink-0 w-full md:w-[340px]"
        style={{ backgroundColor: 'rgb(244, 108, 56)' }}
      >
        <OrangeCardSVG />
        
        <div className="relative z-10 w-[38px] h-[38px] mb-[40px]">
          <Layers className="text-white w-full h-full" strokeWidth={1.5} />
        </div>

        <div className="relative z-10 flex items-end justify-between">
            <h3 className="font-['Poppins'] font-medium text-[24px] leading-[1.1] text-white text-left max-w-[80%]">
              INTERACTIVE APPS &<br/>MOTION DESIGN
            </h3>
            
            <div className="w-[40px] h-[40px] border border-white/30 rounded-[8px] flex items-center justify-center shrink-0 transition-colors group-hover:bg-white/10">
                <ArrowRight className="text-white" size={20} />
            </div>
        </div>
      </div>

      {/* Green Card - Fluid Width */}
      <div 
        className="relative overflow-hidden rounded-[10px] p-[32px] flex flex-col justify-between min-h-[260px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02] grow w-full"
        style={{ backgroundColor: 'rgb(197, 255, 65)' }}
      >
        <GreenCardSVG />

        <div className="relative z-10 w-[38px] h-[38px] mb-[40px]">
          <Layout className="text-[rgb(21,19,18)] w-full h-full" strokeWidth={1.5} />
        </div>

        <div className="relative z-10 flex items-end justify-between">
            <h3 className="font-['Poppins'] font-medium text-[24px] leading-[1.1] text-[rgb(21,19,18)] text-left max-w-[80%]">
             ENTERPRISE AUTOMATION & AGENTIC ROBOTS
            </h3>

            <div className="w-[40px] h-[40px] border border-[rgb(21,19,18)]/20 rounded-[8px] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[rgb(21,19,18)]/5">
                <ArrowRight className="text-[rgb(21,19,18)]" size={20} />
            </div>
        </div>
      </div>

    </div>
  );
};

export default FocusCards;
