import React from 'react';
import ProfileCard from '../components/ProfileCard';

const MainLayout = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 pt-10 pb-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        
        {/* Left Column - Sticky Profile */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="lg:sticky lg:top-10">
                 <ProfileCard />
            </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="flex-1 flex flex-col gap-20">
            {children}
        </div>

      </div>
    </div>
  );
};

export default MainLayout;
