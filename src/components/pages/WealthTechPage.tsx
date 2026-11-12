import type { CommitteeDetailPageContent } from "@/lib/cms-types";
import { CommitteeDetailPage } from "./CommitteeDetailPage";
import wealthtechFallback from "../../../public/data/committees/wealthtech.json";

export function WealthTechPage({
  content,
}: {
  content?: CommitteeDetailPageContent | null;
}) {
  const data = content || (wealthtechFallback as CommitteeDetailPageContent);

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
      <path
        d="M40 200h220"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <rect
        x="58"
        y="160"
        width="24"
        height="40"
        rx="4"
        fill="rgba(255,255,255,0.18)"
      ></rect>{" "}
      <rect
        x="96"
        y="138"
        width="24"
        height="62"
        rx="4"
        fill="rgba(255,255,255,0.28)"
      ></rect>{" "}
      <rect
        x="134"
        y="144"
        width="24"
        height="56"
        rx="4"
        fill="rgba(255,255,255,0.38)"
      ></rect>{" "}
      <rect
        x="172"
        y="104"
        width="24"
        height="96"
        rx="4"
        fill="rgba(255,255,255,0.48)"
      ></rect>{" "}
      <rect
        x="210"
        y="80"
        width="24"
        height="120"
        rx="4"
        fill="rgba(255,255,255,0.58)"
      ></rect>{" "}
      <rect
        x="248"
        y="50"
        width="24"
        height="150"
        rx="4"
        fill="rgba(255,255,255,0.68)"
      ></rect>{" "}
      <path
        d="M58 150 L100 128 L138 136 L176 92 L214 70 L250 40"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <path
        d="M232 40h18v18"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  const focusIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6"></path>
    </svg>
  );

  return (
    <CommitteeDetailPage
      slug="wealthtech"
      content={data}
      heroArt={heroArt}
      focusIcon={focusIcon}
    />
  );
}
