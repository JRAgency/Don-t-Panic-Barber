import Link from 'next/link'

const services = [
  { number: '01', name: 'Haarschnitt', price: 'ab 25 €' },
  { number: '02', name: 'Bartpflege', price: 'ab 15 €' },
  { number: '03', name: 'Kombi-Paket', price: 'ab 35 €' },
  { number: '04', name: 'Klassische Rasur', price: 'ab 20 €' },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Was wir machen</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Services
            </h2>
          </div>
          <Link href="/services" className="btn-primary self-start text-sm">
            Alle Preise
          </Link>
        </div>

        {/* Editorial list */}
        <div className="divide-y divide-white/10">
          {services.map((s) => (
            <Link
              key={s.number}
              href="/services"
              className="group flex items-center gap-4 md:gap-8 py-5 md:py-6 hover:bg-white/[0.03] transition-all duration-300 -mx-4 px-4 hover:translate-x-2"
            >
              {/* Number */}
              <span className="section-label w-6 shrink-0">{s.number}</span>

              {/* Name */}
              <span className="font-display text-3xl md:text-5xl uppercase leading-none flex-1 group-hover:text-[#f5f5f5] transition-colors">
                {s.name}
              </span>

              {/* Dotted line */}
              <span className="hidden md:block flex-1 border-b border-dotted border-white/20 mx-4" />

              {/* Price */}
              <span className="font-display text-xl md:text-3xl text-[#f5f5f5]/60 shrink-0 group-hover:text-[#f5f5f5] transition-colors">
                {s.price}
              </span>

              {/* Arrow */}
              <span className="font-body text-sm text-[#f5f5f5]/30 group-hover:text-[#f5f5f5] group-hover:translate-x-1 transition-all duration-300 shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
