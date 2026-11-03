import Link from "next/link";
import type { NavItem, SiteSettings } from "@/lib/cms-types";

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 4l3 3 3-3" />
    </svg>
  );
}

function isActive(active: string, item: NavItem) {
  if (!item.match) return false;
  if (item.href === "/" && active === "/") return true;
  if (item.href === "/") return false;
  return item.match.some((m) => active === m || active.startsWith(`${m}/`));
}

export function SiteHeader({ active, settings }: { active: string; settings: SiteSettings }) {
  const linkedIn = settings.social.find((s) => s.label.toLowerCase() === "linkedin");
  const x = settings.social.find((s) => s.label.toLowerCase() === "x");
  const facebook = settings.social.find((s) => s.label.toLowerCase() === "facebook");

  return (
    <header className="nav">
      <div className="row1">
        <div className="wrap">
          <Link href="/" className="brand" aria-label="FCC home">
            <div className="brand-mark">{settings.brand_mark}</div>
            <div className="brand-text">
              <strong>{settings.brand_name}</strong>
              <span>{settings.brand_tagline}</span>
            </div>
          </Link>
          <div className="hdr-right">
            <div className="hdr-links">
              <a href={`mailto:${settings.contact_email}`}>{settings.contact_email}</a>
              <span>·</span>
              {linkedIn ? (
                <a href={linkedIn.href} target="_blank" rel="noopener">
                  LinkedIn
                </a>
              ) : null}
              {x ? (
                <a href={x.href} target="_blank" rel="noopener">
                  X
                </a>
              ) : null}
              {facebook ? (
                <a href={facebook.href} target="_blank" rel="noopener">
                  Facebook
                </a>
              ) : null}
            </div>
            <Link href={settings.member_cta_href} className="btn btn-primary btn-sm nav-cta">
              {settings.member_cta_label}
            </Link>
          </div>
        </div>
      </div>
      <nav className="mainnav" aria-label="Main">
        <div className="wrap">
          <ul className="menu">
            {settings.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={isActive(active, item) ? "active" : undefined}>
                  {item.label}
                  {item.children?.length ? <Chevron /> : null}
                </Link>
                {item.children?.length ? (
                  <ul className="dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>
                          {child.label}
                          {child.small ? <small>{child.small}</small> : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
