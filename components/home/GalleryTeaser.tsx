import Link from 'next/link'

export default function GalleryTeaser() {
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1)

  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <p className="section-label mb-4">Unsere Arbeit</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">Galerie</h2>
          </div>
          <a
            href="https://www.instagram.com/dontpanicbarber"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start"
          >
            @dontpanicbarber
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {placeholders.map((i) => (
            <div
              key={i}
              className="relative aspect-square bg-white/[0.03] border border-white/10 overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <p className="font-display text-5xl text-white/30">FOTO</p>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/galerie" className="btn-primary">
            Alle Fotos ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
