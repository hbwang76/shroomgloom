import { Layout } from '@/components/SiteChrome';

export const metadata = { title: 'About — Shroom and Gloom Guide', robots: { index: false, follow: true } };
export const dynamic = 'force-static';

export default function AboutPage(){return <Layout><div className="shell main page-copy"><h1>About Shroom and Gloom Guide</h1><p><strong>Shroom and Gloom Guide</strong> is an unofficial fan-created guide to the first-person roguelike multi-deckbuilder game Shroom and Gloom.</p><section><h2>Important fan-site disclaimer</h2><p>This site is not affiliated with, endorsed by, sponsored by, or connected to Team Lazerbeam or Devolver Digital. Game names, characters, cards, art, logos, and trademarks belong to their respective owners.</p></section><section><h2>What we do</h2><p>We provide editorial tier ratings, decision-first build guides, a searchable card database, unlock paths, quest steps, and patch notes. Ratings and verdicts are editorial opinions and records show the build they were checked against.</p></section><section><h2>Contact</h2><p>For legitimate inquiries, email contact@shroomandgloom.online.</p></section></div></Layout>}
