'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, Activity } from 'lucide-react'

// ---- Trust Metrics ----
function CountUp({ end, duration = 2000, prefix = '', suffix = '' }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, end, duration])

  return (
    <span ref={ref}>
      {prefix}{started ? count.toLocaleString('en-US') : '0'}{suffix}
    </span>
  )
}

export function TrustMetrics() {
  const metrics = [
    { value: 500, suffix: ',000+', label: 'Records Processed', icon: Activity, prefix: '' },
    { value: 98.7, suffix: '%', label: 'Accuracy Rate', icon: CheckCircle, prefix: '' },
    { value: 24, suffix: '/7', label: 'Operational Coverage', icon: Clock, prefix: '' },
    { value: 60, suffix: '%', label: 'Cost Savings', icon: DollarSign, prefix: 'Up To ' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden" style={{ background: 'rgba(8,28,58,0.06)' }}>
          {metrics.map(({ value, suffix, label, prefix }) => (
            <div key={label} className="bg-white p-8 lg:p-10 text-center">
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}
              >
                {prefix && <span className="text-2xl lg:text-3xl font-semibold text-slate-400">{prefix}</span>}
                <CountUp end={value} suffix={suffix} />
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- Who We Serve ----
export function WhoWeServe() {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="compliance-badge mb-4 mx-auto" style={{ display: 'inline-flex' }}>
            Specialized Expertise
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}
          >
            Who We Serve
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Purpose-built workforce solutions for the two most compliance-critical industries in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Healthcare */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden group hover:shadow-premium-lg transition-all duration-300"
            style={{ background: '#081C3A', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background: '#00B67A', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(0,182,122,0.15)' }}>
                <Activity className="w-6 h-6" style={{ color: '#00B67A' }} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#00B67A' }}>Healthcare</div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Healthcare Organizations
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                From solo practices to multi-location health systems, we provide trained specialists who understand clinical workflows, payer requirements, and HIPAA obligations.
              </p>
              <ul className="space-y-2.5 mb-8">
                {['Medical Practices', 'Dental Clinics', 'Telehealth Providers', 'Mental Health Clinics', 'Specialty Care Providers'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#00B67A' }} />
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/healthcare"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#00B67A' }}
              >
                Explore Healthcare Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden group hover:shadow-premium-lg transition-all duration-300"
            style={{ background: '#FFFFFF', border: '1px solid rgba(8,28,58,0.08)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5" style={{ background: '#081C3A', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(8,28,58,0.06)' }}>
                <TrendingUp className="w-6 h-6" style={{ color: '#081C3A' }} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#081C3A' }}>Legal Process Outsourcing</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
                Legal Organizations
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                LPO professionals trained in legal document management, discovery workflows, and confidentiality requirements — seamlessly integrated with your firm.
              </p>
              <ul className="space-y-2.5 mb-8">
                {['Corporate Law Firms', 'Immigration Practices', 'Family Law Firms', 'Litigation Teams', 'Real Estate Law Firms'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#00B67A' }} />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/legal"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#081C3A' }}
              >
                Explore Legal Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- Operational Challenges ----
export function OperationalChallenges() {
  const challenges = {
    healthcare: {
      before: ['Administrative overload', 'Scheduling delays & no-shows', 'Insurance verification bottlenecks'],
      after: ['Streamlined workflows', 'Optimized scheduling systems', 'Verified coverage in hours'],
    },
    legal: {
      before: ['Document backlog & missed deadlines', 'Attorneys doing admin work', 'Slow review processes'],
      after: ['Zero backlog operations', 'Attorneys focused on clients', 'Accelerated review cycles'],
    },
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="compliance-badge mb-4 mx-auto" style={{ display: 'inline-flex' }}>
            Transformation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            The Before & After
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See how organizations like yours transformed operations with dedicated Cendrix specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['healthcare', 'legal'] as const).map((type) => (
            <div
              key={type}
              className="rounded-3xl overflow-hidden flex flex-col h-full"
              style={{ border: '1px solid rgba(8,28,58,0.08)' }}
            >
              <div
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest flex-shrink-0"
                style={{ background: '#081C3A', color: '#00B67A' }}
              >
                {type === 'healthcare' ? 'Healthcare' : 'Legal'}
              </div>
              <div className="grid grid-cols-2 divide-x flex-1" style={{ borderColor: 'rgba(8,28,58,0.08)' }}>
                <div className="p-6 bg-red-50/50 h-full">
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-4">Before Cendrix</div>
                  <ul className="space-y-3">
                    {challenges[type].before.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-500 text-xs">✕</span>
                        </div>
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 h-full" style={{ background: 'rgba(0,182,122,0.04)' }}>
                  <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#00B67A' }}>After Cendrix</div>
                  <ul className="space-y-3">
                    {challenges[type].after.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#00B67A' }} />
                        <span className="text-sm text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- Core Services ----
export function CoreServices() {
  const healthcareServices = [
    { title: 'Virtual Medical Assistant', desc: 'Dedicated remote support for patient communications and clinical workflows.' },
    { title: 'Medical Transcribing', desc: 'Accurate and compliant conversion of voice-recorded medical reports into text.' },
    { title: 'Patient Scheduling', desc: 'Appointment coordination, reminders, and calendar management across all providers.' },
    { title: 'Patient Intake', desc: 'Structured data collection, form processing, and pre-visit preparation.' },
    { title: 'Insurance Verification', desc: 'Real-time eligibility checks, prior authorizations, and coverage confirmation.' },
    { title: 'Medical Billing Support', desc: 'Claims submission, denial management, and AR follow-up workflows.' },
    { title: 'EHR Management', desc: 'Chart updates, data entry, and records management in your existing systems.' },
    { title: 'Administrative Support', desc: 'Referrals, correspondence, and back-office coordination.' },
  ]
  const legalServices = [
    { title: 'Virtual Legal Assistant', desc: 'Remote administrative support for client intake, scheduling, and specialized legal tasks.' },
    { title: 'Contract Management', desc: 'Drafting support, review, version control, and obligation tracking.' },
    { title: 'Discovery Support', desc: 'Document collection, organization, and e-discovery preparation.' },
    { title: 'Document Review', desc: 'First-pass review, categorization, and privilege logging.' },
    { title: 'Legal Transcription', desc: 'Accurate transcription of depositions, hearings, and client calls.' },
    { title: 'Litigation Support', desc: 'Trial preparation, exhibit management, and deadline tracking.' },
    { title: 'Case Documentation', desc: 'File organization, docketing, and case chronology maintenance.' },
  ]

  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="compliance-badge mb-4 mx-auto" style={{ display: 'inline-flex' }}>
            Core Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            What We Do
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Specialized services built around your workflows — not generic outsourcing templates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Healthcare */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-0.5 flex-1" style={{ background: '#00B67A' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#00B67A' }}>Healthcare Services</span>
              <div className="h-0.5 flex-1" style={{ background: '#00B67A' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {healthcareServices.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-5 card-hover"
                  style={{ background: '#FFFFFF', border: '1px solid rgba(8,28,58,0.08)' }}
                >
                  <h4 className="font-semibold mb-1.5" style={{ color: '#081C3A' }}>{s.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-0.5 flex-1" style={{ background: '#081C3A', opacity: 0.2 }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#081C3A' }}>Legal Services</span>
              <div className="h-0.5 flex-1" style={{ background: '#081C3A', opacity: 0.2 }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {legalServices.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-5 card-hover"
                  style={{ background: '#FFFFFF', border: '1px solid rgba(8,28,58,0.08)' }}
                >
                  <h4 className="font-semibold mb-1.5" style={{ color: '#081C3A' }}>{s.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
