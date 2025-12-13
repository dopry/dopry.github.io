import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export type BlogData = BlogPost["data"];

export interface BlogImage {
  url: string;
  alt?: string;
  href?: string;
}
