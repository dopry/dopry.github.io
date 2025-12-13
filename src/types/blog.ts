import type { CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

export type BlogPost = CollectionEntry<"blog">;

export type BlogData = BlogPost["data"];

export interface BlogImage {
  url: ImageMetadata;
  alt?: string;
  href?: string;
}
