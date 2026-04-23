export default function CTA() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label mb-6">Kein Termin nötig</p>
        <h2 className="font-display text-[clamp(3rem,10vw,9rem)] uppercase leading-none mb-8">
          Komm einfach<br />vorbei
        </h2>
        <p className="font-body text-[#f5f5f5]/50 max-w-sm mx-auto mb-10 leading-relaxed text-sm">
          Einfach in der Mollstraße 6 vorbeikommen – kein Termin notwendig.
          Oder schreib uns kurz auf Instagram.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://www.instagram.com/dontpanicbarber"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Instagram
          </a>
          <a
            href="https://maps.app.goo.gl/weQUVaLxNoEs9kQ26"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Route berechnen
          </a>
        </div>

        <div className="border-t border-white/10 pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-2xl mx-auto">
          <div>
            <p className="section-label mb-3">Adresse</p>
            <p className="font-body text-sm leading-relaxed text-[#f5f5f5]/80">
              Mollstraße 6<br />68165 Mannheim
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Öffnungszeiten</p>
            <p className="font-body text-sm leading-relaxed text-[#f5f5f5]/80">
              Di–Fr: 9:30–19:00 Uhr<br />
              Sa: 9:00–17:00 Uhr<br />
              <span className="text-[#f5f5f5]/30">Mo + So: Geschlossen</span>
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Social Media</p>
            <a
              href="https://www.instagram.com/dontpanicbarber"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-[#f5f5f5]/70 hover:text-[#f5f5f5] transition-colors"
            >
              @dontpanicbarber
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
