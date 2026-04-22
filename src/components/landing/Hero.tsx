export function Hero() {
  return (
    <section
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--brand-navy)', padding: '80px 6% 60px' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Diagonal accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', right: '-5%',
          width: '55%', height: '120%',
          background: 'linear-gradient(160deg, rgba(34,197,94,0.04) 0%, transparent 60%)',
          borderLeft: '1px solid rgba(34,197,94,0.08)',
          transform: 'skewX(-6deg)',
        }}
      />

      {/* Glowing orb */}
      <div
        className="hero-orb absolute pointer-events-none rounded-full"
        style={{
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
          top: '50%', right: '6%',
        }}
      />

      {/* Content */}
      <div className="relative max-w-2xl text-center" style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both' }}>
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase mx-auto"
          style={{
            borderColor: 'rgba(34,197,94,0.35)',
            background: 'rgba(34,197,94,0.08)',
            color: 'var(--brand-green-light)',
            animationDelay: '0ms',
          }}
        >
          <span
            className="pulse-dot w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: 'var(--brand-green)' }}
          />
          SHRM-Aligned · Free Consultation
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold text-white leading-[1.06] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '-0.01em' }}
        >
          Your CV Isn&apos;t<br />
          the Problem —<br />
          <span
            className="font-display italic"
            style={{ color: 'var(--brand-green-light)' }}
          >
            The Gap Is.
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-base font-light leading-relaxed mb-8 max-w-xl"
          style={{ color: 'var(--brand-slate-lt)' }}
        >
          HR Vanguard offers diagnostic-first career services — we analyse your CV,
          identify your gaps, and deliver a fully ATS-optimised CV built around your real
          potential. Powered by SHRM best practices.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 rounded-sm text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--brand-green)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--brand-green-light)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--brand-green)')}
          >
            Claim Early Bird Spot
          </a>
          <a
            href="#about"
            className="inline-block px-7 py-3.5 rounded-sm text-sm font-medium text-white tracking-wide border border-white/20 transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            How It Works
          </a>
        </div>

        {/* Price note */}
        <div className="flex items-center gap-3 mt-7 justify-center">
          <span
            className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full border"
            style={{
              background: 'rgba(34,197,94,0.12)',
              borderColor: 'rgba(34,197,94,0.3)',
              color: 'var(--brand-green-light)',
            }}
          >
            Early Bird · $25
          </span>
          <span className="text-sm" style={{ color: 'var(--brand-slate)' }}>
            Introductory price · Limited availability · Free consultation included
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
