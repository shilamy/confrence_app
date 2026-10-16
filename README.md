# SSK International Conference 2026 Website

The official conference information website for the Statistical Society of Kenya (SSK) International Conference 2026. It helps researchers, statisticians, students, policymakers, partners, and other delegates learn about the event, explore its programme, plan a visit to the University of Embu, and find the official registration and submission portals.

The conference runs **17–19 November 2026** at the **University of Embu, Kenya**. Its theme is *Strengthening Evidence for Sustainable Development through Statistics, Machine Learning, and Artificial Intelligence*. The event is convened by SSK, hosted by the University of Embu, and held in strategic partnership with the Kenya National Bureau of Statistics (KNBS). It also includes Africa Statistics Day celebrations on 18 November 2026.

## Website features

- **Conference homepage:** An editorial hero with a campus video, play/pause control, conference countdown, event details, partner logos, highlights, and links to key information. The partner strip presents KNBS, SSK, and the University of Embu in the agreed order.
- **Responsive navigation:** A compact mobile menu provides access to conference pages and registration.
- **Conference information:** Dedicated pages cover the event, themes, call for papers, programme, key dates, venue, speakers, partners, sponsors, organizers, registration fees, contact information, and e-ticket guidance.
- **Programme explorer:** Browse the programme by day, search sessions by title or time, and save items to a personal plan. Saved sessions are stored in the visitor’s browser on that device.
- **Venue and travel guidance:** Find information about the University of Embu and plan a visit.
- **Registration and submissions:** The site presents conference information and links to the official SSK portals for registration, abstracts, and sponsorship. Registration and e-ticket processing are handled by those external portals.
- **Partner and sponsor information:** The homepage displays the conference partners. Sponsor logos are intended for confirmed sponsors; enquiries can be sent to the conference secretariat.
- **Accessible interaction:** Interactive elements support keyboard use and follow the visitor’s reduced-motion preference where applicable.

## Pages

| Route | Information |
| --- | --- |
| `/` | Homepage, conference overview, countdown, partners, and sponsor information |
| `/about` | Conference background and what to expect |
| `/themes` | Main theme and conference sub-themes |
| `/programme` | Programme outline and schedule preview |
| `/schedule` | Searchable day-by-day schedule and saved personal plan |
| `/cfp` | Call for abstracts and papers, submission guidance, and portal link |
| `/dates` | Conference milestones and deadlines |
| `/venue` | University of Embu venue and travel information |
| `/speakers` | Keynote speakers and facilitators |
| `/partners` | Conference institutions and partner information |
| `/sponsors` | Sponsorship and exhibition information |
| `/register` | Registration categories, fees, and official portal link |
| `/organizers` | Conference organizing committees |
| `/contact` | Contact information for the conference secretariat |
| `/eticket` | Delegate e-ticket and gate pass guidance |

## Technology

- [Next.js](https://nextjs.org/) App Router
- React and TypeScript
- Tailwind CSS v4 utilities and global CSS for the conference theme and responsive layouts
- `next/image` for optimized image delivery
- Headless UI is installed and available for adding accessible component primitives

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

Available scripts:

```bash
npm run dev    # Start the local development server
npm run build  # Create a production build
npm run start  # Serve the production build
npm run lint   # Run ESLint
```

## Project structure

```text
app/
  [slug]/page.tsx                 Shared route for conference information pages
  components/                     Header, footer, hero, schedule, and page content
  constants/                      Conference details and programme data
  schedule/page.tsx               Interactive schedule planner
  globals.css                     Theme tokens, component styles, and responsive rules
  page.tsx                        Homepage
public/
  images/                         Conference and campus imagery
  img/logos/                      SSK, KNBS, and University of Embu logos
  img/partners/                   Partner organization logos
  media/                          Campus photos and conference video
```

Conference details, partner logos, and statistics are maintained in `app/constants/type.ts`. The programme outline is maintained in `app/constants/schedule.ts`. Most conference information routes share content and layout through `app/components/conference-page.tsx`.

## Content and external services

The website provides conference information and navigation. Registration, abstract submissions, sponsorship processing, and e-ticket issuance are handled by linked SSK services; this application does not process payments or create tickets. Schedule items saved under **My plan** remain in the visitor’s browser and are not synced to an account.
