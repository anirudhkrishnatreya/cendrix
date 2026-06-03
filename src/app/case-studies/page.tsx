import { CTABanner } from '@/components/ui'
import { Building2, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Case Studies — Cendrix Group',
  description: 'Real operational outcomes from healthcare practices and law firms working with Cendrix Group.',
}

const caseStudies = [
  {
    type: 'Healthcare',
    org: 'Multi-Location Dental Practice Group',
    location: 'Southeast United States',
    size: '8 locations, 24 dentists',
    challenge: 'The practice was experiencing 2–3 day insurance verification delays per patient. This created significant revenue leakage from uncollected copays, scheduling bottlenecks, and patient frustration. Their in-house billing team of 4 was overwhelmed handling verification for 300+ patients weekly.',
    solution: 'Cendrix deployed 3 dedicated insurance verification specialists within 8 business days. Each specialist was onboarded to the practice\'s Dentrix system, trained on their top 15 payers, and integrated into existing scheduling workflows with same-day eligibility verification protocols.',
    results: [
      { metric: '87%', label: 'Faster Verification', sub: 'From 2.5 days to under 4 hours' },
      { metric: '$420K', label: 'Revenue Recovered', sub: 'In Year 1 from denial reduction' },
      { metric: '99.1%', label: 'Eligibility Accuracy', sub: 'vs 91% pre-Cendrix' },
      { metric: '60%', label: 'Cost Reduction', sub: 'vs equivalent in-house FTEs' },
    ],
    quote: 'We went from a reactive billing operation to a proactive one. The verification team Cendrix built for us has become an essential part of how we operate.',
    role: 'COO, Dental Group',
  },
  {
    type: 'Legal',
    org: 'Regional Immigration Law Firm',
    location: 'New York & New Jersey',
    size: '12 attorneys, 3 paralegals',
    challenge: 'Attorneys were spending an average of 40% of their time on document management, client intake, and administrative tasks — not legal strategy. This created capacity constraints, limiting the firm to 80 active matters when demand supported 200+.',
    solution: 'A managed team of 5 Cendrix LPO professionals took over intake processing, document organization, application preparation support, and client communication coordination. The team was fully trained on the firm\'s matter management system and standard workflows within 10 days.',
    results: [
      { metric: '40%', label: 'More Billable Hours', sub: 'Attorneys reclaimed for legal work' },
      { metric: '3×', label: 'Matter Throughput', sub: 'From 80 to 240+ active matters' },
      { metric: '52%', label: 'Admin Cost Saved', sub: 'vs building an in-house admin team' },
      { metric: '4.9/5', label: 'Client Satisfaction', sub: 'Post-implementation survey' },
    ],
    quote: 'The LPO team Cendrix assembled for us understands immigration law workflow. They\'re not just data processors — they understand the lifecycle of a matter.',
    role: 'Managing Partner',
  },
  {
    type: 'Healthcare',
    org: 'Telehealth Mental Health Platform',
    location: 'National (US-based)',
    size: '60+ licensed therapists',
    challenge: 'Rapid growth from 200 to 800 monthly sessions outpaced their administrative infrastructure. Patient intake took 45–60 minutes of staff time per new patient. Insurance coverage issues were identified only at billing, causing significant write-offs.',
    solution: 'Cendrix built a dedicated intake and verification team of 4 specialists working Eastern and Pacific time zones. Specialists were trained on the platform\'s proprietary EHR, key behavioral health payers, and telehealth-specific verification requirements.',
    results: [
      { metric: '12min', label: 'Avg. Intake Time', sub: 'Down from 52 minutes' },
      { metric: '94%', label: 'Coverage Verified', sub: 'Before first session' },
      { metric: '$180K', label: 'Write-offs Prevented', sub: 'In first 6 months' },
      { metric: '4×', label: 'Growth Supported', sub: 'Without adding admin headcount' },
    ],
    quote: 'Cendrix allowed us to grow our provider network 4x without hiring a single additional admin employee. That\'s the kind of leverage we needed.',
    role: 'Head of Operations',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#081C3A' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(rgba(0,182,122,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Outcomes That{' '}
            <span style={{ color: '#00B67A' }}>Speak for Themselves</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results from healthcare organizations and law firms that partnered with Cendrix Group.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {caseStudies.map((study, i) => (
            <div key={study.org} className="bg-white rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(8,28,58,0.08)' }}>
              {/* Header */}
              <div className="px-8 py-5 flex flex-wrap items-center gap-4 justify-between" style={{ background: '#F8FAFC', borderBottom: '1px solid rgba(8,28,58,0.06)' }}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: study.type === 'Healthcare' ? 'rgba(0,182,122,0.1)' : 'rgba(59,130,246,0.1)', color: study.type === 'Healthcare' ? '#00B67A' : '#3B82F6' }}>
                      {study.type}
                    </span>
                    <span className="text-xs text-slate-400">{study.location}</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>{study.org}</h3>
                  <div className="text-xs text-slate-400 mt-0.5">{study.size}</div>
                </div>
                <Building2 className="w-6 h-6 text-slate-300" />
              </div>

              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">The Challenge</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#00B67A' }}>The Solution</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 rounded-2xl" style={{ background: '#081C3A' }}>
                  {study.results.map(({ metric, label, sub }) => (
                    <div key={label} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#00B67A' }}>{metric}</div>
                      <div className="text-xs font-semibold text-white mb-0.5">{label}</div>
                      <div className="text-xs text-slate-500">{sub}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 pl-5" style={{ borderColor: '#00B67A' }}>
                  <p className="text-slate-700 italic leading-relaxed mb-2">{study.quote}</p>
                  <cite className="text-xs font-semibold text-slate-400 not-italic">— {study.role}</cite>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Your Practice Could Be Next"
        subtitle="Join healthcare and legal organizations achieving measurable operational outcomes with Cendrix."
      />
    </>
  )
}
