import type { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/SiteChrome';
import { StructuredData, guideDates } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Contact — Shroom and Gloom Guide',
  description: 'Contact the Shroom and Gloom Guide editorial team about card data, quests, sources, or corrections.',
  alternates: { canonical: 'https://shroomgloom.online/contact/' },
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="shell main page-copy">
        <StructuredData
          data={{
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': 'https://shroomgloom.online/contact/#contact',
            url: 'https://shroomgloom.online/contact/',
            name: 'Contact — Shroom and Gloom Guide',
            isPartOf: { '@id': 'https://shroomgloom.online/#website' },
            about: { '@id': 'https://shroomgloom.online/#organization' },
            ...guideDates,
            mainEntity: { '@id': 'https://shroomgloom.online/#editorial-team' },
          }}
        />
        <span className="eyebrow">SHROOM AND GLOOM GUIDE · CONTACT</span>
        <h1>Contact the Editorial Team</h1>
        <p className="byline">
          <Link href="/about/" rel="author">Shroom and Gloom Guide Editorial Team</Link>
        </p>
        <section>
          <h2>Send a correction</h2>
          <p>
            Found an incorrect card text, quest requirement, source link, or build label? Email the editorial team and include the page URL and the correction.
          </p>
          <p>
            <a className="contact-link" href="mailto:contact@shroomgloom.online">contact@shroomgloom.online</a>
          </p>
        </section>
        <p className="subhead">Learn more about our data policy on the <Link href="/about/">About page</Link>.</p>
      </div>
    </Layout>
  );
}
