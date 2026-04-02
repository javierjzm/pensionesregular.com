import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('articulos');

  const sortedArticles = articles
    .filter((a) => !a.data.noindex)
    .sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime())
    .slice(0, 20);

  return rss({
    title: 'Pensiones Regular',
    description:
      'Guías claras y actualizadas sobre pensiones de jubilación, cotización y prestaciones de la Seguridad Social en España.',
    site: context.site!.toString(),
    items: sortedArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.datePublished,
      description: article.data.description,
      link: `/${article.data.category}/${article.slug}/`,
    })),
    customData: '<language>es-ES</language>',
  });
}
