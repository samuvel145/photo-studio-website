import { motion } from 'framer-motion';
import { Camera, Heart, Users, Award } from 'lucide-react';

export function About() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1920&auto=format&fit=crop"
                        alt="Graceful maternity silhouette"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-text-main mb-6"
                    >
                        Celebrating the <span className="text-primary">Journey of Motherhood</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-text-body"
                    >
                        Honoring the strength, beauty, and love that begins long before your little one arrives.
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
                        <h2 className="text-3xl font-heading font-bold text-text-main mb-6 text-left">Our Passion for Maternity</h2>
                        <div className="space-y-4 text-text-body text-left">
                            <p>
                                Founded in 2015 in Bangalore, Smart Studio has always been dedicated to the most precious moments in life. Our heart lies in maternity photography—capturing the unique glow and the profound connection between a mother and her unborn child.
                            </p>
                            <p>
                                We believe that pregnancy is one of the most transformative times in a woman's life. Our mission is to create a serene and empowering environment where you can celebrate your journey and create lasting heirlooms for your family.
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
                            src="https://images.unsplash.com/photo-1504194553283-d731e21b1834?q=80&w=1000&auto=format&fit=crop"
                            alt="Beautiful maternity portrait"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-secondary-light px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-heading font-bold text-text-main mb-16">Why Choose Our Maternity Sessions?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Camera, title: "Artistic Vision", desc: "Crafting timeless images that reflect your radiance." },
                            { icon: Heart, title: "Care & Comfort", desc: "Prioritizing your well-being throughout the session." },
                            { icon: Users, title: "Family Focus", desc: "Including partners and siblings in the celebration." },
                            { icon: Award, title: "Perfect Finish", desc: "Meticulous editing to enhance every detail." }
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
