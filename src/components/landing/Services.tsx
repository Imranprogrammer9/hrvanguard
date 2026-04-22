import { ChartBar as BarChart2, Search, Share2 } from 'lucide-react'
import { Reveal } from './Reveal'

const steps = [
  'Submit your current CV + target role/industry',
  'I generate customised diagnostic questions based on your profile',
  'You answer — I map your gaps against industry benchmarks',
  'Receive a fully tailored, ATS-optimised CV',
]

const supportCards = [
  {
    num: '02',
    icon: Search,
    title: 'Talent Sourcing Strategy',
    desc: 'For recruiters — build effective sourcing pipelines using Boolean search, modern platforms, and passive candidate engagement techniques aligned with SHRM standards.',
  },
  {
    num: '03',
    icon: Share2,
    title: 'LinkedIn Profile Audit',
    desc: 'Optimise your LinkedIn presence to attract the right recruiters, align with your professional brand, and increase profile visibility for your target roles.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-[6%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.16em] uppercase mb-2"
            style={{ color: 'var(--brand-green)' }}
          >
            What I Offer
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="font-display font-bold mb-3"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--brand-navy)', lineHeight: 1.15 }}
          >
            Services Built Around{' '}
            <em className="not-italic" style={{ color: 'var(--brand-green)' }}>You</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: 'var(--brand-green)' }} />
        </Reveal>
        <Reveal delay={160}>
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--brand-slate)' }}>
            Focused, professional HR services for job seekers and recruiting teams — grounded
            in research and real-world practice.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured card */}
          <Reveal className="md:col-span-2">
            <div
              className="relative rounded-lg p-8 h-full overflow-hidden group border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ backgroundColor: 'var(--brand-navy)' }}
            >
              {/* Top accent bar */}
              <div
                className="absolute left-0 top-0 w-0.5 transition-all duration-500 group-hover:h-full"
                style={{ backgroundColor: 'var(--brand-green)', height: '0%' }}
              />
              <div
                className="absolute left-0 top-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: 'var(--brand-green)' }}
              />

              {/* Num */}
              <div
                className="font-display font-bold text-5xl mb-4 leading-none select-none"
                style={{ color: 'rgba(255,255,255,0.05)' }}
              >
                01
              </div>

              <div className="flex items-center gap-2 mb-4">
                <BarChart2 size={22} style={{ color: 'var(--brand-green)' }} />
              </div>

              <h3
                className="font-display font-semibold text-xl text-white mb-3"
              >
                ATS-Ready CV with Gap Analysis
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--brand-slate-lt)' }}>
                The only service where your CV is diagnosed before it&apos;s written. Most CV
                writers reformat what you already have. I go deeper — analysing your profile
                against your target industry, identifying the gaps that are costing you
                interviews, and building an ATS-optimised CV from the ground up.
              </p>

              <ul className="flex flex-col gap-2.5 mb-6">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--brand-slate-lt)' }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-bold mt-0.5"
                      style={{ background: 'rgba(34,197,94,0.18)', color: 'var(--brand-green-light)' }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>

              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'var(--brand-green)', color: '#fff' }}
              >
                🎯 Early Bird — $25
              </div>
            </div>
          </Reveal>

          {/* Support cards */}
          <div className="flex flex-col gap-4">
            {supportCards.map(({ num, icon: Icon, title, desc }, i) => (
              <Reveal key={num} delay={(i + 1) * 100}>
                <div
                  className="relative rounded-lg p-7 h-full border overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: 'var(--brand-cream)', borderColor: 'rgba(11,31,58,0.08)' }}
                >
                  <div
                    className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
                    style={{ backgroundColor: 'var(--brand-green)' }}
                  />
                  <div
                    className="font-display font-bold text-4xl mb-3 leading-none select-none"
                    style={{ color: 'rgba(11,31,58,0.06)' }}
                  >
                    {num}
                  </div>
                  <Icon size={20} className="mb-3" style={{ color: 'var(--brand-green)' }} />
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: 'var(--brand-navy)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--brand-slate)' }}>
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
