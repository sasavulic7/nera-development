import Reveal from "../components/Reveal"
import { useState } from 'react'

const services = [
  {
    id: '01',
    title: 'Web Development',
    shortTitle: 'Web Development',
    description:
      'Razvijamo moderne i prilagođene web sajtove koji su brzi, sigurni i napravljeni prema potrebama vašeg poslovanja.',
    tags: ['React', 'JavaScript', 'Custom Development'],
  },
  {
    id: '02',
    title: 'Responsive Design',
    shortTitle: 'Responsive Design',
    description:
      'Vaš sajt mora izgledati odlično bez obzira na uređaj. Pravimo iskustvo koje je podjednako dobro na telefonu, tabletu i računaru.',
    tags: ['Mobile First', 'UI/UX', 'Responsive'],
  },
  {
    id: '03',
    title: 'Kontakt & Integracije',
    shortTitle: 'Integracije',
    description:
      'Povezujemo vaš sajt sa alatima koji su vam potrebni — kontakt forme, email, Google Maps, društvene mreže i druge servise.',
    tags: ['Forms', 'Email', 'APIs'],
  },
  {
    id: '04',
    title: 'SEO & Analytics',
    shortTitle: 'SEO & Analytics',
    description:
      'Postavljamo tehničke osnove kako bi vaš sajt bio razumljiv pretraživačima i omogućavamo vam da pratite kako posetioci koriste sajt.',
    tags: ['SEO', 'Analytics', 'Performance'],
  },
  {
    id: '05',
    title: 'Održavanje & Podrška',
    shortTitle: 'Podrška',
    description:
      'Nakon lansiranja ne morate sve sami. Dostupni smo za izmene, tehničko održavanje i dalji razvoj vašeg sajta.',
    tags: ['Maintenance', 'Updates', 'Support'],
  },
]

function Services() {
  const [activeService, setActiveService] = useState(0)

  const active = services[activeService]

  return (
    <section
      id="usluge"
      className="relative overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
    >
      {/* Background glow */}
      <Reveal>

      <div className="pointer-events-none absolute right-[-15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#19D3C5]/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
            Šta radimo
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Sve što vam treba za
            <br />
            <span className="text-white/40">dobar online nastup.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
            Od prve ideje do sajta koji je spreman za vaše klijente. Svaki
            projekat prilagođavamo vašem poslovanju, ciljevima i budžetu.
          </p>
        </div>

        {/* Services layout */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          
          {/* Left — active service */}
          <div className="relative min-h-[330px] lg:sticky lg:top-32 lg:h-fit">
            <div className="absolute left-0 top-0 h-full w-px bg-white/[0.08]" />

            <div className="pl-8 sm:pl-10">
              <span className="font-mono text-sm text-[#19D3C5]">
                {active.id}
              </span>

              <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {active.title}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/40 sm:text-base">
                {active.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative number */}
              <div className="pointer-events-none absolute -bottom-12 right-0 select-none font-mono text-[140px] font-bold leading-none text-white/[0.025]">
                {active.id}
              </div>
            </div>
          </div>

          {/* Right — services list */}
          <div>
            {services.map((service, index) => {
  const isActive = activeService === index

  return (
    <Reveal
      key={service.id}
      delay={index * 80}
    >
      <button
        type="button"
        onMouseEnter={() => setActiveService(index)}
        onFocus={() => setActiveService(index)}
        className={`group relative flex w-full items-center border-t border-white/[0.08] py-7 text-left transition-all duration-300 sm:py-9 ${
          index === services.length - 1 ? 'border-b' : ''
        }`}
      >
        {/* Active indicator */}
        <span
          className={`absolute left-0 top-0 h-full w-[2px] origin-top transition-transform duration-300 ${
            isActive
              ? 'scale-y-100 bg-[#19D3C5]'
              : 'scale-y-0 bg-[#19D3C5]'
          }`}
        />

        {/* Number */}
        <span
          className={`w-14 shrink-0 font-mono text-xs transition-colors duration-300 ${
            isActive
              ? 'text-[#19D3C5]'
              : 'text-white/20 group-hover:text-white/40'
          }`}
        >
          {service.id}
        </span>

        {/* Title */}
        <span
          className={`text-xl font-medium tracking-tight transition-all duration-300 sm:text-2xl ${
            isActive
              ? 'translate-x-2 text-white'
              : 'text-white/45 group-hover:text-white/75'
          }`}
        >
          {service.shortTitle}
        </span>

        {/* Arrow */}
        <span
          className={`ml-auto text-xl transition-all duration-300 ${
            isActive
              ? 'translate-x-0 text-[#19D3C5] opacity-100'
              : '-translate-x-2 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
          }`}
        >
          ↗
        </span>
      </button>
    </Reveal>
  )
})}
          </div>
        </div>
      </div>
    </Reveal>

    </section>
  )
}

export default Services