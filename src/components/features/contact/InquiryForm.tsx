import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, User, Mail, Phone } from 'lucide-react';
import { inquirySchema, type InquiryFormData } from '@/lib/schemas';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { api } from '@/services/api';
import { useToast } from '@/hooks/useToast';

// Note: We'll add Toast integration in the next step when the context is created.
// For now, using alert/console.log or a local state message.

export function InquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { showToast } = useToast();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<InquiryFormData>({
        resolver: zodResolver(inquirySchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: InquiryFormData) => {
        setIsSubmitting(true);
        try {
            await api.submitInquiry(data);
            showToast('Inquiry received successfully! We will contact you shortly.', 'success');
            reset();
        } catch (error) {
            showToast('Something went wrong. Please try again later.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-heading font-semibold text-text-main mb-6">
                Book a Session
            </h3>



            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                    label="Full Name"
                    placeholder="Jane Doe"
                    leftIcon={<User className="w-4 h-4" />}
                    error={errors.fullName?.message}
                    {...register('fullName')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="jane@example.com"
                        leftIcon={<Mail className="w-4 h-4" />}
                        error={errors.email?.message}
                        {...register('email')}
                    />
                    <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="9876543210"
                        leftIcon={<Phone className="w-4 h-4" />}
                        error={errors.phone?.message}
                        {...register('phone')}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                        label="Service Type"
                        type="select"
                        error={errors.serviceType?.message}
                        options={[
                            { value: '', label: 'Select a Service' },
                            { value: 'maternity', label: 'Maternity Photography' },
                            { value: 'newborn', label: 'Newborn Photography' },
                            { value: 'kids', label: 'Kids Photography' },
                            { value: 'family', label: 'Family Portrait' },
                        ]}
                        {...register('serviceType')}
                    />

                    <Input
                        label="Preferred Date"
                        type="date"
                        leftIcon={<Calendar className="w-4 h-4" />}
                        error={errors.preferredDate?.message}
                        {...register('preferredDate')}
                    />
                </div>

                <Input
                    label="Message (Optional)"
                    multiline
                    placeholder="Tell us about your requirements..."
                    error={errors.message?.message}
                    {...register('message')}
                />

                <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={!isValid || isSubmitting}
                >
                    Submit Inquiry
                </Button>
            </form>
        </div>
    );
}
