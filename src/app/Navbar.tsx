"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Ellipsis, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about-section", label: "About Me" },
  { href: "/#services-section", label: "Services & Skills" },
  { href: "/#testimonials-section", label: "Testimonials" },
  { href: "/projects", label: "Works" },
  { href: "/#contact-section", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-nav-wrap">
      <motion.nav
        className={menuOpen ? "site-nav menu-open" : "site-nav"}
        aria-label="Primary"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          borderRadius: 20,
          height: menuOpen ? "auto" : 60,
        }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="site-nav-top">
          <Link href="/" className="brand-link" onClick={() => setMenuOpen(false)}>
            Chuks
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} strokeWidth={2.4} /> : <Ellipsis size={22} strokeWidth={2.6} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              className="nav-pop-links"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  transition: { staggerChildren: 0.055, delayChildren: 0.08 },
                },
                closed: {
                  opacity: 0,
                  transition: { duration: 0.15 },
                },
              }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 10 },
                  }}
                  transition={{ duration: 0.24 }}
                >
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
