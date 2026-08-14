import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { FaqSection } from "@/components/FaqSection";
import { PostBody } from "@/components/PostBody";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/components/Metadata";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/content";
import { siteConfig } from "@/data/site";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  jsonLdGraph,
} from "@/lib/schema";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.metaTitle,
    description: post.description,
    image: post.image,
    url: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const related = await getRelatedPosts(post.slug, 3);
  const path = `/blog/${post.slug}`;

  const schema = jsonLdGraph(
    articleSchema({
      headline: post.title,
      description: post.description,
      path,
      image: post.image,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
    }),
    faqSchema(post.faq),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ])
  );

  const updated = new Date(post.updatedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd data={schema} />

      <article>
        <section className="pt-40 pb-12">
          <Container>
            <div className="max-w-2xl mx-auto">
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-red-500 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-red-500 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ol>
              </nav>

              <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-5">
                {post.category}
              </p>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-100 leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                {post.description}
              </p>
              <p className="text-neutral-500 text-sm">
                By {siteConfig.founder.name} · {post.readingMinutes} min read ·
                Updated {updated}
              </p>
            </div>
          </Container>
        </section>

        <Container>
          <div className="max-w-2xl mx-auto relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-14">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
          </div>
        </Container>

        <Container>
          <PostBody blocks={post.blocks} />
        </Container>
      </article>

      <FaqSection items={post.faq} title="Common questions" id="post-faqs" />

      <section className="py-16 border-t border-neutral-800">
        <Container>
          <div className="max-w-2xl mx-auto">
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-6">
              Keep reading
            </p>
            <div className="space-y-4">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="block bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-red-600 transition-colors"
                >
                  <h3 className="text-lg font-serif font-bold text-neutral-100 mb-1">
                    {other.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {other.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Cta
        title="Ready to book?"
        description="Message us on WhatsApp with your idea and we will take it from there."
      />
    </>
  );
}
