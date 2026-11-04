import fs from "node:fs";

const settingsPath = "public/data/site-settings.json";
const s = JSON.parse(fs.readFileSync(settingsPath, "utf8"));
const matches = {
  "/": ["/"],
  "/about": ["/about", "/annual-report"],
  "/committees": ["/committees"],
  "/members": ["/members", "/membership-benefits", "/apply-membership"],
  "/partners": ["/partners", "/partnership-benefits", "/apply-partnership"],
  "/policy": ["/policy", "/research"],
  "/live-events": ["/live-events", "/virtual-events"],
  "/contact": ["/contact"],
};
s.navigation = s.navigation.map((n) => ({
  ...n,
  match: matches[n.href] || [n.href],
}));
fs.writeFileSync(settingsPath, JSON.stringify(s, null, 2) + "\n");

const members = JSON.parse(fs.readFileSync("public/data/members.json", "utf8"));
members.page = {
  title: "Our Members",
  description:
    "175+ companies across lending, payments, insurance, investments, credit information and RegTech make up the council.",
};
fs.writeFileSync("public/data/members.json", JSON.stringify(members, null, 2) + "\n");

const committees = JSON.parse(fs.readFileSync("public/data/committees.json", "utf8"));
committees.page = {
  title: "Committees",
  description:
    "Five sector committees lead FCC's work, each bringing together member companies to share best practice, discuss industry issues and shape representations.",
};
fs.writeFileSync("public/data/committees.json", JSON.stringify(committees, null, 2) + "\n");

console.log("patched site-settings, members, committees");
