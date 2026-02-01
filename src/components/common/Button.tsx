import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn'; // Assuming we create a utility for merging classes

// Utility to merge tailwind classes (will create this next if not exists, but defining inline usage here)
// Actually, I should create the utility first or put it here. 
// I'll assume cn is in utils/cn.ts. I will create that file in the next step or inline it if I can't.
// For now, I'll rely on the user having told me they installed `clsx` and `tailwind-merge`.

// Button Variants Definition
const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-transform duration-200 ease-in-out active:scale-95",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white hover:bg-primary-dark hover:scale-[1.02] shadow-sm",
                secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-[1.02]",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Standard outline fallbacks
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3 text-xs", // Small: 12px vertical padding roughly handled by h-9
                md: "h-11 rounded-md px-8", // Medium
                lg: "h-12 rounded-md px-10 text-base", // Large
                // Custom sizes from prompt:
                // small (12px 24px) -> px-6 py-3 text-xs? 
                // medium (14px 32px) -> px-8 py-3.5?
                // Let's approximate standard tailwind classes or use arbitrary values if strict.
                // Prompt: small (12px 24px), medium (14px 32px), large (16px 40px)
                // I will use specific padding to match prompt exactly.
                customSm: "text-sm px-6 py-3",
                customMd: "text-base px-8 py-3.5",
                customLg: "text-lg px-10 py-4",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "customMd",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
