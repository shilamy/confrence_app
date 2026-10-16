import { Suspense } from "react";
import type { Metadata } from "next";
import ConferencePage, { CONFERENCE_PAGE_SLUGS } from "../components/conference-page";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

const routeTitles: Record<string, string> = {
  about: "About",
  themes: "Conference themes",
  programme: "Programme",
  speakers: "Speakers",
  dates: "Key dates",
  cfp: "Call for papers",
  partners: "Partners",
  venue: "Venue",
  contact: "Contact",
  sponsors: "Sponsors",
  register: "Registration",
  eticket: "E-ticket information",
};

export function generateStaticParams() {
  return CONFERENCE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${routeTitles[slug] ?? "Conference"} | SSK International Conference 2026`,
  };
}

export default function Page({ params }: RouteProps) {
  return (
    <Suspense
      fallback={
        <main className="content-page">
          <div className="conference-container">
            <p role="status">Loading conference page…</p>
          </div>
        </main>
      }
    >
      {params.then(({ slug }) => <ConferencePage slug={slug} />)}
    </Suspense>
  );
}
