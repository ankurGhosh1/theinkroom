import { posts } from "./posts.data";
import { toSummary, type Post, type PostSource, type PostSummary } from "./types";

const byNewest = (a: PostSummary, b: PostSummary) =>
  b.publishedAt.localeCompare(a.publishedAt);

/**
 * Hardcoded content source. Async on purpose — every consumer already awaits
 * these, so dropping in a Prismic-backed source later needs no changes
 * anywhere else in the app.
 */
export const localPostSource: PostSource = {
  async getAll() {
    return posts.map(toSummary).sort(byNewest);
  },

  async getSlugs() {
    return posts.map((post) => post.slug);
  },

  async getBySlug(slug: string) {
    return posts.find((post) => post.slug === slug) ?? null;
  },

  async getRelated(slug: string, limit = 3) {
    const current = posts.find((post) => post.slug === slug);
    if (!current) return [];

    const pick = (list: Post[]) =>
      list.filter((post) => post.slug !== slug).map(toSummary);

    // Editorially chosen first, then same-category, then anything else —
    // deduped and trimmed to the limit.
    const editorial = pick(
      (current.related ?? [])
        .map((related) => posts.find((post) => post.slug === related))
        .filter((post): post is Post => Boolean(post))
    );
    const sameCategory = pick(
      posts.filter((post) => post.category === current.category)
    );
    const rest = pick(posts);

    const seen = new Set<string>();
    return [...editorial, ...sameCategory, ...rest]
      .filter((post) => {
        if (seen.has(post.slug)) return false;
        seen.add(post.slug);
        return true;
      })
      .slice(0, limit);
  },
};
