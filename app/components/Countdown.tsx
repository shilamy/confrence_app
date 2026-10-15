"use client";

import { useEffect, useMemo, useState } from "react";
import { CONFERENCE_DATE, CONFERENCE_DETAILS } from "../constants/type";
import type { Countdown as CountdownValue } from "../constants/type";

/* ---------- helpers (pure, testable) ---------- */

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function getCountdown(target: Date, now: number): CountdownValue {
  const remaining = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/* ---------- component ---------- */

export default function Countdown() {
  // `null` on first paint → we render placeholders, then hydrate with real values.
  const [value, setValue] = useState<CountdownValue | null>(null);

  useEffect(() => {
    let rafId = 0;
    let timeoutId = 0;

    const tick = () => {
      setValue(getCountdown(CONFERENCE_DATE, Date.now()));
      // Align the next tick to the next whole second to avoid drift.
      const drift = Date.now() % SECOND;
      timeoutId = window.setTimeout(tick, SECOND - drift);
    };

    // Defer the first update so the server-rendered placeholder paints first.
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  const units = useMemo(
    () => [
      { label: "Days", value: value?.days },
      { label: "Hours", value: value?.hours },
      { label: "Mins", value: value?.minutes },
      { label: "Secs", value: value?.seconds },
    ],
    [value],
  );

  return (
    <aside
      className="hero-countdown hero-ticket"
      aria-label="Countdown to the conference"
    >
      <span className="countdown-eyebrow">Embu · Kenya</span>
      <h2>Days to <em>convene.</em></h2>

      <div className="countdown-units ticket-units" role="timer" aria-live="off">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <span
              className="countdown-number"
              key={unit.value ?? "loading"}
              /* Screen readers get a clean sentence instead of four numbers. */
              aria-hidden="true"
            >
              {unit.value === undefined ? "--" : pad(unit.value)}
            </span>
            <span className="countdown-unit-label" aria-hidden="true">
              {unit.label}
            </span>
          </div>
        ))}

        {/* Single accessible summary, updated less noisily. */}
        <span className="sr-only">
          {value
            ? `${value.days} days, ${value.hours} hours, ${value.minutes} minutes until the conference.`
            : "Loading countdown…"}
        </span>
      </div>

      <p className="countdown-footer">{CONFERENCE_DETAILS.dates}</p>
    </aside>
  );
}
