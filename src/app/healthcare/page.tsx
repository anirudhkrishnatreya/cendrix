import Link from 'next/link'
import { CheckCircle, ArrowRight, Activity, Clock, Shield, FileText, Phone, Database } from 'lucide-react'
import { CTABanner } from '@/components/ui'

export const metadata = {
  title: 'Healthcare Workforce Solutions — Cendrix Group',
  description: 'HIPAA-compliant healthcare operations specialists for medical practices, dental clinics, telehealth providers, and health systems.',
}

const services = [
  {
    icon: Phone,
    title: 'Patient Intake',
    desc: 'Structured intake workflows covering demographic collection, medical history, consent forms, and pre-visit preparation — all within your EHR.',
    features: ['New patient onboarding', 'Form processing & digitization', 'Pre-visit preparation packs'],
  },
  {
    icon: Clock,
    title: 'Appointment Scheduling',
    desc: 'Full-cycle scheduling management including new appointments, follow-ups, cancellation handling, and automated patient reminders.',
    features: ['Multi-provider calendar coordination', 'Patient reminder workflows', 'No-show reduction protocols'],
  },
  {
    icon: Shield,
    title: 'Insurance Verification',
    desc: 'Real-time eligibility checks, prior authorization requests, and benefits verification across all major payers.',
    features: ['Eligibility verification same-day', 'Prior auth tracking', 'Benefits explanation to patients'],
  },
  {
    icon: FileText,
    title: 'Medical Billing Support',
    desc: 'End-to-end billing support including claims submission, denial management, AR follow-up, and payment posting.',
    features: ['Clean claims submission', 'Denial management workflows', 'AR aging reports'],
  },
  {
    icon: Database,
    title: 'EHR Management',
    desc: 'Accurate and timely chart updates, data entry, documentation support, and records management in your existing platforms.',
    features: ['Epic, eCW, Athena, Kareo trained', 'Chart completion support', 'Records request processing'],
  },
  {
    icon: Activity,
    title: 'Telehealth Support',
    desc: 'Specialized support for virtual care workflows including platform coordination, tech support, and post-visit follow-up.',
    features: ['Virtual visit coordination', 'Platform access management', 'Post-visit documentation'],
  },
]

const workflow = [
  { step: '01', label: 'Patient Contact', desc: 'Scheduling, intake, insurance check' },
  { step: '02', label: 'Verification', desc: 'Eligibility, auth, benefits confirmed' },
  { step: '03', label: 'Visit Support', desc: 'Documentation, EHR updates' },
  { step: '04', label: 'Billing', desc: 'Clean claims, follow-up, posting' },
  { step: '05', label: 'Records', desc: 'Chart completion, records management' },
]

const faqs = [
  {
    q: 'Are your specialists trained on HIPAA requirements?',
    a: 'Yes. Every Cendrix healthcare specialist completes mandatory HIPAA certification before onboarding to any client. We maintain current training records and conduct annual refresher programs.',
  },
  {
    q: 'Which EHR systems do your specialists work in?',
    a: 'Our specialists are trained across major platforms including Epic, eClinicalWorks, Athenahealth, Kareo, DrChrono, Practice Fusion, and others. We can also train on proprietary systems during onboarding.',
  },
  {
    q: 'How quickly can we onboard a specialist?',
    a: 'Typical onboarding is 5–10 business days. This includes HIPAA documentation, system access provisioning, workflow training, and a supervised go-live period.',
  },
  {
    q: 'Do you sign a Business Associate Agreement (BAA)?',
    a: 'Yes. A signed BAA is a standard part of every engagement before any PHI access is granted. We also review client-specific BAA addendums.',
  },
  {
    q: 'What time zones do your specialists cover?',
    a: 'We support US Eastern, Central, Mountain, and Pacific time zones, as well as UK GMT/BST. Extended coverage and overnight support is available.',
  },
]

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#081C3A' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(rgba(0,182,122,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: 'rgba(0,182,122,0.15)', color: '#00B67A', border: '1px solid rgba(0,182,122,0.2)' }}>
            <Activity className="w-3 h-3" />
            Healthcare Workforce Solutions
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Healthcare Operations,{' '}
            <span style={{ color: '#00B67A' }}>Professionally Managed</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Dedicated healthcare operations specialists trained in HIPAA compliance, EHR systems, and clinical workflows — integrated seamlessly with your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:opacity-90" style={{ background: '#00B67A' }}>
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/security" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl transition-all" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}>
              View Security Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Healthcare Services
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              End-to-end operational support across every clinical and administrative touchpoint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} className="bg-white rounded-3xl p-7 card-hover" style={{ border: '1px solid rgba(8,28,58,0.08)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,182,122,0.1)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#00B67A' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: '#00B67A' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Patient Care Workflow
            </h2>
            <p className="text-slate-500">How our specialists integrate with every step of the patient journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {workflow.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-start">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm mb-4 relative z-10" style={{ background: '#081C3A', color: '#00B67A', fontFamily: 'Syne, sans-serif' }}>
                  {step.step}
                </div>
                {i < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-6 w-[calc(100%+1rem)] h-0.5 bg-slate-200 z-0" />
                )}
                <div className="font-semibold text-sm" style={{ color: '#081C3A' }}>{step.label}</div>
                <div className="text-xs text-slate-400 mt-1">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Healthcare FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6" style={{ border: '1px solid rgba(8,28,58,0.08)' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#081C3A' }}>{q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Optimize Your Healthcare Operations?"
        subtitle="Get a dedicated specialist integrated with your practice within 10 business days."
      />
    </>
  )
}
