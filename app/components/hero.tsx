import Link from "next/link";
import Countdown from "./Countdown";
import HeroVideo from "./hero-video";
import { CONFERENCE_DETAILS } from "../constants/type";


function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* ---------- main component ---------- */

export default function Hero() {
  return (
    <section id="home" className="conference-hero conference-hero-video">
      <HeroVideo />
      <div className="hero-background" aria-hidden="true" />

      <div className="conference-container hero-layout">
        <div className="hero-main">
          <p className="hero-kicker">
            <span className="hero-kicker-year">’26</span>
            <span className="hero-kicker-rule" aria-hidden="true" />
            <span>NATIONAL STATISTICS CONFERENCE</span>
          </p>

          <h1 className="hero-title">
            Strengthening evidence{" "}
            <br className="hero-title-break" />
            <span className="hero-title-accent">for sustainable development.</span>
          </h1>

          <p className="hero-subtitle">
            Three days in Embu examining how statistics, machine learning and
            artificial intelligence can strengthen decisions across policy,
            research and practice.
          </p>

          <dl className="hero-details">
            <div className="hero-detail">
              <dt className="hero-detail-icon">
                <CalendarIcon />
                <span className="sr-only">Conference dates</span>
              </dt>
              <dd>
                <span className="hero-detail-label" aria-hidden="true">
                  Conference dates
                </span>
                <span className="hero-detail-value">
                  {CONFERENCE_DETAILS.dates}
                </span>
              </dd>
            </div>

            <div className="hero-detail">
              <dt className="hero-detail-icon">
                <PinIcon />
                <span className="sr-only">Venue</span>
              </dt>
              <dd>
                <span className="hero-detail-label" aria-hidden="true">Venue</span>
                <span className="hero-detail-value">
                  {CONFERENCE_DETAILS.venue}
                </span>
              </dd>
            </div>

          </dl>

          <div className="hero-actions">
            <Link href="/register" className="conference-btn conference-btn-primary">
              Register now <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/cfp" className="conference-btn conference-btn-secondary">
              Call for papers <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <Countdown />
      </div>
    </section>
  );
}
