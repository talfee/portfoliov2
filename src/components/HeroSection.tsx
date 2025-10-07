import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ASCIICell {
  x: number;
  y: number;
  baseChar: string;
  currentChar: string;
  morphedChar: string;
  baseOpacity: number;
  currentOpacity: number;
  targetOpacity: number;
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const cellsRef = useRef<ASCIICell[]>([]);
  const rafRef = useRef<number>();
  const scrollOpacityRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track mouse position on window level
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    
    // Track scroll for opacity gradient
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Fade from 100% to 40% starting right after hero
      // Reach 40% by the time IntroSection paragraph is visible (around 1.2 viewport heights)
      const fadeStart = viewportHeight * 0.8; // Start fading near end of hero
      const fadeEnd = viewportHeight * 1.2; // Finish fade when intro text is visible
      
      if (scrollY < fadeStart) {
        scrollOpacityRef.current = 1;
      } else if (scrollY >= fadeEnd) {
        scrollOpacityRef.current = 0.4;
      } else {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        // Lerp from 1.0 to 0.4
        scrollOpacityRef.current = 1 - (fadeProgress * 0.6);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeCells();
    };
    
    const lightChars = "+-=/:ilta7";
    const denseChars = "#@$%6TALI";
    const allChars = lightChars + denseChars;
    const fontSize = 12;
    
    const initializeCells = () => {
      const cells: ASCIICell[] = [];
      const spacing = fontSize * 0.65;
      const columns = Math.floor(canvas.width / spacing);
      const rows = Math.floor(canvas.height / spacing);

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const char = allChars[Math.floor(Math.random() * allChars.length)];
          const baseOpacity = 0.15 + Math.random() * 0.15;
          
          const morphedChar = denseChars[Math.floor(Math.random() * denseChars.length)];
          cells.push({
            x,
            y,
            baseChar: char,
            currentChar: char,
            morphedChar,
            baseOpacity,
            currentOpacity: baseOpacity,
            targetOpacity: baseOpacity,
          });
        }
      }
      
      cellsRef.current = cells;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `300 ${fontSize}px monospace`;

      const mouseX = mousePosRef.current.x;
      const mouseY = mousePosRef.current.y;
      const hoverRadius = 200;
      const morphRadius = 120;

      // Only iterate through cells that might be affected
      cellsRef.current.forEach((cell) => {
        // Quick reject cells far from mouse
        const quickDx = Math.abs(cell.x - mouseX);
        const quickDy = Math.abs(cell.y - mouseY);
        
        if (quickDx > hoverRadius && quickDy > hoverRadius) {
          // Cell is far from mouse, just reset
          cell.targetOpacity = cell.baseOpacity;
          if (cell.currentChar !== cell.baseChar && Math.random() < 0.05) {
            cell.currentChar = cell.baseChar;
          }
        } else {
          // Calculate actual distance only for nearby cells
          const dx = cell.x - mouseX;
          const dy = cell.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Hover effect - morph into denser/brighter characters
          if (distance < hoverRadius) {
            const influence = 1 - distance / hoverRadius;
            // Smooth gradient with no harsh edges - use smoother curve
            const opacityBoost = Math.pow(influence, 2) * 2.8;
            cell.targetOpacity = Math.min(1, opacityBoost);
            
            // Morph to STABLE dense char - don't keep changing it
            if (distance < morphRadius && influence > 0.5) {
              // Only morph if not already morphed
              if (cell.currentChar === cell.baseChar) {
                cell.currentChar = cell.morphedChar;
              }
            }
          } else {
            cell.targetOpacity = cell.baseOpacity;
            // Gradually revert back to base char
            if (cell.currentChar !== cell.baseChar && Math.random() < 0.05) {
              cell.currentChar = cell.baseChar;
            }
          }
        }

        // Smooth transition
        cell.currentOpacity += (cell.targetOpacity - cell.currentOpacity) * 0.12;

        // Apply scroll-based opacity multiplier
        const finalOpacity = cell.currentOpacity * scrollOpacityRef.current;
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.fillText(cell.currentChar, cell.x, cell.y);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Fixed canvas that covers entire viewport */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      
      <section
        className="relative h-screen w-full overflow-hidden bg-transparent"
      >
      
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
    </>
  );
}
