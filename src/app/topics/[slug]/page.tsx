import Link from "next/link";
import { notFound } from "next/navigation";

const topics = [
  {
    slug: "bird-conservation",
    title: "Bird Conservation & Invasive Species",
    excerpt: "How invasive reptiles threaten Florida's native bird populations — from nest predation to habitat disruption.",
    category: "Conservation",
    date: "April 2026",
    readTime: "8 min read",
    content: `
      <h2>The Growing Threat to Native Birds</h2>
      <p>Florida's native bird populations face an unprecedented threat from invasive reptile species. As climate change expands the range of tropical reptiles, the ecological balance that has sustained native species for millennia is being disrupted.</p>
      
      <h2>Nest Predation</h2>
      <p>Invasive species like green iguanas and Burmese pythons have learned to exploit nesting sites of ground-nesting birds. Eggs and chicks, once safe from most predators, are now vulnerable to these efficient hunters.</p>
      
      <h2>Habitat Disruption</h2>
      <p>Beyond direct predation, invasive reptiles alter the very habitat birds depend on. Burrowing iguanas destabilize ground nesting areas, while python populations have devastated the small mammal populations that many birds rely on for food.</p>
    `,
  },
  {
    slug: "iguana-impact",
    title: "The Green Iguana's Impact on Florida Ecosystems",
    excerpt: "Understanding the ecological footprint of Florida's most visible invasive reptile.",
    category: "Species Profile",
    date: "April 2026",
    readTime: "6 min read",
    content: `
      <h2>An Unwelcome arrival</h2>
      <p>The green iguana, native to Central and South America, has established thriving populations across South Florida. Originally pets that were released or escaped, they've found Florida's climate ideal for reproduction.</p>
      
      <h2>Ecological Footprint</h2>
      <p>These herbivores consume massive amounts of vegetation, competing with native species for food resources. Their burrowing behavior also damages infrastructure and alters soil ecosystems.</p>
    `,
  },
  {
    slug: "python-everglades",
    title: "Burmese Pythons and the Everglades Crisis",
    excerpt: "How an invasive apex predator is reshaping one of America's most important ecosystems.",
    category: "Ecosystem",
    date: "April 2026",
    readTime: "7 min read",
    content: `
      <h2>Apex Predator in the Everglades</h2>
      <p>Burmese pythons, some exceeding 20 feet in length, have become the apex predator in the Everglades. Originally imported for the pet trade, they were released by owners who could no longer care for them.</p>
      
      <h2>Devastating Impact</h2>
      <p>Studies show that since pythons established themselves, populations of native mammals like rabbits, foxes, and even alligators have dramatically declined. These snakes can consume prey larger than themselves.</p>
    `,
  },
];

export function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-green-light py-20 lg:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/topics" 
            className="text-green-accent text-sm font-medium flex items-center gap-2 mb-8 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Topics
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-green-accent text-[10px] tracking-[0.18em] uppercase font-medium bg-white px-3 py-1 rounded-full">
              {topic.category}
            </span>
            <span className="text-muted text-xs">{topic.date}</span>
            <span className="text-muted text-xs">·</span>
            <span className="text-muted text-xs">{topic.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-green-dark">
            {topic.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-green max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-12">
              {topic.excerpt}
            </p>
            <div 
              className="text-muted space-y-6"
              dangerouslySetInnerHTML={{ __html: topic.content }} 
            />
          </article>
        </div>
      </div>
    </main>
  );
}