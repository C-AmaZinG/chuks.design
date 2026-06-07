"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "180px", paddingBottom: "120px" }}>
      <div className="container">
        <div className="split-layout">
          
          {/* Left Column - Avatar */}
          <div className="split-left" style={{ flex: "0 0 250px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ width: "80px", height: "100px", borderRadius: "8px", overflow: "hidden", filter: "grayscale(100%)", marginBottom: "2rem" }}
            >
              <Image 
                src="/assets/CRIMIQ/Frame 39.png" // Placeholder avatar
                alt="Profile"
                width={80}
                height={100}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="split-right" style={{ flex: "1" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 4rem" }}>
                I'm a Growth-focused Product Designer with experience turning ideas into digital products. I work closely with founders, marketing teams, and developers to create interfaces that scale — from brand strategy to launch-ready SaaS products.
              </h1>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
                    I got my start freelancing for early-stage startups while refining my product design skills. My first big break came working with innovative tech companies, where I learned the importance of aligning design decisions with core business metrics. Since then, I've dedicated my career to crafting human-centered digital experiences.
                  </p>
                </div>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
                    Most of my work sits at the intersection of growth and product design. Whether it's designing complex enterprise dashboards that drive user adoption or crafting landing pages that convert, my goal is always to deliver measurable results. I believe that the best products are those that seamlessly integrate into the user's daily workflow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
