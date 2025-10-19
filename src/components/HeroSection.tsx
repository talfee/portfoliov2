import { motion } from "motion/react";
import FaultyTerminal from "./FaultyTerminal";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      <FaultyTerminal
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: "100%", height: "100%", position: "absolute" }}
        scale={1.5}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={1}
        pause={false}
        scanlineIntensity={0}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#ffffffff"
        mouseReact={true}
        mouseStrength={1}
        pageLoadAnimation={false}
        brightness={0.25}
      />

      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "-0.03em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            i'm tal!
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span style={{ fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.05em" }}>scroll</span>
          <div className="w-px h-16 bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
