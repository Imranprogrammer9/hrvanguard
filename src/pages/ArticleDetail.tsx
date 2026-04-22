import { ArrowLeft } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import { Reveal } from '@/components/landing/Reveal'

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
    content: `Most job seekers approach CV optimization with a fundamentally flawed strategy. They keyword-stuff their CVs with every relevant term from the job description, hoping that automated Applicant Tracking Systems (ATS) will flag them as a match. While this approach seems logical, it misses a critical insight: recruiters don't just look at what words appear on your CV—they look at how those words are positioned and contextualized within your experience narrative.

The real power of ATS-optimization isn't in density of keywords. It's in strategic alignment. Your CV needs to demonstrate that your experience narrative maps directly onto what recruiters are screening for at each stage of the hiring funnel.

Consider this: a recruiter screening CVs for a "Senior Product Manager" role isn't just looking for those exact words. They're looking for evidence that you've managed product roadmaps, worked cross-functionally with engineering and design, driven adoption metrics, and led feature launches. These concepts are expressed differently in different organizations.

The first step is to reverse-engineer what recruiters actually care about. Look at the job description, yes—but more importantly, look at the underlying business problems the role is meant to solve. What metric is this hire meant to move? What dysfunction are they meant to fix?

Once you understand the core business problem, audit your CV for evidence that you've solved similar problems before. But here's the key: don't just list what you did. Emphasize the business outcomes. Numbers matter—but only when they're connected to the problem you solved.

For example, instead of: "Managed a team of 5 engineers," try: "Led a team of 5 engineers that reduced deployment time from 2 hours to 15 minutes, enabling the company to release features 8x faster and respond to market changes in real-time."

The second issue most candidates face is structural. Your CV needs to make it obvious to both ATS and human readers what your core competencies are. This doesn't mean repeating the same adjectives. It means organizing your experience so that your strongest evidence for the role appears early and is positioned strategically.

Finally, remember that ATS systems have evolved. Modern systems are much better at understanding context and synonyms. Rather than obsessing over exact keyword matches, focus on creating a CV that tells a coherent story about why you're the right fit for the specific business problem the role is meant to solve. That coherence will translate to higher matches in ATS systems and a much stronger pitch to the human recruiters who actually read your CV.`,
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
    content: `Hiring bias is one of the most persistent problems in talent acquisition. Even well-intentioned recruiters and hiring managers consistently make decisions based on unconscious preferences—liking candidates who remind them of themselves, being swayed by a charismatic personality, or anchoring too heavily on the first impression.

The solution isn't willpower or diversity training alone. It's structural. Structured interviews—where all candidates answer the same questions in the same order, and responses are evaluated against consistent criteria—have been proven by decades of research to reduce bias and improve hiring accuracy.

Here's why structured interviews work:

First, they create a level playing field. When every candidate gets the same questions, it's harder to unconsciously favor some candidates over others. You're not comparing apples to oranges—you're comparing apples to apples.

Second, they force interviewers to focus on job-relevant criteria. A structured interview framework asks questions designed to uncover specific competencies needed for the role. This naturally limits the space for personal preferences to creep in.

Third, they create accountability. When evaluation criteria are defined in advance, and interviewers know they need to justify their ratings using those criteria, they're much more likely to base their decisions on evidence rather than gut feel.

The research on this is compelling. Studies across industries show that structured interviews have significantly higher predictive validity—meaning they're better at identifying candidates who will actually succeed in the role—compared to unstructured conversations. They also reduce demographic disparities in hiring outcomes.

Implementing structured interviews doesn't require eliminating rapport-building or missing out on getting to know a candidate. It means being intentional about when and how you collect information. Use the beginning of the interview to build rapport and context. Then move into your structured questions. Finally, leave time for the candidate's questions.

The key is consistency. Every candidate should go through the same interview process, answer the same core questions, and be evaluated against the same rubric. This consistency is what creates fairness and improves predictive accuracy.`,
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
    content: `Your employer brand is not your mission statement. It's not the polished description that appears on your careers page. Your employer brand is the lived experience of working at your company—and candidates can sense the difference between authenticity and marketing spin.

Top talent has options. The job market for skilled professionals is fundamentally candidate-driven. This means that passive candidates—the ones you actually want to hire—are being actively recruited by competitors. Your ability to attract them depends not on job posting wording, but on your reputation as a place to work.

Building an authentic employer brand starts with a difficult question: What is it actually like to work here? Not what you want it to be like. What is it actually like, from the perspective of your employees?

This question often reveals uncomfortable gaps. You might think your company is innovative and entrepreneurial, but your engineers might experience it as chaotic and under-resourced. You might believe you have a strong culture, but your employees might feel isolated and undervalued. These gaps are where your real brand-building work begins.

The second step is to amplify authentic voices. Rather than crafting a narrative in your marketing department, get your employees telling the story. Case studies, testimonials, internal blogs, social media—let employees talk about what they actually do, what problems they solve, and what they've learned. This is infinitely more credible than any marketing copy you could write.

Passive candidates are researching you. They're reading Glassdoor reviews, following your employees on LinkedIn, and talking to people who work there. If there's a significant gap between your brand narrative and your employees' reality, they'll figure it out. And they'll go somewhere else.

The third element is being specific about who you want. Every company wants "talented people." But what does success actually look like in your organization? What type of people thrive there? What type of people struggle? Being honest about this actually helps you attract better candidates. The people who are genuinely excited about your company's mission and way of working will have stronger tenure and performance.

Finally, remember that employer branding is a long-term play. You can't suddenly flip the switch on your reputation. If you have a reputation for high churn, that didn't happen overnight, and it won't change overnight either. But if you're intentional about creating a great place to work, and you're honest with candidates about what that actually means, your employer brand will strengthen over time. And that's what attracts the passive candidates who have plenty of other options.`,
  },
]

export function ArticleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const articleId = id ? parseInt(id) : null
  const article = articles.find(a => a.id === articleId)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>Article not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: 'var(--brand-navy)' }}
          >
            <ArrowLeft size={14} />
            Back to articles
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="relative flex items-end p-8 md:p-12 lg:p-16"
        style={{
          height: 280,
          background: article.gradient,
        }}
      >
        <div className="max-w-3xl w-full">
          <button
            onClick={() => navigate('/#insights')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 transition-colors hover:opacity-80"
            style={{ color: '#fff' }}
          >
            <ArrowLeft size={14} />
            Back
          </button>
          <Reveal>
            <span
              className="inline-block text-[0.68rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'var(--brand-green)', color: '#fff' }}
            >
              {article.category}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="font-display font-bold leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', lineHeight: 1.2 }}
            >
              {article.title}
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white px-6 md:px-[6%] py-16">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={100}>
            <div className="flex gap-6 mb-10 text-sm" style={{ color: 'var(--brand-slate)' }}>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="prose max-w-none"
              style={{ color: 'var(--brand-navy)' }}
            >
              {article.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-6 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Related Articles CTA */}
          <Reveal delay={140}>
            <div className="mt-16 pt-8 border-t" style={{ borderColor: 'rgba(11,31,58,0.1)' }}>
              <p className="text-sm mb-4" style={{ color: 'var(--brand-slate)' }}>
                Want to explore more HR insights?
              </p>
              <button
                onClick={() => navigate('/#insights')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 hover:gap-3"
                style={{
                  backgroundColor: 'var(--brand-navy)',
                  color: '#fff',
                }}
              >
                View all articles
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
