"use client";

import Link from "next/link";
import Image from "next/image";
import type { SiteSettings } from "@/lib/cms-types";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link href="/" className="brand" aria-label="FCC home">
              <Image
                src="/FCC-Logo-main.png"
                alt={settings.brand_name || "FCC"}
                width={95}
                height={42}
                className="brand-logo"
              />
              <div className="brand-text">
                <strong>{settings.brand_name}</strong>
                <span>An IAMAI initiative</span>
              </div>
            </Link>
            <p style={{ marginTop: 16, maxWidth: 300 }}>{settings.footer_blurb}</p>
            <div className="soc">
              {settings.social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {settings.footer_columns.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5>Contact</h5>
            <p>
              {settings.address_lines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < settings.address_lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            <p style={{ marginTop: 10 }}>
              <a href={settings.contact_phone_href}>{settings.contact_phone}</a>
              <br />
              <a href={`mailto:${settings.contact_email}`}>{settings.contact_email}</a>
            </p>
            {/* Newsletter subscription form hidden for now */}
          </div>
        </div>
        <div className="foot-bottom">
          <span>{settings.footer_copyright}</span>
          <span>{settings.footer_note}</span>
        </div>
      </div>
    </footer>
  );
}
