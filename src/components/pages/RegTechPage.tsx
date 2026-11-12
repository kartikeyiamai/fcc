import type { CommitteeDetailPageContent } from "@/lib/cms-types";
import { CommitteeDetailPage } from "./CommitteeDetailPage";
import regtechFallback from "../../../public/data/committees/regtech.json";

export function RegTechPage({
  content,
}: {
  content?: CommitteeDetailPageContent | null;
}) {
  const data = content || (regtechFallback as CommitteeDetailPageContent);

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
        d="M150 40l70 26v52c0 44-30 70-70 82-40-12-70-38-70-82V66z"
        fill="rgba(255,255,255,.15)"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <path
        d="M118 122l22 22 42-44"
        stroke="#fff"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <line x1="60" y1="100" x2="240" y2="100" stroke="#fff" strokeOpacity=".6">
        <animate
          attributeName="y1"
          values="60;190;60"
          dur="3s"
          repeatCount="indefinite"
        ></animate>{" "}
        <animate
          attributeName="y2"
          values="60;190;60"
          dur="3s"
          repeatCount="indefinite"
        ></animate>
      </line>
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
      <rect x="5" y="11" width="14" height="10" rx="2"></rect>
      <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
    </svg>
  );

  return (
    <CommitteeDetailPage
      slug="regtech"
      content={data}
      heroArt={heroArt}
      focusIcon={focusIcon}
    />
  );
}
