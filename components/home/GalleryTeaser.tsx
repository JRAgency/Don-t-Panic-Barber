import Link from 'next/link'
import Image from 'next/image'

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
            style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}
          >
            <Image src="/images/cut-1.png" alt="Haarschnitt" fill className="object-cover object-center" />
            {/* Amber corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-[#C9A07A]/60 z-10" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-[#C9A07A]/60 z-10" />
            <div className="absolute inset-0 bg-[#C9A07A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className="border border-[#C9A07A]/60 px-2 py-0.5 font-body text-[10px] uppercase tracking-widest text-[#C9A07A]">
                Featured
              </span>
            </div>
          </div>

          {/* Small items 1×1 */}
          {[
            { src: '/images/cut-2.png', alt: 'Haarschnitt' },
            { src: '/images/cut-3.png', alt: 'Haarschnitt' },
            { src: '/images/cut-4.png', alt: 'Haarschnitt' },
          ].map((item) => (
            <div key={item.src} className="relative overflow-hidden group">
              <Image src={item.src} alt={item.alt} fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-[#C9A07A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Wide items 2×1 */}
          <div
            className="relative overflow-hidden group"
            style={{ gridColumn: '1 / 3' }}
          >
            <Image src="/images/exterior.png" alt="Don't Panic Barber Shop" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-[#C9A07A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div
            className="relative overflow-hidden group"
            style={{ gridColumn: '3 / 5' }}
          >
            <Image src="/images/cut-5.png" alt="Haarschnitt" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-[#C9A07A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
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
