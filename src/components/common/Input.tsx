import React from 'react';
import { cn } from '@/utils/cn';
import { AlertCircle, CheckCircle } from 'lucide-react';

// Design System Validation Colors
const ERROR_COLOR_HEX = "#E74C3C";
const SUCCESS_COLOR_HEX = "#27AE60";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
    label?: string;
    helperText?: string;
    error?: string;
    success?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;

    // To handle 'textarea' and 'select' we can use an 'as' prop or 'type' prop hack.
    // For simplicity and strict typing, let's allow a specific 'as' prop or assume input.
    // However, React.InputHTMLAttributes doesn't fit all perfectly.
    // Let's create a union of types or simplified approach.

    // Custom props
    containerClassName?: string;
    options?: { value: string; label: string }[]; // For select
    multiline?: boolean; // Trigger textarea
}

const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement, InputProps>(
    (
        {
            className,
            containerClassName,
            label,
            helperText,
            error,
            success,
            leftIcon,
            rightIcon,
            disabled,
            required,
            id,
            options,
            multiline,
            type = "text",
            ...props
        },
        ref
    ) => {
        // Generate unique ID if not provided for label accessibility
        const inputId = id || React.useId();
        const errorId = `${inputId}-error`;
        const helperId = `${inputId}-helper`;

        // Determine Base Styles
        const baseInputStyles = cn(
            "flex w-full rounded-md border border-[#DDDDDD] bg-white px-4 py-3 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary",
            error && `border-2 border-[${ERROR_COLOR_HEX}] focus-visible:border-[${ERROR_COLOR_HEX}] focus-visible:ring-[${ERROR_COLOR_HEX}]`,
            success && !error && `border-2 border-[${SUCCESS_COLOR_HEX}] focus-visible:border-[${SUCCESS_COLOR_HEX}] focus-visible:ring-[${SUCCESS_COLOR_HEX}]`,
            className
        );

        // Render Logic
        const renderInput = () => {
            if (multiline) {
                return (
                    <textarea
                        className={cn(baseInputStyles, "min-h-[100px] resize-y")}
                        ref={ref as any}
                        id={inputId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={error ? errorId : helperText ? helperId : undefined}
                        required={required}
                        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                );
            }

            if (type === 'select') {
                return (
                    <div className="relative">
                        <select
                            className={cn(baseInputStyles, "appearance-none")}
                            ref={ref as any}
                            id={inputId}
                            disabled={disabled}
                            aria-invalid={!!error}
                            aria-describedby={error ? errorId : helperText ? helperId : undefined}
                            required={required}
                            {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
                        >
                            {options ? (
                                options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))
                            ) : (
                                props.children
                            )}
                        </select>
                        {/* Custom Chevron could go here */}
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                );
            }

            return (
                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {leftIcon}
                        </div>
                    )}
                    <input
                        type={type}
                        className={cn(baseInputStyles, leftIcon && "pl-10", rightIcon && "pr-10")}
                        ref={ref}
                        id={inputId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={error ? errorId : helperText ? helperId : undefined}
                        required={required}
                        {...props}
                    />
                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {rightIcon}
                        </div>
                    )}
                    {/* Validation Icons */}
                    {!rightIcon && error && (
                        <AlertCircle className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[${ERROR_COLOR_HEX}]`} />
                    )}
                    {!rightIcon && success && !error && (
                        <CheckCircle className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[${SUCCESS_COLOR_HEX}]`} />
                    )}
                </div>
            );
        };

        return (
            <div className={cn("w-full space-y-2", containerClassName)}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", error ? `text-[${ERROR_COLOR_HEX}]` : "text-text-main")}
                    >
                        {label} {required && <span className="text-red-500">*</span>}
                    </label>
                )}

                {renderInput()}

                {error && (
                    <p id={errorId} className={`text-sm text-[${ERROR_COLOR_HEX}] animate-fade-in`}>
                        {error}
                    </p>
                )}
                {!error && helperText && (
                    <p id={helperId} className="text-xs text-muted-foreground animate-fade-in">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };

/**
 * Usage Examples:
 * 
 * 1. Basic Text Input
 * <Input label="Full Name" placeholder="John Doe" required />
 * 
 * 2. Input with Icon and Validation Error
 * <Input 
 *   label="Email" 
 *   type="email" 
 *   leftIcon={<MailIcon />} 
 *   error="Invalid email address" 
 *   placeholder="john@example.com" 
 * />
 * 
 * 3. Textarea
 * <Input 
 *   label="Message" 
 *   multiline 
 *   rows={4} 
 *   placeholder="Tell us about your shoot..." 
 * />
 * 
 * 4. Select Dropdown
 * <Input 
 *   label="Service Type" 
 *   type="select" 
 *   options={[
 *     { value: 'maternity', label: 'Maternity' },
 *     { value: 'newborn', label: 'Newborn' }
 *   ]} 
 * />
 */
