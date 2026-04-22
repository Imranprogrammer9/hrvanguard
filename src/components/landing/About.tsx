import { Lock, BookOpen, Zap, Target } from 'lucide-react'
import { Reveal } from './Reveal'

const trustItems = [
  { icon: Lock, title: 'Fully Confidential', desc: 'SSL-encrypted contact form. Your data is never shared or sold.' },
  { icon: BookOpen, title: 'SHRM-Aligned', desc: 'All content and methodology grounded in SHRM best practices.' },
  { icon: Zap, title: '24-Hour Response', desc: 'Fast turnaround — I respond to every inquiry within one business day.' },
  { icon: Target, title: 'Diagnostic First', desc: 'Gap analysis before writing — not a template, a real consultation.' },
]

const processSteps = [
  { label: 'CV & Industry Analysis', desc: 'I review your current CV and map it against your target role and industry benchmarks to understand where you stand.' },
  { label: 'Custom Gap Questions', desc: 'I craft personalised diagnostic questions based on your unique profile — not a generic form, but targeted discovery.' },
  { label: 'Gap Mapping', desc: 'Your answers reveal the real gaps — skills, keywords, positioning, or experience framing — that are costing you interviews.' },
  { label: 'ATS-Optimised CV Delivered', desc: 'Your fully rebuilt, keyword-rich, ATS-ready CV is delivered — built from insight, not guesswork.' },
]

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-[6%]"
      style={{ backgroundColor: 'var(--brand-cream)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <Reveal>
              <p
                className="text-xs font-semibold tracking-[0.16em] uppercase mb-2"
                style={{ color: 'var(--brand-green)' }}
              >
                About HR Vanguard
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-display font-bold mb-3"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--brand-navy)', lineHeight: 1.15 }}
              >
                A Different Kind<br />of CV Service
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: 'var(--brand-green)' }} />
            </Reveal>

            <Reveal delay={160}>
              <blockquote
                className="font-display italic text-xl leading-relaxed mb-6 pl-5"
                style={{
                  color: 'var(--brand-navy)',
                  borderLeft: '3px solid var(--brand-green)',
                  lineHeight: 1.55,
                }}
              >
                &ldquo;Most CV services rewrite what you already have. I do something different.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-sm leading-relaxed flex flex-col gap-4" style={{ color: 'var(--brand-slate)' }}>
                <p>
                  Before writing a single word, I analyse your CV against your target industry,
                  identify the exact gaps holding you back, and ask you the questions that uncover
                  what&apos;s missing.{' '}
                  <strong style={{ color: 'var(--brand-navy)', fontWeight: 600 }}>
                    Only then do I build your ATS-optimised CV
                  </strong>{' '}
                  — tailored, targeted, and ready to get past screening systems.
                </p>
                <p>
                  Every article on this platform is personally proofread against{' '}
                  <strong style={{ color: 'var(--brand-navy)', fontWeight: 600 }}>
                    SHRM (Society for Human Resource Management)
                  </strong>{' '}
                  guidelines and rewritten in plain, actionable language for both job seekers
                  and hiring professionals.
                </p>
                <p>
                  For early adopters, I&apos;m offering this complete service at an introductory
                  rate of{' '}
                  <strong style={{ color: 'var(--brand-navy)', fontWeight: 600 }}>$25</strong>{' '}
                  — a fraction of what most CV agencies charge.
                </p>
              </div>
            </Reveal>

            {/* Trust Grid */}
            <Reveal delay={240}>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {trustItems.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: '#fff', borderColor: 'rgba(11,31,58,0.07)' }}
                  >
                    <Icon size={18} className="mb-2" style={{ color: 'var(--brand-green)' }} />
                    <h4
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: 'var(--brand-navy)' }}
                    >
                      {title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--brand-slate)' }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column — Process Panel */}
          <Reveal delay={100} className="lg:sticky lg:top-20">
            <div
              className="rounded-xl p-8"
              style={{ backgroundColor: 'var(--brand-navy)' }}
            >
              <p
                className="text-xs font-semibold tracking-[0.14em] uppercase mb-6"
                style={{ color: 'var(--brand-green-light)' }}
              >
                My Process — Step by Step
              </p>

              <div className="flex flex-col gap-0">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    {/* Line column */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border"
                        style={{
                          background: 'rgba(34,197,94,0.15)',
                          borderColor: 'rgba(34,197,94,0.35)',
                          color: 'var(--brand-green-light)',
                        }}
                      >
                        {i + 1}
                      </div>
                      {i < processSteps.length - 1 && (
                        <div
                          className="w-px flex-1 my-1"
                          style={{ backgroundColor: 'rgba(34,197,94,0.15)', minHeight: 28 }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className={i < processSteps.length - 1 ? 'pb-6' : ''}>
                      <h4 className="text-sm font-semibold text-white mb-1">{step.label}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--brand-slate-lt)' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price block */}
              <div
                className="mt-8 rounded-lg p-5 text-center border"
                style={{
                  background: 'rgba(34,197,94,0.08)',
                  borderColor: 'rgba(34,197,94,0.22)',
                }}
              >
                <div
                  className="font-display font-bold leading-none mb-1"
                  style={{ fontSize: '3rem', color: 'var(--brand-green-light)' }}
                >
                  <sup className="text-xl align-super">$</sup>25
                </div>
                <div className="text-sm mb-1" style={{ color: 'var(--brand-slate-lt)' }}>
                  Complete ATS CV with Gap Analysis
                </div>
                <div
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: 'var(--brand-green)' }}
                >
                  🎯 Early Bird · Limited Spots
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-block w-full py-2.5 rounded-sm text-sm font-semibold text-white tracking-wide transition-all duration-200"
                  style={{ backgroundColor: 'var(--brand-green)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--brand-green-light)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--brand-green)')}
                >
                  Claim My Spot
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
