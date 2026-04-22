import { useState } from 'react'
import { Mail, Clock, Target, Lock, MessageCircle } from 'lucide-react'
import { Reveal } from './Reveal'
import { submitContactForm } from '@/lib/supabase'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'hello@hrvanguard.com',
  },
  {
    icon: Clock,
    title: 'Response Time',
    detail: 'Within 24 business hours — always.',
  },
  {
    icon: Target,
    title: 'Early Bird Pricing',
    detail: 'ATS CV with Gap Analysis at $25 introductory rate. Limited spots — book now.',
  },
]

const services = [
  'ATS-Ready CV with Gap Analysis — Early Bird $25',
  'Talent Sourcing Strategy Consultation',
  'LinkedIn Profile Audit',
  'General HR Inquiry',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    service: '',
    target_role: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm({ full_name: '', email: '', service: '', target_role: '', message: '' })
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  const inputBase: React.CSSProperties = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 4,
    padding: '0.75rem 1rem',
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s, background 0.2s',
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--brand-green)'
    e.target.style.background = 'rgba(255,255,255,0.08)'
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
    e.target.style.background = 'rgba(255,255,255,0.05)'
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-[6%]"
      style={{ backgroundColor: 'var(--brand-navy)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p
          className="text-xs font-semibold tracking-[0.16em] uppercase mb-2"
          style={{ color: 'var(--brand-green)' }}
        >
          Get Started
        </p>
        <h2
          className="font-display font-bold text-white mb-3"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
        >
          Book Your Free Consultation
        </h2>
        <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: 'var(--brand-green)' }} />
        <p className="text-sm leading-relaxed max-w-md" style={{ color: 'var(--brand-slate-lt)' }}>
          Fill out the form and I&apos;ll respond within 24 hours. All submissions are
          SSL-encrypted and completely confidential.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Left: Contact Info */}
          <Reveal>
            <div className="flex flex-col gap-6">
              {contactInfo.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg border flex-shrink-0"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      borderColor: 'rgba(34,197,94,0.2)',
                    }}
                  >
                    <Icon size={16} style={{ color: 'var(--brand-green)' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">{title}</h4>
                    <p className="text-sm" style={{ color: 'var(--brand-slate)' }}>{detail}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/923112169770"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-4 border transition-all duration-200 hover:border-green-500/40"
                style={{
                  background: 'rgba(34,197,94,0.06)',
                  borderColor: 'rgba(34,197,94,0.18)',
                }}
              >
                <MessageCircle size={18} style={{ color: 'var(--brand-green)' }} />
                <div>
                  <div className="text-sm font-semibold text-white">Chat on WhatsApp</div>
                  <div className="text-xs" style={{ color: 'var(--brand-slate-lt)' }}>
                    Prefer instant messaging? Reach me directly.
                  </div>
                </div>
              </a>

              {/* Security badge */}
              <div
                className="flex items-start gap-3 rounded-lg p-4 border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <Lock size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-slate-lt)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--brand-slate-lt)' }}>
                  Your data is SSL-encrypted and never shared with third parties. Complete
                  confidentiality guaranteed.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={120}>
            {status === 'success' ? (
              <div
                className="rounded-lg p-8 text-center border flex flex-col items-center gap-4"
                style={{
                  background: 'rgba(34,197,94,0.08)',
                  borderColor: 'rgba(34,197,94,0.25)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(34,197,94,0.15)' }}
                >
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">Received!</h3>
                <p className="text-sm" style={{ color: 'var(--brand-slate-lt)' }}>
                  I&apos;ll be in touch within 24 hours. Keep an eye on your inbox.
                </p>
                <button
                  className="mt-2 text-xs font-semibold tracking-wide underline underline-offset-4"
                  style={{ color: 'var(--brand-green-light)' }}
                  onClick={() => setStatus('idle')}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: 'var(--brand-slate-lt)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={form.full_name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      style={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: 'var(--brand-slate-lt)' }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="you@email.com"
                      required
                      autoComplete="email"
                      style={inputBase}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--brand-slate-lt)' }}
                  >
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    style={{ ...inputBase, cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ background: 'var(--brand-navy-mid)' }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target Role */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--brand-slate-lt)' }}
                  >
                    Target Role / Industry
                  </label>
                  <input
                    type="text"
                    name="target_role"
                    value={form.target_role}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="e.g. Senior HR Manager · Financial Services"
                    style={inputBase}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--brand-slate-lt)' }}
                  >
                    Tell Me About Your Situation *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Brief overview — current role, where you want to go, and what's holding you back..."
                    required
                    rows={4}
                    style={{ ...inputBase, resize: 'vertical', minHeight: 110 }}
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="py-3.5 rounded-sm text-sm font-semibold text-white tracking-wide transition-all duration-200 disabled:opacity-60 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--brand-green)', marginTop: 4 }}
                  onMouseEnter={e => { if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--brand-green-light)' }}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--brand-green)')}
                >
                  {status === 'loading' ? 'Sending...' : 'Book My Free Consultation →'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
