'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { cards, deckLabel, type Deck } from '@/data/cards';

const deckFilters: Array<{ value: 'all' | Deck; label: string }> = [
  { value: 'all', label: 'All cards' },
  { value: 'explore', label: 'Explore deck only' },
  { value: 'combat', label: 'Combat deck only' },
  { value: 'foresight', label: 'Foresight cards' },
];

const classFilters = [
  'Attack', 'Camp', 'Charge', 'Creature', 'Curse', 'Data', 'Death', 'Food',
  'Foresight', 'Machine', 'Mood', 'Passive', 'Pick', 'Search', 'Skill',
  'Special', 'Toasty',
] as const;

export function CardBrowser() {
  const [query, setQuery] = useState('');
  const [deck, setDeck] = useState<'all' | Deck>('all');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const filtered = useMemo(() => cards.filter((card) => {
    const haystack = `${card.name} ${card.slug} ${card.exactText} ${card.keywords.join(' ')} ${card.properties.join(' ')} ${card.className}`.toLowerCase();
    return (!query || haystack.includes(query.toLowerCase().trim()))
      && (deck === 'all' || card.deck === deck)
      && (!selectedClass || card.className === selectedClass);
  }), [deck, query, selectedClass]);

  function toggleClass(cls: string) {
    setSelectedClass((current) => (current === cls ? null : cls));
  }

  return (
    <>
      <div className="tool" aria-label="Card search tool">
        <label className="label" htmlFor="card-search">Search database</label>
        <div className="search">
          <span aria-hidden="true">⌕</span>
          <input
            id="card-search"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cards by name or effect"
          />
        </div>
        <div className="filters" aria-label="Deck filters">
          {deckFilters.map((item) => (
            <button
              className={`chip ${deck === item.value ? 'active' : ''}`}
              key={item.value}
              onClick={() => setDeck(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="filters" aria-label="Class filters">
          <span className="label">Class:</span>
          {classFilters.map((cls) => (
            <button
              className={`chip ${selectedClass === cls ? 'active' : ''}`}
              key={cls}
              onClick={() => toggleClass(cls)}
              aria-pressed={selectedClass === cls}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>
      <div className="results-head">
        <div>
          <h2>Card results</h2>
          <span className="count">Showing {filtered.length} verified cards · demo build 23718635</span>
        </div>
      </div>
      <div className="grid">
        {filtered.map((card) => (
          <article className="card" key={card.slug}>
            <Link href={`/cards/${card.slug}/`}>
              <div className="card-title">
                <span className={`class-badge class-${card.className.toLowerCase()}`}>{card.className}</span>
                <h3>{card.name}</h3>
              </div>
              <div className="meta">
                <span className="deck">{deckLabel[card.deck]}</span>
                <span>{typeof card.cost === 'number' ? `Cost ${card.cost}⚡` : 'Cost unverified'}</span>
              </div>
              <p className="verdict">"{card.exactText}"</p>
              <div className="tags">
                {card.properties.slice(0, 2).map((prop) => (
                  <span className="tag" key={prop}>{prop}</span>
                ))}
              </div>
              <span className="provisional">{card.updated_at_build}</span>
            </Link>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="subhead">No verified cards match those filters.</p>
      )}
    </>
  );
}

export function SearchSection() {
  return <CardBrowser />;
}
