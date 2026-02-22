import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X } from 'lucide-react';

const PrivateProjectModal = ({ isOpen, onClose, projectTitle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-[24px] p-8 shadow-2xl overflow-hidden"
          >
            {/* Animated Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center mb-6 text-[#FF6B00]">
                <Lock size={32} />
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                {projectTitle || 'Private Project'}
              </h3>
              
              <div className="space-y-4">
                <p className="text-[#999999] leading-relaxed">
                  This project is currently private and not available for public viewing due to confidentiality or ongoing development.
                </p>
                
                <p className="text-[#999999] text-sm italic">
                  If you are a potential employer or collaborator, feel free to reach out for more details or a private walkthrough.
                </p>
              </div>

              <button
                onClick={onClose}
                className="mt-8 w-full bg-[#FF6B00] hover:bg-[#e65e00] text-white font-bold py-4 rounded-[16px] transition-all transform active:scale-[0.98]"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PrivateProjectModal;
