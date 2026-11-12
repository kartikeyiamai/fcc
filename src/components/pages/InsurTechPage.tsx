import type { CommitteeDetailPageContent } from "@/lib/cms-types";
import { CommitteeDetailPage } from "./CommitteeDetailPage";
import insurtechFallback from "../../../public/data/committees/insurtech.json";

export function InsurTechPage({
  content,
}: {
  content?: CommitteeDetailPageContent | null;
}) {
  const data = content || (insurtechFallback as CommitteeDetailPageContent);

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
        d="M60 120a90 90 0 0 1 180 0"
        fill="rgba(255,255,255,.18)"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
      <line
        x1="150"
        y1="40"
        x2="150"
        y2="30"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      ></line>{" "}
      <path
        d="M150 120v60a16 16 0 0 1-32 0"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      ></path>{" "}
      <path
        d="M90 120a30 30 0 0 0 30 0 30 30 0 0 0 30 0 30 30 0 0 0 30 0 30 30 0 0 0 30 0"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      ></path>{" "}
      <line
        x1="80"
        y1="190"
        x2="70"
        y2="210"
        stroke="#fff"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      ></line>{" "}
      <line
        x1="120"
        y1="200"
        x2="110"
        y2="220"
        stroke="#fff"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      ></line>{" "}
      <line
        x1="190"
        y1="195"
        x2="180"
        y2="215"
        stroke="#fff"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      ></line>{" "}
      <line
        x1="230"
        y1="190"
        x2="220"
        y2="210"
        stroke="#fff"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      ></line>
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
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  );

  return (
    <CommitteeDetailPage
      slug="insurtech"
      content={data}
      heroArt={heroArt}
      focusIcon={focusIcon}
    />
  );
}
