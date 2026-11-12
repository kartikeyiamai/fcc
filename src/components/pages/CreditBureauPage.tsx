import type { CommitteeDetailPageContent } from "@/lib/cms-types";
import { CommitteeDetailPage } from "./CommitteeDetailPage";
import creditBureauFallback from "../../../public/data/committees/credit-bureau.json";

export function CreditBureauPage({
  content,
}: {
  content?: CommitteeDetailPageContent | null;
}) {
  const data = content || (creditBureauFallback as CommitteeDetailPageContent);

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
        d="M60 170a90 90 0 0 1 180 0"
        stroke="rgba(255,255,255,.3)"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
      ></path>{" "}
      <path
        d="M60 170a90 90 0 0 1 144-48"
        stroke="#fff"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
      ></path>{" "}
      <line
        x1="150"
        y1="170"
        x2="204"
        y2="116"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinecap="round"
      ></line>{" "}
      <circle cx="150" cy="170" r="10" fill="#fff"></circle>{" "}
      <text
        x="150"
        y="200"
        fill="#fff"
        fontFamily="JetBrains Mono"
        fontSize="11"
        textAnchor="middle"
      >
        780
      </text>
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
      <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>
    </svg>
  );

  return (
    <CommitteeDetailPage
      slug="credit-bureau"
      content={data}
      heroArt={heroArt}
      focusIcon={focusIcon}
    />
  );
}
