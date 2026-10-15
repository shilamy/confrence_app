import Image from "next/image";
import Link from "next/link";
import { CONFERENCE_DETAILS, FOOTER_LINKS } from "../constants/type";

const participationLinks = [
  { label: "Register", href: "/register" },
  { label: "Call for papers", href: "/cfp" },
  { label: "Sponsorship", href: "/sponsors" },
  { label: "Contact the secretariat", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="conference-container">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Image src="/img/logos/ssk.jpg" alt="" width={48} height={48} />
            <div>
              <p className="site-footer-title">{CONFERENCE_DETAILS.name}</p>
              <p className="site-footer-meta">
                {CONFERENCE_DETAILS.dates} · {CONFERENCE_DETAILS.venue}
              </p>
            </div>
            <p className="site-footer-description">{CONFERENCE_DETAILS.theme}.</p>
          </div>

          <nav aria-label="Conference pages">
            <h2>Explore</h2>
            <ul className="site-footer-links">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
              <li><Link href="/speakers">Speakers</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/organizers">Organizers</Link></li>
            </ul>
          </nav>

          <nav aria-label="Participation links">
            <h2>Participate</h2>
            <ul className="site-footer-links">
              {participationLinks.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
              <li><Link href="/venue">Venue and travel</Link></li>
            </ul>
          </nav>

          <div className="site-footer-contact">
            <h2>Contact</h2>
            <a href="mailto:conference@sskenya.org">conference@sskenya.org</a>
            <a href="tel:+254739639425">+254 739 639 425</a>
            <a href="https://www.sskenya.org" target="_blank" rel="noreferrer">
              Statistical Society of Kenya ↗
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© 2026 Statistical Society of Kenya</span>
          <span>17–19 November 2026 · University of Embu, Kenya</span>
        </div>
      </div>
    </footer>
  );
}
