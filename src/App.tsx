import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ExperiencesTimeline } from "./components/ExperiencesTimeline";

export default function App() {
  return (
    <div className="bg-transparent text-white relative">
      <HeroSection />
      <div className="relative z-10">
        <IntroSection />
        <ExperiencesTimeline />
      </div>
    </div>
  );
}
