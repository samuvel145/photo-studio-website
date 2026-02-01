import type { InquiryFormData } from '@/lib/schemas';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
    submitInquiry: async (data: InquiryFormData) => {
        // Simulate network delay
        await delay(1500);

        // Simulate validation - random failure (optional, but let's keep it successful for demo)
        // if (Math.random() > 0.8) throw new Error("Network error. Please try again.");

        console.log('Form Submitted:', data);
        return { success: true, message: 'Inquiry received successfully!' };
    },
};
