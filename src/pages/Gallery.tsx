import { useState } from 'react';
import { FilterBar } from '@/components/features/gallery/FilterBar';
import { GalleryGrid } from '@/components/features/gallery/GalleryGrid';
import { Lightbox } from '@/components/features/gallery/Lightbox';
import { galleryData } from '@/data/galleryData';

const CATEGORIES = ['All', 'Maternity', 'Newborn', 'Kids', 'Family'];

export function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const isLightboxOpen = lightboxIndex >= 0;

    const filteredItems = activeCategory === 'All'
        ? galleryData
        : galleryData.filter((item) => item.category === activeCategory);

    const handleImageClick = (item: typeof galleryData[0]) => {
        const index = filteredItems.findIndex((i) => i.id === item.id);
        setLightboxIndex(index);
    };

    const handleNext = () => {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const handlePrev = () => {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-secondary-light py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4">
                    Our Portfolio
                </h1>
                <p className="text-text-body max-w-2xl mx-auto">
                    Explore our latest work capturing life's most beautiful moments.
                </p>
            </div>

            {/* Gallery Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <FilterBar
                    categories={CATEGORIES}
                    activeCategory={activeCategory}
                    onFilterChange={setActiveCategory}
                />

                <GalleryGrid
                    items={filteredItems}
                    onImageClick={handleImageClick}
                />
            </div>

            {/* Lightbox */}
            <Lightbox
                images={filteredItems}
                currentIndex={lightboxIndex}
                isOpen={isLightboxOpen}
                onClose={() => setLightboxIndex(-1)}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </div>
    );
}
