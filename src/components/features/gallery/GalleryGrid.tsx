import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from './GalleryImage';
import type { GalleryItem } from '@/data/galleryData';

interface GalleryGridProps {
    items: GalleryItem[];
    onImageClick: (item: GalleryItem) => void;
}

export function GalleryGrid({ items, onImageClick }: GalleryGridProps) {
    if (items.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p>No images found in this category.</p>
            </div>
        );
    }

    return (
        <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            <AnimatePresence mode="popLayout">
                {items.map((item) => (
                    <GalleryImage
                        key={item.id}
                        item={item}
                        onClick={onImageClick}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
