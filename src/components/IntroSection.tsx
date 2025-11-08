import { motion } from 'motion/react';

export function IntroSection() {
  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-3xl"
      >
        <p
          className="text-white/90 mb-6"
          style={{
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          Thanks for visiting my website! <br></br> 
          Most of my work-related info is on my <a
            href="https://www.linkedin.com/in/talfe/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"  >
            Linkedin
          </a>, so here are some things about me that aren't:
        </p>
        <p
          className="text-white/90 mb-6"
          style={{
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          I pivoted hard from biotech research into computer science 3/4ths the way into my
          degree (it's never too late!).
          I run to relieve stress (
          <a
            href="https://www.strava.com/athletes/132741723"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-current text-white/80 hover:text-white transition-colors duration-300"
          >
            my strava
          </a>
          ). 
          I like to think my academic detours (presenting at academic conferences and publishing
          new research) have instilled in me a love of building challenging projects and
          collaborating effectively.  
          I love reading books, but I love discussing them with others
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
          I have a british shorthair cat. 
          I chose software over biology because I'd rather problem solve sitting down in an ergonomic chair than standing up at a lab bench. (Jokes. Partly).
        </p>
        <p
          className="text-white/90 mb-6"
          style={{
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
          }}
        >
          If we have anything in common, don't hesitate to reach out and connect!
        </p>
      </motion.div>
    </section>
  );
}
