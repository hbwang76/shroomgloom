import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://shroomgloom.online'),
  alternates: { canonical: 'https://shroomgloom.online/' },
  title: {
    default: 'Shroom and Gloom Guide — Cards, Builds, Quests',
    template: '%s | Shroom and Gloom Guide',
  },
  description: 'Shroom and Gloom guide with verified demo data: 523 cards, ten quests, and two character unlocks. Read exact card text from cited sources and build labels.',
  applicationName: 'Shroom and Gloom Guide',
  openGraph: {
    images: [{ url: '/images/shroomgloom/og-home.webp', width: 1200, height: 630, alt: 'Shroom and Gloom Guide' }],
  },
  twitter: { card: 'summary_large_image', title: 'Shroom and Gloom Guide — Cards, Builds, Quests' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://plausible.shipsolo.io/js/script.js"
          data-domain="shroomgloom.online"
          strategy="afterInteractive"
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Qa2kCFJxL7qlwTx7+XEqZA"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JR4B0EBMQH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JR4B0EBMQH');`}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ycailphxlx");`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
