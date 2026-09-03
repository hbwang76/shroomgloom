import { Layout } from '@/components/SiteChrome';

export const metadata = {
  title: 'Terms of Service — Shroom and Gloom Guide',
  alternates: { canonical: 'https://shroomgloom.online/terms/' },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Layout>
      <div className="shell main page-copy">
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> September 2, 2026</p>
        <section>
          <h2>Fan-site disclaimer</h2>
          <p>This is an unofficial fan-created guide. We are not affiliated with Team Lazerbeam or Devolver Digital. Game marks belong to their respective owners.</p>
        </section>
        <section>
          <h2>Use of the site</h2>
          <p>Use the site for personal reference. Do not scrape, mirror, republish substantial portions, bypass security, or interfere with site operation.</p>
        </section>
        <section>
          <h2>Editorial information</h2>
          <p>Card text, build directions, and unlock instructions are reference material and may change between game builds.</p>
        </section>
      </div>
    </Layout>
  );
}
