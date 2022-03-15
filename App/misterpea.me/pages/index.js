import Navbar from '@components/Navbar';
import LandingSection from '@components/LandingSection';
import AboutSection from '@components/AboutSection';
import WaresSection from '@components/WaresSection';
import ConnectSection from '@components/ConnectSection';
import useTheme from '@hooks/useTheme';

export default function Home() {
  const [toggleTheme, currentTheme] = useTheme();
  return (
    <div className="main">
      <Navbar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <div className='sections-wrapper'>
        <LandingSection />
        <AboutSection currentTheme={currentTheme} />
        <WaresSection />
        <ConnectSection />
      </div>
      <div className='line-pattern' />
    </div>
  );
}
