import { useEffect, useState } from 'react';
import Dither from './Dither';

type Props = {
  minOpacity?: number; // opacity after passing the hero (0..1)
  fadeDistanceVh?: number; // how many viewport heights to complete fade
  // Pass-through props to Dither if needed
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  colorNum?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
};

export default function GlobalBackground({
  minOpacity = 0.35,
  fadeDistanceVh = 1,
  waveColor = [0.5, 0.5, 0.5],
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  colorNum = 4,
  waveAmplitude = 0.3,
  waveFrequency = 3,
  waveSpeed = 0.05,
}: Props) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const vh = window.innerHeight || 1;
        const fadeEnd = vh * Math.max(0.1, fadeDistanceVh);
        const y = window.scrollY || 0;
        const t = Math.min(Math.max(y / fadeEnd, 0), 1);
        const next = 1 - t * (1 - minOpacity);
        setOpacity(next);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [minOpacity, fadeDistanceVh]);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity, transition: 'opacity 300ms ease', willChange: 'opacity' }}
      aria-hidden="true"
    >
      <Dither
        waveColor={waveColor}
        disableAnimation={disableAnimation}
        enableMouseInteraction={enableMouseInteraction}
        mouseRadius={mouseRadius}
        colorNum={colorNum}
        waveAmplitude={waveAmplitude}
        waveFrequency={waveFrequency}
        waveSpeed={waveSpeed}
      />
    </div>
  );
}
