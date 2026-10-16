import Image from "next/image";
import { CONFERENCE_PARTNERS } from "../constants/type";

const displayOrder = [
  "Kenya National Bureau of Statistics",
  "Statistical Society of Kenya",
  "University of Embu",
];

const orderedPartners = displayOrder.flatMap((name) => {
  const partner = CONFERENCE_PARTNERS.find((item) => item.name === name);
  return partner ? [partner] : [];
});

export default function PartnerStrip() {
  return (
    <section className="partner-strip" aria-label="Conference organizers">
      <div className="conference-container partner-strip-inner">
        <p className="partner-strip-label">Jointly organized by</p>
        <ul className="partner-strip-list">
          {orderedPartners.map((partner) => (
            <li key={partner.name}>
              <Image
                src={partner.src}
                alt={partner.name}
                width={180}
                height={72}
                sizes="(max-width: 600px) 36vw, 180px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
