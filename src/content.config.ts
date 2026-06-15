import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* CHAPTERS — each chapter is a JSON file in src/content/chapters */
const chapters = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/chapters" }),
  schema: z.object({
    slug: z.string(),
    label: z.string(),
    title: z.string(),
    edition: z.enum(["whitebox", "blackbox"]),
    number: z.string(),
    date: z.string().optional(),
    media: z
      .object({
        type: z.enum(["video", "image"]),
        src: z.string(),
        poster: z.string().optional(),
      })
      .optional(),
    status: z.enum(["upcoming", "current", "past"]).default("past"),
    order: z.number().default(0),
  }),
});

export const collections = { chapters };
