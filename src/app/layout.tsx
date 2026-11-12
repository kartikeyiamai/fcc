import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FCC — Fintech Convergence Council",
    template: "%s · FCC",
  },
  description:
    "Fintech Convergence Council (FCC) — the industry voice for regulated financial service providers and fintech companies in India.",
  icons: {
    icon: [
      {
        url: "/FCC-tab-logo-main.png",
        type: "image/png",
      },
    ],
    shortcut: "/FCC-tab-logo-main.png",
    apple: "/FCC-tab-logo-main.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#BF1A1F" />
        <link rel="icon" type="image/png" href="/FCC-tab-logo-main.png" />
        <link rel="apple-touch-icon" href="/FCC-tab-logo-main.png" />
        <link href="/css/zoho-form.css" rel="stylesheet" type="text/css" />
        <script src="/js/zoho-validation.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
