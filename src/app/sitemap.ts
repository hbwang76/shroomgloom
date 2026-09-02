import type { MetadataRoute } from 'next';
import { cards } from '@/data/cards';

const origin = 'https://shroomandgloom.online';

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    { path: '/', priority: 1.0, changefreq: 'daily' as const },
    { path: '/cards/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/best-builds/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/characters/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/beginner-guide/', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/quests/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/patch-notes/', priority: 0.7, changefreq: 'daily' as const },
  ];
  return [
    ...fixed.map((item) => ({
      url: `${origin}${item.path}`,
      lastModified: new Date('2026-09-02'),
      changeFrequency: item.changefreq,
      priority: item.priority,
    })),
    ...cards.map((card) => ({
      url: `${origin}/cards/${card.slug}/`,
      lastModified: new Date('2026-09-02'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
