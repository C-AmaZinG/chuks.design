"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, PenTool } from "lucide-react";

export default function Home() {
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
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/assets/hero_video.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
          zIndex: 1,
        }} />

        {/* Top content (Heading + Links) */}
        <div className="container" style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingTop: "1rem", margin: "0 auto", width: "100%", flex: 1 }}>
          
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
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
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
            <a href="mailto:hello@example.com" className="text-accent hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: 500 }}>
              <Mail size={20} /> Email
            </a>
            <a href="https://www.linkedin.com/in/chukwudi-ananti/" target="_blank" rel="noopener noreferrer" className="text-accent hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: 500 }}>
              <span style={{ fontWeight: 800, fontSize: "0.9rem", border: "2px solid currentColor", borderRadius: "4px", padding: "0 3px", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "20px" }}>in</span> Linkedin
            </a>
            <a href="https://medium.com/@wilson14.ca" target="_blank" rel="noopener noreferrer" className="text-accent hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: 500 }}>
              <PenTool size={20} /> Medium
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="container" style={{ position: "relative", zIndex: 2, margin: "0 auto", paddingBottom: "3rem", width: "100%" }}>
          <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.1rem", color: "#fff" }}>
            Driving measurable growth for 10+ SaaS companies and organizations across the US and EMEA.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem", padding: "0 2rem" }}>
             <img src="/assets/Immortal Cyber Teams - Logo.png" alt="Immortal Cyber Teams" style={{ height: "35px", objectFit: "contain" }} />
             <img src="/assets/MINISTRY OF JUSTICE - Delta State 2.png" alt="Ministry of Justice" style={{ height: "45px", objectFit: "contain" }} />
             <img src="/assets/Threat Intelligence - Logo.png" alt="Threat Intelligence" style={{ height: "35px", objectFit: "contain" }} />
             <img src="/assets/CrimIQ - Log0.png" alt="CrimIQ" style={{ height: "35px", objectFit: "contain" }} />
             <img src="/assets/Gallery of Code - Logo.png" alt="Gallery of Code" style={{ height: "40px", objectFit: "contain" }} />
             <img src="/assets/Firma - Logo 2.png" alt="Firma" style={{ height: "30px", objectFit: "contain" }} />
          </div>
        </div>
      </section>

      <div className="container">
        {/* Intro Section */}
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

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4rem" }}>
              <div style={{ maxWidth: "450px" }}>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-muted"
                  style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2.5rem" }}
                >
                  From websites to apps, I help founders and teams turn ideas into user-friendly products that simplify daily life while driving growth.
                </motion.p>
                
                <motion.button 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
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
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section style={{ marginTop: "150px", position: "relative" }}>
          <div style={{ position: "sticky", top: "20px", zIndex: 50 }}>
            <p className="text-accent" style={{ fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>Project //</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ marginBottom: "4rem", marginLeft: "20px", maxWidth: "800px", paddingTop: "50px" }}
          >
            <h2 className="text-muted" style={{ fontSize: "1.25rem", fontWeight: 400, marginBottom: "0.5rem" }}>Case Studies</h2>
            <p className="text-muted" style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
              Discover how I've partnered with SaaS and growth teams to solve complex UX challenges and drive measurable growth through human-centered design.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "2.5rem" }}>
            {/* Case Study 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", backgroundColor: "#222", borderBottom: "3px solid var(--accent)" }}
            >
              <div style={{ position: "relative", width: "100%", height: "350px", backgroundColor: "#000" }}>
                <Image 
                  src="/assets/crimiq.png" 
                  alt="CRIMIQ Dashboard" 
                  fill 
                  style={{ objectFit: "cover", opacity: 0.9 }} 
                />
              </div>
              <div style={{ padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 600, color: "#fff" }}>Driving Adoption & Growth in a Multi-Stakeholder Justice System</h3>
                <p className="text-muted" style={{ fontSize: "1rem", lineHeight: 1.6 }}>The goal was to make their bold mission in cybersecurity feel accessible and actionable.</p>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", backgroundColor: "#222", borderBottom: "3px solid var(--accent)" }}
            >
              <div style={{ position: "relative", width: "100%", height: "350px", backgroundColor: "#000" }}>
                <Image 
                  src="/assets/immortal.png" 
                  alt="Immortal Cyber" 
                  fill 
                  style={{ objectFit: "cover", opacity: 0.9 }} 
                />
              </div>
              <div style={{ padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 600, color: "#fff" }}>Driving Adoption & Growth in a Multi-Stakeholder Justice System</h3>
                <p className="text-muted" style={{ fontSize: "1rem", lineHeight: 1.6 }}>The goal was to make their bold mission in cybersecurity feel accessible and actionable.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ marginTop: "150px", textAlign: "center", padding: "100px 0", borderTop: "1px solid var(--border-color)" }}>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-accent"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 800, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}
          >
            Contact Me //
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "1.25rem", marginBottom: "3rem" }}
          >
            Don't be a stranger, reach out if you'd like to collaborate or just say hi:
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", gap: "3rem", marginBottom: "4rem", flexWrap: "wrap" }}
          >
            <a href="mailto:hello@example.com" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem" }} className="hover-accent">
              <Mail size={24} /> Email
            </a>
            <a href="https://www.linkedin.com/in/chukwudi-ananti/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem" }} className="hover-accent">
              <span style={{ fontWeight: 800, fontSize: "1.25rem", border: "2px solid currentColor", borderRadius: "4px", padding: "0 4px", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "24px" }}>in</span> Linkedin
            </a>
            <a href="https://medium.com/@wilson14.ca" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.25rem" }} className="hover-accent">
              <span style={{ fontWeight: 800, fontSize: "1.5rem", fontFamily: "serif" }}>M</span> Medium
            </a>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "transparent",
              color: "var(--text-main)",
              border: "2px solid var(--accent)",
              padding: "1.25rem 3.5rem",
              fontSize: "1.25rem",
              fontWeight: 600,
              borderRadius: "50px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 0 20px rgba(212, 255, 0, 0.05)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 255, 0, 0.1)';
              e.currentTarget.style.boxShadow = "0 0 30px rgba(212, 255, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = "0 0 20px rgba(212, 255, 0, 0.05)";
            }}
          >
            View Resume
          </motion.button>
        </section>
      </div>
    </main>
  );
}
