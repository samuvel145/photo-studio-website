import { motion } from 'framer-motion';
import { Camera, Heart, Users, Award } from 'lucide-react';

export function About() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1920&auto=format&fit=crop"
                        alt="Studio background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-text-main mb-6"
                    >
                        Capturing Life's Most <span className="text-primary">Beautiful Moments</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-text-body"
                    >
                        At Smart Studio, we believe every smile, every tear, and every milestone deserves to be preserved forever.
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-heading font-bold text-text-main mb-6 text-left">Our Story</h2>
                        <div className="space-y-4 text-text-body text-left">
                            <p>
                                Founded in 2015 in the heart of Bangalore, Smart Studio began with a simple passion: to tell stories through the lens. What started as a small home studio has grown into one of the city's most trusted photography names.
                            </p>
                            <p>
                                We specialize in Maternity, Newborn, and Family photography, because we know how fast these moments fly by. Our mission is to provide you with more than just photos—we want to give you heirlooms.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1000&auto=format&fit=crop"
                            alt="Photographer at work"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-secondary-light px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-heading font-bold text-text-main mb-16">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Camera, title: "Pro Gear", desc: "Top-tier equipment for stunning clarity." },
                            { icon: Heart, title: "With Love", desc: "We treat every session like it's our own." },
                            { icon: Users, title: "Comfort", desc: "Relaxed environments for natural poses." },
                            { icon: Award, title: "Quality", desc: "Meticulous editing for perfect results." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                                <p className="text-text-body text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
