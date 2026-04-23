export default function About() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">

          {/* Text – overlaps image on desktop via z-index */}
          <div className="lg:col-span-5 lg:pr-12 pb-10 lg:pb-0 lg:relative lg:z-10">
            <p className="section-label mb-6">Über uns</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8">
              Mehr als nur<br />ein Haarschnitt
            </h2>
            <div className="space-y-4 font-body text-[#f5f5f5]/60 leading-relaxed text-sm">
              <p>
                Don&apos;t Panic steht für präzise Arbeit, ehrliches Handwerk und einen
                Ort, an dem du dich wohlfühlst. Kein Bullshit, kein Termin-Stress –
                einfach reinkommen und rausgehen wie ein anderer.
              </p>
            </div>

            {/* Single statement instead of generic stats */}
            <div className="mt-10 border-l-2 border-white/30 pl-5">
              <p className="font-display text-2xl md:text-3xl uppercase leading-tight text-[#f5f5f5]/90">
                Seit Tag 1.<br />Kein Termin.<br />Nur dein Schnitt.
              </p>
            </div>
          </div>

          {/* Image – wider, pulls slightly left on desktop */}
          <div className="lg:col-span-7 relative noise">
            <div className="relative aspect-[4/5] bg-white/[0.04] border border-white/10 overflow-hidden lg:-mr-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-8xl text-white/[0.06] select-none">FOTO</p>
              </div>
              {/* Year tag */}
              <div className="absolute bottom-4 right-4 border border-white/20 px-3 py-1">
                <p className="font-body text-xs uppercase tracking-widest text-[#f5f5f5]/50">2024</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
