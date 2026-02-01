import { motion } from 'framer-motion';
import { Baby, Heart, Camera } from 'lucide-react';
import { ServiceCard } from '@/components/features/ServiceCard';

const services = [
    {
        title: 'Maternity Photography',
        description: 'Celebrating the beautiful journey of motherhood with elegant and timeless portraits that capture the glow and anticipation of your pregnancy.',
        icon: Heart,
        link: '/services#maternity',
    },
    {
        title: 'Newborn Photography',
        description: 'Capturing the tiny details and peaceful moments of your little one in their first few weeks. We prioritize safety and comfort above all.',
        icon: Baby,
        link: '/services#newborn',
    },
    {
        title: 'Kids & Family',
        description: 'Fun, candid, and heartwarming sessions that freeze fleeting moments in time. Perfect for birthdays, milestones, or just because.',
        icon: Camera,
        link: '/services#kids-family',
    },
];

export function ServicesOverview() {
    return (
        <section className="py-20 bg-secondary-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-main">
                        Our Services
                    </h2>
                    <p className="text-lg text-text-body max-w-2xl mx-auto">
                        We offer specialized photography services tailored to preserve your family's most cherished memories.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
