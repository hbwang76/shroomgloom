import Link from 'next/link';

const starterRows = [
  ['Shovel', 'Explore', 'Dig for weapons'],
  ['Key', 'Explore', 'Unlock. Consume'],
  ['Rest', 'Explore', 'Heal 9 Health. Increase this card\'s healing by 3. Start next combat with Well Rested'],
  ['Bash', 'Explore', 'Unlock. Deal 4 damage to Self. Handy. Persistent'],
  ['Map', 'Explore', 'Look at Map. Handy. Persistent. Replenish'],
  ['Rat Jerky', 'Explore', 'Heal 3 Health. Draw 1 card'],
  ['Flash', 'Combat', '0 energy. Add 3 Vulnerable to target. Battery 10'],
  ['Roast ×3', 'Combat', '1 energy. Deal 3 damage. If fatal: create Toasty'],
  ['Stab ×3', 'Combat', '1 energy. Deal 4 damage'],
];

const quests = [
  ['Adventurous', 'Discover 20 exploration cards', 'Card pack'],
  ['Armed', 'Discover 30 combat cards', 'Card pack'],
  ['Camper', 'Fill all spots in a campsite', 'Card pack'],
  ['First Course', 'Defeat Lekker Limbs', 'Card pack'],
  ['Gloom Walker', 'Reach the gloom', 'New path'],
  ["King's Quest", "Satisfy The Toad King's hunger", 'Card pack'],
  ['Meltdown', 'Gain 20 extra damage from rage', 'Card pack'],
  ['Need For Feed', 'Serve slop 25 times', 'Card pack'],
  ['Search Party', 'Discover all tunnels in the Forgotten Path', 'New character'],
  ['Want Some More', 'Defeat Megashroom', 'New character'],
];

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="table-wrap"><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.join('-')}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function Sources() {
  return <section><h2>Sources</h2><p>Retrieved 2026-09-02:</p><ul><li>Official Steam store page, app 3271280 — feature list, release date, platform.</li><li>Team Lazerbeam Steam dev log, 22 August 2026 — Early Access launch content and five launch characters.</li><li>Devolver Digital creator resources — eating, seasoning, roasting and soup mechanics.</li><li>Shroom and Gloom Fandom wiki, <em>Starter Cards</em> — the 13 starter cards with exact text and starter advice.</li><li>A build-scoped community database, scoped to demo build 23718635 — counts, glossary, characters and quests.</li></ul><p>Card values reflect demo build 23718635 and will be re-verified after Early Access launch on 10 September 2026.</p></section>;
}

export function GuideContent({ section }: { section: string }) {
  if (section === 'beginner-guide') return <>
    <section><h2>What makes this game different</h2><p>Most deckbuilders give you one deck. Shroom and Gloom gives you two, and you build both at once:</p><ul><li><strong>Combat deck</strong> — attacks, skills and defences you play during a fight.</li><li><strong>Explore deck</strong> — cards you play between fights to move through the dungeon, search, unlock doors, modify cards, and unlock weapons and abilities.</li></ul><p>There&apos;s also a third, much smaller pool: the <strong>Foresight deck</strong>, 14 cards in the demo build. Foresight cards are passive premonitions that fire on their own as you explore and fight — you don&apos;t play them from hand.</p></section>
    <section><h2>Your starter deck: all 13 cards</h2><p>Every run begins with the same 13 cards — <strong>6 Exploration, 7 Combat, 0 Foresight</strong>.</p><Table headers={['Card', 'Deck', 'Exact card text']} rows={starterRows} /><h3>Read these three cards again</h3><p><strong>Rest</strong> is not a flat heal. Its text says it heals 9 Health and increases its own healing by 3. <strong>Bash</strong> unlocks without spending Key, but deals 4 damage to you. <strong>Roast</strong> creates Toasty on a fatal hit; Toasty is both consumable and shop currency.</p></section>
    <section><h2>The keywords that decide your run</h2><Table headers={['Term', 'Game definition']} rows={[["Handy", "Always be drawn first. Can't be removed from deck."], ['Persistent', 'Not discarded when played.'], ['Consume', 'This card will be destroyed upon being played.'], ['Replenish', 'When drawn, draws an extra card.'], ['Exhaust', 'Removes a card from your hand for the rest of the explore or combat.'], ['Exile', 'To Remove a card from your deck.'], ['Gunk', 'Unplayable, Linger. When turn begins consume 1 gunk.']]} /><p><strong>Discard, Exhaust and Exile are three different things.</strong> Discard removes from hand, Exhaust removes for the encounter, Exile removes from the deck permanently.</p></section>
    <section><h2>Your first run, step by step</h2><ol><li>Play Map first: it is Handy, Persistent and Replenish.</li><li>Unlock with Bash while your health is high; hold Key for trading opportunities.</li><li>Open fights with Flash: 0 energy and 3 Vulnerable.</li><li>Use Stab to bring an enemy down and Roast to finish for Toasty.</li><li>Rest whenever the room allows; each use adds 3 to its healing.</li><li>Bank a Toasty before reaching a shop.</li><li>At Grow Closer, take the card that fixes the problem that ended your last run.</li><li>Use Shovel with spare energy.</li><li>Prioritise removing Stab when you get the chance — attributed to community-wiki starter advice.</li><li>Fill your campsite: Camper rewards a card pack.</li></ol></section>
    <section><h2>Quests: the 10 that gate your unlocks</h2><Table headers={['Quest', 'Requirement', 'Reward']} rows={quests} /><p>Search Party and Want Some More are the two character unlocks. Gloom Walker opens a new path.</p></section><Sources />
  </>;

  if (section === 'quests') return <>
    <section><h2>All 10 quests</h2><Table headers={['Quest', 'Requirement', 'Reward']} rows={quests} /><p>Reward breakdown: <strong>7 card packs, 1 new path, 2 new characters.</strong></p></section>
    <section><h2>The three quests that change your game</h2><h3>Gloom Walker — Reach the gloom → New path</h3><p>The developer confirms Early Access ships with two separate paths to reach the Gloom, each with entirely unique card pools.</p><h3>Search Party — Discover all tunnels in the Forgotten Path → New character</h3><p>A completion quest: explore side routes, even when the safe play is to push forward.</p><h3>Want Some More — Defeat Megashroom → New character</h3><p>A single boss kill, attemptable every run.</p></section>
    <section><h2>What we don&apos;t know yet</h2><ul><li>Per-pack contents are not published.</li><li>Which character each of the two unlock quests grants is not specified.</li><li>Whether the Early Access build keeps all ten demo quests is unconfirmed.</li><li>Whether quest progress carries from demo to Early Access is unconfirmed.</li></ul></section><Sources />
  </>;

  if (section === 'characters') return <>
    <section><h2>The five confirmed for launch</h2><p>From the developer&apos;s 22 August 2026 announcement: “5 playable characters (Paperboy, Lunch-lady, Concerned Parent, Janitor &amp; Activist)”</p><Table headers={['Character', 'In-game flavour text', 'Status']} rows={[["Paper Boy", 'Got a bit lost on their route...', 'Confirmed at launch'], ['Lunch Lady', "Didn't have time to hand-in substitute forms.", 'Confirmed at launch'], ['Concerned Parent', 'They were meant to be back hours ago!', 'Confirmed at launch'], ['Janitor', 'You when out looking for a discrete dumping spot and found your trash took life.', 'Confirmed at launch'], ['Activist', 'Flavour text not yet in public data', 'Confirmed at launch']]} /></section>
    <section><h2>Three more in the demo database</h2><Table headers={['Entry', 'Launch status']} rows={[['Researcher', 'Not in the launch five'], ['The Slob', 'Not in the launch five'], ['Grubby?', 'Not in the launch five; question mark is part of entry']]} /><p>That&apos;s 7 character entries in the database against 5 confirmed for launch. We&apos;ll resolve the gap after launch.</p></section>
    <section><h2>How you unlock characters</h2><Table headers={['Quest', 'Requirement', 'Reward']} rows={quests.filter((quest) => ['Search Party', 'Want Some More', 'Gloom Walker'].includes(quest[0]))} /><p>Starting decks, passives, abilities and the unlock conditions for Researcher, The Slob and Grubby? have not been documented. We do not invent them.</p></section><Sources />
  </>;

  if (section === 'best-builds') return <>
    <section><h2>What a build means in this game</h2><p>A build is two decks plus a handful of Foresight cards: Combat wins fights; Explore moves you through the dungeon, unlocks doors, modifies cards and finds weapons. Foresight cards auto-trigger as you explore and fight.</p></section>
    <section><h2>The mechanics a good build respects</h2><Table headers={['Property', 'Definition']} rows={[['Replenish', 'When drawn, draws an extra card.'], ['Energize', 'You receive 1 energy when this card is drawn.'], ['Persistent', 'Not discarded when played.'], ['Trivial', 'Playing this card does not count as playing a card.'], ['Odd', 'Costs zero energy if an odd number of cards would be played.'], ['Consume', 'This card will be destroyed upon being played.'], ['Fragile', 'If you receive damage this card is discarded.'], ['Battery', 'Requires battery to function.']]} /></section>
    <section><h2>Build directions suggested by verified mechanics</h2><ul><li><strong>Vulnerable stacking:</strong> Flash applies 3 Vulnerable at 0 energy; Crippled enemies do not recover Vulnerable.</li><li><strong>Gunk economy:</strong> Store moves Gunk into the Gunk Sack; Stored Gunk is used while exploring and harvested during combat.</li><li><strong>Battery / Machine:</strong> Machine cards require Battery; Charge refills it.</li><li><strong>Rage scaling:</strong> Rage means attacks deal extra damage.</li><li><strong>Toasty economy:</strong> Roast creates Toasty on fatal hits; Toasty is a shop resource.</li><li><strong>Camp completion:</strong> Structure cards placed in camp are permanent; Camper rewards a card pack.</li><li><strong>Soup / cooking loop:</strong> the publisher confirms roasted enemies can be cooked into soups.</li></ul></section>
    <section><h2>What we deliberately haven&apos;t published</h2><p>No character-specific decks, tier badges, “best in slot” quest picks, or hidden-character unlock order. Per-character starting decks and passives are not public data.</p></section><Sources />
  </>;

  if (section === 'patch-notes') return <>
    <section><h2>Patch baseline — Steam demo build 23718635</h2><p><strong>Status:</strong> Pre-Early Access. <strong>Verified on:</strong> 2026-09-02. This is the build all site data is calibrated against until launch.</p><Table headers={['Item', 'Count']} rows={[['Cards', '523'], ['Explore deck', '235'], ['Combat deck', '288'], ['Foresight deck', '14'], ['Enemies (incl. 19 bosses)', '39'], ['Encounters', '22'], ['Card packs', '7'], ['Characters in database', '7'], ['Hazards', '35'], ['Biomes', '12'], ['Run paths in database', '3'], ['Quests', '10'], ['Card mechanic actions', '1041']]} /></section>
    <section><h2>Confirmed for Early Access launch</h2><ul><li>Two separate paths to reach the Gloom, each with entirely unique card pools.</li><li>5 playable characters: Paperboy, Lunch-lady, Concerned Parent, Janitor and Activist.</li><li>Quests to unlock characters and bolster card pools.</li></ul></section><Sources />
  </>;

  return null;
}
