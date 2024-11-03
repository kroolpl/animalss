import { defineCollection, z } from 'astro:content';
import { image } from 'astro:assets';

const poradyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    author: z.string(),
    image: image().refine((img) => img.width >= 800, {
      message: "Cover image must be at least 800 pixels wide!",
    }),
  })
});

export const collections = {
  'porady': poradyCollection,
}; 