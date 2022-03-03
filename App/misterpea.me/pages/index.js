import Navbar from '@components/Navbar';
import LandingSection from '@components/LandingSection';
import AboutSection from '@components/AboutSection';
import WaresSection from '@components/WaresSection';
import ConnectSection from '@components/ConnectSection';

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <div className='sections-wrapper'>
        <LandingSection />
        <AboutSection />
        <WaresSection />
        <ConnectSection />
      </div>
      <div className='line-pattern' />
    </div>
  );
}
