const services = [
  {
    title: "Wildlife Trapping",
    description:
      "Humane and professional trapping of raccoons, coyotes, feral pigs, burmese pythons, and other nuisance wildlife. We handle the entire process from assessment to safe removal.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M24 4V16M24 4L18 10M24 4L30 10" />
        <rect x="8" y="16" width="32" height="24" rx="2" />
        <path d="M16 28H32M16 34H26" />
      </svg>
    ),
  },
  {
    title: "Raccoon Removal",
    description:
      "Professional extraction of raccoons from attics, chimneys, and crawl spaces. We seal entry points and prevent future infestations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="24" cy="24" r="16" />
        <circle cx="18" cy="20" r="4" />
        <circle cx="30" cy="20" r="4" />
        <path d="M24 28V32" />
        <path d="M20 32H28" />
      </svg>
    ),
  },
  {
    title: "Python & Reptile Removal",
    description:
      "Safe capture and removal of burmese pythons and other reptiles. Experienced handling for dangerous and invasive species.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M8 24C8 24 14 16 24 16C34 16 40 24 40 24C40 24 34 32 24 32C14 32 8 24 8 24Z" />
        <path d="M12 24C12 24 18 18 24 18C30 18 36 24 36 24" />
        <path d="M16 24H32" />
      </svg>
    ),
  },
  {
    title: "Iguana Removal",
    description:
      "Professional capture and removal of iguanas from yards, pools, and structures. We address the damage they cause and prevent future visits.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 36C12 36 8 28 12 20C16 12 24 8 32 12C36 14 40 20 40 24" />
        <circle cx="34" cy="14" r="2" />
        <path d="M12 36L8 40" />
        <path d="M16 38L14 42" />
        <path d="M20 39L20 44" />
      </svg>
    ),
  },
  {
    title: "Exclusion & Prevention",
    description:
      "We seal entry points, install one-way doors, and implement exclusion methods to keep wildlife from returning to your property.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <rect x="8" y="12" width="32" height="28" />
        <path d="M16 12V8C16 5.79 17.79 4 20 4H28C30.21 4 32 5.79 32 8V12" />
        <circle cx="24" cy="26" r="4" />
        <path d="M24 30V34" />
      </svg>
    ),
  },
  {
    title: "Damage Repair",
    description:
      "Professional repair of wildlife damage including torn vents, chewed wiring, contaminated insulation, and structural repairs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M8 36L20 12L32 28L40 20" />
        <path d="M32 20H40V28" />
        <path d="M4 40H44" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-green-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-green-dark">
            Humane Services.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-green-dark mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-green-dark">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
