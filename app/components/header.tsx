"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "Themes", href: "/themes" },
  { label: "Programme", href: "/programme" },
  { label: "Key dates", href: "/dates" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

const moreLinks = [
  { label: "Call for papers", href: "/cfp" },
  { label: "Speakers", href: "/speakers" },
  { label: "Partners", href: "/partners" },
  { label: "Organizers", href: "/organizers" },
  { label: "E-ticket information", href: "/eticket" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Themes", href: "/themes" },
  { label: "Programme", href: "/programme" },
  { label: "Key Dates", href: "/dates" },
  { label: "Venue", href: "/venue" },
  { label: "Speakers", href: "/speakers" },
  { label: "Become a Sponsor", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const media = window.matchMedia("(max-width: 960px)");
    const body = document.body;
    const root = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = root.style.overflow;

    const syncMenu = () => {
      if (media.matches) {
        body.style.overflow = "hidden";
        root.style.overflow = "hidden";
      } else {
        setMobileMenuOpen(false);
      }
    };

    syncMenu();
    media.addEventListener("change", syncMenu);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousRootOverflow;
      media.removeEventListener("change", syncMenu);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <div className="conference-container site-header-inner">
        <Link className="site-brand" href="/" aria-label="Conference home">
          <span className="site-brand-copy">
            <strong className="site-brand-title">International Conference</strong>
          </span>
        </Link>

        <nav className="site-navigation" aria-label="Main navigation">
          <div className={`site-nav-disclosure${mobileMenuOpen ? " site-nav-disclosure-open" : ""}`}>
            <button
              className="site-nav-toggle"
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              aria-controls="site-nav-list"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={mobileMenuOpen ? "M6 6l12 12M18 6 6 18" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <ul
              className={`site-nav-list${mobileMenuOpen ? " site-nav-list-open" : ""}`}
              id="site-nav-list"
              onClick={(event) => {
                if (event.target instanceof Element && event.target.closest("a")) {
                  setMobileMenuOpen(false);
                }
              }}
            >
              <li className="site-nav-mobile-heading">
                <Link href="/" aria-label="SSK Conference home">
                  <strong>SSK Conference</strong>
                  <span>International Conference 2026</span>
                </Link>
              </li>
              {mobileLinks.map((item) => (
                <li className="site-nav-mobile-item" key={`mobile-${item.href}`}>
                  <Link className="site-nav-mobile-link" href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li className="site-nav-desktop-item"><Link href="/">Home</Link></li>
              {primaryLinks.map((item) => (
                <li className="site-nav-desktop-item" key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li className="site-nav-more site-nav-desktop-item">
                <details>
                  <summary>Sponsor</summary>
                  <ul>
                    <li><Link href="/sponsors">Become a Sponsor</Link></li>
                    <li><Link href="/sponsors#student">Sponsor a Student</Link></li>
                    <li><Link href="/sponsors#datathon">DataThon</Link></li>
                  </ul>
                </details>
              </li>
              <li className="site-nav-more site-nav-desktop-item">
                <details>
                  <summary>More</summary>
                  <ul>
                    {moreLinks.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li className="site-nav-register"><Link className="site-nav-cta" href="/register">Register Now</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
