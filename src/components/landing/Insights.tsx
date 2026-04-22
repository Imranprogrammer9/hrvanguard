import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

const articles = [
  {
    id: 1,
    featured: true,
    category: 'SHRM Reviewed',
    date: 'April 10, 2025',
    readTime: '7 min read',
    title: "Why Your ATS-Optimised CV Still Isn't Getting Calls — And How to Fix It",
    excerpt: "Most job seekers keyword-stuff their CVs and wonder why they get no response. The real issue is strategic alignment between your experience narrative and what recruiters are actually screening for.",
    gradient: 'linear-gradient(150deg, #0C1824 0%, #1A2E47 100%)',
  },
  {
    id: 2,
    featured: false,
    category: 'Talent Acquisition',
    date: 'March 28, 2025',
    readTime: '5 min read',
    title: 'Structured Interviews: How Consistency Reduces Hiring Bias',
    excerpt: 'Standardised question frameworks lead to fairer, more predictive hiring outcomes according to SHRM research.',
    gradient: 'linear-gradient(150deg, #122033 0%, #243D5C 100%)',
  },
  {
    id: 3,
    featured: false,
    category: 'Employer Branding',
    date: 'March 15, 2025',
    readTime: '6 min read',
    title: 'Building an Employer Brand That Actually Attracts Top Talent',
    excerpt: 'Beyond job descriptions — how to communicate company culture authentically to passive and active candidates.',
    gradient: 'linear-gradient(150deg, #1A2E47 0%, #0C1824 100%)',
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-24 px-6 md:px-[6%] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end gap-4 mb-10 flex-wrap">
          <div>
            <Reveal>
              <p
                className="text-xs font-semibold tracking-[0.16em] uppercase mb-2"
                style={{ color: 'var(--brand-green)' }}
              >
                SHRM-Reviewed Articles
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-display font-bold"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--brand-navy)', lineHeight: 1.15 }}
              >
                HR Insights for Recruiters<br />
                <em className="not-italic" style={{ color: 'var(--brand-green)' }}>
                  &amp; Job Seekers
                </em>
              </h2>
            </Reveal>
          </div>
          <a
            href="#insights"
            className="flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors hover:opacity-80"
            style={{ color: 'var(--brand-navy)', whiteSpace: 'nowrap' }}
          >
            All Articles <ArrowRight size={14} />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Reveal key={article.id} delay={i * 80}>
              <div
                className="rounded-lg border overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: article.featured ? 'var(--brand-navy)' : 'var(--brand-cream)',
                  borderColor: 'rgba(11,31,58,0.08)',
                  boxShadow: undefined,
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 14px 40px rgba(11,31,58,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
              >
                {/* Thumb */}
                <div
                  className="relative flex items-end p-4"
                  style={{
                    height: 160,
                    background: article.gradient,
                  }}
                >
                  <span
                    className="text-[0.68rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--brand-green)', color: '#fff' }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div
                    className="text-xs mb-2"
                    style={{ color: article.featured ? 'var(--brand-slate-lt)' : 'var(--brand-slate)' }}
                  >
                    {article.date} &nbsp;·&nbsp; {article.readTime}
                  </div>
                  <h3
                    className="font-display font-semibold leading-snug mb-3"
                    style={{
                      fontSize: '1.1rem',
                      color: article.featured ? '#fff' : 'var(--brand-navy)',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: article.featured ? 'var(--brand-slate-lt)' : 'var(--brand-slate)' }}
                  >
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/article/${article.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-all duration-200 hover:gap-3"
                    style={{ color: article.featured ? 'var(--brand-green-light)' : 'var(--brand-navy)' }}
                  >
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
