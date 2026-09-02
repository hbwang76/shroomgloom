import Link from 'next/link';

export function Header() {
  return (
    <header className="header shell">
      <Link href="/" className="brand">Shroom &amp; Gloom Guide</Link>
      <nav className="nav" aria-label="Primary">
        <Link href="/cards/">Cards</Link>
        <Link href="/best-builds/">Builds</Link>
        <Link href="/characters/">Characters</Link>
        <Link href="/beginner-guide/">Beginner</Link>
        <Link href="/quests/">Quests</Link>
        <Link href="/patch-notes/">Patches</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <strong>SHROOM &amp; GLOOM GUIDE</strong>
        <p>Unofficial fan-made site. Not affiliated with, endorsed by, or sponsored by Team Lazerbeam or Devolver Digital. All game content and trademarks belong to their respective owners.</p>
        <div className="footer-links">
          <Link href="/cards/">Cards Database</Link>
          <Link href="/best-builds/">Best Builds</Link>
          <Link href="/characters/">Characters</Link>
          <Link href="/beginner-guide/">Beginner Guide</Link>
          <Link href="/quests/">Quests</Link>
          <Link href="/patch-notes/">Patch Notes</Link>
          <Link href="/about/">About</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/cookies/">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
