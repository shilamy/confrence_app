"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const registrationSteps = [
  <>Contact SSK at <a href="mailto:conference@sskenya.org">conference@sskenya.org</a> or +254 739 639 425 with your organization and preferred tier.</>,
  "SSK will send a formal Sponsorship Agreement and invoice within 3 working days.",
  "Submit your high-resolution PNG or SVG logo and an organization profile of up to 100 words.",
  "Pay by bank transfer or M-Pesa using the details in your invoice.",
  "Send the names and email addresses of complimentary delegates.",
  "Receive confirmation, sponsor certificate, and delegate e-tickets within 5 working days of payment.",
];

const sponsorNotes = [
  "Hard deadline: 31 August 2026. Packages must be fully executed by this date for branding and acknowledgement preparation.",
  "Complimentary delegate passes are named and non-transferable. Submit delegate names by 31 October 2026.",
  "Passes cover all three conference days, meals, materials, and sessions. Accommodation is separate.",
  "Title and Platinum sponsorships are exclusive and limited; contact SSK to confirm availability.",
  "Additional opportunities: Awards Sponsor (KES 100,000), Workshop Track Sponsor (KES 150,000 per track), Meals Sponsor (KES 300,000), and Delegate Bag Sponsor (KES 200,000).",
  "Sponsors are acknowledged in the conference proceedings, on stage, and in SSK's post-conference report.",
];

function useNativeDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return { dialogRef, setIsOpen };
}

export function SponsorProcessDialog() {
  const { dialogRef, setIsOpen } = useNativeDialog();

  return (
    <>
      <button className="sponsor-details-trigger" type="button" onClick={() => setIsOpen(true)}>
        How to register & important notes <span aria-hidden="true">↗</span>
      </button>
      <dialog ref={dialogRef} className="sponsor-dialog" aria-labelledby="sponsor-process-title" onClose={() => setIsOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
        <button className="sponsor-dialog-close" type="button" aria-label="Close dialog" onClick={() => setIsOpen(false)}>×</button>
        <p className="content-eyebrow">Sponsorship guide</p>
        <h2 id="sponsor-process-title">How to register as a sponsor</h2>
        <ol className="sponsor-process-steps">
          {registrationSteps.map((step, index) => <li key={index}><span>{index + 1}</span><p>{step}</p></li>)}
        </ol>
        <h3 className="sponsor-dialog-subtitle">Deadline & important notes</h3>
        <ul className="sponsor-important-notes">
          {sponsorNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>
        <a className="conference-btn conference-btn-primary sponsor-dialog-cta" href="https://portal.sskenya.org/2026-conference-sponsorship" target="_blank" rel="noreferrer">Register as a Sponsor <span aria-hidden="true">↗</span></a>
      </dialog>
    </>
  );
}

export function DataThonRegistrationDialog() {
  const { dialogRef, setIsOpen } = useNativeDialog();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "");
    const email = String(formData.get("email") ?? "");
    const organization = String(formData.get("organization") ?? "");
    const background = String(formData.get("background") ?? "");
    const subject = encodeURIComponent("DataThon registration interest");
    const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\nOrganization or institution: ${organization}\nBackground or area of interest: ${background}`);
    window.location.href = `mailto:conference@sskenya.org?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <button className="conference-btn conference-btn-primary datathon-register-trigger" type="button" onClick={() => setIsOpen(true)}>Register interest <span aria-hidden="true">↗</span></button>
      <dialog ref={dialogRef} className="sponsor-dialog datathon-dialog" aria-labelledby="datathon-dialog-title" onClose={() => setIsOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
        <button className="sponsor-dialog-close" type="button" aria-label="Close dialog" onClick={() => setIsOpen(false)}>×</button>
        <p className="content-eyebrow">DataThon</p>
        <h2 id="datathon-dialog-title">Register your interest</h2>
        <p className="datathon-form-intro">Share your details and your email app will open with a registration-interest message addressed to the SSK secretariat.</p>
        <form className="datathon-form" onSubmit={handleSubmit}>
          <label>Full name<input name="fullName" autoComplete="name" required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
          <label>Organization or institution<input name="organization" autoComplete="organization" required /></label>
          <label>Background or area of interest<textarea name="background" rows={3} /></label>
          <button className="conference-btn conference-btn-primary" type="submit">Continue by email <span aria-hidden="true">↗</span></button>
        </form>
      </dialog>
    </>
  );
}
