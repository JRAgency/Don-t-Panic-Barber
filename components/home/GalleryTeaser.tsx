import Link from 'next/link'
import Image from 'next/image'

const photos = [
  { src: '/Don-t-Panic-Barber/images/cut-1.png', alt: 'Haarschnitt', num: '01', pos: 'object-top', col: '1 / 3', row: '1' },
  { src: '/Don-t-Panic-Barber/images/cut-4.png', alt: 'Haarschnitt', num: '02', pos: 'object-top', col: '3', row: '1' },
  { src: '/Don-t-Panic-Barber/images/exterior.png', alt: "Don't Panic Barber Shop", num: '03', pos: 'object-center', col: '1', row: '2' },
  { src: '/Don-t-Panic-Barber/images/cut-2.png', alt: 'Haarschnitt', num: '04', pos: 'object-top', col: '2', row: '2' },
  { src: '/Don-t-Panic-Barber/images/cut-3.png', alt: 'Haarschnitt', num: '05', pos: 'object-top', col: '3', row: '2' },
]

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

        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '380px 240px' }}
        >
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridColumn: p.col, gridRow: p.row }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className={`object-cover ${p.pos} transition-transform duration-700 group-hover:scale-105`}
              />
              {/* Dark overlay lifts on hover */}
              <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-transparent transition-colors duration-500" />
              {/* Editorial number */}
              <span className="absolute top-3 right-4 font-display text-[#C9A07A]/50 text-3xl z-10 group-hover:text-[#C9A07A]/90 transition-colors duration-300">
                {p.num}
              </span>
              {/* Amber corner accent on first (large) item only */}
              {p.num === '01' && (
                <>
                  <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-[#C9A07A]/50 z-10" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-[#C9A07A]/50 z-10" />
                </>
              )}
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
