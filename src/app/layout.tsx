import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://shroomandgloom.online'),
  title: {
    default: 'Shroom and Gloom Guide — Cards, Builds, Quests',
    template: '%s | Shroom and Gloom Guide',
  },
  description: 'Shroom and Gloom guide built on verified demo data: 523 cards across Explore, Combat and Foresight, ten quests, and the two characters that unlock. Card text straight from the source.',
  alternates: { canonical: 'https://shroomandgloom.online/' },
  openGraph: {
    title: 'Shroom and Gloom Guide — Cards, Builds, Quests',
    description: 'Built on Steam demo build 23718635. Every card\'s exact text, the full quest list, and the two character-unlock paths.',
    url: 'https://shroomandgloom.online/',
    siteName: 'Shroom and Gloom Guide',
    images: [{ url: '/images/shroomgloom/og-home.webp', width: 1200, height: 630, alt: 'Shroom and Gloom Guide' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
