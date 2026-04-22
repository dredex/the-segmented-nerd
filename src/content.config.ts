import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Matches the frontmatter produced by the vdefend-blog-drafter skill.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Josh Green"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(["ssp-build", "release-notes", "threat", "ecosystem"]),
    draft: z.boolean().optional().default(false),
    pinned: z.boolean().optional().default(false),
    version: z.string().optional(),
    status: z.string().optional(),
    source: z.string().url().optional(),
    sourceLabel: z.string().optional(),
  }),
});

export const collections = { blog, news };
