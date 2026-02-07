import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import type { GalleryItem } from '@/data/galleryData';
import { LazyImage } from '@/components/common/LazyImage';

interface GalleryImageProps {
    item: GalleryItem;
    onClick: (item: GalleryItem) => void;
}

export function GalleryImage({ item, onClick }: GalleryImageProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-[3/4]"
            onClick={() => onClick(item)}
        >
            <LazyImage
                src={item.src}
                alt={item.alt}
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                threshold={200}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                </div>
            </div>
        </motion.div>
    );
}
