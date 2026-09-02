import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/SiteChrome';
import { CardBrowser } from '@/components/CardBrowser';
import { GuideContent } from '@/components/GuideContent';
import { pageCopy } from '@/lib/page-data';

// OpenNext's Workers Assets binding does not upload ISR cache entries.
// Render these guide routes in the Worker rather than serving a missing cache file.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { section: string } }): Promise<Metadata> {
  const data = pageCopy[`/${params.section}/` as keyof typeof pageCopy];
  return {
    title: data.title,
    description: data.intro,
    alternates: { canonical: `https://shroomandgloom.online/${params.section}/` },
  };
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const data = pageCopy[`/${params.section}/` as keyof typeof pageCopy];
  const isCards = params.section === 'cards';
  return (
    <Layout>
      <div className="shell main page-copy">
        <span className="eyebrow">SHROOM AND GLOOM GUIDE · DEMO BUILD 23718635</span>
        <h1>{data.title}</h1>
        <p className="subhead">{data.intro}</p>
        {isCards ? (
          <section>
            <CardBrowser />
            <div className="page-content">
              <h2>Why this is a database and not a tier list</h2>
              <p>
                We&apos;re not publishing S/A/B/C/D ratings, and it&apos;s worth saying why plainly.
                Ratings need evidence. A tier list built before Early Access ships — with no public patch data,
                no community consensus, and no shared vocabulary for what a &quot;good&quot; card even does in a game
                where you build two decks at once — is guesswork dressed as authority.
              </p>
              <p>
                What we can do right now is accurate: give you every card&apos;s real name, its real text, its class and keywords,
                and let you filter. When Early Access has been out long enough for community consensus to form,
                ratings will appear here <strong>with the reasoning and the evidence attached</strong>, and with the build number they were judged against.
              </p>
              <p>
                If you came here for &quot;just tell me the best card,&quot; the honest answer is the mechanics that make <em>any</em> card good.
              </p>
            </div>
          </section>
        ) : (
          <>
            <section className="page-content">
              <GuideContent section={params.section} />
            </section>
            <p className="subhead">Need the quick answer? <Link href="/">Search the card browser</Link> or return to the <Link href="/cards/">cards database</Link>.</p>
          </>
        )}
      </div>
    </Layout>
  );
}
