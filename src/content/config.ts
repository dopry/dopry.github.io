import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    images: z
      .array(
        z.object({
          url: z
            .string()
            .min(1)
            .refine(
              (val) =>
                val.startsWith("http://") ||
                val.startsWith("https://") ||
                val.startsWith("/"),
              {
                message:
                  "url must be absolute (http/https) or root-relative (/path)",
              }
            ),
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
