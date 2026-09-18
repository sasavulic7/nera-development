import Reveal from '../components/Reveal'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    package: 'Business',
    title: 'Night Sky',
    description:
      'Elegantna i moderna web prezentacija osmišljena za biznis kome je važan premium digitalni nastup.',
    tags: ['Web Design', 'Development'],
    image: '/projects/night-sky.jpg',
    url: 'https://night-sky-demo.vercel.app/',
    featured: true,
  },
  {
    number: '02',
    package: 'Business',
    title: 'Lumen Photo & Video',
    description:
      'Vizuelno snažna web prezentacija za kreativni studio, sa fokusom na fotografiju, video i portfolio.',
    tags: ['Responsive', 'Custom Development'],
    image: '/projects/lumen-photo-video.jpg',
    url: 'https://lumen-photo-and-video-demo-jet.vercel.app/#/',
    featured: true,
  },
  {
    number: '03',
    package: 'Start',
    title: 'Luxury Aurelia',
    description:
      'Moderan i elegantan sajt za predstavljanje brenda i njegovih usluga na jednostavan i profesionalan način.',
    tags: ['UI/UX', 'Web Development'],
    image: '/projects/luxury-aurelia.jpg',
    url: 'https://luxury-aurelia.vercel.app/',
    featured: false,
  },
  {
    number: '04',
    package: 'Start',
    title: 'Vantage',
    description:
      'Čista i moderna web prezentacija sa jasnom strukturom i fokusom na predstavljanje poslovanja.',
    tags: ['Responsive', 'Web Design'],
    image: '/projects/vantage.jpg',
    url: 'https://vantage-demo-three.vercel.app/',
    featured: false,
  },
  {
    number: '05',
    package: 'Start',
    title: 'Forma Interior Doors',
    description:
      'Elegantna prezentacija namenjena brendu iz oblasti enterijera, sa fokusom na proizvode i vizuelni identitet.',
    tags: ['UI/UX', 'Custom Development'],
    image: '/projects/forma-interior-doors.jpg',
    url: 'https://forma-interior-doors-demo.vercel.app/',
    featured: false,
  },
]

function ProjectVisual({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/visual relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0F11] ${
        project.featured ? 'aspect-[16/9]' : 'aspect-[16/10]'
      }`}
    >
      {/* Project image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/visual:scale-[1.03]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover/visual:bg-black/25" />

      {/* Hover label */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover/visual:opacity-100">
        <span className="rounded-full border border-white/20 bg-[#080A0C]/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md">
          Pogledaj projekat →
        </span>
      </div>

      {/* Package badge */}
      <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-[#080A0C]/75 px-3 py-1.5 backdrop-blur-md">
        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
          {project.package} paket
        </span>
      </div>
    </a>
  )
}

function Portfolio() {
  const [activeProject, setActiveProject] = useState(0)

  const currentProject = projects[activeProject]

  const nextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length)
  }

  const previousProject = () => {
    setActiveProject(
      (current) => (current - 1 + projects.length) % projects.length
    )
  }

  return (
    <Reveal>
      <section
        id="portfolio"
        className="relative overflow-hidden border-t border-white/[0.06] py-28 sm:py-36"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute right-[-15%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#19D3C5]/5 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19D3C5]">
                Portfolio
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Projekti koji
                <br />
                <span className="text-white/40">govore za sebe.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/35 lg:text-right">
              Svaki projekat gradimo sa jednom stvari na umu — da vaš biznis
              izgleda najbolje moguće online.
            </p>
          </div>

          {/* Carousel */}
          <div className="mt-20">
            <article
              key={currentProject.number}
              className="group"
            >
              {/* Project visual */}
              <ProjectVisual project={currentProject} />

              {/* Project info */}
              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-5">
                  <span className="pt-1 font-mono text-xs text-[#19D3C5]/60">
                    {currentProject.number}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {currentProject.title}
                      </h3>

                      {/* Package */}
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] ${
                          currentProject.package === 'Business'
                            ? 'border-[#19D3C5]/20 bg-[#19D3C5]/5 text-[#19D3C5]/70'
                            : 'border-white/[0.08] text-white/30'
                        }`}
                      >
                        {currentProject.package} paket
                      </span>
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
                      {currentProject.description}
                    </p>
                  </div>
                </div>

                {/* Tags + arrows */}
                <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
                  <div className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.03] px-3 py-1.5 text-[10px] text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={previousProject}
                      aria-label="Prethodni projekat"
                      className="group/arrow flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-[#19D3C5]/30 hover:bg-[#19D3C5]/5 hover:text-[#19D3C5]"
                    >
                      <span className="text-lg transition-transform duration-300 group-hover/arrow:-translate-x-0.5">
                        ←
                      </span>
                    </button>

                    <button
                      onClick={nextProject}
                      aria-label="Sledeći projekat"
                      className="group/arrow flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-[#19D3C5]/30 hover:bg-[#19D3C5]/5 hover:text-[#19D3C5]"
                    >
                      <span className="text-lg transition-transform duration-300 group-hover/arrow:translate-x-0.5">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom line */}
              <div className="mt-6 h-px w-full bg-white/[0.06]">
                <div className="h-px w-full w-full bg-[#19D3C5]/40 transition-all duration-700" />
              </div>
            </article>

            {/* Carousel indicators */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.number}
                    onClick={() => setActiveProject(index)}
                    aria-label={`Prikaži projekat ${project.number}`}
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeProject
                          ? 'w-8 bg-[#19D3C5]'
                          : 'w-2 bg-white/15 group-hover:bg-white/30'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <span className="font-mono text-[10px] tracking-[0.15em] text-white/20">
                {String(activeProject + 1).padStart(2, '0')} /{' '}
                {String(projects.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 flex justify-center">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#19D3C5]/30 hover:bg-[#19D3C5]/5"
            >
              Želite sličan projekat?
              <span className="text-[#19D3C5] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default Portfolio

