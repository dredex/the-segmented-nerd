import { defineCollection, z } from "astro:content";

// Matches the frontmatter produced by the vdefend-blog-drafter skill.
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Josh Green"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
