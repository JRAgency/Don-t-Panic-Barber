import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    "Schau dir unsere Arbeit an – Haarschnitte, Bartpflege und mehr vom Don't Panic Barber Shop in Mannheim.",
  alternates: { canonical: 'https://dontpanicbarber.de/galerie' },
}

const photos = [
  { src: '/Don-t-Panic-Barber/images/cut-1.png', alt: 'Haarschnitt', pos: 'object-top' },
  { src: '/Don-t-Panic-Barber/images/cut-2.png', alt: 'Haarschnitt', pos: 'object-top' },
  { src: '/Don-t-Panic-Barber/images/cut-3.png', alt: 'Haarschnitt', pos: 'object-top' },
  { src: '/Don-t-Panic-Barber/images/exterior.png', alt: "Don't Panic Barber Shop Mannheim", pos: 'object-center' },
  { src: '/Don-t-Panic-Barber/images/cut-4.png', alt: 'Haarschnitt', pos: 'object-top' },
  { src: '/Don-t-Panic-Barber/images/cut-5.png', alt: 'Haarschnitt', pos: 'object-top' },
  { src: '/Don-t-Panic-Barber/images/interior-1.png', alt: 'Innenraum', pos: 'object-center' },
  { src: '/Don-t-Panic-Barber/images/cut-6.png', alt: 'Haarschnitt', pos: 'object-top' },
  { src: '/Don-t-Panic-Barber/images/cut-7.png', alt: 'Haarschnitt', pos: 'object-top' },
  { src: '/Don-t-Panic-Barber/images/interior-2.png', alt: 'Barber Stationen', pos: 'object-center' },
  { src: '/Don-t-Panic-Barber/images/logo-dark.png', alt: "Don't Panic Barber Shop Logo", pos: 'object-center' },
]

export default function GaleriePage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-white/10">
          <p className="section-label mb-6">Unsere Arbeit</p>
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-none">Galerie</h1>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${photo.pos} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
