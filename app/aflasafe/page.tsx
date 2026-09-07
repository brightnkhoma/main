"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AflasafeFeature } from "@/components/ui/Multifaceted";

/**
 * Aflasafe — "aflasafe for a better Malawi"
 * Next.js App Router page component.
 * Drop this into: app/aflasafe/page.tsx
 */

const C = {
  navy: "#0B1F3F",
  navy2: "#13294B",
  navy3: "#0E2547",
  gold: "#C6A15B",
  goldLight: "#E8CE8B",
  goldDeep: "#9C7A34",
  paper: "#FBFAF7",
  ink: "#1B1F27",
  line: "#E4DFD3",
};

const img = (title: string, w = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    title
  ).replace(/%20/g, "_")}?width=${w}`;

const IMAGES = {
  hero: img("Maize farm in the Gambia.jpg", 2000),
  aflatoxins: "/images/aflatoxin.jpg",
  aflasafe: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYyLoYxsnGGUE8qMrapIoV265Jzzp970P61m33cegNpsw8SBuKahQ4tbk&s=10",
  usage: img(
    "A mother and her children harvest groundnuts in the farm in northern Ghana.jpg",
    1400
  ),
  impact: img("Village Saving Bank group, Malawi.jpg", 1600),
};

/* ---------- Types ---------- */
interface EyebrowProps {
  children: React.ReactNode;
}

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  dark?: boolean;
}

interface GoldButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "ghostOnLight";
}

interface StatCardProps {
  value: string;
  label: string;
  note: string;
  dark?: boolean;
}

/* ---------- small building blocks ---------- */

function Eyebrow({ children }: EyebrowProps) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
      style={{ color: C.goldDeep }}
    >
      <span className="inline-block w-6 h-px" style={{ background: C.gold }} />
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub, dark }: SectionTitleProps) {
  return (
    <div className="max-w-3xl mb-12">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className="text-3xl md:text-4xl font-bold leading-tight mb-4"
        style={{
          color: dark ? "#fff" : C.navy,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: dark ? "rgba(255,255,255,0.75)" : "#4B5165" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function GoldButton({ href, children, variant = "solid" }: GoldButtonProps) {
  const solid = {
    background: `linear-gradient(180deg, ${C.goldLight}, ${C.gold})`,
    color: C.navy,
    border: `1px solid ${C.goldDeep}`,
  };
  const ghost = {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.5)",
  };
  const ghostOnLight = {
    background: "transparent",
    color: C.navy,
    border: `1px solid ${C.navy}`,
  };
  const style =
    variant === "solid" ? solid : variant === "ghost" ? ghost : ghostOnLight;
  
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-7 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase transition-transform hover:-translate-y-0.5"
      style={style}
    >
      {children}
    </Link>
  );
}

function StatCard({ value, label, note, dark }: StatCardProps) {
  return (
    <div
      className="rounded-md p-4 border"
      style={{
        background: dark ? "rgba(255,255,255,0.04)" : "#fff",
        borderColor: dark ? "rgba(255,255,255,0.14)" : C.line,
      }}
    >
      <div
        className="text-2xl md:text-3xl font-bold mb-1"
        style={{
          color: C.gold,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {value}
      </div>
      <div
        className="text-xs font-semibold uppercase tracking-wide mb-1"
        style={{ color: dark ? "#fff" : C.navy }}
      >
        {label}
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: dark ? "rgba(255,255,255,0.65)" : "#5A5F6E" }}
      >
        {note}
      </p>
    </div>
  );
}

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill={C.gold} opacity="0.15" />
    <path
      d="M6 10.2l2.4 2.4L14 7"
      stroke={C.goldDeep}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const KernelDivider = () => (
  <div className="flex items-center justify-center gap-2 py-1" aria-hidden="true">
    {Array.from({ length: 7 }).map((_, i) => (
      <span
        key={i}
        style={{
          width: 6,
          height: 9,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: i === 3 ? C.gold : C.line,
          opacity: i === 3 ? 1 : 0.8,
        }}
      />
    ))}
  </div>
);

/* ---------- page ---------- */

export default function AflasafePage() {
  return (
    <div style={{ background: C.paper, color: C.ink }} className="w-full">
      <div className="af-sans">
        {/* ================= HERO ================= */}
        <AflasafeFeature />


        {/* ================= AFLATOXINS ================= */}
        <section id="aflatoxins" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <SectionTitle
                eyebrow="The threat"
                title="What are Aflatoxins?"
                sub="Aflatoxins are highly toxic, cancer-causing poisons produced by molds (Aspergillus flavus and Aspergillus parasiticus) that contaminate food crops like maize and groundnuts."
              />

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="font-semibold mb-3" style={{ color: C.navy }}>
                    Health Impacts
                  </h3>
                  <ul className="space-y-2.5 text-sm" style={{ color: "#4B5165" }}>
                    {[
                      "Liver cancer and liver damage",
                      "Immune system suppression",
                      "Child stunting and impaired growth",
                      "Acute poisoning that can be fatal",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <span className="mt-1"><CheckIcon /></span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3" style={{ color: C.navy }}>
                    Economic Impacts
                  </h3>
                  <ul className="space-y-2.5 text-sm" style={{ color: "#4B5165" }}>
                    {[
                      "Reduced crop value and market access",
                      "Livestock illness and death from contaminated feed",
                      "Trade barriers for affected commodities",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <span className="mt-1"><CheckIcon /></span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="rounded-md px-5 py-4 text-sm"
                style={{
                  background: "#FFF8EA",
                  border: `1px solid ${C.goldLight}`,
                  color: C.goldDeep,
                }}
              >
                Aflatoxins are invisible and cannot be destroyed by normal cooking,
                making prevention critical.
              </div>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden shadow-lg mb-8 relative h-72">
                <Image
                  src={IMAGES.aflatoxins}
                  alt="Close-up of maize kernels, the crop most affected by aflatoxin contamination"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <h3 className="font-semibold mb-4" style={{ color: C.navy }}>
                Commonly Affected Crops
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  "Maize",
                  "Groundnuts",
                  "Sorghum",
                  "Millet",
                  "Cassava",
                  "Rice",
                  "Cottonseed",
                  "Tree nuts",
                ].map((crop) => (
                  <div
                    key={crop}
                    className="rounded-md py-3 px-2 text-center text-xs font-medium"
                    style={{
                      background: "#fff",
                      border: `1px solid ${C.line}`,
                      color: C.navy,
                    }}
                  >
                    {crop}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <KernelDivider />

        {/* ================= WHAT IS AFLASAFE ================= */}
        <section
          id="aflasafe"
          className="py-20 md:py-28"
          style={{ background: C.navy }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
              <div>
                <SectionTitle
                  dark
                  eyebrow="The science"
                  title="Nature's Solution to Aflatoxin"
                  sub="Aflasafe is a natural, safe, and effective biocontrol product that reduces aflatoxin contamination in crops using non-toxic Aspergillus flavus strains coated onto sorghum grains."
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl relative h-72">
                <Image
                  src={IMAGES.aflasafe}
                  alt="Sorghum grain, the natural carrier used for Aflasafe biocontrol product"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  t: "How It Works",
                  d: "Applied to fields, Aflasafe's beneficial fungi outcompete toxic strains, reducing aflatoxin contamination by up to 90%.",
                },
                {
                  t: "Scientifically Proven",
                  d: "Developed by IITA and partners, with proven efficacy across African countries.",
                },
                {
                  t: "Environmentally Friendly",
                  d: "Aflasafe is organic, safe for humans, animals, and the environment, leaving no harmful residues.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-md p-6"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full mb-4 flex items-center justify-center"
                    style={{ background: "rgba(198,161,91,0.18)" }}
                  >
                    <span style={{ color: C.goldLight }}>&#9670;</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{c.t}</h4>
                  <p className="text-white/65 text-sm leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionTitle eyebrow="Why it matters" title="Benefits of Using Aflasafe" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { t: "Health Protection", d: "Reduces aflatoxin-related health risks for consumers" },
              { t: "Increased Income", d: "Higher-quality crops command better market prices" },
              { t: "Market Access", d: "Meets international safety standards for export" },
              { t: "Food Security", d: "More safe food available for consumption" },
              { t: "Livestock Health", d: "Safer animal feed improves livestock productivity" },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-md p-5"
                style={{ background: "#fff", border: `1px solid ${C.line}` }}
              >
                <div className="mb-3"><CheckIcon /></div>
                <h4 className="font-semibold mb-1.5 text-sm" style={{ color: C.navy }}>
                  {b.t}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#5A5F6E" }}>
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW TO USE ================= */}
        <section id="usage" className="py-20 md:py-28" style={{ background: "#F2EEE3" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 mb-16">
              <div>
                <SectionTitle
                  eyebrow="Field guide"
                  title="Simple Application Process"
                />
                <div className="space-y-6">
                  {[
                    { n: "1", t: "Timing", d: "Apply 2–3 weeks before flowering begins" },
                    { n: "2", t: "Rate", d: "Use 10kg of Aflasafe per hectare" },
                    { n: "3", t: "Method", d: "Broadcast evenly by hand or using mechanical spreader" },
                    { n: "4", t: "Conditions", d: "Apply when soil is moist, ideally before light rain" },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold af-serif"
                        style={{ background: C.navy, color: C.goldLight }}
                      >
                        {s.n}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: C.navy }}>
                          {s.t}
                        </h4>
                        <p className="text-sm" style={{ color: "#5A5F6E" }}>
                          {s.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-lg overflow-hidden shadow-lg mb-8 relative h-64">
                  <Image
                    src={IMAGES.usage}
                    alt="Farmers working together in a field, applying good agricultural practice"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="rounded-md p-6"
                  style={{ background: "#fff", border: `1px solid ${C.line}` }}
                >
                  <h4 className="font-semibold mb-4" style={{ color: C.navy }}>
                    Best Practices
                  </h4>
                  <ul className="space-y-2.5 text-sm" style={{ color: "#4B5165" }}>
                    {[
                      "Store Aflasafe in a cool, dry place and use before expiration date",
                      "Apply in the early morning or late afternoon to avoid direct sunlight",
                      "Wear gloves during application and wash hands afterward",
                      "Combine with good agricultural practices for best results",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <span className="mt-1"><CheckIcon /></span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* expected results */}
            <div
              className="rounded-lg p-8 md:p-10"
              style={{ background: C.navy }}
            >
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <Eyebrow>Expected results</Eyebrow>
                  <h3 className="af-serif text-white text-2xl md:text-3xl font-semibold">
                    When used correctly, Aflasafe can reduce aflatoxin
                    contamination by 80–99% in treated crops.
                  </h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div
                  className="rounded-md p-6"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-3">
                    Without Aflasafe
                  </div>
                  <div className="h-3 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <div className="h-3 rounded-full" style={{ width: "90%", background: "#B23A3A" }} />
                  </div>
                  <div className="text-white font-semibold">High contamination</div>
                </div>
                <div
                  className="rounded-md p-6"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-3">
                    With Aflasafe
                  </div>
                  <div className="h-3 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <div className="h-3 rounded-full" style={{ width: "12%", background: C.gold }} />
                  </div>
                  <div className="text-white font-semibold">Low contamination</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative overflow-hidden py-20 md:py-24" style={{ background: C.navy2 }}>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 300px at 20% 0%, rgba(198,161,91,0.18), transparent)",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="af-serif text-white text-3xl md:text-4xl font-semibold mb-4">
              Ready to Protect Your Crops?
            </h2>
            <p className="text-white/70 mb-10">
              Join thousands of Malawian farmers benefiting from Aflasafe
              technology to produce safer, higher-quality crops.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <GoldButton href="#">
                Get Aflasafe
              </GoldButton>
              <GoldButton
                href="#"
                variant="ghost"
              >
                More Resources
              </GoldButton>
            </div>
          </div>
        </section>

        {/* ================= IMPACT IN MALAWI ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionTitle
            eyebrow="Why Malawi needs Aflasafe"
            title="The Impact of Aflatoxins in Malawi"
            sub="Aflatoxin contamination poses severe risks to public health and economic prosperity in Malawi, affecting both human and animal welfare."
          />

          <div className="rounded-lg overflow-hidden shadow-lg mb-14 relative h-64 md:h-80">
            <Image
              src={IMAGES.impact}
              alt="A community group in Malawi"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h3 className="font-semibold mb-5" style={{ color: C.navy }}>
                Health Impact
              </h3>
              <div className="space-y-5 mb-8 text-sm leading-relaxed" style={{ color: "#4B5165" }}>
                <p>
                  Over 6,300 deaths annually in Malawi are linked to
                  aflatoxin-induced liver cancer, costing the economy between
                  US$25 million and US$1.3 billion.
                </p>
                <p>
                  In 2024, more than 450 dogs died from consuming maize
                  husk-based feed contaminated with aflatoxins, causing liver
                  damage and blood clotting disorders.
                </p>
                <p>
                  A study of 112 raw milk samples in Malawi found 100%
                  contamination with aflatoxins, linked to stunted growth and
                  reduced cognitive development in children.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <StatCard value="6,300+" label="Deaths / year" note="Linked to liver cancer from aflatoxins" />
                <StatCard value="450+" label="Dogs" note="Died in 2024 from contaminated feed" />
                <StatCard value="100%" label="Milk samples" note="Tested contained aflatoxins" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-5" style={{ color: C.navy }}>
                Economic Impact
              </h3>
              <div className="space-y-5 mb-8 text-sm leading-relaxed" style={{ color: "#4B5165" }}>
                <p>
                  Aflatoxins hinder Malawi's agricultural potential,
                  necessitating investments in seed systems, extension
                  services, and aflatoxin control to scale the groundnut value
                  chain.
                </p>
                <p>
                  Producing aflatoxin-free crops could unlock US$1.6 billion
                  in groundnut agribusiness, with a goal to increase output to
                  1 million metric tonnes by 2030.
                </p>
                <p>
                  Aflatoxin-free sorghum farmers with NASFAM and Castel earn
                  MK2,000 per kg, doubling government prices and boosting
                  farmer incomes.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <StatCard value="$25M–$1.3B" label="Annual cost" note="Economic losses from aflatoxins" />
                <StatCard value="$1.6B" label="Export potential" note="In groundnut agribusiness" />
                <StatCard value="$45M" label="Current exports" note="Annual groundnut exports today" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= THE SOLUTION ================= */}
        <section className="py-20 md:py-28" style={{ background: C.navy }}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <div>
              <Eyebrow>The solution</Eyebrow>
              <h2 className="af-serif text-white text-3xl md:text-4xl font-semibold mb-5">
                Aflasafe
              </h2>
              <p className="text-white/70 mb-4 leading-relaxed">
                Aflasafe controls aflatoxin contamination, safeguarding health
                and unlocking billions in agricultural exports for Malawi.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                Aflatoxin-free crops command premium prices globally.
              </p>
              <GoldButton href="https://aflasafe.com/">
                Learn More About Aflasafe
              </GoldButton>
            </div>

            <div
              className="rounded-lg p-8"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)" }}
            >
              <h4 className="text-white font-semibold mb-1">
                Price Comparison
              </h4>
              <p className="text-white/50 text-xs mb-8">per kilogram</p>

              <div className="space-y-6">
                {[
                  { label: "Local Market", value: "MK600", pct: 30 },
                  { label: "Government", value: "MK900", pct: 45 },
                  { label: "Aflatoxin-Free", value: "MK2,000", pct: 100 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/75">{row.label}</span>
                      <span
                        className="font-semibold"
                        style={{
                          color: row.label === "Aflatoxin-Free" ? C.goldLight : "#fff",
                        }}
                      >
                        {row.value}
                      </span>
                    </div>
                    <div
                      className="h-2.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.12)" }}
                    >
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${row.pct}%`,
                          background:
                            row.label === "Aflatoxin-Free"
                              ? `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`
                              : "rgba(255,255,255,0.4)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}