import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, User, Mail, Phone, Sparkles } from 'lucide-react';
import { inquirySchema, type InquiryFormData } from '@/lib/schemas';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { api } from '@/services/api';
import { useToast } from '@/hooks/useToast';

// Note: We'll add Toast integration in the next step when the context is created.
// For now, using alert/console.log or a local state message.

export function InquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

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
            setIsBooked(true);
            reset();
        } catch (error) {
            showToast('Something went wrong. Please try again later.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isBooked) {
        return (
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100 text-center animate-fade-in">
                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center text-primary-dark mx-auto mb-6">
                    <Sparkles className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-text-main mb-4">Booked!</h3>
                <p className="text-text-body mb-8">
                    Thank you for your inquiry. We have received your details and will get back to you within 24 hours to confirm your session.
                </p>
                <Button variant="outline" onClick={() => setIsBooked(false)}>
                    Submit Another Inquiry
                </Button>
            </div>
        );
    }

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
