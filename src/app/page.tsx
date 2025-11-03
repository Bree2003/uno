import BenefitSection from '@/components/screens/BenefitSection';

import AboutSection from '@/components/screens/AboutSection';
import HeroSection from '@/components/screens/HeroSection';
import Ecosystem from '@/components/screens/EcosystemSection';
import SleepBoookSection from '@/components/screens/SleepBookSection';
import TeamSection from '@/components/screens/TeamSection';
import Header from '@/components/Header';
import CTASection from '@/components/screens/CTASection';
import VideoSection from '@/components/screens/VideoSection';

const Landing = () => {
  return (
    <>
      <HeroSection />
      <Header />
      <AboutSection />
      <VideoSection />
      <CTASection />
      <BenefitSection />
      <Ecosystem />
      <SleepBoookSection />
      <TeamSection />
    </>
  );
};

export default Landing;
