import Link from 'next/link'
import { CheckCircle, ArrowRight, Scale, FileText, Search, Mic, BookOpen, FolderOpen } from 'lucide-react'
import { CTABanner } from '@/components/ui'

export const metadata = {
  title: 'Legal Process Outsourcing (LPO) Solutions — Cendrix Group',
  description: 'Trained LPO professionals for law firms and corporate legal teams. Document review, discovery support, contract management, and more.',
}

const services = [
  {
    icon: FileText,
    title: 'Contract Management',
    desc: 'Drafting support, redlining, version control, clause extraction, and obligation tracking across your full contract lifecycle.',
    features: ['NDA & MSA support', 'Version control workflows', 'Obligation calendaring'],
  },
  {
    icon: Search,
    title: 'Discovery Support',
    desc: 'Document collection, custodian interviews, ESI processing coordination, and pre-production organization.',
    features: ['ESI processing coordination', 'Custodian interview prep', 'Document organization'],
  },
  {
    icon: BookOpen,
    title: 'Document Review',
    desc: 'First-pass review, relevance determinations, privilege logging, and quality control for litigation and regulatory matters.',
    features: ['Relevance & privilege review', 'Privilege log preparation', 'QC and accuracy checks'],
  },
  {
    icon: Mic,
    title: 'Legal Transcription',
    desc: 'Accurate transcription of depositions, hearings, client calls, and oral arguments with citation-ready formatting.',
    features: ['Deposition transcription', 'Hearing notes', 'Verbatim or summary format'],
  },
  {
    icon: Scale,
    title: 'Litigation Support',
    desc: 'Trial preparation, exhibit management, deadline tracking, and court filing support for active litigation matters.',
    features: ['Trial exhibit prep', 'Court deadline calendaring', 'Filing coordination'],
  },
  {
    icon: FolderOpen,
    title: 'Case Documentation',
    desc: 'Matter file organization, docketing, case chronology creation, and intake documentation management.',
    features: ['Matter file management', 'Docketing support', 'Case chronology creation'],
  },
]

const workflow = [
  { step: '01', label: 'Matter Intake', desc: 'Client data, documents received' },
  { step: '02', label: 'Review', desc: 'First-pass analysis & tagging' },
  { step: '03', label: 'Categorization', desc: 'Relevance, privilege, priority' },
  { step: '04', label: 'Processing', desc: 'Drafting, transcription, prep' },
  { step: '05', label: 'Delivery', desc: 'Reviewed, organized, attorney-ready' },
]

const faqs = [
  {
    q: 'What confidentiality protections are in place for client data?',
    a: 'All LPO professionals operate under strict NDAs and access only the data necessary for their assigned work. All communications are encrypted and access is logged. We can accommodate firm-specific confidentiality protocols.',
  },
  {
    q: 'Are your professionals familiar with US and UK legal practice?',
    a: 'Yes. Our LPO team is trained across US federal and state practice standards, as well as UK Solicitors and Barristers workflows. We stay current with jurisdictional practice requirements.',
  },
  {
    q: 'What document review platforms do your professionals use?',
    a: 'Our team is trained on Relativity, Concordance, Nuix, iManage, NetDocuments, and other leading platforms. We adapt to your existing technology stack.',
  },
  {
    q: 'How do you ensure accuracy in document review?',
    a: 'We implement a multi-tier QC process — first-pass review, secondary QC, and attorney spot-checks. Accuracy rates are reported weekly with correction workflows for any discrepancies.',
  },
  {
    q: 'Can you scale up quickly for large document review projects?',
    a: 'Yes. Our managed team model allows rapid scaling from 2 to 20+ reviewers within 48–72 hours for large-scale review projects or litigation surges.',
  },
]

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#F8FAFC' }}>
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: 'rgba(8,28,58,0.06)', color: '#081C3A', border: '1px solid rgba(8,28,58,0.1)' }}>
            <Scale className="w-3 h-3" />
            Legal Process Outsourcing
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            Legal Process Outsourcing{' '}
            <span style={{ color: '#00B67A' }}>Solutions</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed">
            Trained LPO professionals for law firms and corporate legal teams. Free your attorneys to focus on client work while we handle the operational infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:opacity-90" style={{ background: '#081C3A' }}>
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/security" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl transition-all border-2" style={{ color: '#081C3A', borderColor: 'rgba(8,28,58,0.15)' }}>
              View Security Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Legal Services
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Comprehensive LPO services designed to integrate with existing firm workflows without disruption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} className="rounded-3xl p-7 card-hover" style={{ background: '#F8FAFC', border: '1px solid rgba(8,28,58,0.08)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: '#081C3A' }}>
                  <Icon className="w-5 h-5 text-white" />
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
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Matter Lifecycle Workflow
            </h2>
            <p className="text-slate-500">How Cendrix professionals handle matters from intake to delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {workflow.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm mb-4 relative z-10" style={{ background: '#081C3A', color: '#00B67A', fontFamily: 'Syne, sans-serif', fontSize: 16 }}>
                  {step.step}
                </div>
                {i < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-[calc(100%+1rem)] h-0.5 bg-slate-200 z-0" />
                )}
                <div className="font-semibold text-sm" style={{ color: '#081C3A' }}>{step.label}</div>
                <div className="text-xs text-slate-400 mt-1">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Legal FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="rounded-2xl p-6" style={{ border: '1px solid rgba(8,28,58,0.08)', background: '#F8FAFC' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#081C3A' }}>{q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Free Your Attorneys. Scale Your Practice."
        subtitle="Get a trained LPO team integrated with your firm's workflows within 2 weeks."
      />
    </>
  )
}
