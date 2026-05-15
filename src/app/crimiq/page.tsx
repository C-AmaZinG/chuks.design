"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export default function CrimIQCaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  return (
    <main style={{ paddingBottom: "100px", backgroundColor: "var(--bg-color)" }}>
      {/* Navigation */}
      <nav style={{ padding: "2rem", position: "absolute", top: 0, left: 0, zIndex: 50 }}>
        <Link href="/" className="hover-accent" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
      </nav>

      {/* Hero Image Section */}
      <section style={{ width: "100%", height: "70vh", position: "relative", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.6 }}>
          <Image 
            src="/assets/crimiq.png" 
            alt="CrimIQ Hero" 
            fill 
            style={{ objectFit: "cover" }} 
            priority
          />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "50%", background: "linear-gradient(to top, var(--bg-color) 0%, transparent 100%)" }} />
      </section>

      <div className="container" style={{ marginTop: "-100px", position: "relative", zIndex: 10 }}>
        
        {/* Header / Meta Data */}
        <motion.div {...fadeIn}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <Image src="/assets/CrimIQ - Log0.png" alt="CrimIQ Logo" width={40} height={40} style={{ objectFit: "contain" }} />
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>CrimIQ</h1>
          </div>
          <h2 className="text-accent" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600, marginTop: "0.5rem", marginBottom: "3rem" }}>
            Driving Adoption & Growth in a Multi-Stakeholder Justice System
          </h2>

          <div className="glass-panel" style={{ padding: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            <div>
              <p className="text-muted" style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", fontWeight: 600 }}>Role</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>Product Designer<br/><span className="text-muted" style={{ fontSize: "0.95rem" }}>(Idea framing, system design, product strategy)</span></p>
            </div>
            <div>
              <p className="text-muted" style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", fontWeight: 600 }}>Timeline</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>2022 - 2023</p>
            </div>
            <div>
              <p className="text-muted" style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", fontWeight: 600 }}>Platform</p>
              <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>Web Application</p>
            </div>
            <div>
              <p className="text-muted" style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", fontWeight: 600 }}>Live Link</p>
              <a href="#" className="text-accent hover-accent" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 600 }}>
                View Project <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section {...fadeIn} style={{ marginBottom: "8rem", maxWidth: "900px" }}>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.8, fontWeight: 400 }}>
            CrimIQ is an integrated justice monitoring platform built to improve transparency, accountability, and data-driven decision-making across Nigeria’s criminal justice system. It connects law enforcement, custodial centres, courts, and oversight bodies (ACJMC) into a shared system.
          </p>
        </motion.section>

        {/* The Problem (2-Column Layout) */}
        <motion.section {...fadeIn} style={{ marginBottom: "8rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <h3 className="text-accent" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem", fontWeight: 700 }}>01. The Problem</h3>
              <h4 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0 0 1.5rem 0", lineHeight: 1.2 }}>Fragmented Data &<br/>Manual Bottlenecks</h4>
              <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Nigeria’s criminal justice system faced critical data silos. Arrest records, court proceedings, and custodial statuses were managed manually.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: "2.5rem", borderLeft: "4px solid var(--accent)" }}>
              <h5 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Core Pain Points</h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle2 className="text-accent" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>Manual processes were slow and error-prone.</span>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle2 className="text-accent" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>Lack of transparency led to corruption.</span>
                </li>
                <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle2 className="text-accent" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>Overcrowded custodial centres due to missing or delayed records.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Full width divider image or decorative element */}
        <motion.div {...fadeIn} style={{ width: "100%", height: "2px", background: "linear-gradient(90deg, transparent, var(--border-color), transparent)", marginBottom: "8rem" }} />

        {/* Bridging the Gap (Single Column Deep Dive) */}
        <motion.section {...fadeIn} style={{ marginBottom: "8rem", maxWidth: "1000px", margin: "0 auto 8rem auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h3 className="text-accent" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem", fontWeight: 700 }}>02. Strategy</h3>
            <h4 style={{ fontSize: "3rem", fontWeight: 700, margin: "0", lineHeight: 1.2 }}>Bridging the Gap: My Approach</h4>
          </div>
          
          <p style={{ fontSize: "1.25rem", lineHeight: 1.7, textAlign: "center", marginBottom: "4rem", color: "var(--text-muted)" }}>
            A product-led approach emphasizing three core pillars to transform the workflow:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div className="glass-panel" style={{ padding: "2.5rem", transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h5 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Ease of Data Entry</h5>
              <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>Designing intuitive forms and bulk upload features tailored specifically for non-tech-savvy officers.</p>
            </div>
            <div className="glass-panel" style={{ padding: "2.5rem", transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h5 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Interoperability</h5>
              <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>Ensuring seamless, secure data flow between the Police, Courts, and Prisons to maintain a single source of truth.</p>
            </div>
            <div className="glass-panel" style={{ padding: "2.5rem", transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <h5 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>Actionable Insights</h5>
              <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>Creating powerful dashboards for oversight bodies (ACJMC) to instantly identify system bottlenecks.</p>
            </div>
          </div>
        </motion.section>

        {/* The Solution (2-Column Image + Text) */}
        <motion.section {...fadeIn} style={{ marginBottom: "8rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", height: "600px", width: "100%", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <Image src="/assets/crimiq.png" alt="Solution Interface" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h3 className="text-accent" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem", fontWeight: 700 }}>03. Solution</h3>
              <h4 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0 0 2rem 0", lineHeight: 1.2 }}>A Unified Justice Ecosystem</h4>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <h5 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Centralized Case Management</h5>
                  <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>Tracking every single case from initial arrest to final judgment in real-time across all departments.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Real-time Notifications</h5>
                  <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>Automated smart alerts for upcoming court dates, bail conditions, and release orders to prevent administrative delays.</p>
                </div>
                <div>
                  <h5 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Oversight Dashboards</h5>
                  <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>Comprehensive data visualization tools allowing policymakers to actively track system health and overall performance.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Impact (Stats grid) */}
        <motion.section {...fadeIn} style={{ padding: "5rem 0", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h3 className="text-accent" style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem", fontWeight: 700 }}>04. The Result</h3>
            <h4 style={{ fontSize: "3rem", fontWeight: 700, margin: "0", lineHeight: 1.2 }}>Data-Driven Justice</h4>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div style={{ flex: "1 1 30%", textAlign: "center" }}>
              <div className="text-accent" style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1, marginBottom: "1rem" }}>80%</div>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>Reduction in manual<br/>data entry time</p>
            </div>
            <div style={{ flex: "1 1 30%", textAlign: "center" }}>
               <div className="text-accent" style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1, marginBottom: "1rem" }}>100%</div>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>Improved Transparency<br/>with real-time case tracking</p>
            </div>
            <div style={{ flex: "1 1 30%", textAlign: "center" }}>
               <div className="text-accent" style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1, marginBottom: "1rem" }}>4+</div>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>Better Coordination<br/>between major justice agencies</p>
            </div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.div {...fadeIn} style={{ textAlign: "center", marginTop: "6rem" }}>
           <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>Ready to talk about your next project?</h2>
           <Link href="/" style={{
              background: "#000",
              color: "#fff",
              border: "2px solid var(--accent)",
              padding: "1rem 3rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-block"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212, 255, 0, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#000'}
            >
              Get in Touch
           </Link>
        </motion.div>

      </div>
    </main>
  );
}
