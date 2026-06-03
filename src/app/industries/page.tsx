import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { CTABanner } from '@/components/ui'

export const metadata = {
  title: 'Industries We Serve — Cendrix Group',
  description: 'Healthcare and legal workforce solutions for medical practices, dental clinics, telehealth, law firms, and more.',
}

const industries = [
  {
    category: 'Healthcare',
    color: '#00B67A',
    items: [
      {
        title: 'Medical Practices',
        desc: 'Primary care, internal medicine, and specialty practices managing high patient volumes with complex insurance and scheduling demands.',
        services: ['Patient Scheduling', 'Insurance Verification', 'Medical Billing', 'EHR Management'],
      },
      {
        title: 'Dental Clinics',
        desc: 'DSO groups and independent dental practices needing efficient patient flow, insurance coordination, and front-office support.',
        services: ['Patient Intake', 'Insurance Pre-authorization', 'Billing Support', 'Appointment Management'],
      },
      {
        title: 'Telehealth Providers',
        desc: 'Virtual-first healthcare organizations with distributed patient populations and technology-driven care delivery.',
        services: ['Virtual Visit Coordination', 'Platform Support', 'Patient Onboarding', 'Documentation'],
      },
      {
        title: 'Mental Health Clinics',
        desc: 'Behavioral health practices and therapy groups that need sensitive, compliant patient management support.',
        services: ['Confidential Intake', 'Scheduling', 'Insurance Verification', 'HIPAA-Compliant Records'],
      },
      {
        title: 'Specialty Care Providers',
        desc: 'Orthopedics, cardiology, oncology, and other specialty practices with complex prior authorization and referral workflows.',
        services: ['Prior Auth Management', 'Referral Coordination', 'Specialist Scheduling', 'Clinical Records'],
      },
    ],
  },
  {
    category: 'Legal',
    color: '#3B82F6',
    items: [
      {
        title: 'Corporate Law Firms',
        desc: 'Full-service firms handling transactional, litigation, and advisory matters requiring scalable document and contract support.',
        services: ['Contract Management', 'Document Review', 'Litigation Support', 'Case Documentation'],
      },
      {
        title: 'Immigration Practices',
        desc: 'High-volume immigration firms managing complex applications, country-specific requirements, and multilingual documentation.',
        services: ['Application Processing', 'Document Organization', 'Filing Support', 'Client Intake'],
      },
      {
        title: 'Family Law Firms',
        desc: 'Domestic relations practices handling sensitive matters with high administrative and documentation requirements.',
        services: ['Case Documentation', 'Scheduling', 'Client Intake', 'Court Filing Prep'],
      },
      {
        title: 'Litigation Teams',
        desc: 'Litigation departments requiring rapid document review, discovery support, and trial preparation capabilities.',
        services: ['Discovery Support', 'Document Review', 'Trial Prep', 'Deposition Transcription'],
      },
      {
        title: 'Real Estate Law Firms',
        desc: 'Real estate practices managing high transaction volumes with intensive document and title review requirements.',
        services: ['Contract Review', 'Title Document Support', 'Transaction Coordination', 'Closing Prep'],
      },
    ],
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: '#F8FAFC' }}>
        <div className="absolute inset-0 dot-pattern opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            Industries We Serve
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Specialized workforce solutions for the healthcare and legal sectors — built around the specific operational, compliance, and workflow needs of each industry.
          </p>
        </div>
      </section>

      {industries.map(({ category, color, items }) => (
        <section key={category} className="section-padding bg-white border-t" style={{ borderColor: 'rgba(8,28,58,0.06)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-12 rounded-full" style={{ background: color }} />
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map(({ title, desc, services }) => (
                <div key={title} className="rounded-3xl p-7 card-hover" style={{ border: '1px solid rgba(8,28,58,0.08)', background: '#F8FAFC' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${color}10`, color }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        title="Don't See Your Exact Specialty?"
        subtitle="We work across all healthcare and legal verticals. Let's discuss your specific needs."
        primaryLabel="Book Consultation"
      />
    </>
  )
}
