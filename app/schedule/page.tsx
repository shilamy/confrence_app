import type { Metadata } from "next";
import ScheduleExplorer from "../components/schedule-explorer";

export const metadata: Metadata = {
  title: "Schedule finder | SSK International Conference 2026",
  description: "Search the conference schedule by day and save items to a personal plan.",
};

export default function SchedulePage() {
  return (
    <main className="content-page content-page-schedule">
      <div className="conference-container">
        <header className="content-page-intro schedule-page-intro">
          <p className="content-eyebrow">Plan your conference</p>
          <h1>Find your sessions</h1>
          <p className="content-page-lead">Explore the day-by-day programme outline, search sessions, and build a personal itinerary.</p>
        </header>
        <ScheduleExplorer />
      </div>
    </main>
  );
}
