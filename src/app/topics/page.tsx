import Link from "next/link";

const topics = [
  {
    slug: "bird-conservation",
    title: "Bird Conservation & Invasive Species",
    excerpt: "How invasive reptiles threaten Florida's native bird populations — from nest predation to habitat disruption.",
    category: "Conservation",
    date: "April 2026",
    readTime: "8 min read",
  },
  {
    slug: "iguana-impact",
    title: "The Green Iguana's Impact on Florida Ecosystems",
    excerpt: "Understanding the ecological footprint of Florida's most visible invasive reptile.",
    category: "Species Profile",
    date: "April 2026",
    readTime: "6 min read",
  },
  {
    slug: "python-everglades",
    title: "Burmese Pythons and the Everglades Crisis",
    excerpt: "How an invasive apex predator is reshaping one of America's most important ecosystems.",
    category: "Ecosystem",
    date: "April 2026",
    readTime: "7 min read",
  },
];

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-green-light py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-green-accent text-xs tracking-[0.25em] uppercase mb-4">
            Learn More
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-green-dark mb-4">
            Topics &amp; Research
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            In-depth articles on invasive species, conservation efforts, and ecological impact in Florida.
          </p>
        </div>
      </div>

      {/* Topics grid */}
      <div className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-green-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-green-accent text-[10px] tracking-[0.18em] uppercase font-medium bg-green-light px-3 py-1 rounded-full">
                  {topic.category}
                </span>
                <span className="text-muted text-xs">{topic.date}</span>
                <span className="text-muted text-xs">·</span>
                <span className="text-muted text-xs">{topic.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-dark mb-3 leading-snug">
                {topic.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {topic.excerpt}
              </p>
              <div className="mt-4 text-green-accent text-sm font-medium flex items-center gap-2">
                Read article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
