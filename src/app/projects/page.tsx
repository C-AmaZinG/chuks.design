"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Damas",
    subtitle: "Agency Framer Template",
    image:
      "https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?width=1160&height=800",
    href: "https://framer.link/Bl9cmkE",
  },
  {
    title: "Najm",
    subtitle: "SaaS Framer Template",
    image:
      "https://framerusercontent.com/images/e3DxUGJWqt7CIVVQIA0VZoy09FQ.png?width=1160&height=800",
    href: "https://framer.link/jU3v2q9",
  },
  {
    title: "Kavi",
    subtitle: "AI Framer Template",
    image:
      "https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?width=1160&height=800",
    href: "https://framer.link/pzlCFvH",
  },
  {
    title: "Sham",
    subtitle: "Studio Framer Template",
    image:
      "https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?width=1160&height=800",
    href: "https://framer.link/C3r2Pme",
  },
  {
    title: "Abjad",
    subtitle: "AI Framer Template",
    image: "https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png",
    href: "https://framer.link/Bl9cmkE",
  },
  {
    title: "Faseelh",
    subtitle: "Environmental Framer Template",
    image: "https://framerusercontent.com/images/ue9IClg37SpZ5YcBTAPeavvDUNo.png",
    href: "https://framer.link/Bl9cmkE",
  },
];

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
            href={project.href}
            className="project-v2-card"
            variants={itemReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.32, ease: easeOutExpo }}
          >
            <div className="project-v2-image-wrap">
              <Image
                src={project.image}
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
              <Link href="/#services-section">Services</Link>
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
