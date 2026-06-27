"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { getAllProjects } from "@/data/projects";

const projects = getAllProjects();

const contactEmail = "wilson14.ca@gmail.com";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealViewport = {
  once: true,
  amount: 0.2,
};

const staggerReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.08 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: easeOutExpo },
  },
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <motion.section
        className="container projects-page-hero"
        initial="hidden"
        animate="visible"
        variants={staggerReveal}
      >
        <motion.h1 variants={itemReveal}>
          My Brightest
          <br />
          Creations
        </motion.h1>
        <motion.p variants={itemReveal}>
          A showcase of my latest projects, highlighting thoughtful design,
          clear strategy, and impactful results.
        </motion.p>
      </motion.section>

      <motion.section
        className="container projects-page-grid"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={`/projects/${project.slug}`}
            className="project-v2-card"
            variants={itemReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.32, ease: easeOutExpo }}
          >
            <div className="project-v2-image-wrap">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="(max-width: 1120px) 100vw, 50vw"
                className="cover"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </motion.a>
        ))}
      </motion.section>

      <motion.footer
        className="footer-v2"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        <div className="container footer-v2-grid">
          <motion.div variants={itemReveal}>
            <h2>
              Scaling
              <br />
              Start-ups
              <br />
              for Growth.
            </h2>
          </motion.div>
          <motion.div variants={itemReveal}>
            <h3>/Quick links</h3>
            <div className="footer-v2-links">
              <Link href="/">Home</Link>
              <Link href="/#about-section">About Me</Link>
              <Link href="/#services-section">Services & Skills</Link>
              <Link href="/projects">Works</Link>
              <Link href="/#contact-section">Contact</Link>
            </div>
          </motion.div>
          <motion.div variants={itemReveal}>
            <h3>/Contact</h3>
            <a href={`mailto:${contactEmail}`} className="footer-v2-mail">
              {contactEmail}
            </a>
          </motion.div>
        </div>
        <div className="container">
          <p className="footer-v2-watermark">CHUKS</p>
        </div>
      </motion.footer>
    </main>
  );
}
