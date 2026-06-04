import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.enum(['jubilacion', 'cotizacion', 'complementos']),
    keywords: z.array(z.string()).default([]),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    author: z.string().default('Equipo editorial de Pensiones Regular'),
    canonical: z.string().url().optional(),
    noindex: z.boolean().default(false),
    pillar: z.boolean().default(false),
    relatedPosts: z.array(z.string()).default([]),
    schema: z.enum(['article', 'faq', 'howto']).default('article'),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    coverImage: z.string().optional(),
    imageAlt: z.string().max(180).optional(),
  }),
});

export const collections = { articulos };
