import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://shroomgloom.online'),
  title: { default: 'Shroom and Gloom Guide — Cards, Tier Lists & Best Builds', template: '%s | Shroom and Gloom Guide' },
  description: 'Search Shroom and Gloom cards, browse tier lists, and find the best build for your character. Free to read.',
  alternates: { canonical: 'https://shroomgloom.online/' },
  openGraph: { title: 'Shroom and Gloom Guide — Cards, Tier Lists & Best Builds', description: 'Find the best card, build, or unlock path in under 30 seconds.', url: 'https://shroomgloom.online/', siteName: 'Shroom and Gloom Guide', type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
