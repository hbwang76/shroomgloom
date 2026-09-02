import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/SiteChrome';
import { cards, deckLabel, getCard, tierClass } from '@/data/cards';

export function generateStaticParams() { return cards.map((card) => ({ slug: card.slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> { const card = getCard(params.slug); return { title: card ? `${card.name} — Shroom and Gloom Card Guide` : 'Card not found', description: card?.verdict, alternates: { canonical: `https://shroomgloom.online/cards/${params.slug}/` } }; }

export default function CardDetail({ params }: { params: { slug: string } }) {
  const card = getCard(params.slug);
  if (!card) return <Layout><div className="shell main"><h1>Card not found</h1><p className="subhead">This card is not in the published handoff bundle.</p><Link href="/">Return to card search</Link></div></Layout>;
  return <Layout><div className="shell main page-copy"><span className="eyebrow">CARD GUIDE · {card.updated_at_build}</span><div className="detail"><div className={`tier ${tierClass[card.tier]}`}>TIER {card.tier}</div><h1>{card.name}</h1><div className="meta"><span className="deck">{deckLabel[card.deck]}</span><span>Cost {card.cost}⚡</span><span>{card.rarity}</span></div><p className="verdict">{card.verdict}</p><div className="tags">{card.synergies.map((item) => <span className="tag" key={item}>+ {item}</span>)}</div><span className="provisional">Provisional · Last verified against {card.updated_at_build}</span></div><section><h2>When to take this card</h2><p>Take this card when its listed synergies are already present or when your run needs its specific role. This record is provisional, so check the build label before relying on it.</p></section><section><h2>Builds this fits</h2><p>See the <Link href="/best-builds/">Best Builds</Link> page for decision-first deck routes and related card picks.</p></section><section><h2>When not to take this card</h2><p>If your current deck has no matching synergy and another pick solves an immediate problem, skip this conditional card.</p></section><section className="faq"><h2>Card FAQ</h2><details><summary>What build was this card checked against?</summary><p>demo-23718635. The record remains provisional until re-verified against the Early Access build.</p></details></section></div></Layout>;
}
