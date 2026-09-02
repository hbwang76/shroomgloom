import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/SiteChrome';
import { CardBrowser } from '@/components/CardBrowser';
import { pageCopy } from '@/lib/page-data';

export function generateStaticParams() { return Object.keys(pageCopy).map((path) => ({ section: path.split('/')[1] })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: { section: string } }): Promise<Metadata> { const data = pageCopy[`/${params.section}/` as keyof typeof pageCopy]; return { title: data.title, description: data.intro, alternates: { canonical: `https://shroomgloom.online/${params.section}/` } }; }

export default function SectionPage({ params }: { params: { section: string } }) {
  const data = pageCopy[`/${params.section}/` as keyof typeof pageCopy];
  const isTier = params.section === 'tier-list';
  return <Layout><div className="shell main page-copy"><span className="eyebrow">SHROOM AND GLOOM GUIDE · DEMO-23718635</span><h1>{data.title}</h1><p className="subhead">{data.intro}</p><section><CardBrowser tierOnly={isTier} /></section><p className="subhead">Need the quick answer? <Link href="/">Search the card browser</Link> or return to the <Link href="/best-builds/">best builds</Link>.</p></div></Layout>;
}
