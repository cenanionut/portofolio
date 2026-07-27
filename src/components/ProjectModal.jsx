import React, { useCallback, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { getProjectVideoSources } from '../utils/media';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useModalFocusTrap } from '../hooks/useModalFocusTrap';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const panelRef = useRef(null);
  const videoRef = useRef(null);
  const titleId = useId();

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  useBodyScrollLock(isOpen);
  useModalFocusTrap({ isOpen, panelRef, onClose: handleClose });

  if (!project) return null;

  const video = getProjectVideoSources(project.videoSlug);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border border-white/10 rounded-[24px] p-6 md:p-8 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {video && (
              <div className="w-full aspect-video rounded-[16px] overflow-hidden bg-black mb-6">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={video.poster}
                  preload="auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src={video.mp4} type="video/mp4" />
                </video>
              </div>
            )}

            <h3 id={titleId} className="text-white text-2xl md:text-3xl font-bold mb-3 pr-8">
              {project.title}
            </h3>

            {project.description && (
              <p className="text-[#999999] leading-relaxed mb-8">
                {project.description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e65e00] text-white font-bold py-4 rounded-[16px] transition-all transform active:scale-[0.98]"
                >
                  <ExternalLink size={18} />
                  Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 rounded-[16px] transition-all transform active:scale-[0.98]"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
