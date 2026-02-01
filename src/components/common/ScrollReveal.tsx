import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/utils/cn';

type AnimationVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fade';

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    duration?: number;
    className?: string;
    viewportAmount?: number | 'some' | 'all';
}

export function ScrollReveal({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.5,
    className,
    viewportAmount = 0.3,
}: ScrollRevealProps) {
    const shouldReduceMotion = useReducedMotion();

    const getVariants = (): Variants => {
        // If user prefers reduced motion, strictly fade in without movement
        if (shouldReduceMotion) {
            return {
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { duration, delay, ease: 'easeOut' as any },
                },
            };
        }

        const baseTransition = {
            duration,
            delay,
            ease: 'easeOut' as any,
        };

        switch (variant) {
            case 'fadeUp':
                return {
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: baseTransition },
                };
            case 'fadeLeft':
                return {
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: baseTransition },
                };
            case 'fadeRight':
                return {
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0, transition: baseTransition },
                };
            case 'fade':
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: baseTransition },
                };
        }
    };

    return (
        <motion.div
            variants={getVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: viewportAmount, once: true }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

// Usage Examples:
/*
  // Standard Fade Up
  <ScrollReveal>
    <h2>Title</h2>
  </ScrollReveal>

  // Fade from Left with Delay
  <ScrollReveal variant="fadeLeft" delay={0.2}>
    <Sidebar />
  </ScrollReveal>

  // Staggered Grid Items
  {items.map((item, index) => (
    <ScrollReveal key={item.id} delay={index * 0.1}>
      <Card item={item} />
    </ScrollReveal>
  ))}
*/
