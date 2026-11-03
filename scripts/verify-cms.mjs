const checks = [
  ["admin html", "http://localhost:3000/admin/index.html", (t) => t.includes("@sveltia/cms")],
  ["admin config", "http://localhost:3000/admin/config.yml", (t) => t.includes("kartikeyiamai/fcc") && t.includes("skip_ci: true") && t.includes("auth_methods: [token]")],
  ["homepage", "http://localhost:3000/", (t) => t.includes("Where finance and technology")],
  ["homepage data", "http://localhost:3000/data/homepage.json", (t) => t.includes("heading_emphasis")],
  ["about", "http://localhost:3000/about", (t) => t.includes("About FCC")],
  ["members", "http://localhost:3000/members", (t) => t.includes("Our Members")],
  ["contact", "http://localhost:3000/contact", (t) => t.includes("info@fintechcouncil.in")],
  ["annual reports", "http://localhost:3000/annual-report", (t) => t.includes("Annual Report 2023")],
];

let failed = 0;
for (const [name, url, test] of checks) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const ok = res.ok && test(text);
    console.log(`${ok ? "PASS" : "FAIL"} ${name} (${res.status})`);
    if (!ok) failed++;
  } catch (err) {
    console.log(`FAIL ${name}: ${err.message}`);
    failed++;
  }
}
process.exit(failed ? 1 : 0);
