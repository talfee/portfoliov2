import { motion } from 'motion/react';

type Props = { reduceMotion?: boolean };

export function HeroSection({ reduceMotion = false }: Props) {
  const transition = reduceMotion ? { duration: 0 } : { duration: 1.5, ease: 'easeOut' as const };
  const scrollHintTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 1,
        delay: 2,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        repeatDelay: 0.5,
      };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-center"
        >
          <motion.h1
            style={{
              fontSize: 'clamp(3rem, 12vw, 10rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 2, delay: 0.3 }}
          >
            i'm tal!
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={scrollHintTransition}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.05em' }}>
            scroll
          </span>
          <div className="w-px h-16 bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
