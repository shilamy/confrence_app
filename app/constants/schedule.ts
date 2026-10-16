export type ProgrammeDay = {
  id: string;
  tabLabel: string;
  dateLabel: string;
  title: string;
  events: {
    id: string;
    time: string;
    title: string;
  }[];
};

export const PROGRAMME_DAYS: ProgrammeDay[] = [
  {
    id: "pre-conference",
    tabLabel: "Pre-Conf — 16 Nov",
    dateLabel: "Monday · 16 November",
    title: "Pre-conference preparation",
    events: [
      { id: "venue-setup", time: "08:00–17:00", title: "Venue, exhibition and technical setup" },
      { id: "briefings", time: "All day", title: "Speaker, trainer and committee briefings" },
      { id: "welcome-reception", time: "18:00–20:00", title: "Optional welcome reception for early arrivals" },
    ],
  },
  {
    id: "day-one",
    tabLabel: "Day 1 — 17 November",
    dateLabel: "Tuesday · 17 November",
    title: "Opening, practical training and plenaries",
    events: [
      { id: "registration-opening", time: "08:00–09:45", title: "Delegate registration and official opening ceremony" },
      { id: "student-training", time: "10:00–12:45", title: "Four parallel hands-on student training tracks" },
      { id: "trustworthy-ai-plenary", time: "13:45–14:30", title: "Plenary: statistics as the foundation of trustworthy AI" },
      { id: "day-one-sessions", time: "14:30–17:30", title: "Responsible AI, official statistics and applied AI sessions" },
    ],
  },
  {
    id: "day-two",
    tabLabel: "Day 2 — 18 November",
    dateLabel: "Wednesday · 18 November",
    title: "Africa Statistics Day and research presentations",
    events: [
      { id: "africa-statistics-day", time: "09:00–12:30", title: "Joint KNBS Africa Statistics Day session and policy dialogue" },
      { id: "lunch-exhibition", time: "12:30–13:30", title: "Lunch, poster and exhibition viewing" },
      { id: "paper-presentations", time: "13:30–15:30", title: "Peer-reviewed paper presentations across parallel tracks" },
      { id: "student-showcase", time: "15:45–17:15", title: "Student innovation showcase and poster session" },
    ],
  },
  {
    id: "day-three",
    tabLabel: "Day 3 — 19 November",
    dateLabel: "Thursday · 19 November",
    title: "Regional roadmap, awards and closing",
    events: [
      { id: "day-three-plenary", time: "09:00–12:30", title: "Plenary sessions and policy roundtables" },
      { id: "data-ai-roadmap", time: "13:30–15:30", title: "Sustainable data and AI ecosystem roadmap" },
      { id: "awards-closing", time: "15:45–17:30", title: "Student and research awards, conference resolutions and closing" },
    ],
  },
];
