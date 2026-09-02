import Link from 'next/link';
import { Layout } from '@/components/SiteChrome';
import { SearchSection } from '@/components/CardBrowser';

const links = [
  ['Tier List', 'Every card ranked S through D', '/tier-list/'],
  ['Build Guides', 'Decision-first decks for every character', '/best-builds/'],
  ['All 7 Characters', 'Unlock paths and playstyle verdicts', '/characters/'],
  ['Beginner Guide', 'Your first run to The Gloom', '/beginner-guide/'],
];

export default function HomePage() {
  return <Layout><div className="shell main"><section><span className="eyebrow">SHROOM AND GLOOM · EARLY ACCESS GUIDE</span><h1>Shroom and Gloom Guide</h1><p className="subhead">Search every card. See its tier. Pick the right build.</p></section><SearchSection /><section className="below"><div><h2>Why a separate guide site?</h2><p className="subhead">Most Shroom and Gloom content lives in scattered Discord threads, Reddit posts, and videos. This site answers one question fast: should you pick this card, build, or unlock path?</p><h3>What you&apos;ll find here</h3><p className="subhead">A searchable card database with verdicts, a three-deck tier list, decision-first builds, character unlock paths, and quest steps — each labeled with the game build it was checked against.</p></div><div><div className="quick-links">{links.map(([title, description, href]) => <Link className="quick" href={href} key={href}><h3>{title}</h3><p>{description}</p></Link>)}</div></div></section><section className="faq"><h2>Common questions</h2><details><summary>Is Shroom and Gloom Guide free?</summary><p className="subhead">Yes. Every page is free to read. No account, payment, or subscription.</p></details><details><summary>How often is the card database updated?</summary><p className="subhead">Cards are re-verified after Steam patches, and each card page shows its build label.</p></details><details><summary>Is this site affiliated with Team Lazerbeam or Devolver Digital?</summary><p className="subhead">No. This is an unofficial fan-made guide.</p></details></section></div></Layout>;
}
