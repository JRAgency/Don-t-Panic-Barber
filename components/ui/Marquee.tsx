export default function Marquee() {
  const text = "· DON'T PANIC · BARBER SHOP · MANNHEIM · WALK IN · MOLLSTRASSE 6 · ✂ "
  const repeated = text.repeat(6)

  return (
    <div className="relative -rotate-[1.5deg] overflow-hidden py-3 my-0 z-10"
      style={{ background: '#C9A07A' }}
    >
      <div className="marquee-track whitespace-nowrap">
        <span className="font-display text-[#0a0a0a] text-xl md:text-2xl tracking-wide">
          {repeated}
        </span>
        <span className="font-display text-[#0a0a0a] text-xl md:text-2xl tracking-wide" aria-hidden>
          {repeated}
        </span>
      </div>
    </div>
  )
}
