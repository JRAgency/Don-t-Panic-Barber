import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    "Schau dir unsere Arbeit an – Haarschnitte, Bartpflege und mehr vom Don't Panic Barber Shop in Mannheim.",
  alternates: { canonical: 'https://dontpanicbarber.de/galerie' },
}

export default function GaleriePage() {
  const placeholders = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-white/10">
          <p className="section-label mb-6">Unsere Arbeit</p>
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-none">Galerie</h1>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-1">
          {placeholders.map((i) => (
            <div
              key={i}
              className="relative aspect-square bg-white/[0.03] border border-white/10 overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <p className="font-display text-5xl text-white/30">FOTO</p>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="section-label mb-4">Mehr sehen</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-none mb-8">
            Folge uns auf Instagram
          </h2>
          <a
            href="https://www.instagram.com/dontpanicbarber"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            @dontpanicbarber
          </a>
        </div>
      </div>
    </div>
  )
}
