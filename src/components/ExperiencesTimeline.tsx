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
    title: 'computer science teaching assistant',
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

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative mb-32"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
      >
        {/* Year - Left side for even, right for odd */}
        <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span
              className="block"
              style={{
                fontSize: '5rem',
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
              }}
            >
              {experience.year}
            </span>
          </motion.div>
        </div>

        {/* Content - Right side for even, left for odd */}
        <div className={`${index % 2 === 0 ? '' : 'lg:order-1'}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3
                className="mb-2"
                style={{ fontSize: '1.75rem', fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                {experience.title}
              </h3>
              <p
                className="text-white/60"
                style={{ fontSize: '1.125rem', fontWeight: 300, letterSpacing: '-0.01em' }}
              >
                {experience.company}
              </p>
            </div>

            <p
              className="text-white/80"
              style={{
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.8,
                letterSpacing: '-0.01em',
              }}
            >
              {experience.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {experience.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="border border-white/30 px-4 py-2"
                  style={{ fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.05em' }}
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
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        />
      )}
    </motion.div>
  );
}

export function ExperiencesTimeline() {
  return (
    <section className="min-h-screen bg-transparent px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pt-12 pb-32"
        >
          <h2
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
            }}
          >
            experiences
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.year} experience={experience} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mt-32 pt-32 text-center"
        >
          <p
            className="text-white/40"
            style={{ fontSize: '0.875rem', fontWeight: 300, letterSpacing: '0.1em' }}
          >
            end of timeline
          </p>
        </motion.div>
      </div>
    </section>
  );
}
