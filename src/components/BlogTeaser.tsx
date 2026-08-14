import Link from "next/link";
import { Container } from "@/components/Container";
import { getPosts } from "@/lib/content";

interface BlogTeaserProps {
  title?: string;
  limit?: number;
  /** Slugs to feature, in order. Falls back to the newest posts. */
  featured?: string[];
}

export const BlogTeaser = async ({
  title = "Before you book, read these",
  limit = 3,
  featured,
}: Readonly<BlogTeaserProps>) => {
  const all = await getPosts();

  const posts = featured
    ? featured
        .map((slug) => all.find((post) => post.slug === slug))
        .filter((post): post is (typeof all)[number] => Boolean(post))
        .slice(0, limit)
    : all.slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 border-b border-neutral-800" id="blog">
      <Container>
        <div className="text-center mb-14">
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            From the blog
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-100">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-red-600 transition-colors"
            >
              <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-3">
                {post.category} · {post.readingMinutes} min read
              </p>
              <h3 className="text-xl font-serif font-bold text-neutral-100 mb-3">
                {post.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 text-neutral-200 border border-neutral-700 hover:border-red-600 hover:text-red-500 transition-colors rounded-md"
          >
            Read the blog
          </Link>
        </div>
      </Container>
    </section>
  );
};
