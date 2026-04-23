export default function MapSection() {
  return (
    <section className="border-t border-white/10" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 items-stretch" style={{ minHeight: '360px' }}>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col justify-between py-6 pr-0 lg:pr-12 gap-8">
            <div>
              <p className="section-label mb-4">Wo wir sind</p>
              <address className="not-italic space-y-1">
                <p className="font-display text-3xl md:text-4xl uppercase text-[#f0ece4]">Mollstraße 6</p>
                <p className="font-display text-3xl md:text-4xl uppercase text-[#f0ece4]/40">68165 Mannheim</p>
              </address>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-white/[0.07] py-2">
                <span className="font-body text-xs uppercase tracking-widest text-[#f0ece4]/40">Di – Fr</span>
                <span className="font-body text-sm text-[#f0ece4]/70">9:30 – 19:00 Uhr</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.07] py-2">
                <span className="font-body text-xs uppercase tracking-widest text-[#f0ece4]/40">Samstag</span>
                <span className="font-body text-sm text-[#f0ece4]/70">9:00 – 17:00 Uhr</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-body text-xs uppercase tracking-widest text-[#f0ece4]/40">Mo + So</span>
                <span className="font-body text-sm text-[#f0ece4]/20">Geschlossen</span>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/weQUVaLxNoEs9kQ26"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary self-start"
            >
              Route berechnen
            </a>
          </div>

          {/* Map */}
          <div
            className="lg:col-span-3 relative overflow-hidden"
            style={{ border: '1px solid rgba(201,160,122,0.15)', minHeight: '320px' }}
          >
            <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-[#C9A07A]/50 z-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-[#C9A07A]/50 z-10 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-[#C9A07A]/50 z-10 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-[#C9A07A]/50 z-10 pointer-events-none" />
            <iframe
              src="https://maps.google.com/maps?q=Mollstra%C3%9Fe+6,+68165+Mannheim,+Germany&output=embed&z=15"
              width="100%"
              height="100%"
              className="map-dark absolute inset-0 w-full h-full"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Don't Panic Barber Shop – Mollstraße 6, Mannheim"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
