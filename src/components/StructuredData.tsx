import Script from 'next/script';

type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] };

export function StructuredData({ data }: JsonLdProps) {
  return (
    <Script
      id={`json-ld-${Array.isArray(data) ? 'graph' : String(data['@type']).toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const guideOrganization = {
  '@type': 'Organization',
  '@id': 'https://shroomgloom.online/#organization',
  name: 'Shroom and Gloom Guide',
  url: 'https://shroomgloom.online/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://shroomgloom.online/images/shroomgloom/og-home.webp',
    width: 1200,
    height: 630,
  },
  description: 'An unofficial, source-cited fan-made guide for Shroom and Gloom.',
};

export const guideAuthor = {
  '@type': 'Organization',
  '@id': 'https://shroomgloom.online/#editorial-team',
  name: 'Shroom and Gloom Guide Editorial Team',
  url: 'https://shroomgloom.online/about/',
};

export function SiteStructuredData() {
  return (
    <StructuredData
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          guideOrganization,
          guideAuthor,
          {
            '@type': 'WebSite',
            '@id': 'https://shroomgloom.online/#website',
            url: 'https://shroomgloom.online/',
            name: 'Shroom and Gloom Guide',
            description: 'Source-cited cards, builds, quests, and beginner guides for Shroom and Gloom.',
            publisher: { '@id': 'https://shroomgloom.online/#organization' },
            inLanguage: 'en-US',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://shroomgloom.online/cards/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ],
      }}
    />
  );
}

export const guideDates = {
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
};

export const officialSources = [
  'https://store.steampowered.com/app/3271280/Shroom_and_Gloom',
  'https://steamcommunity.com/app/3271280',
  'https://influencers.devolverdigital.com/shroom-and-gloom',
];

export function GuideArticleSchema({
  path,
  title,
  description,
  wordCount,
}: {
  path: string;
  title: string;
  description: string;
  wordCount?: number;
}) {
  return (
    <StructuredData
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `https://shroomgloom.online${path}#article`,
        headline: title,
        description,
        url: `https://shroomgloom.online${path}`,
        inLanguage: 'en-US',
        isPartOf: { '@id': 'https://shroomgloom.online/#website' },
        author: { '@id': 'https://shroomgloom.online/#editorial-team' },
        publisher: { '@id': 'https://shroomgloom.online/#organization' },
        ...guideDates,
        ...(wordCount ? { wordCount } : {}),
        citation: officialSources,
        about: { '@type': 'VideoGame', name: 'Shroom and Gloom' },
      }}
    />
  );
}

export function HomeFaqSchema({ items }: { items: { q: string; a: string }[] }) {
  return (
    <StructuredData
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://shroomgloom.online/#faq',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }}
    />
  );
}
