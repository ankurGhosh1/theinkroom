import type { FaqItem } from "@/components/Faq";

/**
 * Rich-text block. Kept intentionally close to Prismic's rich-text model so
 * the mapping later is mechanical rather than a rewrite.
 */
export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string };

export type PostCategory =
  | "Planning"
  | "Aftercare"
  | "Styles"
  | "Pricing"
  | "Choosing an artist"
  | "News";

/** The fields needed to render a card — no body content. */
export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  readingMinutes: number;
  publishedAt: string;
  updatedAt: string;
  image: string;
};

/** A full post document. */
export type Post = PostSummary & {
  /** <title> tag — brand suffix is appended by the layout title template. */
  metaTitle: string;
  description: string;
  blocks: PostBlock[];
  faq: FaqItem[];
  /** Editorially chosen related slugs. Falls back to same-category. */
  related?: string[];
};

/**
 * Every content source must satisfy this. Swapping the local source for
 * Prismic means writing one more implementation and changing the export in
 * `./index.ts` — no page or component touches the source directly.
 */
export interface PostSource {
  getAll(): Promise<PostSummary[]>;
  getSlugs(): Promise<string[]>;
  getBySlug(slug: string): Promise<Post | null>;
  getRelated(slug: string, limit?: number): Promise<PostSummary[]>;
}

export function toSummary(post: Post): PostSummary {
  const {
    slug,
    title,
    excerpt,
    category,
    readingMinutes,
    publishedAt,
    updatedAt,
    image,
  } = post;
  return {
    slug,
    title,
    excerpt,
    category,
    readingMinutes,
    publishedAt,
    updatedAt,
    image,
  };
}
