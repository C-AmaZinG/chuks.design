"use client";

import React from "react";
import styles from "./demo.module.css";
import Link from "next/link";

const row1 = [
  { id: 1, title: "Ooro", tagline: "Website", width: 450, height: 600, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Tripadvisor", tagline: "App Design", width: 350, height: 500, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Legora", tagline: "Branding", width: 700, height: 500, src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Omni AI", tagline: "UI/UX", width: 400, height: 600, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
];

const row2 = [
  { id: 5, title: "Elle", tagline: "Magazine", width: 350, height: 550, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Insights", tagline: "Dashboard", width: 600, height: 450, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, title: "Studio", tagline: "Website", width: 450, height: 500, src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, title: "Vision", tagline: "Product Design", width: 500, height: 600, src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" },
];

export default function DemoPage() {
  return (
    <main className={styles.demoPage}>
      <div className={styles.header}>
        <Link href="/" style={{ color: "#d8d5cf", textDecoration: "none", marginBottom: "20px", display: "inline-block", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
          &larr; Back to Home
        </Link>
        <h2>Project Showcase Demo</h2>
        <p>Hover over the cards to see the details</p>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {row1.map((item) => (
            <div key={item.id} className={styles.card} style={{ width: item.width, height: item.height }}>
              <div className={styles.imageWrap}>
                <img src={item.src} alt={item.title} />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.tagline}>{item.tagline}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.marqueeContent}>
          {row1.map((item) => (
            <div key={`${item.id}-dup`} className={styles.card} style={{ width: item.width, height: item.height }}>
              <div className={styles.imageWrap}>
                <img src={item.src} alt={item.title} />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.tagline}>{item.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={`${styles.marqueeContent} ${styles.reverse}`}>
          {row2.map((item) => (
            <div key={item.id} className={styles.card} style={{ width: item.width, height: item.height }}>
               <div className={styles.imageWrap}>
                <img src={item.src} alt={item.title} />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.tagline}>{item.tagline}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.marqueeContent} ${styles.reverse}`}>
          {row2.map((item) => (
            <div key={`${item.id}-dup`} className={styles.card} style={{ width: item.width, height: item.height }}>
               <div className={styles.imageWrap}>
                <img src={item.src} alt={item.title} />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.tagline}>{item.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
