import { motion } from "motion/react";

export function IntroSection() {
  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl"
      >
        <p className="text-white/90 mb-6" style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.5, letterSpacing: "-0.01em" }}>
            Professionally, my interests lie in 
            creating useful applications (web and mobile) and working with data 
            (ML, bioinformatics, being an SQL monkey)!
          </p>
          <p className="text-white/90 mb-6" style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.5, letterSpacing: "-0.01em" }}>
            Personally, I enjoy reading, running, photography, and trying new food. 
            I'm a huge foodie so feel free to reach out to me anytime, I would love to connect over a donut :D
          </p>
      </motion.div>
    </section>
  );
}
