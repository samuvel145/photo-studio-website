import { HeroSection } from '@/components/features/HeroSection';
import { ServicesOverview } from '@/components/features/ServicesOverview';

export function Home() {
    return (
        <div className="animate-fade-in">
            <HeroSection />
            <ServicesOverview />
            {/* Additional sections would go here (Testimonials, Featured Gallery, etc.) */}
        </div>
    );
}
