import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),
      images: z
        .array(
          z.object({
            url: image(),
            alt: z.string().optional(),
            href: z.string().url().optional(),
          })
        )
        .optional()
        .default([]),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
