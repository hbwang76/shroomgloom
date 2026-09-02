import type { MetadataRoute } from 'next';
import { cards } from '@/data/cards';

const origin = 'https://shroomgloom.online';
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ['/', '/tier-list/', '/best-builds/', '/characters/', '/beginner-guide/', '/quests/', '/patch-notes/'];
  return [...fixed.map((path) => ({ url: `${origin}${path}`, lastModified: new Date('2026-09-02'), changeFrequency: 'weekly' as const, priority: path === '/' ? 1 : 0.8 })), ...cards.map((card) => ({ url: `${origin}/cards/${card.slug}/`, lastModified: new Date('2026-09-02'), changeFrequency: 'weekly' as const, priority: 0.8 }))];
}
