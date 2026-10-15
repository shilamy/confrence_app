import Image from "next/image";
import Link from "next/link";

// Keep this list limited to sponsors whose payment has been confirmed.
// Add a logo only after the secretariat verifies payment and registration.
const sponsorRecords: { name: string; logo: string; website?: string; registered: boolean; paymentConfirmed: boolean }[] = [];
const paymentConfirmedSponsors = sponsorRecords.filter((sponsor) => sponsor.registered && sponsor.paymentConfirmed);

const quickLinks = [
  ["Explore the themes", "Four tracks spanning statistical ML, AI for development, official statistics, and future skills.", "/themes", "Conference themes"],
  ["See the programme", "Training, research presentations, Africa Statistics Day, policy dialogue, and awards.", "/programme", "Programme outline"],
  ["Plan your visit", "Find venue details, travel context, and accommodation guidance for Embu.", "/venue", "Venue information"],
];

export default function HomepageOverview() {
  return (
    <>
      <section className="home-about-section">
        <div className="conference-container home-about-layout">
          <div>
            <p className="content-eyebrow">About the conference</p>
            <h2>Welcome to the SSK International Conference 2026</h2>
          </div>
          <div>
            <p>
              Welcome to Embu. The inaugural SSK International Conference brings together statisticians,
              data scientists, policymakers, institutions, industry, and students to
              exchange ideas and build practical skills in statistics, machine learning,
              and AI.
            </p>
            <p>
              Hosted by the University of Embu with KNBS as strategic partner, the
              conference also commemorates Africa Statistics Day on 18 November.
            </p>
            <Link className="text-link" href="/about">Read about the conference <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="home-explore-section">
        <div className="conference-container">
          <div className="section-heading-block">
            <p className="content-eyebrow">Make the most of your visit</p>
            <h2>Research, learning and connection</h2>
          </div>
          <div className="home-link-grid">
            {quickLinks.map(([title, description, href, linkLabel]) => (
              <article className="content-card home-link-card" key={title}>
                <h3>{title}</h3><p>{description}</p>
                <Link className="text-link" href={href}>{linkLabel} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <div className="home-register-banner">
            <div><p className="content-eyebrow">17–19 November 2026 · University of Embu</p><h2>Join the statistics and data community in Embu</h2></div>
            <Link className="conference-btn conference-btn-primary" href="/register">Registration and fees <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="home-sponsor-section" id="become-a-sponsor">
        <div className="conference-container home-sponsor-layout">
          <div>
            <p className="content-eyebrow">Partnership opportunities</p>
            <h2>Become a Sponsor</h2>
            <p>Support the conference and its student, research, and policy programmes. Contact the secretariat to confirm current opportunities.</p>
            <div className="home-sponsor-actions">
              <Link className="conference-btn conference-btn-primary" href="/sponsors">Explore sponsorship <span aria-hidden="true">↗</span></Link>
              <Link className="conference-btn conference-btn-outline sponsor-student-button" href="/sponsors#student">Sponsor a Student <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="confirmed-sponsors">
            <p className="card-kicker">Confirmed sponsors</p>
            {paymentConfirmedSponsors.length ? <ul>{paymentConfirmedSponsors.map((sponsor) => <li key={sponsor.name}>
              {sponsor.website ? <a href={sponsor.website} target="_blank" rel="noreferrer" aria-label={sponsor.name}><Image src={sponsor.logo} alt={sponsor.name} width={180} height={90} /></a> : <Image src={sponsor.logo} alt={sponsor.name} width={180} height={90} />}
            </li>)}</ul> : <p>Sponsor acknowledgements will appear here after registration and payment are confirmed.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
