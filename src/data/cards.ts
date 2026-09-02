export type Deck = 'explore' | 'combat' | 'foresight';
export type Tier = 'S' | 'A' | 'B' | 'C' | 'D';
export type Card = {
  slug: string;
  name: string;
  deck: Deck;
  rarity: string;
  cost: number;
  tier: Tier;
  verdict: string;
  synergies: string[];
  updated_at_build: string;
  verification_status: 'provisional';
};

// Only handoff examples are included until the upstream verified data bundle lands.
export const cards: Card[] = [
  { slug: 'mold-spore', name: 'Mold Spore', deck: 'explore', rarity: 'rare', cost: 2, tier: 'S', verdict: 'Strong scaling pickup if you have any other spore synergy.', synergies: ['Spore Burst', 'Fungal Bloom'], updated_at_build: 'demo-23718635', verification_status: 'provisional' },
  { slug: 'paper-cut', name: 'Paper Cut', deck: 'combat', rarity: 'common', cost: 1, tier: 'S', verdict: 'Free chip damage on every draw — the single best 1-cost in the game.', synergies: ['Bleed', 'Combo'], updated_at_build: 'demo-23718635', verification_status: 'provisional' },
  { slug: 'hall-pass', name: 'Hall Pass', deck: 'combat', rarity: 'common', cost: 0, tier: 'S', verdict: 'Zero-cost block that scales with hand size — almost always correct.', synergies: ['Hand Size', 'Block'], updated_at_build: 'demo-23718635', verification_status: 'provisional' },
  { slug: 'lunch-money', name: 'Lunch Money', deck: 'foresight', rarity: 'uncommon', cost: 3, tier: 'A', verdict: 'Doubles all gold gain from the next 3 fights — a fast economy engine.', synergies: ['Gold', 'Scaling'], updated_at_build: 'demo-23718635', verification_status: 'provisional' },
  { slug: 'pencil-stub', name: 'Pencil Stub', deck: 'combat', rarity: 'common', cost: 0, tier: 'D', verdict: 'Conditional pickup; it deals chip damage once, then disappears.', synergies: ['Paper Cut', 'Detention Slip'], updated_at_build: 'demo-23718635', verification_status: 'provisional' },
];

export const deckLabel: Record<Deck, string> = { explore: 'Explore', combat: 'Combat', foresight: 'Foresight' };
export const tierClass: Record<Tier, string> = { S: 'tier-s', A: 'tier-a', B: 'tier-b', C: 'tier-c', D: 'tier-d' };
export function getCard(slug: string) { return cards.find((card) => card.slug === slug); }
