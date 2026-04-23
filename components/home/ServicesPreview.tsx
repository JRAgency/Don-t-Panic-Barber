import Link from 'next/link'

const services = [
  {
    number: '01',
    name: 'Haarschnitt',
    description: 'Präziser Schnitt – klassisch oder modern, angepasst an deinen Style.',
    price: 'ab 25 €',
  },
  {
    number: '02',
    name: 'Bartpflege',
    description: 'Konturierung, Trimmen und Styling für den perfekten Bartwuchs.',
    price: 'ab 15 €',
  },
  {
    number: '03',
    name: 'Kombi-Paket',
    description: 'Haarschnitt und Bartpflege kombiniert – das komplette Paket.',
    price: 'ab 35 €',
  },
  {
    number: '04',
    name: 'Klassische Rasur',
    description: 'Nassrasur mit heißem Handtuch – traditionelles Barbier-Handwerk.',
    price: 'ab 20 €',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="section-label mb-4">Was wir machen</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Unsere<br />Services
            </h2>
          </div>
          <Link href="/services" className="btn-primary self-start">
            Alle Services & Preise
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#0a0a0a] p-8 md:p-10 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="section-label">{service.number}</span>
                <span className="font-display text-2xl text-[#f5f5f5]/70">{service.price}</span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl uppercase mb-4">{service.name}</h3>
              <p className="font-body text-sm text-[#f5f5f5]/50 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
