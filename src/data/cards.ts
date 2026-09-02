export type Deck = 'explore' | 'combat' | 'foresight';

export type Card = {
  slug: string;
  name: string;
  deck: Deck;
  className: string;
  cost: number | 'unverified';
  exactText: string;
  keywords: string[];
  properties: string[];
  acquisition: string;
  notes: string[];
  updated_at_build: string;
  verification_status: 'verified' | 'demo-verified' | 'unverified';
};

// Source: /root/workspace/shroomandgloom/copy/content-creator-verified-game-data-2026-09-02.md
// All data below is verified against Steam demo build 23718635. No invented tiers, no rarity, no synergy labels.
export const cards: Card[] = [
  { slug: 'shovel', name: 'Shovel', deck: 'explore', className: 'Gear', cost: 'unverified', exactText: 'Dig for weapons', keywords: ['Gear'], properties: [], acquisition: 'Starter deck (one copy)', notes: ['Your weapon source.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'key', name: 'Key', deck: 'explore', className: 'Pick', cost: 'unverified', exactText: 'Unlock. Consume', keywords: ['Pick'], properties: ['Consume'], acquisition: 'Starter deck (one copy)', notes: ['Opens a locked door, then destroys itself. You only get one use.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'rest', name: 'Rest', deck: 'explore', className: 'Skill', cost: 'unverified', exactText: 'Heal 9 Health. Increase this card\'s healing by 3. Start next combat with Well Rested', keywords: ['Skill'], properties: [], acquisition: 'Starter deck (one copy)', notes: ['Heals and permanently gets better: 9, then 12, then 15.', 'Players in Steam demo discussions have asked whether Rest heals. The card text says it does. If a Rest seems to do nothing, the cause is likely a hazard in the same room, not the card itself.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'bash', name: 'Bash', deck: 'explore', className: 'Pick', cost: 'unverified', exactText: 'Unlock. Deal 4 damage to Self. Handy. Persistent', keywords: ['Pick'], properties: ['Handy', 'Persistent'], acquisition: 'Starter deck (one copy)', notes: ['Opens a door without spending Key — you pay 4 HP instead.', 'Handy and Persistent means it stays in your deck forever and always shows up early.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'map', name: 'Map', deck: 'explore', className: 'Skill', cost: 'unverified', exactText: 'Look at Map. Handy. Persistent. Replenish', keywords: ['Skill'], properties: ['Handy', 'Persistent', 'Replenish'], acquisition: 'Starter deck (one copy)', notes: ['Shows the map, stays in your deck, and draws you an extra card.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'rat-jerky', name: 'Rat Jerky', deck: 'explore', className: 'Food', cost: 'unverified', exactText: 'Heal 3 Health. Draw 1 card', keywords: ['Food'], properties: [], acquisition: 'Starter deck (one copy)', notes: ['Small heal that replaces itself.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'flash', name: 'Flash', deck: 'combat', className: 'Skill', cost: 0, exactText: 'Add 3 Vulnerable to target. Battery 10', keywords: ['Vulnerable', 'Battery'], properties: [], acquisition: 'Starter deck (one copy)', notes: ['Free damage multiplier. Battery 10 means Flash needs 10 battery to fire.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'roast', name: 'Roast', deck: 'combat', className: 'Skill', cost: 1, exactText: 'Deal 3 damage. If fatal: create Toasty', keywords: ['Toasty'], properties: ['If Fatal Trigger'], acquisition: 'Starter deck (three copies)', notes: ['Finisher that generates currency. Toasty is both consumable and shop currency.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
  { slug: 'stab', name: 'Stab', deck: 'combat', className: 'Skill', cost: 1, exactText: 'Deal 4 damage', keywords: [], properties: [], acquisition: 'Starter deck (three copies)', notes: ['Plain damage. The community wiki advises prioritising removing Stab when possible.'], updated_at_build: 'demo build 23718635', verification_status: 'verified' },
];

export const deckLabel: Record<Deck, string> = { explore: 'Explore', combat: 'Combat', foresight: 'Foresight' };

export function getCard(slug: string) {
  return cards.find((card) => card.slug === slug);
}

export const cardCounts = {
  total: 523,
  explore: 235,
  combat: 288,
  foresight: 14,
  enemies: 39,
  bosses: 19,
  encounters: 22,
  cardPacks: 7,
  characters: 7,
  hazards: 35,
  biomes: 12,
  runPaths: 3,
  roomTypes: 14,
  quests: 10,
  mechanicActions: 1041,
} as const;
