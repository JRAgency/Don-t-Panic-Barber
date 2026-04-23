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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-white/10">
          <p className="section-label mb-6">Wo wir sind</p>
          <h1 className="font-display text-6xl md:text-9xl uppercase leading-none">
            Kontakt &amp;<br />Anfahrt
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <p className="section-label mb-5">Adresse</p>
              <address className="not-italic">
                <p className="font-display text-3xl md:text-4xl uppercase">Mollstraße 6</p>
                <p className="font-display text-3xl md:text-4xl uppercase text-[#f5f5f5]/40">
                  68165 Mannheim
                </p>
              </address>
            </div>

            <div>
              <p className="section-label mb-5">Öffnungszeiten</p>
              <div className="divide-y divide-white/10">
                {hours.map(({ day, hours: h, closed }) => (
                  <div key={day} className="flex justify-between items-center py-3">
                    <span className="font-body text-sm uppercase tracking-widest">{day}</span>
                    <span
                      className={`font-body text-sm ${closed ? 'text-[#f5f5f5]/25' : 'text-[#f5f5f5]/80'}`}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label mb-5">Social Media</p>
              <a
                href="https://www.instagram.com/dontpanicbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-3xl uppercase hover:opacity-60 transition-opacity"
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

          {/* Map placeholder */}
          <div className="relative min-h-[400px] lg:min-h-0 bg-white/[0.03] border border-white/10 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="text-center opacity-20">
                <p className="font-display text-7xl text-white/20">MAP</p>
                <p className="section-label mt-2">Google Maps</p>
              </div>
              <a
                href="https://maps.app.goo.gl/weQUVaLxNoEs9kQ26"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary relative z-10 opacity-100"
                style={{ opacity: 1 }}
              >
                In Google Maps öffnen
              </a>
            </div>
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-white/20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-white/20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/20" />
          </div>
        </div>
      </div>
    </div>
  )
}
