"use client";

import { useEffect, useRef } from "react";

export default function RegistrationDeadlineDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="deadline-dialog-panel"
      aria-labelledby="registration-deadline-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <p className="content-eyebrow">Registration</p>
      <h2 className="deadline-dialog-title" id="registration-deadline-title">Registration deadline</h2>
      <p className="deadline-dialog-date">31 October 2026</p>
      <p className="deadline-dialog-copy">Register through the official SSK conference portal before the deadline.</p>
      <div className="deadline-dialog-actions">
        <a className="conference-btn conference-btn-primary" href="https://portal.sskenya.org/2026-conference-registration" target="_blank" rel="noreferrer">
          Register through SSK portal <span aria-hidden="true">↗</span>
        </a>
        <button className="deadline-dialog-dismiss" type="button" onClick={() => dialogRef.current?.close()}>View registration fees</button>
      </div>
    </dialog>
  );
}
