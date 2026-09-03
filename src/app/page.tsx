import Link from 'next/link';
import { Layout } from '@/components/SiteChrome';
import { SearchSection } from '@/components/CardBrowser';
import { cardCounts } from '@/data/cards';

// OpenNext's Workers Assets binding does not upload ISR cache entries.
// Render this page in the Worker so the deployed source is always authoritative.
export const dynamic = 'force-dynamic';

const links = [
  ['Cards Database', 'Every card with its exact text', '/cards/', '/images/shroomgloom/explore.webp', 'Explore cards in an underground passage'],
  ['Build Guides', 'Mechanics-first directions, no invented per-character decks', '/best-builds/', '/images/shroomgloom/combat.webp', 'Combat cards in a fungal cavern'],
  ['All Characters', '5 confirmed at launch + 3 in the demo database', '/characters/', '/images/shroomgloom/choice.webp', 'A post-encounter card choice'],
  ['Beginner Guide', 'A real first run, using the verified 13-card starter', '/beginner-guide/', '/images/shroomgloom/cavern.webp', 'A candle-lit cavern exploration'],
];

const faqs = [
  {
    q: 'Is Shroom and Gloom Guide free?',
    a: 'Yes. Every page is free to read. No account, no payment, no subscription.',
  },
  {
    q: 'How often is the card database updated?',
    a: 'We re-verify cards after every Steam patch. Each card page shows the build number it was last checked against.',
  },
  {
    q: 'Is this site affiliated with Team Lazerbeam or Devolver Digital?',
    a: 'No. This is a fan-made guide. See our Terms of Service for the full disclaimer.',
  },
  {
    q: 'Do you cover multiplayer or co-op?',
    a: 'The current game is single-player. If co-op is added, we\'ll add a guide.',
  },
  {
    q: 'Can I suggest a card rating change?',
    a: 'Use the link on the About page. We re-check submissions after each patch.',
  },
];

export default function HomePage() {
  return (
    <Layout>
      <div className="shell main">
        <section className="hero">
          <picture className="hero-media" aria-hidden="true">
            <source media="(max-width: 640px)" srcSet="/images/shroomgloom/hero-mobile.webp" type="image/webp" />
            <img src="/images/shroomgloom/hero-desktop.webp" alt="A candle-lit fungal cavern with a Shroom and Gloom card hand" width="1920" height="900" fetchPriority="high" />
          </picture>
          <div className="hero-overlay" />
          <div className="hero-copy">
            <span className="eyebrow">SHROOM AND GLOOM · EARLY ACCESS GUIDE</span>
            <h1>Shroom and Gloom Guide</h1>
            <p className="subhead">Search every card. See its exact text. Pick the right build.</p>
          </div>
        </section>
        <SearchSection />
        <section className="below">
          <div>
            <h2>Why a separate guide site?</h2>
            <p className="subhead">
              Most Shroom and Gloom content right now lives in scattered Discord threads, Reddit posts, and YouTube videos.
              That works for someone with an hour to dig. It doesn&apos;t work for someone mid-run who needs to know whether to take a card.
            </p>
            <p className="subhead">
              This site answers one question fast: <strong>should I pick this card, build, or unlock path?</strong>
            </p>
            <h3>What you&apos;ll find here</h3>
            <ul className="subhead" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>A searchable <strong>card database</strong> with every card&apos;s exact text, class and keywords (no tier ratings, no invented synergy chips — see why in the <Link href="/cards/">Cards database</Link>)</li>
              <li>A <strong>filterable card browser</strong> by deck (Explore / Combat / Foresight) and class (17 classes)</li>
              <li><strong>Build guides</strong> that explain the game&apos;s mechanics first; per-character decks publish after Early Access on 10 September 2026, when per-character data exists</li>
              <li><strong>Character unlock paths</strong> for the 5 confirmed launch characters plus the 3 demo-database characters whose launch status is unconfirmed</li>
              <li>A <strong>quest guide</strong> covering all ten quests in the demo build, with the exact requirement for each</li>
            </ul>
            <h3>What this site is not</h3>
            <ul className="subhead" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
              <li>Not a wiki. We don&apos;t list every game mechanic — we tell you what to do.</li>
              <li>Not affiliated with Team Lazerbeam or Devolver Digital. This is a fan project.</li>
              <li>Not a video channel. Every answer is a 30-second read.</li>
            </ul>
          </div>
          <div>
            <div className="quick-links">
              {links.map(([title, description, href, image, alt]) => (
                <Link className="quick" href={href} key={href}>
                  <img className="quick-image" src={image} alt={alt} width="800" height="450" loading="lazy" />
                  <div className="quick-copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="trust-strip">
          <p className="subhead">
            <strong>Updated for the Early Access build.</strong> Every card and build page lists the game build number it was verified against.
            Outdated pages get a banner pointing to the latest patch. If something&apos;s wrong, the <Link href="/about">About page</Link> has a contact link.
          </p>
        </section>
        <section className="faq">
          <h2>Common questions</h2>
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p className="subhead">{item.a}</p>
            </details>
          ))}
        </section>
      </div>
    </Layout>
  );
}
