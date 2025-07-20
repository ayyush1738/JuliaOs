import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/home/hero-section';
import { FeatureCards } from '@/components/home/feature-cards';
import { TrustSection } from '@/components/home/trust-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureCards />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}