import React from 'react';
import { motion } from 'motion/react';

type Props = { reduceMotion?: boolean };

export function IntroSection({ reduceMotion = false }: Props) {
  const transition = reduceMotion ? { duration: 0 } : { duration: 1.2, ease: 'easeOut' as const };

  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl"
      >
        <p
          className="text-white/90 mb-6 break-words"
          style={{
            fontSize: '0.95rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          thanks for visiting my website! <br></br>  <br></br> 
          most of my work related info is on my <a
            href="https://www.linkedin.com/in/talfe/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"  >
            linkedin
          </a>, so here are some things about me that aren't: 
        </p>
        <ul
          className="text-white/90 mb-6 list-disc pl-6 break-words"
          style={{
            fontSize: '0.95rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          <li className="mb-2">
            i pivoted from biology research into computer science 3/4ths the way into my
            degree (it's never too late!).
          </li>
          <li className="mb-2">
            i run to relieve stress (
            <a
              href="https://www.strava.com/athletes/132741723"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"
            >
              my strava
            </a>
            ).
          </li>
          <li className="mb-2">
          my academic detours (presenting at{' '}
            <a
              href="https://mcells.ubc.ca/news/may-05-2025/ubc-biomod-team-shines-2024-biomod-jamboree"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"
            >
              academic conferences
            </a>{' '}
            and publishing{' '}
            <a
              href="https://cjur.ca/wp-content/uploads/2024/09/MURCxCJUR_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"
            >
              new research
            </a>
            ) taught me to love hard problems and good collaboration.
          </li>
          <li className="mb-2">
            i love reading books, but i love discussing them with others
            even more (
            <a
              href="https://www.goodreads.com/user/show/74831519-talfee"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"
            >
              my goodreads
            </a>
            ).
          </li>
          <li className="mb-2">
            i parent a slightly overweight british shorthair cat.
          </li>
          <li className="mb-2">
            i chose software over biology because i'd rather problem solve sitting down in an ergonomic chair than standing up at a lab bench. (jokes. partly).
          </li>
        </ul>
        <p
          className="text-white/90 mb-6 break-words"
          style={{
            fontSize: '0.95rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          i genuinely love meeting new people — if anything here resonated, i'd love to grab a coffee!
        </p>
        <p
          className="text-white/90 mb-6 break-words"
          style={{
            fontSize: '0.95rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          →{' '}
          <a
            href="mailto:taliafeng@gmail.com"
            className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"
          >
            taliafeng [at] gmail [dot] com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
