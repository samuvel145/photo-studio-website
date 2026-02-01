import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';

export function HeroSection() {
    const navigate = useNavigate();

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, repeat: Infinity, ease: 'linear' as any },
        },
    };

    const scrollIndicatorVariants = {
        animate: {
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as any,
            },
        },
    };

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop" // Placeholder: Maternity/Family style
                    alt="Mother holding newborn baby"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight drop-shadow-md"
                >
                    Capturing Life's Most <br className="hidden md:block" />
                    <span className="italic font-light">Precious Moments</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl lg:text-2xl font-body text-gray-100 max-w-2xl mx-auto drop-shadow-sm"
                >
                    Professional Maternity, Newborn & Family Photography capturing the essence of your family's story.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Button
                        size="customLg"
                        className="rounded-full shadow-lg hover:shadow-xl text-lg min-w-[200px]"
                        onClick={() => navigate('/contact')}
                    >
                        Book Your Session
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
                variants={scrollIndicatorVariants}
                animate="animate"
                onClick={handleScrollDown}
                aria-label="Scroll down"
            >
                <ChevronDown className="w-10 h-10 text-white/80" />
            </motion.div>
        </section>
    );
}
