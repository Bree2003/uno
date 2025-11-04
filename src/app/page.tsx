import BenefitSection from '@/components/screens/BenefitSection';

import AboutSection from '@/components/screens/AboutSection';
import HeroSection from '@/components/screens/HeroSection';
import Ecosystem from '@/components/screens/EcosystemSection';
import SleepBoookSection from '@/components/screens/SleepBookSection';
import TeamSection from '@/components/screens/TeamSection';
import Header from '@/components/Header';
import CTASection from '@/components/screens/CTASection';
import VideoSection from '@/components/screens/VideoSection';
import ProblemSection from '@/components/screens/ProblemSection';

const Landing = () => {
  return (
    <>
      <HeroSection />
      <Header />
      <ProblemSection/>
      <AboutSection />
      <VideoSection />
      <BenefitSection />
      <Ecosystem />
      <SleepBoookSection />
      <CTASection />
      {/* <TeamSection /> */}
    </>
  );
};

export default Landing;
