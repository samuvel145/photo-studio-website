import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/data/galleryData';


interface LightboxProps {
    images: GalleryItem[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export function Lightbox({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNext,
    onPrev,
}: LightboxProps) {
    const currentImage = images[currentIndex];

    // Keyboard Navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    // Lock Body Scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !currentImage) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    onClick={(e) => {
                        // Close if clicked on backdrop (not image or buttons)
                        if (e.target === e.currentTarget) onClose();
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/10"
                        aria-label="Close lightbox"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent closing
                            onPrev();
                        }}
                        className="absolute left-4 z-50 p-2 text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/10 hidden md:block"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    {/* Image Container */}
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:px-16">
                        <motion.img
                            key={currentImage.id}
                            src={currentImage.src}
                            alt={currentImage.alt}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />

                        {/* Caption / Counter */}
                        <div className="absolute bottom-6 left-0 right-0 text-center text-white/90">
                            <p className="text-sm font-medium tracking-wide">
                                {currentIndex + 1} / {images.length}
                            </p>
                            <p className="text-xs text-white/60 mt-1">{currentImage.category}</p>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 z-50 p-2 text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/10 hidden md:block"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
