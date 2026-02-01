import { useState, useRef, useEffect } from 'react';
import { ImageOff } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skeleton } from '@/components/common/Skeleton';
import { cn } from '@/utils/cn';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    placeholderClassName?: string;
    threshold?: number; // threshold in pixels (converted to rootMargin) or ratio
}

export function LazyImage({
    src,
    alt,
    className,
    placeholderClassName,
    threshold = 100, // loading threshold in px
    ...props
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null);

    // Convert px threshold to rootMargin string
    const rootMargin = `${threshold}px`;

    const entry = useIntersectionObserver(imageRef, {
        rootMargin,
        freezeOnceVisible: true,
    });

    const isVisible = !!entry?.isIntersecting;

    useEffect(() => {
        if (isVisible && !isLoaded) {
            const img = new Image();
            img.src = src;
            if (props.srcSet) img.srcset = props.srcSet;
            if (props.sizes) img.sizes = props.sizes;

            img.onload = () => setIsLoaded(true);
            img.onerror = () => setHasError(true);
        }
    }, [isVisible, src, props.srcSet, props.sizes, isLoaded]);

    return (
        <div
            ref={imageRef}
            className={cn("relative overflow-hidden bg-gray-100", className)}
        >
            {/* Placeholder / Skeleton */}
            {(!isLoaded || hasError) && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    {hasError ? (
                        <div className="text-gray-400 flex flex-col items-center p-4 text-center">
                            <ImageOff className="w-8 h-8 mb-2" />
                            <span className="text-xs">Failed to load</span>
                        </div>
                    ) : (
                        <Skeleton className={cn("w-full h-full", placeholderClassName)} />
                    )}
                </div>
            )}

            {/* Actual Image */}
            {isVisible && !hasError && (
                <img
                    src={src}
                    alt={alt}
                    className={cn(
                        "w-full h-full object-cover transition-opacity duration-700 ease-in-out",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    {...props}
                />
            )}
        </div>
    );
}
