import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/utils/cn';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
    id: string;
    type: ToastType;
    message: string;
    duration?: number;
}

interface ToastProps {
    toast: ToastMessage;
    onRemove: (id: string) => void;
}

const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-orange-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
};

const styles = {
    success: 'border-l-4 border-green-500 bg-green-50',
    error: 'border-l-4 border-red-500 bg-red-50',
    warning: 'border-l-4 border-orange-500 bg-orange-50',
    info: 'border-l-4 border-blue-500 bg-blue-50',
};

export function Toast({ toast, onRemove }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onRemove(toast.id);
        }, toast.duration || 5000);

        return () => clearTimeout(timer);
    }, [toast.id, toast.duration, onRemove]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={cn(
                "pointer-events-auto w-full max-w-sm p-4 rounded-lg shadow-lg flex items-start gap-4 cursor-pointer relative overflow-hidden backdrop-blur-sm bg-white/95",
                styles[toast.type]
            )}
            onClick={() => onRemove(toast.id)}
            role="alert"
        >
            <div className="shrink-0 mt-0.5">{icons[toast.type]}</div>
            <div className="flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900 leading-snug">
                    {toast.message}
                </p>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove(toast.id);
                }}
                className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-black/5"
                aria-label="Close"
            >
                <X className="w-4 h-4" />
            </button>

            {/* Progress bar could act as a timer indicator if desired, skipping for simplicity but supported structure */}
        </motion.div>
    );
}
