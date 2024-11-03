import { defineCollection, z } from 'astro:content';

const poradyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    author: z.string(),
    image: z.string(),
  })
});

export const collections = {
  'porady': poradyCollection,
}; 