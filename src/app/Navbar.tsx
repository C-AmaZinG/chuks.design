"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: "all 0.3s ease",
      backgroundColor: scrolled ? "rgba(13, 15, 18, 0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
      padding: scrolled ? "1rem 0" : "1.5rem 0",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <Link href="/" style={{
          color: "#ffffff",
          fontWeight: 500,
          fontSize: "0.95rem",
          textDecoration: "none",
          transition: "color 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#ffffff';
        }}
        >
          Chuks.Design
        </Link>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          fontSize: "0.95rem",
          color: "var(--text-muted)",
        }}>
          <Link href="/#projects" className="nav-link" style={{ textDecoration: "none", color: "inherit", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >Projects</Link>
          <Link href="/about" className="nav-link" style={{ textDecoration: "none", color: "inherit", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >About</Link>
          <Link href="/contact" className="nav-link" style={{ textDecoration: "none", color: "inherit", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >Contact</Link>
        </div>
      </div>
    </nav>
  );
}
