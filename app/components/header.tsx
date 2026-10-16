"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navigationGroups = [
  {
    label: "Conference",
    links: [
      { label: "About", href: "/about" },
      { label: "Themes", href: "/themes" },
      { label: "Programme", href: "/programme" },
      { label: "Schedule finder", href: "/schedule" },
      { label: "Call for papers", href: "/cfp" },
      { label: "Key dates", href: "/dates" },
    ],
  },
  {
    label: "Attend",
    links: [
      { label: "Venue", href: "/venue" },
      { label: "E-ticket information", href: "/eticket" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "People & partners",
    links: [
      { label: "Speakers", href: "/speakers" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    label: "Support",
    links: [
      { label: "Become a Sponsor", href: "/sponsors" },
      { label: "DataThon", href: "/sponsors#datathon" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeDropdowns = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest(".site-nav-more")) return;
      navigationRef.current?.querySelectorAll(".site-nav-more details[open]").forEach((details) => {
        details.removeAttribute("open");
      });
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      navigationRef.current?.querySelectorAll(".site-nav-more details[open]").forEach((details) => {
        details.removeAttribute("open");
      });
      setMobileMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeDropdowns);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeDropdowns);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

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
    return () => {
      body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousRootOverflow;
      media.removeEventListener("change", syncMenu);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <div className="conference-container site-header-inner">
        <Link className="site-brand" href="/" aria-label="Conference home">
          <span className="site-brand-copy">
            <strong className="site-brand-title">THE 2026 National Statistics Conference</strong>
          </span>
        </Link>

        <nav className="site-navigation" aria-label="Main navigation" ref={navigationRef}>
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
                  navigationRef.current?.querySelectorAll(".site-nav-more details[open]").forEach((details) => {
                    details.removeAttribute("open");
                  });
                  setMobileMenuOpen(false);
                }
              }}
            >
              <li className="site-nav-mobile-heading">
                <Link href="/" aria-label="SSK Conference home">
                  <strong>SSK Conference</strong>
                  <span>THE 2026 National Statistics Conference</span>
                </Link>
              </li>
              <li className="site-nav-home">
                <Link href="/">Home</Link>
              </li>
              {navigationGroups.map((group) => (
                <li className="site-nav-more" key={group.label}>
                  <details name="main-navigation-dropdowns">
                    <summary>{group.label}</summary>
                    <ul>
                      {group.links.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
              <li className="site-nav-register"><Link className="site-nav-cta" href="/register">Register Now</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
