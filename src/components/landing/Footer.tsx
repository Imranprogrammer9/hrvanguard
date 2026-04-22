const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
]

export function Footer() {
  return (
    <footer
      className="px-6 md:px-[6%] py-7 flex flex-wrap justify-between items-center gap-5 border-t"
      style={{
        backgroundColor: 'var(--brand-navy-deep)',
        borderColor: 'rgba(34,197,94,0.1)',
      }}
    >
      {/* Logo */}
      <a href="#" className="font-display text-xl text-white font-semibold tracking-wide">
        HR <span style={{ color: 'var(--brand-green-light)' }}>Vanguard</span>
      </a>

      {/* Links */}
      <ul className="flex flex-wrap gap-6 list-none">
        {footerLinks.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              className="text-xs tracking-wide transition-colors duration-200 hover:text-white"
              style={{ color: 'var(--brand-slate)' }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="text-xs" style={{ color: 'var(--brand-slate)' }}>
        © 2025 HR Vanguard · All rights reserved.
      </p>
    </footer>
  )
}
