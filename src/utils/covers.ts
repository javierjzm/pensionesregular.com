export const CATEGORY_COVER: Record<string, string> = {
  jubilacion: '/images/covers/jubilacion.jpg',
  cotizacion: '/images/covers/cotizacion.jpg',
  complementos: '/images/covers/complementos.jpg',
};

const DEFAULT_COVER = '/images/covers/default.jpg';

export function resolveArticleCover(category: string, coverImage?: string | null): string {
  if (coverImage && String(coverImage).trim()) {
    const s = String(coverImage).trim();
    return s.startsWith('/') ? s : `/${s}`;
  }
  return CATEGORY_COVER[category] ?? DEFAULT_COVER;
}

export function absoluteCoverUrl(siteHref: string, path: string): string {
  const origin = new URL(siteHref).origin;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${p}`;
}
