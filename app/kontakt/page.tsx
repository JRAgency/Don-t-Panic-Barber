import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt & Anfahrt',
  description:
    "Don't Panic Barber Shop – Mollstraße 6, 68165 Mannheim. Öffnungszeiten, Kontakt und Anfahrt.",
  alternates: { canonical: 'https://dontpanicbarber.de/kontakt' },
}

const hours = [
  { day: 'Montag', hours: 'Geschlossen', closed: true },
  { day: 'Dienstag', hours: '9:30 – 19:00 Uhr' },
  { day: 'Mittwoch', hours: '9:30 – 19:00 Uhr' },
  { day: 'Donnerstag', hours: '9:30 – 19:00 Uhr' },
  { day: 'Freitag', hours: '9:30 – 19:00 Uhr' },
  { day: 'Samstag', hours: '9:00 – 17:00 Uhr' },
  { day: 'Sonntag', hours: 'Geschlossen', closed: true },
]

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Thin amber top bar */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A07A] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-white/10">
          <p className="section-label mb-6">Wo wir sind</p>
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-none text-[#f0ece4]">
            Kontakt &amp;<br />Anfahrt
          </h1>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info column */}
          <div className="space-y-10">
            <div>
              <p className="section-label mb-4">Adresse</p>
              <address className="not-italic">
                <p className="font-display text-3xl md:text-4xl uppercase text-[#f0ece4]">Mollstraße 6</p>
                <p className="font-display text-3xl md:text-4xl uppercase text-[#f0ece4]/40">
                  68165 Mannheim
                </p>
              </address>
            </div>

            <div>
              <p className="section-label mb-4">Öffnungszeiten</p>
              <div className="divide-y divide-white/[0.08]">
                {hours.map(({ day, hours: h, closed }) => (
                  <div key={day} className="flex justify-between items-center py-3 group">
                    <span className="font-body text-sm uppercase tracking-widest text-[#f0ece4]/60">
                      {day}
                    </span>
                    <span
                      className={`font-body text-sm ${
                        closed ? 'text-[#f0ece4]/20' : 'text-[#f0ece4]/80 group-hover:text-[#C9A07A] transition-colors'
                      }`}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label mb-4">Social Media</p>
              <a
                href="https://www.instagram.com/dontpanicbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-3xl uppercase hover:text-[#C9A07A] transition-colors"
              >
                @dontpanicbarber
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/weQUVaLxNoEs9kQ26"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Route berechnen
              </a>
              <a
                href="https://www.instagram.com/dontpanicbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden"
            style={{ border: '1px solid rgba(201,160,122,0.2)' }}
          >
            {/* Amber corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-[#C9A07A]/50 z-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-[#C9A07A]/50 z-10 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-[#C9A07A]/50 z-10 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-[#C9A07A]/50 z-10 pointer-events-none" />

            <iframe
              src="https://maps.google.com/maps?q=Mollstra%C3%9Fe+6,+68165+Mannheim,+Germany&output=embed&z=15"
              width="100%"
              height="100%"
              className="map-dark absolute inset-0 w-full h-full"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Don't Panic Barber Shop – Mollstraße 6, Mannheim"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
