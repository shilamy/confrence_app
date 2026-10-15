import Hero from "./components/hero";
import HomepageOverview from "./components/homepage-overview";
import PartnerStrip from "./components/partner-strip";
import Stats from "./components/stats";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PartnerStrip />
      <Stats />
      <HomepageOverview />
    </main>
  );
}
