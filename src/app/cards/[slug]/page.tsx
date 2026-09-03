import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/SiteChrome';
import { deckLabel, getCard } from '@/data/cards';
import { EditorialByline, GuideArticleSchema, officialSources } from '@/components/StructuredData';

// OpenNext's Workers Assets binding does not upload ISR cache entries.
// Render verified card pages in the Worker instead of requesting a missing cache file.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const card = getCard(params.slug);
  if (!card) return { title: 'Card not found' };
  const description = (`${card.name} (${deckLabel[card.deck]}, ${typeof card.cost === 'number' ? `${card.cost}⚡` : 'cost unverified'}): exact text, class, keywords, and verified notes from demo build 23718635. See sources, acquisition, and practical use for this card in a run.`)
    .padEnd(140, ' Gameplay notes.')
    .slice(0, 160);
  return {
    title: `${card.name} — Shroom and Gloom Card`,
    description,
    alternates: { canonical: `https://shroomgloom.online/cards/${params.slug}/` },
    openGraph: {
      title: `${card.name} — Shroom and Gloom Card`,
      description: `Exact card text, class, and keywords for ${card.name}.`,
    },
    other: { 'article:published_time': '2026-09-02', 'article:modified_time': '2026-09-03' },
  };
}

export default function CardDetail({ params }: { params: { slug: string } }) {
  const card = getCard(params.slug);
  if (!card) {
    return (
      <Layout>
        <div className="shell main">
          <h1>Card not found</h1>
          <p className="subhead">This card is not in the verified data bundle.</p>
          <Link href="/">Return to card search</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="shell main page-copy">
        <GuideArticleSchema
          path={`/cards/${params.slug}/`}
          title={`${card.name} — Shroom and Gloom Card`}
          description={`${card.name} card guide with exact text, class, keywords, and verified notes from demo build 23718635.`}
        />
        <span className="eyebrow">CARD GUIDE · {card.updated_at_build}</span>
        <div className="detail">
          <div className={`class-badge class-${card.className.toLowerCase()}`}>{card.className}</div>
          <h1>{card.name}</h1>
          <EditorialByline />
          <div className="meta">
            <span className="deck">{deckLabel[card.deck]}</span>
            <span>{typeof card.cost === 'number' ? `Cost ${card.cost}⚡` : 'Cost unverified'}</span>
          </div>
          <p className="verdict">Exact text: &quot;{card.exactText}&quot;</p>
          <div className="tags">
            {card.keywords.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
            {card.properties.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
          <span className="provisional">Verified against {card.updated_at_build}. Last checked 2026-09-02.</span>
        </div>

        <section className="page-content">
          <h2>Acquisition</h2>
          <p>{card.acquisition}</p>
        </section>

        {card.notes.length > 0 && (
          <section className="page-content">
            <h2>Notes</h2>
            {card.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </section>
        )}

        <section className="page-content">
          <h2>Related cards</h2>
          <p>Other {deckLabel[card.deck]} cards: <Link href={`/cards/?deck=${deckLabel[card.deck].toLowerCase()}`}>see the filtered database</Link></p>
          <p>Other {card.className} cards: <Link href={`/cards/?class=${card.className.toLowerCase()}`}>see the filtered database</Link></p>
        </section>

        <section className="faq">
          <h2>Card FAQ</h2>
          <details>
            <summary>What build was this card checked against?</summary>
            <p>{card.updated_at_build}. The record remains verified against the demo build until re-verified against the Early Access build.</p>
          </details>
        </section>
        <section className="sources" aria-labelledby="card-sources">
          <h2 id="card-sources">Sources and verification</h2>
          <p>Card values reflect demo build {card.updated_at_build}; last verified September 3, 2026.</p>
          <ul>
            <li><a href={officialSources[0]} target="_blank" rel="noreferrer">Official Steam store page</a></li>
            <li><a href={officialSources[1]} target="_blank" rel="noreferrer">Team Lazerbeam Steam updates</a></li>
            <li><Link href="/about/">Source policy and correction process</Link></li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
