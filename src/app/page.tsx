"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const logos = [
    { src: "/assets/Immortal Cyber Teams - Logo.png", alt: "Immortal Cyber Teams", height: "35px" },
    { src: "/assets/MINISTRY OF JUSTICE - Delta State 2.png", alt: "Ministry of Justice", height: "45px" },
    { src: "/assets/Threat Intelligence - Logo.png", alt: "Threat Intelligence", height: "35px" },
    { src: "/assets/CrimIQ - Log0.png", alt: "CrimIQ", height: "35px" },
    { src: "/assets/Gallery of Code - Logo.png", alt: "Gallery of Code", height: "40px" },
    { src: "/assets/Firma - Logo 2.png", alt: "Firma", height: "30px" },
  ];

  const services = [
    {
      num: "Ø1",
      title: "Branding & Marketing",
      desc: "Branding that builds trust and drives loyalty through clear visuals and messaging, into an unforgettable online experience.",
      items: [
        { name: "Brand Strategy and Messaging", index: "01" },
        { name: "Logo Design", index: "02" },
        { name: "Visual Identity", index: "03" },
        { name: "Brand Guidelines & Frameworks", index: "04" },
        { name: "Marketing materials", index: "05" },
        { name: "Motion Design", index: "06" }
      ]
    },
    {
      num: "Ø2",
      title: "Website Design",
      desc: "Not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.",
      items: [
        { name: "Landing Pages", index: "01" },
        { name: "Corporate Websites", index: "02" },
        { name: "Blogs", index: "03" },
        { name: "E-commerce", index: "04" },
        { name: "Complex Websites", index: "05" }
      ]
    },
    {
      num: "Ø3",
      title: "Web Development",
      desc: "User-focused app design that maximizes usability and encourages retention through seamless front-end builds.",
      items: [
        { name: "Framer, Webflow, or WordPress Builds", index: "01" },
        { name: "CMS Integration", index: "02" },
        { name: "SEO Optimization", index: "03" },
        { name: "Site Migrations", index: "04" }
      ]
    },
    {
      num: "Ø4",
      title: "Application Design",
      desc: "Designing highly functional mobile and desktop applications with clean interfaces, intuitive user flows, and modern design systems.",
      items: [
        { name: "Mobile Apps", index: "01" },
        { name: "Desktop Apps", index: "02" },
        { name: "Complex Systems", index: "03" },
        { name: "Design Systems Optimization", index: "04" }
      ]
    }
  ];

  const projects = [
    {
      id: "crimiq",
      title: "Driving Adoption & Growth in a Multi-Stakeholder Justice System",
      desc: "The goal was to make their bold mission in cybersecurity feel accessible and actionable.",
      tags: ["UX/UI Design", "Dashboard", "SaaS"],
      image: "/assets/CRIMIQ/Frame 22.png",
      year: "2024"
    },
    {
      id: "immortal",
      title: "Establishing Brand Authority and Trust in Enterprise Security",
      desc: "The goal was to make their bold mission in cybersecurity feel accessible and actionable.",
      tags: ["Brand Identity", "Motion Design", "Visual Design"],
      image: "/assets/CRIMIQ/Frame 24.png",
      year: "2024"
    },
    {
      id: "formula-vintage",
      title: "Formula Vintage Classic Car Platform Redesign",
      desc: "Crafting a design that honors classic car heritage while adding a modern twist, appealing to both enthusiasts and newcomers.",
      tags: ["Landing Page", "Mobile App", "Redesign"],
      image: "/assets/adva.png",
      year: "2024"
    },
    {
      id: "sprey-zest",
      title: "Sprey Zest Playful and Bold Product Branding",
      desc: "A playful, bold approach to packaging and branding, infusing energy and personality to stand out on shelves.",
      tags: ["Branding", "Packaging", "Art Direction"],
      image: "/assets/Frame 41.png",
      year: "2023"
    }
  ];

  const testimonials = [
    {
      name: "Maya Lopez",
      role: "CEO, Fundwizz",
      quote: "His keen eye for detail and innovative approach impressed our team, turning challenges into creative solutions that set him apart.",
      avatar: "/assets/CRIMIQ/Frame 39.png"
    },
    {
      name: "Ray Brown",
      role: "Head of Product, ISO",
      quote: "Chukwudi's design decisions are sharp, user-centric, and data-driven. He doesn't just design beautiful screens; he understands the growth metrics.",
      avatar: "/assets/CRIMIQ/Frame 22.png" // placeholder
    },
    {
      name: "George Jones",
      role: "Product Manager, Gliss",
      quote: "Working with Chukwudi was an absolute breeze. He delivered a complete design system for our dashboard in record time. Highly recommended!",
      avatar: "/assets/CRIMIQ/Frame 24.png" // placeholder
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main style={{ paddingBottom: "100px" }}>
      
      {/* Hero Section */}
      <section style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem",
        overflow: "hidden",
      }}>
        <Image 
          src="/assets/workshop.png"
          alt="Hero Background"
          fill
          priority
          style={{
            objectFit: "cover",
            zIndex: 0,
            opacity: 1
          }}
        />

        {/* Top content (Heading + Links) */}
        <div className="container" style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingTop: "5rem", margin: "0 auto", width: "100%", flex: 1 }}>
          
          {/* Left main text */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-accent"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, margin: 0 }}
            >
              // Hi, I'm Chukwudi Ananti<br />
              Growth Designer<br />
              Creative Director
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ marginTop: "2rem" }}
            >
              <button style={{
                background: "#000",
                color: "#fff",
                border: "2px solid var(--accent)",
                padding: "0.8rem 2.5rem",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 255, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#000';
              }}
              >
                View Resume
              </button>
            </motion.div>
          </div>

          {/* Top right links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="https://www.linkedin.com/in/chukwudi-ananti/" target="_blank" rel="noopener noreferrer" className="text-accent hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: 500 }}>
              <span style={{ fontWeight: 800, fontSize: "0.9rem", border: "2px solid currentColor", borderRadius: "4px", padding: "0 3px", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "20px" }}>in</span> Linkedin
            </a>
            <a href="https://medium.com/@wilson14.ca" target="_blank" rel="noopener noreferrer" className="text-accent hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: 500 }}>
              <span style={{ fontWeight: 800, fontSize: "1.1rem", fontFamily: "serif", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "20px" }}>M</span> Medium
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="container" style={{ position: "relative", zIndex: 2, margin: "0 auto", paddingBottom: "3rem", width: "100%" }}>
          <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.1rem", color: "#fff" }}>
            Driving measurable growth for 10+ SaaS companies and organizations across the US and EMEA.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem", padding: "0 2rem" }}>
             {logos.map((logo, index) => (
               <img 
                 key={index} 
                 src={logo.src} 
                 alt={logo.alt} 
                 style={{ 
                   height: logo.height, 
                   objectFit: "contain", 
                   filter: logo.alt === "Ministry of Justice" ? "none" : "brightness(0) invert(1) opacity(0.6)" 
                 }} 
               />
             ))}
          </div>
        </div>
      </section>

      <div className="container">
        
        {/* Intro Section - Restored to User Preference */}
        <section style={{ padding: "120px 0", position: "relative" }}>
          <div style={{ position: "sticky", top: "20px", zIndex: 50 }}>
            <p className="text-accent" style={{ fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>Intro //</p>
          </div>
          
          <div style={{ maxWidth: "1000px", margin: "0 auto", paddingTop: "40px" }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontSize: "clamp(2rem, 4vw, 3.5rem)", 
                fontWeight: 700, 
                lineHeight: 1.3,
                marginBottom: "3rem",
                textAlign: "left",
                textIndent: "4em"
              }}
            >
              I'm a versatile <span className="text-accent">Growth-focused Product Designer who collaborates with founders and teams to transform ideas into high-performing digital products.</span> I focus on clear interfaces, data-driven decisions, and fast execution that drives measurable results, shaping human–AI experiences.
            </motion.h2>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{ padding: "120px 0", position: "relative", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <div style={{ position: "absolute", top: "40px", left: "20px", zIndex: 10 }}>
            <p style={{ 
              fontWeight: 500, 
              fontSize: "0.9rem", 
              margin: 0, 
              color: "var(--accent)", 
              fontFamily: "monospace", 
              letterSpacing: "0.05em" 
            }}>
              // Services
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "100px", marginTop: "60px" }}>
            {services.map((service, index) => (
              <div key={index} style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
                
                {/* Outline Number */}
                <div style={{ flex: "0 0 180px" }}>
                  <span className="text-outline" style={{ fontSize: "7rem", fontWeight: 700, lineHeight: 1 }}>
                    {service.num}
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div>
                    <h3 style={{ fontSize: "2rem", fontWeight: 600, margin: "0 0 0.5rem" }}>
                      {service.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0, maxWidth: "600px" }}>
                      {service.desc}
                    </p>
                  </div>

                  {/* Service Items Table */}
                  <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    {service.items.map((item, itemIdx) => (
                      <div key={itemIdx} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1.2rem 0",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                      }}>
                        <span style={{ fontSize: "1.05rem", color: "#ffffff", fontWeight: 500 }}>
                          {item.name}
                        </span>
                        <span className="font-mono text-accent" style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                          {item.index}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Selected Works / Projects Section (Sticky Stacking Cards with Side Layout) */}
        <section id="projects" style={{ padding: "120px 0", position: "relative", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <div style={{ position: "absolute", top: "40px", left: "20px", zIndex: 10 }}>
            <p style={{ 
              fontWeight: 500, 
              fontSize: "0.9rem", 
              margin: 0, 
              color: "var(--accent)", 
              fontFamily: "monospace", 
              letterSpacing: "0.05em" 
            }}>
              // Projects
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "60px", position: "relative", paddingBottom: "30vh" }}>
            {projects.map((proj, projIdx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "sticky",
                  top: `${120 + projIdx * 30}px`,
                  backgroundColor: "#15171e",
                  borderRadius: "24px",
                  boxShadow: "0 -20px 50px rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  padding: "1rem",
                  marginBottom: projIdx === projects.length - 1 ? "0px" : "40vh",
                }}
              >
                <div className="project-row">
                  {/* Left Column: Image */}
                  <div className="project-row-img">
                    <Image 
                      src={proj.image} 
                      alt={proj.title} 
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="project-overlay">
                      <div className="project-view-btn">View</div>
                    </div>
                  </div>

                  {/* Right Column: Info */}
                  <div className="project-row-content" style={{ padding: "1.5rem" }}>
                    <span className="font-mono text-accent" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>({proj.year})</span>
                    <h3 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0 0 1rem", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 3rem" }}>
                      {proj.desc}
                    </p>
                    
                    {/* Vertical Tags */}
                    <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      {proj.tags.map((t, idx) => (
                        <div key={idx} style={{
                          padding: "1.2rem 0",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                          fontSize: "1.05rem",
                          color: "var(--text-muted)"
                        }}>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section (Interactive Carousel) */}
        <section style={{ padding: "120px 0", position: "relative", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <div style={{ position: "absolute", top: "40px", left: "20px", zIndex: 10 }}>
            <p style={{ 
              fontWeight: 500, 
              fontSize: "0.9rem", 
              margin: 0, 
              color: "var(--accent)", 
              fontFamily: "monospace", 
              letterSpacing: "0.05em" 
            }}>
              // Testimonials
            </p>
          </div>
          
          <div style={{ marginTop: "60px" }}>
            <div className="testimonial-container">
              
              {/* Left Side: Active Testimonial Content */}
              <div className="testimonial-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                  >
                    <span className="font-mono text-accent" style={{ fontSize: "1rem", marginBottom: "2rem" }}>
                      0{activeTestimonial + 1} / 0{testimonials.length}
                    </span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 4rem", letterSpacing: "-0.03em" }}>
                      "{testimonials[activeTestimonial].quote.split(' ').map((word, i) => {
                         // Simple highlight logic: highlight specific keywords if desired, or let's use a standard style for the whole text, but the image highlighted "impressed our team, turning challenges into creative solutions that set him apart."
                         // I will just use the text-accent class if it's the second half.
                         const totalWords = testimonials[activeTestimonial].quote.split(' ').length;
                         if (i > totalWords / 2) {
                           return <span key={i} className="text-accent">{word} </span>;
                         }
                         return <span key={i}>{word} </span>;
                      })}"
                    </h2>
                    
                    <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1.5rem" }}>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 0.2rem" }}>
                        // {testimonials[activeTestimonial].name}
                      </h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Side: Avatars Stack */}
              <div className="testimonial-avatars">
                {testimonials.map((test, idx) => (
                  <button
                    key={idx}
                    className={`avatar-btn ${activeTestimonial === idx ? "active" : ""}`}
                    onClick={() => setActiveTestimonial(idx)}
                  >
                    <Image src={test.avatar} alt={test.name} width={60} height={60} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                  </button>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* Footer / Reach Out Section */}
        <footer style={{ padding: "120px 0 20px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            
            {/* Big CTA */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "3rem" }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem", color: "var(--accent)", fontFamily: "monospace" }}>
                  // Reach Out
                </p>
                <h2 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
                  Let's make something<br />amazing together.
                </h2>
              </div>
              <Link href="/contact" style={{
                background: "var(--accent)",
                color: "#0d0f12",
                padding: "1.2rem 3rem",
                borderRadius: "100px",
                fontSize: "1.1rem",
                fontWeight: 700,
                transition: "all 0.3s ease",
                display: "inline-block"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              >
                Start a Project
              </Link>
            </div>

            {/* Socials & Info Grid */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "3rem", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "4rem" }}>
              
              {/* Social links */}
              <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                <a href="https://www.linkedin.com/in/chukwudi-ananti/" target="_blank" rel="noopener noreferrer" className="hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", fontWeight: 500 }}>
                  <span style={{ fontWeight: 800, fontSize: "0.8rem", border: "2px solid currentColor", borderRadius: "4px", padding: "0 3px", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "18px" }}>in</span> Linkedin
                </a>
                <a href="https://medium.com/@wilson14.ca" target="_blank" rel="noopener noreferrer" className="hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", fontWeight: 500 }}>
                  <span style={{ fontWeight: 800, fontSize: "1.1rem", fontFamily: "serif", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "18px" }}>M</span> Medium
                </a>
              </div>

            </div>

            {/* Copyright banner */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--text-muted)", fontSize: "0.85rem", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "2rem" }}>
              <p style={{ margin: 0 }}>© 2026 Chukwudi Ananti. All rights reserved.</p>
            </div>

          </div>
        </footer>

      </div>
    </main>
  );
}
