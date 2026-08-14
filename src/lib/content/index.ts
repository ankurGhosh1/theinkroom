import { localPostSource } from "./source.local";
import type { Post, PostSource, PostSummary } from "./types";

/**
 * The active content source.
 *
 * To move to Prismic: add `source.prismic.ts` implementing `PostSource`, then
 * change this one line. Every consumer already awaits these functions, so no
 * page or component needs touching.
 *
 *   const source: PostSource = process.env.PRISMIC_ACCESS_TOKEN
 *     ? prismicPostSource
 *     : localPostSource;
 */
const source: PostSource = localPostSource;

export const getPosts = (): Promise<PostSummary[]> => source.getAll();

export const getPostSlugs = (): Promise<string[]> => source.getSlugs();

export const getPostBySlug = (slug: string): Promise<Post | null> =>
  source.getBySlug(slug);

export const getRelatedPosts = (
  slug: string,
  limit?: number
): Promise<PostSummary[]> => source.getRelated(slug, limit);

export type { Post, PostBlock, PostSummary, PostCategory } from "./types";
