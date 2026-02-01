import { Mail, Phone, MapPin } from 'lucide-react';
import { InquiryForm } from '@/components/features/contact/InquiryForm';

export function Contact() {
    return (
        <div className="min-h-screen bg-secondary-light">
            {/* Header */}
            <div className="bg-white py-20 text-center px-4 border-b border-gray-100">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4">
                    Get in Touch
                </h1>
                <p className="text-text-body max-w-2xl mx-auto">
                    We'd love to hear from you. Fill out the form below or contact us directly.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Information */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-heading font-semibold text-text-main mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-dark shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-main">Visit Us</h3>
                                        <p className="text-text-body mt-1">
                                            123 Photography Lane, Creative District<br />
                                            Bangalore, Karnataka 560001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-dark shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-main">Call Us</h3>
                                        <p className="text-text-body mt-1">+91 98765 43210</p>
                                        <p className="text-sm text-gray-500">Mon-Sat, 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-dark shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-main">Email Us</h3>
                                        <p className="text-text-body mt-1">hello@smartstudio.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                Google Map Embed Would Go Here
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div>
                        <InquiryForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
