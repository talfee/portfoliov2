import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    year: '2026',
    title: 'software engineering intern',
    company: 'CIBC',
    description:
      'i am currently working on a project to develop an AI powered incident management tool for Azure data platforms, utilizing retrieval-augmented generation to automate runbook retrieval.',
    tags: ['databases', 'azure', 'fullstack'],
  },
  {
    year: '2025',
    title: 'software engineering intern',
    company: 'TD',
    description:
      'my role as a swe intern involves building fullstack applications for portfolio managers with Javascript and Python.',
    tags: ['databases', 'backend', 'fullstack'],
  },
  {
    year: '2025',
    title: 'mobile app developer intern',
    company: 'g&a robot',
    description:
      'here i built mobile apps in C# with .NET MAUI and used Azure for deployment, querying databases, and creating cloud services.',
    tags: ['mobile', 'architecture', 'backend'],
  },
  {
    year: '2025',
    title: 'volunteer software developer',
    company: 'ubc launchpad',
    description:
      'I am a volunteer dev building a staff management system for the BC Brain Wellness Program.',
    tags: ['databases', 'fullstack', 'backend'],
  },
  {
    year: '2025',
    title: 'volunteer web developer',
    company: 'ubc science undergraduate society',
    description:
      'I was a volunteer dev building a degree map of courses for ubc science students.',
    tags: ['project management', 'data engineering', 'backend'],
  },
  {
    year: '2023',
    title: 'teaching assistant',
    company: 'ubc department of cs',
    description:
      'A rewarding job involving hosting office hours to answer questions and teaching tutorials.',
    tags: ['algorithms', 'communnication', 'teaching'],
  },
  {
    year: '2023',
    title: 'student researcher',
    company: 'ubc bioproducts institute',
    description:
      'Selected to be a student researcher at ubc bioproducts, an institute that focuses on creating and testing new materials from biological processes. worked on propogating bacteria to grow and process biofilms that can replace plastic packacing. Published in MURC.',
    tags: ['project management', 'communnication', 'research'],
  },
  {
    year: '2022',
    title: 'wetlab + computational researcher',
    company: 'ubc biomod design team',
    description:
      'Contributed to research around creating DNA origami nanostuctures for therapeutic usages. Published in MURC and presented at the international BIOMOD Jamboree 2024.',
    tags: ['project management', 'presenting', 'python'],
  },
];

function ExperienceCard({
  experience,
  index,
  reduceMotion,
}: {
  experience: Experience;
  index: number;
  reduceMotion: boolean;
}) {
  const transition = reduceMotion ? { duration: 0 } : { duration: 1.2, ease: 'easeOut' as const };
  const noMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1, x: 0, scale: 1 } }
    : {
        initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 },
        whileInView: { opacity: 1, x: 0, scale: 1 },
      };

  return (
    <motion.div
      initial={noMotion.initial as any}
      whileInView={noMotion.whileInView as any}
      transition={transition}
      viewport={{ once: true, margin: '-100px' }}
      className="relative mb-32"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
      >
        {/* Year - Left side for even, right for odd */}
        <div className={`min-w-0 ${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
          <motion.div
            className="inline-block"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1, delay: 0.2 }}
            viewport={reduceMotion ? undefined : { once: true }}
          >
            <span
              className="block"
              style={{
                fontSize: '5rem',
                fontWeight: 400,
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {experience.year}
            </span>
          </motion.div>
        </div>

        {/* Content - Right side for even, left for odd */}
        <div className={`min-w-0 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1, delay: 0.4 }}
            viewport={reduceMotion ? undefined : { once: true }}
            className="space-y-6"
          >
            <div className="min-w-0">
              <h3
                className="mb-2 break-words"
                style={{ fontSize: '1.75rem', fontWeight: 400, letterSpacing: '-0.02em' }}
              >
                {experience.title}
              </h3>
              <p
                className="text-white/60 break-words"
                style={{ fontSize: '1.125rem', fontWeight: 400, letterSpacing: '-0.01em' }}
              >
                {experience.company}
              </p>
            </div>

            <p
              className="text-white/80 break-words min-w-0"
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.8,
                letterSpacing: '-0.01em',
              }}
            >
              {experience.description}
            </p>

            <div className="flex flex-wrap gap-3 min-w-0">
              {experience.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.6 + i * 0.1 }}
                  viewport={reduceMotion ? undefined : { once: true }}
                  className="border border-white/30 px-4 py-2 break-words min-w-0"
                  style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.05em' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connecting line */}
      {index < experiences.length - 1 && (
        <motion.div
          className="absolute left-1/2 -bottom-16 w-px h-16 bg-white/20 -translate-x-1/2 hidden lg:block"
          initial={{ scaleY: reduceMotion ? 1 : 0 }}
          whileInView={reduceMotion ? undefined : { scaleY: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1, delay: 0.8 }}
          viewport={reduceMotion ? undefined : { once: true }}
        />
      )}
    </motion.div>
  );
}

export function ExperiencesTimeline({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const transition = reduceMotion ? { duration: 0 } : { duration: 1 };
  return (
    <section className="min-h-screen bg-transparent px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={transition}
          viewport={reduceMotion ? undefined : { once: true }}
          className="pt-12 pb-32"
        >
          <h2
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
            }}
          >
            experiences
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.year}-${experience.company}-${index}`}
              experience={experience}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 2 }}
          viewport={reduceMotion ? undefined : { once: true }}
          className="mt-32 pt-32 text-center"
        >
          <p
            className="text-white/40"
            style={{ fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.1em' }}
          >
            end of timeline
          </p>
        </motion.div>
      </div>
    </section>
  );
}
