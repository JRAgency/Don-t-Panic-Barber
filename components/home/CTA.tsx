export default function CTA() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10 noise relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(201,160,122,0.05) 0%, transparent 70%), #0a0a0a' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Split: heading left, buttons right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <p className="section-label mb-5">Kein Termin nötig</p>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] uppercase leading-none text-[#f0ece4]">
              Komm einfach<br />
              <span className="text-outline-accent">vorbei.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:shrink-0 lg:mb-2">
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
        </div>

        {/* Info with amber accents */}
        <div className="border-t border-[#C9A07A]/20 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="section-label mb-3">Adresse</p>
            <p className="font-body text-sm leading-relaxed text-[#f0ece4]/75">
              Mollstraße 6<br />68165 Mannheim
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Öffnungszeiten</p>
            <p className="font-body text-sm leading-relaxed text-[#f0ece4]/75">
              Di–Fr: 9:30–19:00 Uhr<br />
              Sa: 9:00–17:00 Uhr<br />
              <span className="text-[#f0ece4]/25">Mo + So geschlossen</span>
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Social</p>
            <a
              href="https://www.instagram.com/dontpanicbarber"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl uppercase hover:text-[#C9A07A] transition-colors"
            >
              @dontpanicbarber
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
