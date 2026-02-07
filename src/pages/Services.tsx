import { motion } from 'framer-motion';
import { Heart, Baby, Camera, Sparkles, Clock, Image } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';

const packages = [
    {
        title: 'Maternity Session',
        price: '₹14,999',
        icon: Heart,
        features: ['2 Hour Session', '15 Professionally Edited Images', '2 Costume Changes', 'Online Gallery Access']
    },
    {
        title: 'Newborn Essential',
        price: '₹19,999',
        icon: Baby,
        features: ['3 Hour Session', '20 Professionally Edited Images', 'Prop Setup Included', 'Family Portraits Included']
    },
    {
        title: 'Family Portrait',
        price: '₹12,499',
        icon: Camera,
        features: ['1.5 Hour Session', '10 Professionally Edited Images', 'Outdoor or Studio Location', 'High-Res Digital Copies']
    }
];

export function Services() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Header */}
            <section className="bg-secondary-light py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-4">Our Services & Pricing</h1>
                <p className="text-text-body max-w-2xl mx-auto">Investment in your memories that will last a lifetime.</p>
            </section>

            {/* Packages */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-gray-100 rounded-2xl p-8 hover:border-primary/30 transition-colors bg-white shadow-lg flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-primary-dark mb-6">
                                <pkg.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-2">{pkg.title}</h3>
                            <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                            <ul className="space-y-4 mb-8 w-full text-left">
                                {pkg.features.map((f, j) => (
                                    <li key={j} className="flex items-center text-text-body">
                                        <Sparkles className="w-4 h-4 text-primary mr-3 shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full mt-auto" onClick={() => navigate('/contact')}>Enquire Now</Button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-center mb-16">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Clock, title: "Book", desc: "Select your preferred date and session type." },
                            { icon: Camera, title: "Shoot", desc: "Relax and enjoy your professional session." },
                            { icon: Image, title: "Deliver", desc: "Receive your beautifully edited gallery." }
                        ].map((step, i) => (
                            <div key={i} className="text-center">
                                <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                                <p className="text-text-body">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
