import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Florida beach paradise at sunset",
    span: "full",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80",
    alt: "Crystal clear tropical beach waters",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=600&q=80",
    alt: "Beautiful ocean sunset over Florida waters",
    span: "narrow",
  },
  {
    src: "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
    alt: "Green iguana perched on a tree branch",
    span: "half",
  },
  {
    src: "https://images.unsplash.com/photo-1444947173422-9737546c41a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Florida Keys mangrove shoreline",
    span: "half",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
            Florida Wildlife
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight mb-4">
            South Florida.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            From the mangrove islands of the Keys to Palm Beach canals to
            North Florida wetlands—our home is as diverse as the wildlife we
            protect you from.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="space-y-4">
          {/* Full-width hero image */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Two-column row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative aspect-[16/9] md:aspect-auto md:h-80 rounded-xl overflow-hidden">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-80 rounded-xl overflow-hidden">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
