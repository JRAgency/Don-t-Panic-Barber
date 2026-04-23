import Link from 'next/link'

export default function GalleryTeaser() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10" style={{ background: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="section-label mb-4">Unsere Arbeit</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none text-[#f0ece4]">
              Galerie
            </h2>
          </div>
          <a
            href="https://www.instagram.com/dontpanicbarber"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start text-sm"
          >
            @dontpanicbarber
          </a>
        </div>

        {/* Asymmetric grid */}
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 180px)' }}
        >
          {/* Large feature item 2×2 */}
          <div
            className="relative overflow-hidden group"
            style={{
              gridColumn: '1 / 3',
              gridRow: '1 / 3',
              background: 'linear-gradient(145deg, #141414, #0d0d0d)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
              <p className="font-display text-8xl text-[#f0ece4]">FOTO</p>
            </div>
            {/* Amber corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-[#C9A07A]/50" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-[#C9A07A]/50" />
            <div className="absolute inset-0 bg-[#C9A07A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="border border-[#C9A07A]/60 px-2 py-0.5 font-body text-[10px] uppercase tracking-widest text-[#C9A07A]">
                Featured
              </span>
            </div>
          </div>

          {/* Small items 1×1 */}
          {[2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
              style={{ background: '#111' }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                <p className="font-display text-4xl text-[#f0ece4]">FOTO</p>
              </div>
              <div className="absolute inset-0 bg-[#C9A07A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Wide items 2×1 */}
          {[5, 6].map((i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
              style={{
                gridColumn: i === 5 ? '1 / 3' : '3 / 5',
                background: '#111',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                <p className="font-display text-4xl text-[#f0ece4]">FOTO</p>
              </div>
              <div className="absolute inset-0 bg-[#C9A07A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/galerie" className="btn-primary text-sm">
            Alle Fotos
          </Link>
        </div>
      </div>
    </section>
  )
}
