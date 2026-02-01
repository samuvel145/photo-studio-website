import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    link: string;
    className?: string;
}

export function ServiceCard({ title, description, icon: Icon, link, className }: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={cn(
                "bg-white rounded-lg p-8 shadow-card hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full",
                className
            )}
        >
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6 text-primary-dark">
                <Icon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-heading font-semibold text-text-main mb-3">
                {title}
            </h3>

            <p className="text-text-body mb-6 leading-relaxed flex-grow">
                {description}
            </p>

            <Link
                to={link}
                className="inline-flex items-center text-primary-dark font-medium hover:text-primary transition-colors group"
            >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );
}
