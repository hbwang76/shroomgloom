import { Layout } from '@/components/SiteChrome';

export const metadata = {
  title: 'Privacy Policy — Shroom and Gloom Guide',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="shell main page-copy">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> September 2, 2026</p>
        <section>
          <h2>Information we collect</h2>
          <p>This is a read-only content site. It does not require an account and does not directly ask for your name or email. Cloudflare may process technical request data for delivery, security, and aggregate measurement.</p>
        </section>
        <section>
          <h2>Cookies and choices</h2>
          <p>See our <a href="/cookies/">Cookie Policy</a>. You can manage cookies through your browser. We do not sell personal information.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>For privacy requests, email contact@shroomgloom.online.</p>
        </section>
      </div>
    </Layout>
  );
}
