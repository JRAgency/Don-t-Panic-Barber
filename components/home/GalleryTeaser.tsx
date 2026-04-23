import Link from 'next/link'

export default function GalleryTeaser() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="section-label mb-4">Unsere Arbeit</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">Galerie</h2>
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
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 180px)',
          }}
        >
          {/* Item 1 – big feature (2×2) */}
          <div
            className="relative bg-white/[0.04] border border-white/10 overflow-hidden group"
            style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <p className="font-display text-7xl text-white/30">FOTO</p>
            </div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 border border-white/20 px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-body text-[10px] uppercase tracking-widest text-[#f5f5f5]/70">Featured</p>
            </div>
          </div>

          {/* Items 2–4 – small (1×1) */}
          {[2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative bg-white/[0.03] border border-white/10 overflow-hidden group"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <p className="font-display text-3xl text-white/30">FOTO</p>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Items 5–6 – wide (2×1) */}
          {[5, 6].map((i) => (
            <div
              key={i}
              className="relative bg-white/[0.03] border border-white/10 overflow-hidden group"
              style={{ gridColumn: i === 5 ? '1 / 3' : '3 / 5' }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <p className="font-display text-3xl text-white/30">FOTO</p>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
