import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface FilterBarProps {
    categories: string[];
    activeCategory: string;
    onFilterChange: (category: string) => void;
}

export function FilterBar({ categories, activeCategory, onFilterChange }: FilterBarProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    className={cn(
                        "relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none",
                        activeCategory === category
                            ? "text-white"
                            : "text-text-body hover:text-primary hover:bg-primary-light/20 bg-white border border-gray-200"
                    )}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeFilter"
                            className="absolute inset-0 bg-primary rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            style={{ zIndex: -1 }}
                        />
                    )}
                    {category}
                </button>
            ))}
        </div>
    );
}
