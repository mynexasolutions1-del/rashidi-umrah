"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <div className="nav-container">
        <Link href="/" className="logo">
          <img 
            src="/images/logo.jpeg" 
            alt="Rashidi Umrah Logo" 
            style={{ height: '65px', width: 'auto', borderRadius: '4px' }} 
          />
          <span className="logo-cursive-text">Rashidi Umrah & Hajj</span>
        </Link>

        <nav className={`nav-menu ${open ? "nav-menu-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-nav-actions">
            <a href="tel:+918094771024" className="contact-widget-icon" aria-label="Call Us">
              <i className="fa-solid fa-phone"></i>
            </a>
            <button className="header-btn">
              Enquire Now
            </button>
          </div>
        </nav>

        <div className="nav-right">
          <a href="tel:+918094771024" className="contact-widget-icon" aria-label="Call Us">
            <i className="fa-solid fa-phone"></i>
          </a>
          <button className="header-btn">
            Enquire Now
          </button>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
