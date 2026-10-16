"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { PROGRAMME_DAYS } from "../constants/schedule";

const SAVED_SESSIONS_KEY = "ssk-conference-saved-sessions";
const savedSessionListeners = new Set<() => void>();
type ScheduleExplorerProps = { variant?: "full" | "overview" };

function getSavedSessionsSnapshot() {
  try {
    return window.localStorage.getItem(SAVED_SESSIONS_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function subscribeToSavedSessions(listener: () => void) {
  savedSessionListeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    savedSessionListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function saveSessions(sessionIds: string[]) {
  try {
    window.localStorage.setItem(SAVED_SESSIONS_KEY, JSON.stringify(sessionIds));
  } catch {
    return;
  }
  savedSessionListeners.forEach((listener) => listener());
}

export default function ScheduleExplorer({ variant = "full" }: ScheduleExplorerProps) {
  const [selectedDayId, setSelectedDayId] = useState(PROGRAMME_DAYS[0].id);
  const [query, setQuery] = useState("");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const isFull = variant === "full";
  const selectedDay = PROGRAMME_DAYS.find((day) => day.id === selectedDayId) ?? PROGRAMME_DAYS[0];
  const savedSessionSnapshot = useSyncExternalStore(subscribeToSavedSessions, getSavedSessionsSnapshot, () => "[]");
  const savedSessionIds = useMemo(() => {
    try {
      const parsedValue: unknown = JSON.parse(savedSessionSnapshot);
      return Array.isArray(parsedValue) && parsedValue.every((id) => typeof id === "string") ? parsedValue : [];
    } catch {
      return [];
    }
  }, [savedSessionSnapshot]);

  const visibleEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return selectedDay.events.filter((event) => {
      const matchesQuery = !normalizedQuery || `${event.title} ${event.time}`.toLocaleLowerCase().includes(normalizedQuery);
      const matchesSaved = !showSavedOnly || savedSessionIds.includes(event.id);
      return matchesQuery && matchesSaved;
    });
  }, [query, savedSessionIds, selectedDay, showSavedOnly]);

  function toggleSavedSession(sessionId: string) {
    const nextIds = savedSessionIds.includes(sessionId)
      ? savedSessionIds.filter((id) => id !== sessionId)
      : [...savedSessionIds, sessionId];
    saveSessions(nextIds);
  }

  function moveDayFocus(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    const nextIndex = event.key === "ArrowRight"
      ? (currentIndex + 1) % PROGRAMME_DAYS.length
      : event.key === "ArrowLeft"
        ? (currentIndex - 1 + PROGRAMME_DAYS.length) % PROGRAMME_DAYS.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? PROGRAMME_DAYS.length - 1
            : -1;

    if (nextIndex < 0) return;
    event.preventDefault();
    setSelectedDayId(PROGRAMME_DAYS[nextIndex].id);
    document.getElementById(`schedule-tab-${PROGRAMME_DAYS[nextIndex].id}`)?.focus();
  }

  return (
    <section className={`schedule-explorer${isFull ? " schedule-explorer-full" : " schedule-explorer-overview"}`}>
      <div className="schedule-day-tabs" role="tablist" aria-label="Choose a conference day">
        {PROGRAMME_DAYS.map((day, index) => (
          <button
            className="schedule-day-tab"
            type="button"
            role="tab"
            aria-selected={selectedDayId === day.id}
            aria-controls="schedule-day-panel"
            tabIndex={selectedDayId === day.id ? 0 : -1}
            id={`schedule-tab-${day.id}`}
            key={day.id}
            onClick={() => setSelectedDayId(day.id)}
            onKeyDown={(event) => moveDayFocus(event, index)}
          >
            {day.tabLabel}
          </button>
        ))}
      </div>

      <div className="schedule-day-panel" id="schedule-day-panel" role="tabpanel" aria-labelledby={`schedule-tab-${selectedDay.id}`}>
        <header className="schedule-day-heading">
          <div>
            <p className="content-eyebrow">{selectedDay.dateLabel}</p>
            <h2>{selectedDay.title}</h2>
          </div>
          {isFull && <span className="schedule-outline-label">Planning outline</span>}
        </header>

        {isFull ? (
          <div className="schedule-tools">
            <label className="schedule-search">
              <span className="sr-only">Search sessions</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sessions or times" />
            </label>
            <button className={`schedule-saved-filter${showSavedOnly ? " is-active" : ""}`} type="button" aria-pressed={showSavedOnly} onClick={() => setShowSavedOnly((showing) => !showing)}>
              My plan <span>{savedSessionIds.length}</span>
            </button>
          </div>
        ) : null}

        <div className="schedule-event-list">
          {visibleEvents.length ? visibleEvents.map((event) => {
            const isSaved = savedSessionIds.includes(event.id);
            return (
              <article className="schedule-event" key={event.id}>
                <time className="schedule-event-time">{event.time}</time>
                <h3>{event.title}</h3>
                {isFull && (
                  <button
                    className={`schedule-save-button${isSaved ? " is-saved" : ""}`}
                    type="button"
                    aria-pressed={isSaved}
                    onClick={() => toggleSavedSession(event.id)}
                  >
                    <span aria-hidden="true">{isSaved ? "✓" : "+"}</span>{isSaved ? "Added to my plan" : "Add to my plan"}
                  </button>
                )}
              </article>
            );
          }) : <p className="schedule-empty">No matching items for this day. Try another search or date.</p>}
        </div>

        {isFull ? (
          <p className="schedule-planner-note">Your plan is saved on this device. Seat reservations and live capacity aren’t available in this outline.</p>
        ) : (
          <p className="schedule-overview-footer"><Link className="text-link" href="/schedule">Search sessions and build your personal plan <span aria-hidden="true">→</span></Link></p>
        )}
      </div>
    </section>
  );
}
