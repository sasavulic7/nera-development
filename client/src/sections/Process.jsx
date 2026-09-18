import Reveal from "../components/Reveal"
const steps = [
  {
    number: '01',
    title: 'Razgovor',
    description:
      'Počinjemo razgovorom. Upoznajemo vaš biznis, ciljeve i ono što želite da postignete novim sajtom.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Definišemo strukturu, sadržaj i funkcionalnosti sajta kako bi svaki deo imao jasnu svrhu.',
  },
  {
    number: '03',
    title: 'Dizajn',
    description:
      'Kreiramo moderan vizuelni pravac prilagođen vašem brendu, publici i načinu na koji želite da se predstavite.',
  },
  {
    number: '04',
    title: 'Razvoj',
    description:
      'Pretvaramo dizajn u brz, responsive i funkcionalan web sajt spreman za stvarne korisnike.',
  },
  {
    number: '05',
    title: 'Lansiranje',
    description:
      'Nakon finalnih provera, vaš sajt postaje dostupan online. I tu smo ako vam kasnije zatreba podrška.',
  },
]

function Process() {
  return (
    <Reveal>
    <section
      id="proces"
      className="relative overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#19D3C5]/[0.035] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
            Kako radimo
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Od ideje do
            <br />
            <span className="text-white/40">sajta koji radi.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
            Jednostavan i transparentan proces. Znate šta radimo, kada radimo
            i šta možete da očekujete u svakom koraku.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="relative mt-24 hidden lg:block">

          {/* Main line */}
          <div className="absolute left-[10%] right-[10%] top-[7px] h-px bg-gradient-to-r from-transparent via-[#19D3C5]/30 to-transparent" />

          <div className="grid grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative px-5 text-center"
              >
                {/* Timeline point */}
                <div className="relative mx-auto flex h-4 w-4 items-center justify-center">
                  <div className="absolute h-4 w-4 rounded-full border border-[#19D3C5]/30 bg-[#080A0C] transition-all duration-500 group-hover:border-[#19D3C5] group-hover:shadow-[0_0_20px_rgba(25,211,197,0.3)]" />

                  <div className="h-1.5 w-1.5 rounded-full bg-[#19D3C5] opacity-60 transition-all duration-500 group-hover:h-2 group-hover:w-2 group-hover:opacity-100" />
                </div>

                {/* Number */}
                <div className="mt-8 font-mono text-xs text-[#19D3C5]/60 transition-colors duration-300 group-hover:text-[#19D3C5]">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#19D3C5]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-[210px] text-sm leading-6 text-white/35">
                  {step.description}
                </p>

                {/* Step arrow */}
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-[-5px] top-[2px] text-sm text-white/10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="relative mt-16 lg:hidden">

          {/* Vertical line */}
          <div className="absolute bottom-5 left-[7px] top-5 w-px bg-gradient-to-b from-[#19D3C5]/40 via-[#19D3C5]/20 to-transparent" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex gap-7"
              >
                {/* Point */}
                <div className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#19D3C5]/40 bg-[#080A0C]">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#19D3C5]" />
                </div>

                {/* Content */}
                <div className="pb-1">
                  <div className="font-mono text-xs text-[#19D3C5]/60">
                    {step.number}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3">
            <span className="flex h-2 w-2 rounded-full bg-[#19D3C5] shadow-[0_0_10px_rgba(25,211,197,0.5)]" />

            <span className="text-xs text-white/40">
              Mi brinemo o tehničkom delu — vi se fokusirate na svoj biznis.
            </span>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  )
}

export default Process