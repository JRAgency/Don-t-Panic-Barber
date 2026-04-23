import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise">
      {/* Background photo */}
      <Image
        src="/Don-t-Panic-Barber/images/interior-1.png"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-25"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
      {/* Subtle amber glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 25% 55%, rgba(201,160,122,0.06) 0%, transparent 65%)',
        }}
      />

      {/* Vertical label – right edge */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-3">
        <span className="text-vertical section-label tracking-[0.4em]">
          MANNHEIM · EST. 2024
        </span>
        <div className="w-px h-24 bg-[#C9A07A]/30" />
      </div>

      {/* Thin barber-red top stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8B1A1A] to-transparent opacity-70" />

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 pt-28 pb-16">
        <p className="section-label mb-6 ml-1">Mollstraße 6 · 68165 Mannheim</p>

        {/* Main heading */}
        <h1 className="font-display leading-[0.88] uppercase -ml-1">
          <span className="block text-[clamp(5rem,18vw,17rem)] tracking-tighter text-[#f0ece4]">
            DON&apos;T
          </span>
          <span className="block text-[clamp(5rem,18vw,17rem)] tracking-tighter text-outline-accent">
            PANIC
          </span>
        </h1>

        {/* Separator */}
        <div className="relative my-8 md:my-10 max-w-2xl flex items-center gap-4">
          <div className="flex-1 h-px bg-[#C9A07A]/40" />
          <span className="font-display text-sm tracking-[0.5em] uppercase text-[#C9A07A]">
            Barber Shop
          </span>
          <div className="w-8 h-px bg-[#C9A07A]/40" />
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

        {/* Info strip */}
        <div className="mt-16 md:mt-20 flex flex-wrap gap-0 max-w-2xl">
          {[
            { label: 'Di – Fr', value: '9:30 – 19:00' },
            { label: 'Samstag', value: '9:00 – 17:00' },
            { label: 'Adresse', value: 'Mollstraße 6' },
            { label: 'Buchung', value: 'Walk-in' },
          ].map((item) => (
            <div
              key={item.label}
              className="group border-l-2 border-[#f0ece4]/15 hover:border-[#C9A07A] pl-4 pr-8 py-2 transition-colors duration-300"
            >
              <p className="section-label mb-0.5">{item.label}</p>
              <p className="font-display text-lg md:text-xl group-hover:text-[#C9A07A] transition-colors">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
