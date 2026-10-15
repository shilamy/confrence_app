
export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type Statistic = {
  value: string;
  label: string;
  description: string;
};

export type ConferencePartner = {
  name: string;
  src: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

/* Conference constants */
export const CONFERENCE_DATE = new Date(
  "2026-11-17T09:00:00+03:00"
);

export const CONFERENCE_DETAILS = {
  name: "SSK Inaugural International Conference",
  theme:
    "Strengthening Evidence for Sustainable Development through Statistics, Machine Learning, and AI",
  dates: "17–19 November 2026",
  venue: "University of Embu, Kenya",
  expectedDelegates: "400+ participants",
  africaStatisticsDay: "18 November 2026",
};

/* Partner organizations */
export const CONFERENCE_PARTNERS: ConferencePartner[] = [
  {
    name: "Kenya National Bureau of Statistics",
    src: "/img/logos/knbs.jpg",
  },
  {
    name: "Statistical Society of Kenya",
    src: "/img/logos/ssk.jpg",
  },
  {
    name: "University of Embu",
    src: "/img/logos/embu.png",
  },
];

/* Conference statistics */
export const CONFERENCE_STATS: Statistic[] = [
  {
    value: "400+",
    label: "Expected delegates",
    description: "Researchers, practitioners and policymakers",
  },
  {
    value: "4",
    label: "Conference sub-themes",
    description: "Exploring evidence and innovation",
  },
  {
    value: "3",
    label: "Conference days",
    description: "Learning, collaboration and exchange",
  },
  {
    value: "30+",
    label: "Partner institutions",
    description: "A growing network of collaborators",
  },
];

/* Footer navigation */
export const FOOTER_LINKS: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Conference themes", href: "/themes" },
  { label: "Programme", href: "/programme" },
  { label: "Key dates", href: "/dates" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];
