"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "120px" }}>
      <div className="container" style={{ width: "100%" }}>
        <div className="split-layout">
          
          {/* Left Column */}
          <div className="split-left">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 700, margin: 0, letterSpacing: "-0.04em", lineHeight: 1 }}
            >
              Reach Out
            </motion.h1>
          </div>

          {/* Right Column */}
          <div className="split-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "3rem", lineHeight: 1.3 }}>
                Tell me about your idea.<br />
                I'll take it from there.
              </h2>

              <form style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
                <div>
                  <label className="contact-label">Your name</label>
                  <input type="text" className="contact-input" />
                </div>
                <div>
                  <label className="contact-label">Job title</label>
                  <input type="text" className="contact-input" />
                </div>
                <div>
                  <label className="contact-label">Email</label>
                  <input type="email" className="contact-input" />
                </div>
                <div>
                  <label className="contact-label">Message</label>
                  <textarea className="contact-input" rows={4} style={{ resize: "none" }}></textarea>
                </div>

                <div style={{ marginTop: "3rem" }}>
                  <button 
                    type="button"
                    style={{
                      background: "#ffffff",
                      color: "#0d0f12",
                      padding: "1rem 2.5rem",
                      borderRadius: "100px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>



              {/* Social Links */}
              <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
                <a href="https://www.linkedin.com/in/chukwudi-ananti/" target="_blank" rel="noopener noreferrer" className="hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 500, color: "var(--text-muted)" }}>
                  <span style={{ fontWeight: 800, fontSize: "0.8rem", border: "1px solid currentColor", borderRadius: "4px", padding: "0 3px", display: "inline-flex", alignItems: "center", justifyItems: "center" }}>in</span> Linkedin
                </a>
                <a href="https://medium.com/@wilson14.ca" target="_blank" rel="noopener noreferrer" className="hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 500, color: "var(--text-muted)" }}>
                  <span style={{ fontWeight: 800, fontSize: "1.1rem", fontFamily: "serif" }}>M</span> Medium
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
