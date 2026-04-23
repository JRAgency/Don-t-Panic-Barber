export default function About() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-6">Über uns</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8">
              Mehr als nur<br />ein Haarschnitt
            </h2>
            <div className="space-y-4 font-body text-[#f5f5f5]/60 leading-relaxed text-sm md:text-base">
              <p>
                Don&apos;t Panic Barber Shop steht für präzise Haarschnitte, sorgfältige
                Bartpflege und ein Erlebnis, das über den normalen Friseurbesuch hinausgeht.
              </p>
              <p>
                Mitten in Mannheim bieten wir dir einen Ort, an dem Handwerk und Style
                aufeinandertreffen – entspannt, professionell und immer auf den Punkt.
                Kein Termin, kein Stress – einfach vorbeikommen.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { number: '100%', label: 'Handarbeit' },
                { number: '5+', label: 'Tage offen' },
                { number: '#1', label: 'Dein Barber' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-white/20 pl-4">
                  <p className="font-display text-3xl md:text-4xl">{stat.number}</p>
                  <p className="font-body text-xs text-[#f5f5f5]/40 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder image */}
          <div className="relative aspect-[3/4] bg-white/[0.03] border border-white/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-7xl text-white/8">FOTO</p>
                <p className="section-label mt-3">Platzhalterbild</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/20" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-white/20" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-white/20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
