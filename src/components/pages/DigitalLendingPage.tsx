import type { CommitteeDetailPageContent } from "@/lib/cms-types";
import { CommitteeDetailPage } from "./CommitteeDetailPage";
import digitalLendingFallback from "../../../public/data/committees/digital-lending.json";

export function DigitalLendingPage({
  content,
}: {
  content?: CommitteeDetailPageContent | null;
}) {
  const data = content || (digitalLendingFallback as CommitteeDetailPageContent);

  const heroArt = (
    <svg viewBox="0 0 300 240" aria-hidden="true">
      <circle
        cx="150"
        cy="120"
        r="110"
        stroke="rgba(255,255,255,.15)"
        fill="none"
        strokeDasharray="3 7"
      ></circle>{" "}
      <rect
        x="50"
        y="60"
        width="200"
        height="124"
        rx="16"
        fill="rgba(255,255,255,.15)"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></rect>{" "}
      <rect x="72" y="84" width="34" height="26" rx="5" fill="#f1d79a"></rect>{" "}
      <text
        x="72"
        y="140"
        fill="#fff"
        fontFamily="JetBrains Mono"
        fontSize="13"
        letterSpacing="2"
      >
        ₹ 2,50,000
      </text>{" "}
      <rect
        x="72"
        y="154"
        width="156"
        height="8"
        rx="4"
        fill="rgba(255,255,255,.25)"
      ></rect>{" "}
      <rect x="72" y="154" width="104" height="8" rx="4" fill="#fff"></rect>{" "}
      <text
        x="228"
        y="102"
        fill="#fff"
        fontFamily="JetBrains Mono"
        fontSize="10"
        textAnchor="end"
      >
        APPROVED
      </text>
    </svg>
  );

  return (
    <CommitteeDetailPage
      slug="digital-lending"
      content={data}
      heroArt={heroArt}
    />
  );
}
