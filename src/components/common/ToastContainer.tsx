import { AnimatePresence } from 'framer-motion';
import { Toast, type ToastMessage } from './Toast';

interface ToastContainerProps {
    toasts: ToastMessage[];
    onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
    return (
        <div
            className="fixed top-24 right-4 z-[9999] flex flex-col gap-3 pointer-events-none p-4 max-h-[calc(100vh-100px)] overflow-hidden"
            aria-live="polite"
        >
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <Toast key={toast.id} toast={toast} onRemove={onRemove} />
                ))}
            </AnimatePresence>
        </div>
    );
}
