"use client";

import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { getAllProjects } from "@/data/projects";

const services = [
  {
    title: "Product Strategy",
    items: ["Idea Framing", "UX Direction", "Launch Planning"],
  },
  {
    title: "UI/UX Design",
    items: ["SaaS Interfaces", "Dashboards", "Design Systems"],
  },
  {
    title: "Growth Design",
    items: ["Landing Pages", "Conversion Flows", "Experiments"],
  },
  {
    title: "Brand Systems",
    items: ["Visual Identity", "Messaging", "Launch Assets"],
  },
];

const projects = getAllProjects();

const testimonials = [
  {
    quote:
      "Chuks helped us turn a rough idea into a polished digital experience with clear direction, strong visuals, and a structure that made the product easier to launch.",
    name: "Oscar",
    role: "Founder",
    image:
      "https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?width=3648&height=3648",
  },
  {
    quote:
      "Working with Chuks gave our startup the clarity we needed. The design felt clean, intentional, and focused on helping users understand the product faster.",
    name: "Nedu",
    role: "Startup",
    image:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?width=3220&height=3220",
  },
  {
    quote:
      "As a developer, I appreciated how practical the design system was. Everything was thoughtfully structured, responsive, and easy to translate into production.",
    name: "Daniel",
    role: "Full Stack Dev",
    image:
      "https://framerusercontent.com/images/kAftuUN9iRKwIt9M6RqZo9NS314.jpg?width=3840&height=5275",
  },
  {
    quote:
      "The work brought a clearer and more accessible digital presence to our public-facing communication, with a professional interface that feels simple to navigate.",
    name: "Ministry of Justice Delta State",
    role: "Government",
    image:
      "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?width=2662&height=3993",
  },
];

const thoughts = [
  {
    date: "Jan 23, 2022",
    title: "5 Effective Skills That Will Make You a Better UI/UX Designer",
    excerpt:
      "A practical article on empathy, curiosity, critique, collaboration, and flexibility in design.",
    image: "https://cdn-images-1.medium.com/max/1024/1*ipJRiJ-pKvRbd2H86CY2gw.png",
    href: "https://medium.com/@wilson14.ca/5-effective-skills-that-will-make-you-a-better-ui-ux-designer-224ce45de7d0",
  },
  {
    date: "Jul 15, 2024",
    title: "Microinteractions: Elevating User Experience",
    excerpt:
      "A breakdown of triggers, rules, feedback, loops, and modes that make interfaces feel alive.",
    image: "https://cdn-images-1.medium.com/max/1024/1*nvV0W-5h22BiXkaDzg26mw.png",
    href: "https://medium.com/design-bootcamp/microinteractions-elevating-user-experience-fa97c9116d55",
  },
];

const contactEmail = "wilson14.ca@gmail.com";

const quoteText =
  "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";
const quoteWords = quoteText.split(" ");

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealViewport = {
  once: true,
  amount: 0.22,
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

function QuoteWord({
  index,
  progress,
  total,
  word,
}: {
  index: number;
  progress: MotionValue<number>;
  total: number;
  word: string;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 3) / total);
  const color = useTransform(progress, [start, end], ["#d8d5cf", "#0f0f10"]);
  const opacity = useTransform(progress, [start, end], [0.35, 1]);

  return (
    <motion.span className="quote-v2-word" style={{ color, opacity }}>
      {word}
      {index < total - 1 ? " " : ""}
    </motion.span>
  );
}

export default function Home() {
  const quoteRef = useRef<HTMLElement>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="majd-page">
      <motion.section
        className="hero-v2 container"
        id="hero-section"
        initial="hidden"
        animate="visible"
        variants={staggerReveal}
      >
        <motion.div className="hero-v2-title-wrap" variants={staggerReveal}>
          <motion.h1 className="hero-v2-title" variants={itemReveal}>
            <span>GROWTH DESIGNER</span>
            <span className="hero-v2-amp">&amp;</span>
            <span>CREATIVE DIRECTOR</span>
          </motion.h1>
        </motion.div>

        <motion.div className="hero-v2-meta" variants={itemReveal}>
          <span>©2026</span>
          <span>/CREATING SINCE 2016</span>
        </motion.div>
      </motion.section>

      <motion.section
        className="bio-v2 container"
        id="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        <motion.div className="bio-v2-left" variants={itemReveal}>
          <h2>Hey!</h2>
          <p>
            I&apos;m Chukwudi Ananti, a growth designer and creative director turning
            early ideas into clear, launch-ready digital products.
          </p>
        </motion.div>

        <motion.div
          className="bio-v2-middle"
          variants={itemReveal}
          whileHover={{ scale: 0.985 }}
          transition={{ duration: 0.42, ease: easeOutExpo }}
        >
          <Image
            src="/assets/profile-silhouette-red.png"
            alt="Chukwudi Ananti portrait"
            fill
            sizes="(max-width: 980px) 100vw, 420px"
            className="cover"
          />
        </motion.div>

        <motion.div className="bio-v2-right" variants={itemReveal}>
          <p>
            I work with founders, marketing teams, and developers to design
            interfaces that feel polished, scale cleanly, and support business
            goals.
          </p>
          <p>
            Most of my work sits at the intersection of product design, brand
            strategy, and growth, from SaaS dashboards to high-performing landing
            pages.
          </p>
          <a href="#contact-section" className="inline-link">
            Let&apos;s Talk <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </motion.section>

      <section
        className="quote-v2"
        ref={quoteRef}
      >
        <div className="quote-v2-sticky container">
          <motion.p
            className="quote-v2-copy"
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={itemReveal}
          >
            {quoteWords.map((word, index) => (
              <QuoteWord
                key={`${word}-${index}`}
                index={index}
                progress={quoteProgress}
                total={quoteWords.length}
                word={word}
              />
            ))}
          </motion.p>
        </div>
      </section>

      <motion.section
        className="services-v2 container"
        id="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        <motion.h2 variants={itemReveal}>Services & Skills</motion.h2>
        <div className="services-v2-list">
          {services.map((service) => (
            <motion.article key={service.title} className="services-v2-row" variants={itemReveal}>
              <h3>{service.title}</h3>
              <p>{service.items.join(" • ")}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="projects-v2 container"
        id="works-section"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        <motion.div className="projects-v2-head" variants={itemReveal}>
          <h2>
            Featured
            <br />
            Projects
          </h2>
          <a href="/projects" className="projects-v2-viewall">
            View All Work <ArrowUpRight size={16} />
          </a>
        </motion.div>
        <div className="projects-v2-grid">
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
        </div>
      </motion.section>

      <motion.section
        className="testimonials-v2 container"
        id="testimonials-section"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        <motion.h2 variants={itemReveal}>Testimonials</motion.h2>
        <div className="testimonials-v2-grid">
          {testimonials.map((item) => (
            <motion.article key={item.name} className="testimonial-v2-card" variants={itemReveal}>
              <p dangerouslySetInnerHTML={{ __html: item.quote }} />
              <div className="testimonial-v2-user">
                <div className="testimonial-v2-avatar">
                  <Image src={item.image} alt={item.name} fill sizes="52px" className="cover" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="thoughts-v2 container"
        id="works-section"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        <motion.h2 variants={itemReveal}>Thoughts</motion.h2>
        <div className="thoughts-v2-grid">
          {thoughts.map((post) => (
            <motion.a
              key={post.title}
              href={post.href}
              className="thought-v2-card"
              variants={itemReveal}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 980px) 100vw, 50vw" className="cover" />
              <div className="thought-v2-overlay" />
              <div className="thought-v2-content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <span>{post.excerpt}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="contact-v2 container"
        id="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerReveal}
      >
        <motion.div className="contact-v2-left" variants={itemReveal}>
          <h2>Let&apos;s talk.</h2>
          <p>
            Have an idea, product, or brand experience that needs sharper design?
            Send a note and I&apos;ll get back to you soon.
          </p>
          <div className="contact-v2-socials">
            <a
              href="https://x.com/Chuks_Design"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/chuks.design/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="5" width="14" height="14" rx="4" />
                <circle cx="12" cy="12" r="3.2" />
                <circle cx="16.5" cy="7.5" r="0.7" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/chukwudi-ananti/" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 10v8M6.5 6.5v.1M10.5 18v-8M10.5 13.4c0-2.2 1.4-3.6 3.5-3.6 2 0 3.5 1.3 3.5 3.9V18" />
              </svg>
            </a>
            <a
              href="https://medium.com/@wilson14.ca"
              aria-label="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="medium-icon">
                <path d="M4.2 7.4a.9.9 0 0 0-.3-.74L2.5 5V4.7h5.1l3.95 8.65 3.47-8.65h4.86V5l-1.2 1.15a.36.36 0 0 0-.14.34v11.02a.36.36 0 0 0 .14.34L19.85 19v.3h-6.1V19l1.22-1.18c.12-.12.12-.16.12-.34V8.58l-4.34 10.68h-.55L5.15 8.58v7.49a.82.82 0 0 0 .23.68L6.96 19v.3H2.5V19l1.58-2.25a.78.78 0 0 0 .22-.68V7.4Z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.form className="contact-v2-form" variants={itemReveal}>
          <label>
            Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Your Project
            <textarea rows={5} placeholder="Tell us about your project" />
          </label>
          <button type="submit">Submit</button>
        </motion.form>
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
              Products
              <br />
              for Growth.
            </h2>
          </motion.div>
          <motion.div variants={itemReveal}>
            <h3>/Quick links</h3>
            <div className="footer-v2-links">
              <a href="#hero-section">Home</a>
              <a href="#about-section">About Me</a>
              <a href="#services-section">Services & Skills</a>
              <a href="#testimonials-section">Testimonials</a>
              <a href="/projects">Works</a>
              <a href="#contact-section">Contact</a>
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
