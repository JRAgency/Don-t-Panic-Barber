import Link from 'next/link'

const services = [
  { number: '01', name: 'Haarschnitt', price: 'ab 25 €', sub: 'Klassisch oder Modern' },
  { number: '02', name: 'Bartpflege', price: 'ab 15 €', sub: 'Kontur · Trimmen · Styling' },
  { number: '03', name: 'Kombi-Paket', price: 'ab 35 €', sub: 'Haar & Bart komplett' },
  { number: '04', name: 'Klassische Rasur', price: 'ab 20 €', sub: 'Nassrasur mit heißem Tuch' },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10" style={{ background: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Was wir machen</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none text-[#f0ece4]">
              Services
            </h2>
          </div>
          <Link href="/services" className="btn-primary self-start text-sm">
            Alle Preise
          </Link>
        </div>

        <div className="divide-y divide-white/[0.08]">
          {services.map((s, i) => (
            <Link
              key={s.number}
              href="/services"
              className="group flex items-center gap-4 md:gap-8 py-5 md:py-6 transition-all duration-300 -mx-4 px-4 hover:pl-8 hover:bg-[#C9A07A]/[0.04]"
            >
              {/* Number */}
              <span className="font-body text-xs text-[#C9A07A] w-6 shrink-0 tabular-nums">
                {s.number}
              </span>

              {/* Name + sub */}
              <div className="flex-1 min-w-0">
                <span className="block font-display text-3xl md:text-5xl uppercase leading-none text-[#f0ece4]">
                  {s.name}
                </span>
                <span className="block font-body text-xs text-[#f0ece4]/30 mt-1 tracking-widest uppercase">
                  {s.sub}
                </span>
              </div>

              {/* Dotted line – desktop only */}
              <span className="hidden md:block flex-1 border-b border-dotted border-[#C9A07A]/20 mx-2 group-hover:border-[#C9A07A]/50 transition-colors" />

              {/* Price */}
              <span className="font-display text-xl md:text-3xl text-[#C9A07A] shrink-0">
                {s.price}
              </span>

              {/* Arrow */}
              <span className="font-body text-sm text-[#f0ece4]/20 group-hover:text-[#C9A07A] group-hover:translate-x-1 transition-all duration-300 shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
