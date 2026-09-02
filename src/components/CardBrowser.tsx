'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { cards, deckLabel, tierClass, type Deck, type Tier } from '@/data/cards';

const deckFilters: Array<{ value: 'all' | Deck; label: string }> = [{ value: 'all', label: 'All cards' }, { value: 'explore', label: 'Explore deck only' }, { value: 'combat', label: 'Combat deck only' }, { value: 'foresight', label: 'Foresight cards' }];
const tiers: Tier[] = ['S', 'A', 'B', 'C', 'D'];

export function CardBrowser({ tierOnly = false }: { tierOnly?: boolean }) {
  const [query, setQuery] = useState('');
  const [deck, setDeck] = useState<'all' | Deck>('all');
  const [selectedTiers, setSelectedTiers] = useState<Tier[]>([]);
  const filtered = useMemo(() => cards.filter((card) => {
    const haystack = `${card.name} ${card.slug} ${card.verdict} ${card.synergies.join(' ')}`.toLowerCase();
    return (!query || haystack.includes(query.toLowerCase().trim())) && (deck === 'all' || card.deck === deck) && (!tierOnly || selectedTiers.length === 0 || selectedTiers.includes(card.tier));
  }), [deck, query, selectedTiers, tierOnly]);
  function toggleTier(tier: Tier) { setSelectedTiers((current) => current.includes(tier) ? current.filter((item) => item !== tier) : [...current, tier]); }
  return <>
    <div className="tool" aria-label="Card search tool"><label className="label" htmlFor="card-search">Search database</label><div className="search"><span aria-hidden="true">⌕</span><input id="card-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search cards by name or effect" /></div><div className="filters" aria-label="Deck filters">{deckFilters.map((item) => <button className={`chip ${deck === item.value ? 'active' : ''}`} key={item.value} onClick={() => setDeck(item.value)}>{item.label}</button>)}</div>{tierOnly && <div className="filters" aria-label="Tier filters"><span className="label">Tier:</span>{tiers.map((tier) => <button className={`tier-button ${selectedTiers.includes(tier) ? 'active' : ''} ${tierClass[tier]}`} key={tier} onClick={() => toggleTier(tier)} aria-pressed={selectedTiers.includes(tier)}>{tier}</button>)}</div>}</div>
    <div className="results-head"><div><h2>{tierOnly ? 'Ranked cards' : 'Card results'}</h2><span className="count">Showing {filtered.length} handoff records · demo-23718635</span></div></div>
    <div className="grid">{filtered.map((card) => <article className="card" key={card.slug}><Link href={`/cards/${card.slug}/`}><div className="card-title"><span className={`tier ${tierClass[card.tier]}`}>{card.tier}</span><h3>{card.name}</h3></div><div className="meta"><span className="deck">{deckLabel[card.deck]}</span><span>Cost {card.cost}⚡</span><span>{card.rarity}</span></div><p className="verdict">{card.verdict}</p><div className="tags">{card.synergies.map((synergy) => <span className="tag" key={synergy}>+ {synergy}</span>)}</div><span className="provisional">Provisional · {card.updated_at_build}</span></Link></article>)}</div>{filtered.length === 0 && <p className="subhead">No published handoff records match those filters.</p>}
  </>;
}

export function SearchSection() { return <CardBrowser />; }
