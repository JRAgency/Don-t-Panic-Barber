import Link from 'next/link'
import Image from 'next/image'

const photos = [
  { src: '/Don-t-Panic-Barber/images/cut-1.png', alt: 'Haarschnitt' },
  { src: '/Don-t-Panic-Barber/images/cut-5.png', alt: 'Haarschnitt' },
  { src: '/Don-t-Panic-Barber/images/cut-3.png', alt: 'Haarschnitt' },
  { src: '/Don-t-Panic-Barber/images/cut-4.png', alt: 'Haarschnitt' },
  { src: '/Don-t-Panic-Barber/images/cut-6.png', alt: 'Haarschnitt' },
  { src: '/Don-t-Panic-Barber/images/cut-7.png', alt: 'Haarschnitt' },
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

        {/* Portrait grid – respects phone photo format */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((p, i) => (
            <div key={p.src} className="relative aspect-[3/4] overflow-hidden group cursor-pointer">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/25 group-hover:bg-transparent transition-colors duration-500" />
              <span className="absolute top-3 right-3 font-display text-[#C9A07A]/50 text-2xl z-10 group-hover:text-[#C9A07A] transition-colors duration-300">
                0{i + 1}
              </span>
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
