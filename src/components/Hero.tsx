"use client";

import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful Florida beach at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="animate-fade-in-up text-green-light/90 text-xs tracking-[0.3em] uppercase mb-6">
          Professional Wildlife Removal
        </p>

        <h1 className="animate-fade-in-up delay-200 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white mb-8">
          Florida&apos;s Trusted
          <br />
          Wildlife Experts.
        </h1>

        <p className="animate-fade-in-up delay-300 text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-12 leading-relaxed">
          Humane removal of iguanas, raccoons, pythons, tegus &amp; more
          across Palm Beach County.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-green-dark hover:bg-green-700 text-white rounded-full px-10 py-4 text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
          >
            Get a Free Assessment
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors underline underline-offset-4"
          >
            Learn about our approach &rarr;
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <svg
          className="w-6 h-6 text-white/60"
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
      </div>
    </section>
  );
}
