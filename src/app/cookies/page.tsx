import { Layout } from '@/components/SiteChrome';

export const metadata = {
  title: 'Cookie Policy — Shroom and Gloom Guide',
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <Layout>
      <div className="shell main page-copy">
        <h1>Cookie Policy</h1>
        <p><strong>Last updated:</strong> September 2, 2026</p>
        <section>
          <h2>What cookies we use</h2>
          <p>This is a read-only content site. We use only the cookies required for basic site functionality and analytics.</p>
        </section>
        <section>
          <h2>Managing cookies</h2>
          <p>You can disable or delete cookies through your browser settings. The site will still work without them.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>For privacy requests, email contact@shroomgloom.online.</p>
        </section>
      </div>
    </Layout>
  );
}
