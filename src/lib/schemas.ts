import { z } from 'zod';

export const inquirySchema = z.object({
    fullName: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name cannot exceed 100 characters'),
    email: z
        .string()
        .email('Please enter a valid email address'),
    phone: z
        .string()
        .regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    serviceType: z.enum(['maternity', 'newborn', 'kids', 'family']),
    preferredDate: z
        .string()
        .refine((val) => new Date(val) > new Date(), {
            message: 'Preferred date must be in the future',
        }),
    message: z
        .string()
        .max(500, 'Message cannot exceed 500 characters')
        .optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
