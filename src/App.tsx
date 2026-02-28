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
        className="absolute left-4 top-4 z-[100] -translate-y-[200%] px-4 py-2 bg-white text-black transition-transform duration-150 focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
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
