import { defineCollection, z } from 'astro:content';
import {glob} from "astro/loaders";

const katas = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "./src/content/katas",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const rules = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "./src/content/rules",
  }),
  schema: z.object({
    title: z.string(),
    pageTitle: z.string().optional(),
    type: z.enum(["Interaction", "Code"])
  }),
});

export const collections = {
  katas,
  rules,
};
