import { CONFERENCE_STATS } from "../constants/type";
import type { Statistic } from "../constants/type";

/* ---------- card ---------- */

function StatCard({
  stat,
  index,
}: {
  stat: Statistic;
  index: number;
}) {
  return (
    <article className="stat-card">
      <span className="stat-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      <p className="stat-value">{stat.value}</p>
      <h3 className="stat-label">{stat.label}</h3>
      <p className="stat-description">{stat.description}</p>
    </article>
  );
}

/* ---------- section ---------- */

export default function Stats() {
  return (
    <section
      id="statistics"
      className="conference-stats"
      aria-labelledby="stats-heading"
    >
      <div className="conference-container">
        <header className="stats-heading">
          <span className="stats-eyebrow">The conference at a glance</span>
          <h2 id="stats-heading">Bringing the data community together</h2>
        </header>

        <div className="stats-grid">
          {CONFERENCE_STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
