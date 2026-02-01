import { cn } from '@/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular' | 'card' | 'image';
    width?: string | number;
    height?: string | number;
}

export function Skeleton({
    className,
    variant = 'rectangular',
    width,
    height,
    ...props
}: SkeletonProps) {
    const baseClasses = "relative overflow-hidden bg-gray-200 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

    // Calculate specific styles for variants if needed, or rely on classes
    const variantClasses = {
        text: "h-4 w-3/4 rounded",
        circular: "rounded-full",
        rectangular: "rounded-md",
        card: "rounded-lg h-64 w-full",
        image: "rounded-none w-full h-full",
    };

    return (
        <div
            className={cn(baseClasses, variantClasses[variant], className)}
            style={{
                width: width,
                height: height,
            }}
            {...props}
        />
    );
}

// Sub-components for common patterns
export function SkeletonCard() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm space-y-4 border border-gray-100">
            <Skeleton variant="rectangular" className="h-48 w-full rounded-md" />
            <Skeleton variant="text" className="h-6 w-3/4" />
            <Skeleton variant="text" className="h-4 w-1/2" />
        </div>
    );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-3">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    className={i === lines - 1 ? "w-1/2" : "w-full"}
                />
            ))}
        </div>
    );
}
