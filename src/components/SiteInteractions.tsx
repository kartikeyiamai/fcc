"use client";

import { useEffect } from "react";
import { FCC_MEMBERS } from "@/data/members";

export function SiteInteractions() {
  useEffect(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(".fill[data-w]").forEach((f) => {
        f.style.width = f.dataset.w || "";
      });
    });

    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>("[data-filter-for]").forEach((bar) => {
      const list = document.getElementById(bar.dataset.filterFor || "");
      if (!list) return;
      const items = [...list.children] as HTMLElement[];
      const limit = +(list.dataset.limit || 0);
      const more = document.querySelector<HTMLElement>(
        `[data-more-for="${list.id}"]`,
      );
      let f = "all";
      let open = false;

      function render() {
        const matched = items.filter(
          (i) => f === "all" || (i.dataset.r || "").split(" ").includes(f),
        );
        items.forEach((i) => i.classList.add("hide"));
        matched.forEach((i, ix) => {
          if (!limit || open || ix < limit) i.classList.remove("hide");
        });
        if (more) {
          more.style.display = limit && matched.length > limit ? "inline-flex" : "none";
          more.textContent = open ? "Show less" : `Show all ${matched.length}`;
        }
      }

      bar.querySelectorAll<HTMLElement>(".chip").forEach((c) => {
        const onClick = () => {
          bar.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
          c.classList.add("active");
          f = c.dataset.f || "all";
          open = false;
          render();
        };
        c.addEventListener("click", onClick);
        cleanups.push(() => c.removeEventListener("click", onClick));
      });

      if (more) {
        const onMore = () => {
          open = !open;
          render();
        };
        more.addEventListener("click", onMore);
        cleanups.push(() => more.removeEventListener("click", onMore));
      }
      render();
    });

    const mg = document.getElementById("mgrid");
    if (mg) {
      const base = "https://www.fintechcouncil.in/images/our-members/";
      const q = document.getElementById("msearch") as HTMLInputElement | null;
      const az = document.getElementById("az");
      const cnt = document.getElementById("mcount");
      let letter = "all";
      const initials = (n: string) => {
        const w = n
          .replace(/[^A-Za-z0-9 ]/g, " ")
          .split(" ")
          .filter(Boolean);
        return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 2)).toUpperCase();
      };
      // Clear any prior tiles (Strict Mode remount)
      mg.innerHTML = "";
      if (az) az.innerHTML = "";
      const tiles = FCC_MEMBERS.map((m) => {
        const n = m.name;
        const logo = (m.logo || "").trim();
        const fName = (m.logo_filename || "").trim();

        const a = document.createElement("div");
        a.className = "mtile";
        a.dataset.n = n.toLowerCase();
        a.dataset.l = /[a-z]/i.test(n[0]) ? n[0].toUpperCase() : "#";
        const lg = document.createElement("div");
        lg.className = "logo";
        const av = document.createElement("div");
        av.className = "mono-av";
        av.textContent = initials(n);

        // Fallback order:
        // 1. Non-empty member.logo (full S3 https URL or /uploads/... path)
        // 2. Non-empty member.logo_filename (legacy fintechcouncil.in URL)
        // 3. 2-letter initials
        let imgSrc = "";
        if (logo) {
          imgSrc = /^https?:\/\//i.test(logo) ? logo : (logo.startsWith("/") ? logo : `/${logo}`);
        } else if (fName) {
          imgSrc = base + encodeURIComponent(fName);
        }

        if (imgSrc) {
          const im = document.createElement("img");
          im.alt = n;
          im.src = imgSrc;
          im.onerror = () => {
            // Restore initials placeholder on image load failure
            lg.innerHTML = "";
            lg.appendChild(av);
          };
          lg.appendChild(im);
        } else {
          lg.appendChild(av);
        }

        const s = document.createElement("span");
        s.textContent = n;
        a.append(lg, s);
        mg.appendChild(a);
        return a;
      });
      const letters = new Set(tiles.map((t) => t.dataset.l));
      if (az) {
        ["all", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach((L) => {
          const b = document.createElement("button");
          b.textContent = L === "all" ? "All" : L;
          if (L === "all") {
            b.style.width = "auto";
            b.style.padding = "0 12px";
            b.classList.add("on");
          }
          if (L !== "all" && !letters.has(L)) b.disabled = true;
          b.onclick = () => {
            letter = L;
            az.querySelectorAll("button").forEach((x) => x.classList.remove("on"));
            b.classList.add("on");
            run();
          };
          az.appendChild(b);
        });
      }
      function run() {
        const v = (q?.value || "").toLowerCase().trim();
        let n = 0;
        tiles.forEach((t) => {
          const ok =
            (letter === "all" || t.dataset.l === letter) &&
            (!v || (t.dataset.n || "").includes(v));
          t.classList.toggle("hide", !ok);
          if (ok) n++;
        });
        if (cnt) cnt.textContent = `Showing ${n} of ${tiles.length} members`;
      }
      q?.addEventListener("input", run);
      if (q) cleanups.push(() => q.removeEventListener("input", run));
      run();
    }

    document.querySelectorAll<HTMLFormElement>("form[data-preview]").forEach((f) => {
      const onSubmit = (e: Event) => {
        e.preventDefault();
        const ok = f.querySelector(".form-ok");
        if (ok) {
          ok.classList.add("show");
          ok.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        f.reset();
      };
      f.addEventListener("submit", onSubmit);
      cleanups.push(() => f.removeEventListener("submit", onSubmit));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
