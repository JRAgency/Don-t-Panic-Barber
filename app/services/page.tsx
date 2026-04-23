import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services & Preise',
  description:
    "Haarschnitte, Bartpflege, Nassrasuren und Kombi-Pakete beim Don't Panic Barber Shop in Mannheim. Klare Preise, erstklassige Qualität.",
  alternates: { canonical: 'https://dontpanicbarber.de/services' },
}

const services = [
  {
    category: 'Haarschnitt',
    items: [
      {
        name: 'Haarschnitt',
        price: '25 €',
        description: 'Klassischer oder moderner Schnitt – ganz nach deinen Wünschen',
      },
      {
        name: 'Haarschnitt + Styling',
        price: '30 €',
        description: 'Inklusive Finish mit Premium-Styling-Produkten',
      },
      {
        name: 'Kinder (bis 12 J.)',
        price: '18 €',
        description: 'Haarschnitt für die Kleinen',
      },
    ],
  },
  {
    category: 'Bart',
    items: [
      {
        name: 'Bart konturieren',
        price: '15 €',
        description: 'Präzise Konturierung und Form deines Barts',
      },
      {
        name: 'Bartpflege & Trimmen',
        price: '20 €',
        description: 'Trimmen, Konturieren und abschließendes Styling',
      },
      {
        name: 'Klassische Nassrasur',
        price: '25 €',
        description: 'Traditionelle Rasur mit heißem Handtuch',
      },
    ],
  },
  {
    category: 'Pakete',
    items: [
      {
        name: 'Haarschnitt + Bart',
        price: '35 €',
        description: 'Das Komplett-Paket – Haarschnitt und Bartpflege in einem',
      },
      {
        name: 'VIP Paket',
        price: '50 €',
        description: 'Haarschnitt, klassische Nassrasur und Styling',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-white/10">
          <p className="section-label mb-6">Was wir anbieten</p>
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-none">
            Services<br />&amp; Preise
          </h1>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((category) => (
            <div key={category.category}>
              <p className="section-label mb-8">{category.category}</p>
              <div className="divide-y divide-white/10">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-6 py-6 hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded"
                  >
                    <div className="flex-1 min-w-0">
                      <h2 className="font-display text-2xl md:text-3xl uppercase">{item.name}</h2>
                      <p className="font-body text-sm text-[#f5f5f5]/40 mt-1">{item.description}</p>
                    </div>
                    <span className="font-display text-2xl md:text-3xl shrink-0 text-[#f5f5f5]/80">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 border border-white/10">
          <p className="font-body text-sm text-[#f5f5f5]/40 leading-relaxed">
            * Preise sind Richtwerte. Der endgültige Preis kann je nach Aufwand variieren.
            Kein Termin notwendig – einfach vorbeikommen.
          </p>
        </div>

        <div className="mt-24 text-center">
          <p className="section-label mb-6">Los geht&apos;s</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8">
            Komm vorbei
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/weQUVaLxNoEs9kQ26"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Route berechnen
            </a>
            <Link href="/kontakt" className="btn-primary">
              Öffnungszeiten
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
