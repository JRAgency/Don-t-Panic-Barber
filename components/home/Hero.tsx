import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise">
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Vertical label – right side */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-3">
        <span className="text-vertical section-label tracking-[0.4em]">
          MANNHEIM · EST. 2024
        </span>
        <div className="w-px h-24 bg-white/20" />
      </div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 pt-28 pb-16">
        {/* Small top label */}
        <p className="section-label mb-6 ml-1">Mollstraße 6 · 68165 Mannheim</p>

        {/* Main heading – intentionally bleeds right */}
        <h1 className="font-display leading-[0.88] uppercase -ml-1">
          <span className="block text-[clamp(5rem,18vw,17rem)] tracking-tighter text-[#f5f5f5]">
            DON&apos;T
          </span>
          <span className="block text-[clamp(5rem,18vw,17rem)] tracking-tighter text-outline">
            PANIC
          </span>
        </h1>

        {/* Skewed divider */}
        <div className="relative my-8 md:my-10 h-px bg-white/20 max-w-2xl">
          <span className="absolute left-0 -top-3 font-display text-sm tracking-[0.5em] uppercase text-[#f5f5f5]/50">
            Barber Shop
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-sm">
          <a
            href="https://www.instagram.com/dontpanicbarber"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            Termin anfragen
          </a>
          <Link href="/services" className="btn-primary text-center">
            Services
          </Link>
        </div>

        {/* Info strip – left-bordered instead of gap-px grid */}
        <div className="mt-16 md:mt-20 flex flex-wrap gap-0 max-w-2xl">
          {[
            { label: 'Di – Fr', value: '9:30 – 19:00' },
            { label: 'Samstag', value: '9:00 – 17:00' },
            { label: 'Adresse', value: 'Mollstraße 6' },
            { label: 'Buchung', value: 'Walk-in' },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-white/20 pl-4 pr-8 py-2 hover:border-white/50 transition-colors">
              <p className="section-label mb-0.5">{item.label}</p>
              <p className="font-display text-lg md:text-xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
