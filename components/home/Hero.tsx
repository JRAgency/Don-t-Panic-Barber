import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 1px, transparent 1px, transparent 40px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <p className="section-label mb-8 md:mb-10">Mollstraße 6 · 68165 Mannheim</p>

        <h1 className="font-display leading-none uppercase mb-0">
          <span className="block text-[clamp(4.5rem,16vw,15rem)] tracking-tight">
            DON&apos;T
          </span>
          <span className="block text-[clamp(4.5rem,16vw,15rem)] tracking-tight text-[#f5f5f5]/15">
            PANIC
          </span>
        </h1>

        <div className="flex items-center gap-4 my-8 md:my-10">
          <div className="flex-1 h-px bg-white/15" />
          <p className="font-display text-lg md:text-2xl tracking-[0.4em] uppercase text-[#f5f5f5]/70">
            Barber Shop
          </p>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.instagram.com/dontpanicbarber"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            Termin anfragen
          </a>
          <Link href="/services" className="btn-primary text-center">
            Unsere Services
          </Link>
        </div>

        {/* Info strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            { label: 'Di – Fr', value: '9:30 – 19:00' },
            { label: 'Samstag', value: '9:00 – 17:00' },
            { label: 'Adresse', value: 'Mollstraße 6' },
            { label: 'Kein Termin nötig', value: 'Walk-in' },
          ].map((item) => (
            <div key={item.label} className="bg-[#0a0a0a] p-4 md:p-6">
              <p className="section-label mb-1">{item.label}</p>
              <p className="font-display text-xl md:text-2xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
