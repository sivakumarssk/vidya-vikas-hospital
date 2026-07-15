import { useState, useMemo } from 'react'

const ALPHABET = ['All', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))]

type Item = { name: string; slug: string; shortDescription: string }

type Props = {
  items: Item[]
  basePath: string
  linkLabel: string
}

export function SearchFilter({ items, basePath, linkLabel }: Props) {
  const [query, setQuery] = useState('')
  const [letter, setLetter] = useState('All')

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesLetter = letter === 'All' || item.name.toUpperCase().startsWith(letter)
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
      return matchesLetter && matchesQuery
    })
  }, [items, query, letter])

  return (
    <div className="mt-8">
      {/* Search bar */}
      <div className="relative max-w-lg">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setLetter('All') }}
          className="w-full rounded-xl border border-black/10 bg-white py-3 pl-11 pr-4 text-sm text-brand-navy shadow-sm placeholder:text-brand-muted/60 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-navy"
          >
            ✕
          </button>
        )}
      </div>

      {/* Alphabet filter */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {ALPHABET.map((l) => (
          <button
            key={l}
            onClick={() => { setLetter(l); setQuery('') }}
            className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
              letter === l
                ? 'bg-brand-navy text-white shadow'
                : 'bg-white border border-black/10 text-brand-navy hover:border-brand-green hover:text-brand-green'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="mt-4 text-sm text-brand-muted">
        {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
        {letter !== 'All' && <span> starting with <strong>{letter}</strong></span>}
        {query && <span> for <strong>"{query}"</strong></span>}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <a
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className="group rounded-2xl border border-brand-border/40 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/30 hover:shadow-md"
            >
              <h2 className="font-heading text-lg font-bold text-brand-navy group-hover:text-brand-green">{item.name}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-brand-muted">{item.shortDescription}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-green">
                {linkLabel}
                <span className="ml-1">→</span>
              </span>
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-10 text-center py-14 rounded-2xl border border-dashed border-black/10 bg-white">
          <p className="text-2xl">🔍</p>
          <p className="mt-2 font-heading text-lg font-bold text-brand-navy">No results found</p>
          <p className="mt-1 text-sm text-brand-muted">Try a different search term or reset the filter.</p>
          <button
            onClick={() => { setQuery(''); setLetter('All') }}
            className="mt-4 rounded-xl bg-brand-navy px-5 py-2 text-sm font-semibold text-white hover:bg-brand-navy/90"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )
}
