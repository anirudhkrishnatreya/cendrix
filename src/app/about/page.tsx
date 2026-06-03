import { CTABanner } from '@/components/ui'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

export const metadata = {
  title: 'About Us — Cendrix Group',
  description: 'Learn about Cendrix Group\'s mission, values, training approach, and commitment to compliance.',
}

const values = [
  { icon: Target, title: 'Operational Excellence', desc: 'We measure success by your operational outcomes, not activity metrics. Every specialist is accountable to your KPIs.' },
  { icon: CheckCircle, title: 'Compliance First', desc: 'Compliance is not an afterthought — it\'s embedded into every workflow, every onboarding, and every performance review.' },
  { icon: Eye, title: 'Transparency', desc: 'You have full visibility into specialist activity, performance reports, and operational metrics at all times.' },
  { icon: Heart, title: 'Partnership', desc: 'We don\'t view engagements as transactions. We build extended teams that function as part of your organization.' },
]

const timeline = [
  { year: 'Day 1', title: 'Engagement Kickoff', desc: 'Contracts, BAAs, and access provisioning initiated.' },
  { year: 'Days 2–3', title: 'Specialist Selection', desc: 'Matching specialists to your workflow, systems, and industry.' },
  { year: 'Days 4–7', title: 'System Onboarding', desc: 'EHR/LMS access, VPN setup, MFA enrollment, system training.' },
  { year: 'Days 8–9', title: 'Supervised Go-Live', desc: 'Specialist begins work with close oversight and QC review.' },
  { year: 'Day 10', title: 'Full Operations', desc: 'Independent operations begin with weekly performance reporting.' },
  { year: 'Ongoing', title: 'Continuous Optimization', desc: 'Monthly reviews, performance improvement, and scaling support.' },
]

const trainingModules = [
  'HIPAA Privacy & Security Rule Certification',
  'GDPR Awareness & Compliance Training',
  'Healthcare Revenue Cycle Fundamentals',
  'Legal Document Confidentiality Standards',
  'EHR Platform Proficiency (Epic, eCW, Athena)',
  'Legal Practice Management Systems',
  'Secure Communication Protocols',
  'Quality Assurance & Accuracy Standards',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: '#F8FAFC' }}>
        <div className="absolute inset-0 dot-pattern opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="compliance-badge mb-6" style={{ display: 'inline-flex' }}>
              About Cendrix Group
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Built for Industries Where{' '}
              <span style={{ color: '#00B67A' }}>Errors Have Real Consequences</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Cendrix Group was founded on a single conviction: healthcare and legal organizations deserve workforce support that meets the same standards they hold themselves to.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-10" style={{ background: '#081C3A' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#00B67A' }}>Our Mission</div>
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Enabling Professionals to Practice, Not Administer
              </h2>
              <p className="text-slate-400 leading-relaxed">
                We exist to free healthcare providers and legal professionals from the operational burden that distracts them from their core purpose — patient care and client service. We build the operational infrastructure so they don't have to.
              </p>
            </div>
            <div className="rounded-3xl p-10" style={{ background: '#F8FAFC', border: '1px solid rgba(8,28,58,0.08)' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#081C3A' }}>Our Vision</div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
                The Global Standard in Compliant Workforce Solutions
              </h2>
              <p className="text-slate-500 leading-relaxed">
                To be the most trusted extended workforce partner for healthcare and legal organizations in the US and UK — known for compliance, operational excellence, and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-7" style={{ border: '1px solid rgba(8,28,58,0.08)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,182,122,0.1)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#00B67A' }} />
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="compliance-badge mb-5" style={{ display: 'inline-flex' }}>Training Program</div>
              <h2 className="text-4xl font-bold mb-5" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
                Every Specialist is Rigorously Trained
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our specialists complete a multi-week training program covering compliance requirements, clinical and legal workflow fundamentals, and platform-specific proficiency before they begin any client engagement.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Annual recertification ensures every specialist stays current with evolving regulations, platform updates, and industry best practices.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trainingModules.map((module) => (
                <div key={module} className="flex items-start gap-2.5 p-4 rounded-2xl" style={{ background: '#F8FAFC', border: '1px solid rgba(8,28,58,0.06)' }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#00B67A' }} />
                  <span className="text-sm text-slate-700 font-medium leading-tight">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Timeline */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              From Consultation to Operations in 10 Days
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our structured onboarding process gets your specialist productive — and compliant — quickly.
            </p>
          </div>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-5 items-start">
                <div className="w-20 text-right flex-shrink-0">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00B67A' }}>{item.year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full flex-shrink-0 mt-0.5" style={{ background: '#00B67A' }} />
                  {i < timeline.length - 1 && <div className="w-0.5 h-8 bg-slate-200 mt-1" />}
                </div>
                <div className="pb-4">
                  <div className="font-semibold mb-0.5" style={{ color: '#081C3A' }}>{item.title}</div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Extended Team?"
        subtitle="Learn how Cendrix Group can integrate with your organization in 10 business days."
      />
    </>
  )
}
