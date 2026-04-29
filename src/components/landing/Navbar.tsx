import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
// import logo from '@/assets/hr-vanguard-logo.png'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  // { href: '#insights', label: 'Insights' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 90) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Early Bird Ribbon */}
      <div className="relative z-50 bg-brand-green text-white text-center py-2 px-4 text-xs font-semibold tracking-widest uppercase">
        🎯 Early Bird — ATS-Ready CV with Gap Analysis&nbsp;
        <strong className="bg-black/15 px-2 py-0.5 rounded-full">Only $25</strong>
        &nbsp;· Limited Spots
      </div>

      {/* Navbar */}
      <nav
        className={cn(
          'sticky top-0 z-40 transition-all duration-300',
          'bg-navy border-b border-white/5',
          scrolled && 'shadow-lg shadow-black/30'
        )}
        style={{ backgroundColor: 'var(--brand-navy)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Logo */}
{/* <a href="#" className="flex-shrink-0" aria-label="HR Vanguard home">
        <img src={logo} alt="HR Vanguard" className="h-28 w-auto object-contain" />
</a> */}
            <a href="#" className="font-display text-2xl text-white tracking-wide font-semibold flex-shrink-0">
  HR <span className="text-brand-green">Vanguard</span>
</a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    'text-xs font-medium tracking-widest uppercase transition-colors duration-200',
                    activeSection === href.slice(1)
                      ? 'text-brand-green-light'
                      : 'text-slate-light hover:text-white'
                  )}
                  style={{
                    color: activeSection === href.slice(1)
                      ? 'var(--brand-green-light)'
                      : undefined,
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/923112169770"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-wide text-brand-green hover:text-brand-green-light transition-colors"
              style={{ color: 'var(--brand-green)' }}
            >
              WhatsApp
            </a>
            <Button
              asChild
              size="sm"
              className="text-xs font-semibold tracking-wide rounded-sm px-4"
              style={{ backgroundColor: 'var(--brand-green)', color: '#fff' }}
            >
              <a href="#contact">Book Now</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t border-white/5 py-4 px-6 flex flex-col gap-4"
            style={{ backgroundColor: 'var(--brand-navy-mid)' }}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-light hover:text-white tracking-wider uppercase transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center py-2.5 rounded-sm text-sm font-semibold text-white"
              style={{ backgroundColor: 'var(--brand-green)' }}
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
