import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight mb-8">
              Humane. Professional.
              <br />
              Effective.
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                From iguanas devastating your landscaping to raccoons in the attic
                to invasive pythons—Palm Beach County&apos;s wildlife
                pressures are unique. We&apos;ve got the expertise to handle it all.
              </p>
              <p>
                Whether it&apos;s iguanas, raccoons, coyotes, muscovy ducks, burmese pythons, or feral pigs,
                we use proven, humane methods. We&apos;re fully licensed, fully
                insured, and we know Palm Beach County wildlife like the back of our hand.
              </p>
              <p>
                When exclusion and prevention aren&apos;t enough, we step in.
                Trapping, removal, damage repair, and ongoing monitoring—we&apos;re
                your complete wildlife solution.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
              alt="Beautiful Florida Keys beach at sunset"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16 mt-20">
          {[
            {
              stat: "Fully Licensed",
              desc: "Florida wildlife control operator",
            },
            {
              stat: "All Species",
              desc: "Iguanas, raccoons, coyotes, pythons & more",
            },
            {
              stat: "Palm Beach County",
              desc: "Serving all of Palm Beach County",
            },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-green-dark mb-2">
                {item.stat}
              </p>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
