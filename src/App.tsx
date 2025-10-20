import { HeroSection } from './components/HeroSection';
import GlobalBackground from './components/GlobalBackground';
import { IntroSection } from './components/IntroSection';
import { ExperiencesTimeline } from './components/ExperiencesTimeline';

export default function App() {
  return (
    <div className="bg-transparent text-white relative">
      {/* Global dither background with scroll-based fade */}
      <GlobalBackground minOpacity={0.35} fadeDistanceVh={1} />
      <HeroSection />
      <div className="relative z-10">
        <IntroSection />
        <ExperiencesTimeline />
      </div>
    </div>
  );
}
