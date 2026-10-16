import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONFERENCE_PARTNERS } from "../constants/type";
import ScheduleExplorer from "./schedule-explorer";
import RegistrationDeadlineDialog from "./registration-deadline-dialog";
import { DataThonRegistrationDialog, SponsorProcessDialog } from "./sponsor-dialogs";

const subThemes = [
  { number: 2, title: "Assuring Sustainable Water Availability and Safe Sanitation Systems to Achieve the Goals of Agenda 2063." },
  { number: 3, title: "Leveraging Machine Learning and Artificial Intelligence to Strengthen Water and Sanitation Statistics for Sustainable Development and Agenda 2063" },
  { number: 4, title: "Data Quality Assurance and Statistical Standards: Integration of Big Data, Geospatial Data, Citizen-Generated Data, and Administrative Data in Official Statistics" },
  { number: 5, title: "Data Governance, Ethics, Privacy, and Responsible AI." },
  { number: 6, title: "Innovation in Census and Survey Methodologies" },
  { number: 7, title: "Open Data, Data Visualisation, and Communication of Statistics" },
  { number: 8, title: "Partnerships for Statistical Innovation." },
];

const milestones = [
  { date: "February 2026", title: "University committee constituted", state: "complete" },
  { date: "June 2026", title: "Conference website and registration launched", state: "complete" },
  { date: "June 2026", title: "Call for abstracts and papers launched", state: "complete" },
  { date: "15 August 2026", title: "Abstract submission deadline", state: "complete" },
  { date: "31 August 2026", title: "Speaker and trainer confirmations; sponsor deadline", state: "complete" },
  { date: "September 2026", title: "Abstract review and author notifications", state: "complete" },
  { date: "October 2026", title: "Conference programme publication", state: "current" },
  { date: "31 October 2026", title: "General attendee registration closes", state: "upcoming" },
  { date: "November 2026", title: "Final venue and delegate preparations", state: "upcoming" },
  { date: "16 November 2026", title: "Pre-conference preparation day", state: "upcoming" },
  { date: "17–19 November 2026", title: "SSK International Conference", state: "conference" },
];

const feeOptions = [
  { category: "Student", fee: "KES 3,000", daily: "KES 1,000/day", note: "Valid student ID or proof of enrolment required." },
  { category: "SSK member", fee: "KES 7,000", daily: "KES 3,000/day", note: "Proof of current SSK membership required." },
  { category: "Professional", fee: "KES 12,000", daily: "KES 5,000/day", note: "For government, NGO, academic and private-sector delegates." },
  { category: "International", fee: "USD 150", daily: "USD 70/day", note: "For delegates travelling from outside Kenya." },
];

const pageTitles: Record<string, { eyebrow: string; title: string; description: string }> = {
  about: {
    eyebrow: "About the Conference",
    title: "Africa's Premier Statistics, ML & AI Gathering",
    description: "",
  },
  themes: {
    eyebrow: "Programme",
    title: "Conference themes",
    description: "The main theme and seven sub-themes guiding the conference.",
  },
  programme: {
    eyebrow: "Schedule",
    title: "Conference programme",
    description: "Explore the programme by day, then use the schedule finder to search sessions and build a personal itinerary.",
  },
  speakers: {
    eyebrow: "Speaker lineup",
    title: "Meet the conference speakers",
    description: "Profiles of confirmed researchers, statisticians, and practitioners will appear here as the lineup is finalized.",
  },
  dates: {
    eyebrow: "Important milestones",
    title: "Key dates",
    description: "Abstract and planning milestones alongside the registration deadline and conference dates.",
  },
  cfp: {
    eyebrow: "Submit your research",
    title: "Call for abstracts and papers",
    description: "Original theoretical and applied research on statistics, machine learning, and AI for sustainable development.",
  },
  partners: {
    eyebrow: "Collaboration",
    title: "Principal partners",
    description: "The conference is convened by the Statistical Society of Kenya, hosted by the University of Embu, and held in strategic partnership with KNBS.",
  },
  venue: {
    eyebrow: "Location",
    title: "University of Embu",
    description: "The host institution for the SSK Inaugural International Conference, located in Embu County at the foot of Mount Kenya.",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Contact the conference secretariat",
    description: "For conference, registration, abstract, accommodation, partnership, and sponsorship enquiries, contact the SSK team.",
  },
  sponsors: {
    eyebrow: "Partner with us",
    title: "Sponsorship and exhibition",
    description: "Sponsorship and exhibition opportunities listed in the conference information. Contact the secretariat to confirm current availability.",
  },
  register: {
    eyebrow: "Registration",
    title: "Conference registration fees",
    description: "Fees cover three-day attendance, conference materials, delegate pack, and daily meals. Daily rates are also listed; accommodation is separate.",
  },
  eticket: {
    eyebrow: "Digital access",
    title: "E-ticket and gate pass information",
    description: "Registration and delegate access are managed through the official conference portal. This website does not create or verify gate passes.",
  },
};

export const CONFERENCE_PAGE_SLUGS = Object.keys(pageTitles);

function PageIntro({ slug }: { slug: string }) {
  const page = pageTitles[slug];
  if (!page) notFound();

  return (
    <header className="content-page-intro">
      <p className="content-eyebrow">{page.eyebrow}</p>
      <h1>{page.title}</h1>
      {page.description && <p className="content-page-lead">{page.description}</p>}
    </header>
  );
}

function AboutContent() {
  const highlights = [
    ["Keynote addresses", "Insights from academics, policymakers, and practitioners working with statistics, machine learning, and AI for development."],
    ["Peer-reviewed research", "Original research across the conference sub-themes, reviewed by a multidisciplinary scientific committee."],
    ["Hands-on training", "Practical learning in statistical ML, AI policy, official statistics modernization, and reproducible research."],
    ["Student innovation", "A showcase and mentorship platform for emerging statisticians and data scientists, with research and innovation awards."],
    ["Policy dialogue", "Roundtables connecting government, academia, industry, and development partners around evidence-based policy."],
    ["Regional collaboration", "A gathering for Kenya, East Africa, and the wider international statistics and data science community."],
  ];

  return (
    <>
      <section className="content-section about-copy">
        <p>
          The <strong>International Conference on Strengthening Evidence for Sustainable Development through Statistics, Machine Learning, and AI</strong> is the inaugural flagship conference of the Statistical Society of Kenya (SSK), hosted at the University of Embu, Kenya.
        </p>
        <p>
          Held in strategic partnership with the Kenya National Bureau of Statistics (KNBS) and jointly commemorating Africa Statistics Day, this landmark three-day event brings together statisticians, data scientists, policymakers, government institutions, development partners, industry innovators, and students from across Kenya and the broader African region — and beyond — to exchange knowledge, build skills, and foster collaboration.
        </p>
        <p>
          In an era where data is reshaping how governments design policies, allocate resources, and monitor development outcomes, this conference positions statistics as the essential foundation of trustworthy AI and evidence-based decision-making for sustainable development.
        </p>
        <p>
          The conference directly contributes to <strong>Kenya&apos;s Vision 2030</strong> and the <strong>United Nations Sustainable Development Goals</strong> by advancing data literacy, AI ethics, and capacity building across the continent.
        </p>
        <figure className="about-photo">
          <Image src="/images/conference-collaboration.png" alt="East African researchers collaborating around data and research materials" fill sizes="(max-width: 800px) 100vw, 800px" />
          <figcaption>Research, learning and collaboration at the heart of the conference</figcaption>
        </figure>
      </section>
      <section className="content-section about-expectations">
        <div className="section-heading-block">
          <p className="content-eyebrow">What to expect</p>
          <h2>Research, practice and collaboration</h2>
        </div>
        <div className="feature-grid">
          {highlights.map(([title, description]) => (
            <article className="content-card feature-card" key={title}>
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ThemesContent() {
  return (
    <section className="content-section themes-content">
      <section className="theme-main-theme" aria-labelledby="main-theme-heading">
        <div className="theme-main-image-wrap" aria-hidden="true">
          <Image
            className="theme-main-image"
            src="/images/conference-campus.png"
            alt=""
            fill
            sizes="(max-width: 800px) 100vw, 1160px"
          />
        </div>
        <p className="theme-main-label">Main theme</p>
        <h2 id="main-theme-heading">Strengthening Evidence for Sustainable Development through Statistics, Machine Learning and Artificial Intelligence</h2>
      </section>

      <section className="theme-subthemes" aria-labelledby="subthemes-heading">
        <header className="theme-subthemes-heading">
          <p className="content-eyebrow">Areas of focus</p>
          <h2 id="subthemes-heading">Conference sub-themes</h2>
        </header>
        <ol className="subtheme-grid" start={2}>
          {subThemes.map((subTheme) => (
            <li className="subtheme-item" key={subTheme.number}>
              <span className="subtheme-number">{String(subTheme.number).padStart(2, "0")}</span>
              <h3>{subTheme.title}</h3>
            </li>
          ))}
        </ol>
      </section>

      <p className="content-actions"><Link className="text-link" href="/cfp">Read the call for papers <span aria-hidden="true">→</span></Link></p>
    </section>
  );
}

function DatesContent() {
  return (
    <section className="content-section">
      <div className="timeline-list">
        {milestones.map((item) => (
          <article className={`timeline-card timeline-${item.state}`} key={item.title}>
            <p>{item.date}</p><h2>{item.title}</h2>
            <span>{item.state === "complete" ? "Past milestone" : item.state === "current" ? "Scheduled this month" : item.state === "conference" ? "Conference" : "Upcoming"}</span>
          </article>
        ))}
      </div>
      <aside className="callout callout-warm">
        The abstract deadline listed in the conference information was 15 August 2026. For late-submission enquiries, contact the secretariat.
      </aside>
    </section>
  );
}

function CallForPapersContent() {
  const steps = [
    ["Prepare an abstract", "The conference information requests a structured abstract of 300–500 words, with title, authors, institution, keywords, and selected sub-theme."],
    ["Submit online", "The original submission portal is linked below. The published deadline was 15 August 2026."],
    ["Peer review", "The scientific committee planned double-blind review, with author notifications in September 2026."],
    ["Full paper and presentation", "Accepted authors were invited to submit full papers during September–October for presentation and proceedings consideration."],
  ];

  return (
    <section className="content-section">
      <div className="callout callout-warm deadline-callout">
        <div><p className="card-kicker">Published deadline</p><strong>15 August 2026</strong></div>
        <p>The abstract submission deadline has passed. Contact the conference secretariat for any late-submission or review enquiries.</p>
      </div>
      <div className="content-two-column">
        <div>
          <h2>Original research contributions</h2>
          <p>The SSK International Conference invites theoretical and applied contributions advancing statistics, machine learning, and AI for sustainable development, from researchers, practitioners, and students in Kenya and internationally.</p>
          <h3>Submission tracks</h3>
          <ul className="check-list">{subThemes.map((subTheme) => <li key={subTheme.number}>{subTheme.title}</li>)}</ul>
          <a className="conference-btn conference-btn-outline" href="https://portal.sskenya.org/2026-conference-abstract-submission" target="_blank" rel="noreferrer">Check the official portal ↗</a>
        </div>
        <div className="process-list">
          {steps.map(([title, text], index) => (
            <article className="process-step" key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgrammeContent() {
  return (
    <section className="content-section programme-content">
      <ScheduleExplorer variant="overview" />
    </section>
  );
}

function SpeakersContent() {
  const speakerRoles = [
    {
      id: "kenyan-keynote",
      initials: "KS",
      label: "Keynote speaker",
      title: "Kenyan statistics leader — TBA",
      occupation: "Academic or senior statistician",
      details: "A Kenyan voice advancing statistical science and evidence-led development.",
      topics: ["Statistics", "AI policy", "Kenya"],
    },
    {
      id: "international-researcher",
      initials: "IR",
      label: "Research speaker",
      title: "International researcher — TBA",
      occupation: "Machine learning or development data researcher",
      details: "Research connecting machine learning, responsible AI, and development data.",
      topics: ["ML research", "Development", "Responsible AI"],
    },
    {
      id: "policy-leader",
      initials: "PL",
      label: "Policy speaker",
      title: "Statistics or policy leader — TBA",
      occupation: "Government or official statistics leader",
      details: "A public-sector perspective on trustworthy data, official statistics, and policy.",
      topics: ["Policy", "Official statistics", "Government"],
    },
  ];
  const confirmedSpeakers: {
    name: string;
    occupation: string;
    details: string;
    topic: string;
    image?: string;
  }[] = [];

  return (
    <section className="content-section">
      <p className="speakers-intro">Explore the expertise shaping the conference conversations. Each profile highlights a speaker’s role, background, and areas of focus.</p>
      {confirmedSpeakers.length ? (
        <div className="speaker-grid">
          {confirmedSpeakers.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-card-portrait">
                {speaker.image ? (
                  <Image src={speaker.image} alt={speaker.name} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 360px" />
                ) : (
                  <div className="speaker-card-monogram" aria-hidden="true">
                    {speaker.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase()}
                  </div>
                )}
                <span className="speaker-card-confirmed">Confirmed speaker</span>
              </div>
              <div className="speaker-card-content">
                <h2>{speaker.name}</h2>
                <p className="speaker-card-occupation">{speaker.occupation}</p>
                <p className="speaker-card-details">{speaker.details}</p>
                <div className="speaker-card-topic">
                  <span>Conference focus</span>
                  <p>{speaker.topic}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <>
          <div className="speaker-role-grid" aria-label="Speaker roles to be announced">
            {speakerRoles.map((role) => (
              <article className={`speaker-card speaker-role-card speaker-role-${role.id}`} key={role.id}>
                <div className="speaker-card-portrait speaker-role-portrait">
                  <span className="speaker-card-monogram" aria-hidden="true">{role.initials}</span>
                  <span className="speaker-card-confirmed">{role.label} · TBA</span>
                </div>
                <div className="speaker-card-content">
                  <h2>{role.title}</h2>
                  <p className="speaker-card-occupation">{role.occupation}</p>
                  <p className="speaker-card-details">{role.details}</p>
                  <ul className="speaker-topic-tags" aria-label="Related topics">
                    {role.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="speaker-lineup-note">These are the speaker profiles the programme is building toward. Names and portraits will be added after confirmation.</p>
        </>
      )}
      <p className="content-actions">Interested in speaking? <Link className="text-link" href="/contact">Contact the conference team →</Link></p>
    </section>
  );
}

function PartnersContent() {
  const descriptions: Record<string, [string, string, string]> = {
    "Kenya National Bureau of Statistics": ["Strategic partner", "Kenya’s principal government agency for official statistics, partnering on the Africa Statistics Day celebration and the national data ecosystem.", "https://www.knbs.or.ke"],
    "Statistical Society of Kenya": ["Convener and organizer", "The professional home of statisticians in Kenya, convening the conference to advance statistical science and evidence-based development.", "https://www.sskenya.org"],
    "University of Embu": ["Host institution", "A center of academic excellence in science, technology, and applied research, hosting the conference on its campus.", "https://embuni.ac.ke"],
  };

  return (
    <section className="content-section">
      <div className="partner-card-grid">
        {CONFERENCE_PARTNERS.map((partner) => {
          const [role, description, url] = descriptions[partner.name];
          return (
            <article className="content-card principal-partner-card" key={partner.name}>
              <div className="principal-partner-logo"><Image src={partner.src} alt={partner.name} width={180} height={100} /></div>
              <p className="card-kicker">{role}</p><h2>{partner.name}</h2><p>{description}</p>
              <a className="text-link" href={url} target="_blank" rel="noreferrer">Visit organization ↗</a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function RegisterContent() {
  return (
    <section className="content-section">
      <p className="section-copy">Choose the registration category that fits you. Full-conference fees include conference materials, a delegate pack, and daily meals. Accommodation is separate.</p>
      <div className="fee-grid">
        {feeOptions.map((fee, index) => (
          <article className={`content-card fee-card${index === 1 ? " fee-card-featured" : ""}`} key={fee.category}>
            <div className="fee-card-heading"><p className="card-kicker">Delegate category</p><h2>{fee.category}</h2></div>
            <p className="fee-price">{fee.fee}</p><p className="fee-daily">{fee.daily}</p>
            <ul className="check-list"><li>Three-day conference access</li><li>Delegate pack and materials</li><li>Daily meals</li><li>Sessions and workshops</li><li>Certificate of participation</li></ul>
            <p className="fee-note">{fee.note}</p>
            <a className="conference-btn conference-btn-primary fee-register-button" href="https://portal.sskenya.org/2026-conference-registration" target="_blank" rel="noreferrer">Register <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
      <RegistrationDeadlineDialog />
      <article className="content-card accommodation-card">
        <p className="card-kicker">Stay in Embu</p><h2>Recommended accommodation</h2>
        <p>Accommodation is not included in registration. The previous conference information recommends booking directly with hotels in Embu and contacting the secretariat for assistance.</p>
        <ul className="tag-list"><li>Isaac Walton Inn Embu</li><li>The Marvel Hotel</li><li>Winer Villa Hotel</li></ul>
        <Link className="text-link" href="/venue">Venue and accommodation information →</Link>
      </article>
    </section>
  );
}

function SponsorsContent() {
  const tiers = [
    {
      name: "Title",
      price: "KES 1,500,000",
      availability: "1 listed in the published package",
    },
    {
      name: "Platinum",
      price: "KES 1,000,000",
      availability: "2 listed in the published package",
    },
    {
      name: "Gold",
      price: "KES 500,000",
      availability: "3 listed in the published package",
    },
    {
      name: "Silver",
      price: "KES 250,000",
      availability: "4 listed in the published package",
    },
  ];
  return (
    <section className="content-section sponsors-content">
      <div className="sponsor-action-band">
        <div>
          <p className="content-eyebrow">Partner with the conference</p>
          <h2>Put your organisation at the centre of the conversation.</h2>
        </div>
        <div className="sponsor-action-buttons">
          <a className="conference-btn conference-btn-outline sponsor-prospectus-button" href="https://conference.sskenya.org/#/contact" target="_blank" rel="noreferrer">Request Sponsorship Prospectus <span aria-hidden="true">→</span></a>
          <a className="conference-btn conference-btn-primary sponsor-register-button" href="https://portal.sskenya.org/2026-conference-sponsorship" target="_blank" rel="noreferrer">Register as a Sponsor <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="callout callout-warm sponsor-deadline-note">The published sponsor confirmation deadline was 31 August 2026. Contact SSK to confirm whether any opportunities remain available.</div>
      <header className="sponsor-tier-heading">
        <p className="content-eyebrow">Published sponsorship packages</p>
        <h2>Choose your level of impact</h2>
      </header>
      <div className="sponsor-tier-grid">
        {tiers.map((tier) => (
          <article className={`sponsor-tier-card sponsor-tier-${tier.name.toLowerCase()}`} key={tier.name}>
            <header className="sponsor-tier-card-heading">
              <p className="card-kicker">Sponsorship level</p>
              <h3>{tier.name}</h3>
            </header>
            <div className="sponsor-tier-card-body">
              <p className="sponsor-tier-price">{tier.price}</p>
              <p className="sponsor-tier-availability">{tier.availability}</p>
              <p className="sponsor-tier-inclusions">Request the prospectus for package inclusions.</p>
              <a className="conference-btn conference-btn-primary sponsor-tier-cta" href="https://portal.sskenya.org/2026-conference-sponsorship" target="_blank" rel="noreferrer">Register at {tier.name} <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
      <section className="exhibition-section" aria-labelledby="exhibition-heading">
        <header className="exhibition-heading">
          <div>
            <p className="content-eyebrow">Meet the people behind the data</p>
            <h2 id="exhibition-heading">Exhibition &amp; Innovation Booths</h2>
            <p>Showcase products and ideas to statisticians, data scientists, public-sector leaders, academics, and students.</p>
          </div>
          <span className="exhibition-capacity">20 booths listed</span>
        </header>
        <div className="exhibition-booth-grid">
          <article className="exhibition-booth-card">
            <p className="card-kicker">Standard booth</p>
            <h3>KES 50,000</h3>
            <ul>
              <li>Exhibition table, two chairs, and branded booth space</li>
              <li>Two exhibitor passes with daily meals</li>
              <li>Company listing in the programme</li>
              <li>Access to all three conference days</li>
            </ul>
          </article>
          <article className="exhibition-booth-card exhibition-booth-premium">
            <p className="card-kicker">Premium booth</p>
            <h3>KES 100,000</h3>
            <ul>
              <li>Larger, prime-location booth near the plenary entrance</li>
              <li>Three exhibitor passes with daily meals</li>
              <li>Logo on exhibition signage and programme</li>
              <li>Five-minute product or innovation pitch</li>
            </ul>
          </article>
        </div>
        <div className="exhibition-footer">
          <p>Space is limited and allocated first-come, first-served. Title, Platinum, and Gold sponsors receive a complimentary premium booth. Contact the secretariat to confirm availability.</p>
          <a className="conference-btn conference-btn-primary" href="mailto:conference@sskenya.org?subject=Exhibition%20booth%20reservation">Reserve an Exhibition Booth <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <div className="sponsor-process-row">
        <p>Need the full package details, steps, and deadlines?</p>
        <SponsorProcessDialog />
      </div>
      <section className="datathon-section" id="datathon" aria-labelledby="datathon-heading">
        <div className="datathon-copy">
          <p className="content-eyebrow">Build with data</p>
          <h2 id="datathon-heading">DataThon</h2>
          <p>Bring your curiosity, data skills, and ideas to a collaborative challenge connected to statistics and sustainable development.</p>
        </div>
        <div className="datathon-action">
          <p>Interested in taking part? Send your details to the secretariat to register your interest.</p>
          <DataThonRegistrationDialog />
        </div>
      </section>
      <div className="callout callout-blue sponsor-contact">
        <p>To ask whether sponsorship or booth opportunities remain, email <a href="mailto:conference@sskenya.org">conference@sskenya.org</a> or call <a href="tel:+254739639425">+254 739 639 425</a>.</p>
      </div>
    </section>
  );
}

function VenueContent() {
  const facilities = [
    "Main auditorium for plenary sessions (300+ capacity)",
    "Parallel rooms for paper presentations",
    "Computer labs for practical workshops",
    "Exhibition space for sponsors and partners",
    "High-speed Wi-Fi, AV and campus catering facilities",
  ];
  return (
    <section className="content-section">
      <div className="venue-photo-banner">
        <Image src="/media/embu-main.jpg" alt="Main entrance and grounds of the University of Embu" fill sizes="(max-width: 1100px) 100vw, 1160px" priority />
        <div><p className="card-kicker">Conference venue</p><h2>Welcome to Embu</h2><p>University of Embu · 17–19 November 2026</p></div>
      </div>
      <div className="venue-grid">
        <article className="content-card venue-card">
          <p className="card-kicker">Host institution</p><h2>University of Embu</h2>
          <p>P.O. Box 6-60100, Embu, Kenya. Use the venue guide below to plan your visit.</p>
          <div className="venue-infographic-grid">{facilities.map((facility, index) => <article key={facility}><span>{String(index + 1).padStart(2, "0")}</span><p>{facility}</p></article>)}</div>
          <a className="conference-btn conference-btn-outline" href="https://www.google.com/maps/search/?api=1&query=University+of+Embu%2C+Embu%2C+Kenya" target="_blank" rel="noreferrer">Open directions ↗</a>
        </article>
        <article className="venue-map-card">
          <iframe src="https://www.google.com/maps?q=University+of+Embu,+Embu,+Kenya&z=15&output=embed" title="Map showing the University of Embu" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </article>
      </div>
      <div className="facts-grid">
        <article><strong>~120 km</strong><span>From Nairobi CBD</span></article>
        <article><strong>~2 hours</strong><span>Drive from Nairobi</span></article>
        <article><strong>5,400+</strong><span>University students</span></article>
        <article><strong>ISO 9001</strong><span>Certified university</span></article>
      </div>
      <article className="content-card accommodation-card"><p className="card-kicker">Accommodation assistance</p><h2>Plan your stay</h2><p>Accommodation is separate from registration. Contact the secretariat for guidance on options and rates; early booking is recommended.</p><p><a href="tel:+254727026670">+254 727 026 670</a> · <a href="mailto:conference@sskenya.org">conference@sskenya.org</a></p></article>
    </section>
  );
}

function ContactContent() {
  const contactItems = [
    ["Organizer", "Statistical Society of Kenya (SSK)", "Nyayo House, 18th Floor, Nairobi, Kenya · P.O. Box 62000-00200"],
    ["General enquiries", "conference@sskenya.org", "Conference enquiries, partnerships, sponsorship, registration and accommodation."],
    ["Conference coordinator", "rc_eastern@sskenya.org", "Obwoge Frankline Keraro · Regional Coordinator, Eastern Kenya"],
    ["Phone", "+254 739 639 425", "+254 725 817 836 · +254 727 026 670"],
    ["Venue", "University of Embu", "P.O. Box 6-60100, Embu, Kenya"],
  ];
  return (
    <section className="content-section">
      <div className="contact-card-grid">
        {contactItems.map(([label, value, note]) => (
          <article className="content-card contact-card" key={label}>
            <p className="card-kicker">{label}</p>
            {label === "General enquiries" || label === "Conference coordinator" ? <a href={`mailto:${value}`}>{value}</a> : label === "Phone" ? <a href="tel:+254739639425">{value}</a> : <h2>{value}</h2>}
            <p>{note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EticketContent() {
  return (
    <section className="content-section content-narrow">
      <div className="callout callout-warm"><strong>Use the official registration portal.</strong> The previous site described local ticket generation and gate-pass verification, but this Next.js site has no ticketing or verification backend. It must not create or claim to validate passes.</div>
      <article className="content-card">
        <h2>After registering</h2>
        <ol className="number-list"><li>Complete registration through the SSK conference portal.</li><li>Keep the confirmation and any e-ticket issued by the portal.</li><li>For ticket access or registration help, contact <a href="mailto:conference@sskenya.org">conference@sskenya.org</a>.</li></ol>
        <a className="conference-btn conference-btn-primary" href="https://portal.sskenya.org/2026-conference-registration" target="_blank" rel="noreferrer">Open registration portal ↗</a>
      </article>
    </section>
  );
}

export default function ConferencePage({ slug }: { slug: string }) {
  const page = pageTitles[slug];
  if (!page) notFound();

  let content;
  switch (slug) {
    case "about": content = <AboutContent />; break;
    case "themes": content = <ThemesContent />; break;
    case "programme": content = <ProgrammeContent />; break;
    case "speakers": content = <SpeakersContent />; break;
    case "dates": content = <DatesContent />; break;
    case "cfp": content = <CallForPapersContent />; break;
    case "partners": content = <PartnersContent />; break;
    case "venue": content = <VenueContent />; break;
    case "contact": content = <ContactContent />; break;
    case "sponsors": content = <SponsorsContent />; break;
    case "register": content = <RegisterContent />; break;
    case "eticket": content = <EticketContent />; break;
    default: notFound();
  }

  return (
    <main className={`content-page content-page-${slug}`}>
      <div className="conference-container">
        <PageIntro slug={slug} />
        {content}
      </div>
    </main>
  );
}
