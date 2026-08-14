import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import { getPosts } from "@/lib/content";
import type { PostCategory, PostSummary } from "@/lib/content";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Tattoo Blog: Aftercare, Pricing, Styles & Advice",
  description:
    "Practical tattoo advice from The Ink Room, Kolkata — aftercare for Indian weather, how tattoo pricing works, choosing an artist, fine line styles, cover-ups and first-tattoo guidance.",
  image: "/img/tattoo2.jpg",
  url: "/blog",
});

/** Display order for the category groups on this page. */
const CATEGORY_ORDER: PostCategory[] = [
  "News",
  "Planning",
  "Aftercare",
  "Styles",
  "Pricing",
  "Choosing an artist",
];

function groupByCategory(posts: PostSummary[]) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: posts.filter((post) => post.category === category),
  })).filter((group) => group.items.length > 0);
}

export default async function BlogHub() {
  const posts = await getPosts();
  const groups = groupByCategory(posts);

  const schema = jsonLdGraph(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
    {
      "@type": "Blog",
      "@id": `${siteConfig.url}/blog`,
      name: `${siteConfig.name} Blog`,
      url: `${siteConfig.url}/blog`,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      publisher: { "@id": `${siteConfig.url}/#business` },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${siteConfig.url}/blog/${post.slug}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: { "@id": `${siteConfig.url}/#soniya` },
      })),
    }
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="pt-40 pb-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-6">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-neutral-100 leading-tight mb-6">
              Everything worth knowing before you get inked
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
              Straight answers to the questions people actually ask us — what a
              tattoo costs and why, how to heal one properly in Kolkata&apos;s
              weather, which designs survive at small scale, and how to tell a
              good artist from a risky one.
            </p>
          </div>
        </Container>
      </section>

      {groups.map((group) => (
        <section key={group.category} className="pb-20">
          <Container>
            <h2 className="text-2xl font-serif font-bold text-neutral-100 mb-8 pb-4 border-b border-neutral-800">
              {group.category}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-red-600 transition-colors"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-3">
                      {post.readingMinutes} min read
                    </p>
                    <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3 group-hover:text-red-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <Cta
        title="Still have a question?"
        description="Message us on WhatsApp — we would rather answer it before you book than after."
      />
    </>
  );
}
