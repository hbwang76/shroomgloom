import { Layout } from '@/components/SiteChrome';
import { EditorialByline, GuideArticleSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'About — Shroom and Gloom Guide',
  alternates: { canonical: 'https://shroomgloom.online/about/' },
  robots: { index: false, follow: true },
};

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <Layout>
      <div className="shell main page-copy">
        <GuideArticleSchema
          path="/about/"
          title="About Shroom and Gloom Guide"
          description="How the independent Shroom and Gloom Guide editorial team verifies card data, quest instructions, sources, and build labels."
        />
        <h1>About Shroom and Gloom Guide</h1>
        <EditorialByline />
        <p><strong>Shroom and Gloom Guide</strong> is an unofficial fan-created guide to the first-person roguelike double-deckbuilder game Shroom and Gloom.</p>

        <section>
          <h2>What this site is</h2>
          <p>Shroom and Gloom Guide is a <strong>fan-created companion site</strong> for the game <em>Shroom and Gloom</em> (a first-person roguelike double-deckbuilder by Team Lazerbeam, published by Devolver Digital).</p>
          <p>We exist to answer one question fast: <strong>should I pick this card, build, or unlock path?</strong></p>
          <p>We do this with three things:</p>
          <ol>
            <li>A searchable <strong>card database</strong> with exact card text on every card</li>
            <li><strong>Best-build guides</strong> for all 5 characters</li>
            <li><strong>Quest walkthroughs</strong> for every unlock</li>
          </ol>
        </section>

        <section>
          <h2>Who runs this site</h2>
          <p>Shroom and Gloom Guide is run by an independent fan of the game. We are not Team Lazerbeam. We are not Devolver Digital. We are not paid by, sponsored by, or affiliated with either.</p>
        </section>

        <section>
          <h2>How we make money</h2>
          <p>The site runs ads (Google AdSense). It also contains affiliate links to the game on Steam and Humble Bundle. If you click an affiliate link and buy the game, we may earn a small commission at no cost to you.</p>
          <p>We do not:</p>
          <ul>
            <li>Charge for access to any page</li>
            <li>Sell user data (we don&apos;t collect any — see <a href="/privacy">Privacy Policy</a>)</li>
            <li>Accept paid placements (no card is rated higher because of payment)</li>
          </ul>
        </section>

        <section>
          <h2>How we handle card data</h2>
          <p>We don&apos;t publish tier ratings. No public source ranks these cards, and inventing a ranking would make this guide worse. When Early Access ships and community consensus forms, ratings arrive with the reasoning attached.</p>
          <p>We re-verify every card after each Steam patch. The build number each card was last verified against is shown on every card page.</p>
          <p><strong>Our ratings are editorial opinion</strong> based on community data and playtime. Your experience may differ.</p>
        </section>

        <section>
          <h2>How often we update</h2>
          <p>After every Steam patch:</p>
          <ul>
            <li>We re-verify all 523 cards against the new build (count may change after EA launch on 10 September 2026)</li>
            <li>We update the <a href="/cards/">Cards Database</a> with exact text changes</li>
            <li>We refresh the <a href="/best-builds/">Best Builds</a> directions as new mechanics emerge</li>
            <li>We publish a verified diff on the <a href="/patch-notes/">Patch Notes</a> page</li>
          </ul>
          <p>Typical turnaround: 24–48 hours from patch release. The Cards Database, Patch Notes, and Beginner&apos;s Guide carry the build label they were verified against, so you can see at a glance whether a page is current.</p>
        </section>

        <section>
          <h2>Suggesting a change</h2>
          <p>If you think a card is rated incorrectly, or if a quest walkthrough is wrong, you can submit feedback via the link below.</p>
          <p><a className="contact-link" href="/contact/">Submit feedback or a card correction</a></p>
          <p>(We do not collect emails. Submissions are anonymous. We review them after each patch.)</p>
        </section>

        <section>
          <h2>Fan-site disclaimer (full text)</h2>
          <p>Shroom and Gloom Guide is an unofficial, fan-created guide. We are not affiliated with, endorsed by, sponsored by, or in any way connected to:</p>
          <ul>
            <li><strong>Team Lazerbeam</strong> — the developer of <em>Shroom and Gloom</em></li>
            <li><strong>Devolver Digital</strong> — the publisher of <em>Shroom and Gloom</em></li>
            <li>Any of their respective subsidiaries, affiliates, licensors, or partners</li>
          </ul>
          <p>All game names, character names, card names, artwork, logos, and related marks are the property of their respective owners. Their use on this site is for informational and editorial purposes only (commentary, criticism, and fan reference) and does not imply any endorsement, sponsorship, or partnership.</p>
          <p>For the full legal disclaimer, see our <a href="/terms">Terms of Service</a>.</p>
        </section>
      </div>
    </Layout>
  );
}
