import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">

          {/* Text */}
          <div className="lg:col-span-5 lg:pr-12 pb-10 lg:pb-0 lg:relative lg:z-10">
            <p className="section-label mb-6">Über uns</p>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8 text-[#f0ece4]">
              Mehr als nur<br />ein Haarschnitt
            </h2>
            <div className="space-y-4 font-body text-[#f0ece4]/55 leading-relaxed text-sm">
              <p>
                Don&apos;t Panic steht für präzise Arbeit, ehrliches Handwerk und einen
                Ort, an dem du dich wohlfühlst. Kein Bullshit, kein Termin-Stress –
                einfach reinkommen und rausgehen wie ein anderer.
              </p>
            </div>

            {/* Statement with amber accent */}
            <div className="mt-10 border-l-2 border-[#C9A07A] pl-5">
              <p className="font-display text-2xl md:text-3xl uppercase leading-tight text-[#f0ece4]/90">
                Seit Tag 1.<br />Kein Termin.<br />Nur dein Schnitt.
              </p>
            </div>
          </div>

          {/* Image – wider */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] overflow-hidden lg:-mr-8">
              <Image
                src="/Don-t-Panic-Barber/images/exterior.png"
                alt="Don't Panic Barber Shop Mannheim"
                fill
                className="object-cover object-center"
              />
              {/* Amber corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#C9A07A]/60 z-10" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#C9A07A]/60 z-10" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[#C9A07A]/60 z-10" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#C9A07A]/60 z-10" />
              {/* Year tag */}
              <div className="absolute bottom-6 right-6 border border-[#C9A07A]/40 px-3 py-1 bg-[#0a0a0a]/70 z-10">
                <p className="font-body text-xs uppercase tracking-widest text-[#C9A07A]/80">2024</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
