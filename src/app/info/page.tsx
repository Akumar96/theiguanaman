"use client";

import { useState } from "react";
import Link from "next/link";

const sources = [
  { id: 1, citation: "Florida Fish and Wildlife Conservation Commission — Iguana Management Plan, 2021" },
  { id: 2, citation: "IUCN Red List — Iguana iguana, 2021" },
  { id: 3, citation: "Miami-Dade County, 2022 Invasive Species Report" },
  { id: 4, citation: "UF IFAS Extension, 2020" },
  { id: 5, citation: "CDC, Reptile-Associated Salmonellosis Advisory" },
  { id: 6, citation: "Dorcas et al., PNAS, 2012" },
  { id: 7, citation: "USGS, 2022" },
  { id: 8, citation: "IUCN Red List — Python bivittatus, 2021" },
];

export default function InfoPage() {
  const [sourcesOpen, setSourcesOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Disclaimer banner */}
      <div className="bg-green-dark text-white py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm leading-relaxed text-white/90 max-w-4xl">
            This page presents ecological data on invasive reptile species in Florida and the United States. All management discussed targets invasive colonies only — native global populations remain protected and assessed separately by the IUCN.
          </p>
        </div>
      </div>

      {/* Page header */}
      <div className="bg-green-light py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
            Ecological Research
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-green-dark mb-4">
            Invasive Species Data
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Ecological Impact &amp; Conservation Context
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Green Iguana */}
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-dark mb-1">
                Green Iguana
              </h2>
              <p className="text-muted italic text-base">Iguana iguana</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: "1.8M", label: "Est. Florida population" },
                { num: "2–6", label: "Eggs per raid" },
                { num: "1.5m", label: "Burrow depth" },
              ].map((stat, i) => (
                <div key={i} className="bg-green-light rounded-lg p-4 text-center">
                  <div className="text-xl font-semibold text-green-dark">{stat.num}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Diet */}
            <div className="mb-8">
              <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
                Diet &amp; Egg Predation
              </p>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Primarily herbivorous but opportunistically consumes bird eggs, hatchlings, and nestlings — documented nest raids target ground-nesting birds including mockingbirds, herons, and ibis.<sup className="text-green-accent text-[10px] font-medium">[1]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>At Florida&apos;s estimated density of <strong className="text-foreground font-medium">1.8 million animals</strong>, predation pressure on ground-nesting waterbirds is ecologically significant but not yet fully quantified.<sup className="text-green-accent text-[10px] font-medium">[4]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Established only in <strong className="text-foreground font-medium">South Florida and Hawaii</strong> — egg predation impact is geographically concentrated, not continental.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Native range populations in Central and South America remain <strong className="text-foreground font-medium">stable or increasing</strong> — culling invasive colonies has no effect on global conservation status.<sup className="text-green-accent text-[10px] font-medium">[2]</sup></span>
                </li>
              </ul>
            </div>

            {/* Environmental Impact */}
            <div className="mb-8">
              <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
                Environmental Impact
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-light rounded-lg p-5">
                  <p className="text-green-accent text-[10px] tracking-[0.18em] uppercase mb-3 font-medium">Environmental impacts</p>
                  <ul className="space-y-2 text-muted text-sm">
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Seawall and canal bank destabilization from deep burrows<sup className="text-green-accent text-[10px] font-medium">[3]</sup></li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Defoliation of native and ornamental plants<sup className="text-green-accent text-[10px] font-medium">[4]</sup></li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Salmonella shedding near public waterways<sup className="text-green-accent text-[10px] font-medium">[5]</sup></li>
                  </ul>
                </div>
                <div className="bg-green-light rounded-lg p-5">
                  <p className="text-green-accent text-[10px] tracking-[0.18em] uppercase mb-3 font-medium">Conservation context</p>
                  <ul className="space-y-2 text-muted text-sm">
                    <li className="flex gap-2"><span className="text-green-accent">–</span> IUCN Least Concern — globally non-threatened<sup className="text-green-accent text-[10px] font-medium">[2]</sup></li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Invasive status in US only (FL + HI)</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Management does not affect native range populations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Callout */}
            <div className="bg-green-light rounded-lg p-5 border-l-4 border-green-accent">
              <p className="text-green-dark text-sm leading-relaxed">
                Population management in Florida and Hawaii targets invasive colonies only. Green iguanas remain abundant and non-threatened in their native Central and South American range — reduction of invasive populations does not affect global conservation status.<sup className="text-green-accent text-[10px] font-medium">[2]</sup>
              </p>
            </div>
          </div>

          {/* Burmese Python */}
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-dark mb-1">
                Burmese Python
              </h2>
              <p className="text-muted italic text-base">Python bivittatus</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: "100–300K", label: "Est. Florida population" },
                { num: "85–99%", label: "Mammal decline" },
                { num: "Apex", label: "Predator status" },
              ].map((stat, i) => (
                <div key={i} className="bg-green-light rounded-lg p-4 text-center">
                  <div className="text-xl font-semibold text-green-dark">{stat.num}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
                Diet &amp; Egg Predation
              </p>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Apex predators in the Everglades — consume bird eggs and nestlings alongside mammals, birds, and reptiles. Radio-telemetry studies confirm active nest predation on wading bird colonies.<sup className="text-green-accent text-[10px] font-medium">[6]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>USGS estimates <strong className="text-foreground font-medium">100,000–300,000 individuals</strong> currently occupy South Florida.<sup className="text-green-accent text-[10px] font-medium">[7]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Mammal population declines of <strong className="text-foreground font-medium">85–99%</strong> documented in high-density python zones for raccoons, opossums, and rabbits.<sup className="text-green-accent text-[10px] font-medium">[6]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Globally listed as <strong className="text-foreground font-medium">Vulnerable</strong> due to overharvesting in native Southeast Asian range — entirely separate from the invasive Florida population.<sup className="text-green-accent text-[10px] font-medium">[8]</sup></span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
                Environmental Impact
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-light rounded-lg p-5">
                  <p className="text-green-accent text-[10px] tracking-[0.18em] uppercase mb-3 font-medium">Environmental impacts</p>
                  <ul className="space-y-2 text-muted text-sm">
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Trophic cascade from mid-level mammal decimation</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Disrupted seed dispersal and vegetation dynamics</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Competition with American alligators and crocodiles</li>
                  </ul>
                </div>
                <div className="bg-green-light rounded-lg p-5">
                  <p className="text-green-accent text-[10px] tracking-[0.18em] uppercase mb-3 font-medium">Conservation context</p>
                  <ul className="space-y-2 text-muted text-sm">
                    <li className="flex gap-2"><span className="text-green-accent">–</span> IUCN Vulnerable — in native SE Asian range only<sup className="text-green-accent text-[10px] font-medium">[8]</sup></li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Florida population entirely invasive</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Removal programs support Everglades recovery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-light rounded-lg p-5 border-l-4 border-green-accent">
              <p className="text-green-dark text-sm leading-relaxed">
                Florida&apos;s Burmese python population is entirely invasive. Removal programs support Everglades ecosystem recovery and have zero impact on the Vulnerable native populations in Southeast Asia.<sup className="text-green-accent text-[10px] font-medium">[8]</sup>
              </p>
            </div>
          </div>

          {/* Argentine Tegu */}
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-dark mb-1">
                Argentine Black and White Tegu
              </h2>
              <p className="text-muted italic text-base">Salvator merianae</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: "3", label: "FL counties" },
                { num: "350+", label: "Commensal species" },
                { num: "Omnivore", label: "Diet type" },
              ].map((stat, i) => (
                <div key={i} className="bg-green-light rounded-lg p-4 text-center">
                  <div className="text-xl font-semibold text-green-dark">{stat.num}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
                Diet &amp; Egg Predation
              </p>
              <ul className="space-y-3 text-muted text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Highly opportunistic omnivores — documented to consume an <strong className="text-foreground font-medium">entire sea turtle clutch</strong> in a single foraging bout.<sup className="text-green-accent text-[10px] font-medium">[1]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Documented excavating <strong className="text-foreground font-medium">American alligator nests, loggerhead sea turtle nests,</strong> and gopher tortoise burrows.<sup className="text-green-accent text-[10px] font-medium">[4]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Established in <strong className="text-foreground font-medium">Hillsborough, Miami-Dade, and Polk counties</strong>; FWC estimates several thousand individuals currently present.<sup className="text-green-accent text-[10px] font-medium">[3]</sup></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-accent mt-1.5 shrink-0">•</span>
                  <span>Globally Least Concern with widespread South American populations — invasive Florida population has no conservation bearing on native range.<sup className="text-green-accent text-[10px] font-medium">[2]</sup></span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
                Environmental Impact
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-light rounded-lg p-5">
                  <p className="text-green-accent text-[10px] tracking-[0.18em] uppercase mb-3 font-medium">Environmental impacts</p>
                  <ul className="space-y-2 text-muted text-sm">
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Direct nest predation on federally protected sea turtles</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Burrow competition with gopher tortoises (keystone species)</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Potential agricultural damage to crops and small livestock</li>
                  </ul>
                </div>
                <div className="bg-green-light rounded-lg p-5">
                  <p className="text-green-accent text-[10px] tracking-[0.18em] uppercase mb-3 font-medium">Protected species threatened</p>
                  <ul className="space-y-2 text-muted text-sm">
                    <li className="flex gap-2"><span className="text-green-accent">–</span> American alligator nests</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Loggerhead sea turtle nests</li>
                    <li className="flex gap-2"><span className="text-green-accent">–</span> Gopher tortoise burrows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => setSourcesOpen(!sourcesOpen)}
              className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="text-xl font-semibold text-green-dark">
                  Sources &amp; Methodology
                </h3>
                <p className="text-muted text-sm mt-1">
                  {sources.length} citations
                </p>
              </div>
              <svg
                className={`w-5 h-5 text-green-accent transition-transform duration-300 ${
                  sourcesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {sourcesOpen && (
              <div className="px-8 pb-8">
                <div className="border-t border-gray-100 pt-6">
                  <ol className="space-y-3 text-sm text-muted leading-relaxed">
                    {sources.map((s) => (
                      <li key={s.id} className="flex gap-3">
                        <span className="text-green-accent font-medium shrink-0">
                          [{s.id}]
                        </span>
                        <span>{s.citation}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-8 bg-green-light rounded-lg p-5">
                    <p className="text-green-dark text-sm leading-relaxed">
                      All population and impact statistics are drawn from peer-reviewed research, government wildlife agency reports, and IUCN assessments. Population reduction data refers exclusively to invasive populations in the United States and does not reflect or impact conservation status in native ranges.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Back to home */}
      <div className="pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-accent hover:text-green-dark transition-colors text-sm tracking-wide"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}