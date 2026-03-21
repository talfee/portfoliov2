import { HeroSection } from './components/HeroSection';
import GlobalBackground from './components/GlobalBackground';
import { IntroSection } from './components/IntroSection';
import { ExperiencesTimeline } from './components/ExperiencesTimeline';
import { useReducedMotion } from './hooks/useReducedMotion';

export default function App() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-transparent text-white relative">
      <a
        href="#main-content"
        className="skip-link z-[100] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
      >
        Skip to content
      </a>
      {/* Global dither background with scroll-based fade */}
      <GlobalBackground
        minOpacity={0.35}
        fadeDistanceVh={1}
        disableAnimation={reduceMotion}
      />
      <main id="main-content">
        <HeroSection reduceMotion={reduceMotion} />
        <div className="relative z-10">
          <IntroSection reduceMotion={reduceMotion} />
          <ExperiencesTimeline reduceMotion={reduceMotion} />
        </div>
      </main>
    </div>
  );
}
