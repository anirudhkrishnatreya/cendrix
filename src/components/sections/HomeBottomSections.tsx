'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Shield, Lock, Smartphone, Server, CheckCircle, ArrowRight, Users, Building2 } from 'lucide-react'

// ---- Security Section ----
export function SecuritySection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#081C3A' }}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0,182,122,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: 'rgba(0,182,122,0.15)', color: '#00B67A', border: '1px solid rgba(0,182,122,0.2)' }}>
            <Shield className="w-3 h-3" />
            Security & Compliance
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every specialist operates within a secure, audited environment built for healthcare and legal data handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              icon: Shield,
              label: 'HIPAA Compliance',
              color: '#00B67A',
              items: ['Business Associate Agreements', 'Role-Based Access Control', 'Audit Logging & Controls', 'Data Breach Response Plan'],
            },
            {
              icon: Lock,
              label: 'GDPR Alignment',
              color: '#60A5FA',
              items: ['Privacy Protection Protocols', 'Access Management Controls', 'Data Processing Agreements', 'Right to Erasure Workflows'],
            },
            {
              icon: Server,
              label: 'Operational Security',
              color: '#F59E0B',
              items: ['Multi-Factor Authentication', 'VPN-Only Access', 'Encrypted Devices', 'Secure Workstations'],
            },
          ].map(({ icon: Icon, label, color, items }) => (
            <div
              key={label}
              className="rounded-3xl p-7"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}18` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color }}>
                {label}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: '#00B67A' }}
          >
            View Full Security Framework
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ---- Staffing Models ----
export function StaffingModels() {
  const models = [
    {
      title: 'Dedicated Professional',
      badge: 'Most Popular',
      accentColor: '#00B67A',
      idealFor: 'Growing practices (1–10 providers)',
      desc: 'One trained specialist embedded in your workflows, fully focused on your organization.',
      capabilities: ['Full-time dedicated availability', 'Onboarded to your systems', 'Weekly performance reports', 'Managed onboarding included'],
      scalability: 'Scale up to a team as you grow',
    },
    {
      title: 'Managed Team',
      badge: 'Best Value',
      accentColor: '#3B82F6',
      idealFor: 'Mid-size organizations (10–50 providers)',
      desc: 'A coordinated team of 2–8 specialists with a dedicated team lead managing operations.',
      capabilities: ['Team of 2–8 specialists', 'Dedicated team lead', 'Cross-functional coverage', 'SLA-backed performance'],
      scalability: 'Modular team expansion on demand',
    },
    {
      title: 'Enterprise Operations',
      badge: 'Full Scale',
      accentColor: '#F59E0B',
      idealFor: 'Large health systems & law firms',
      desc: 'A fully built extended department integrated with your enterprise operations and IT infrastructure.',
      capabilities: ['Unlimited specialist scale', 'Custom workflow design', 'API & EHR integrations', 'Executive-level reporting'],
      scalability: 'Unlimited enterprise scale',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="compliance-badge mb-4 mx-auto" style={{ display: 'inline-flex' }}>
            Engagement Models
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            Choose Your Model
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Flexible engagement structures built to match your organizational size and operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-3xl p-7 flex flex-col card-hover"
              style={{ border: `1px solid rgba(8,28,58,0.08)`, background: '#FFFFFF' }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${model.accentColor}14`, color: model.accentColor }}
                >
                  {model.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
                {model.title}
              </h3>
              <div className="text-xs font-semibold text-slate-400 mb-3">Ideal for: {model.idealFor}</div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{model.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {model.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: model.accentColor }} />
                    <span className="text-sm text-slate-600">{cap}</span>
                  </li>
                ))}
              </ul>
              <div
                className="text-xs font-semibold p-3 rounded-xl text-center"
                style={{ background: `${model.accentColor}10`, color: model.accentColor }}
              >
                ↑ {model.scalability}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- Cost Calculator ----
export function CostCalculator() {
  const [teamSize, setTeamSize] = useState(5)
  const [avgCost, setAvgCost] = useState(65000)

  const currentAnnualCost = teamSize * avgCost
  const cendrixCost = teamSize * avgCost * 0.45
  const annualSavings = currentAnnualCost - cendrixCost
  const savingsPercent = Math.round((annualSavings / currentAnnualCost) * 100)

  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="compliance-badge mb-4 mx-auto" style={{ display: 'inline-flex' }}>
            ROI Calculator
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            Calculate Your Savings
          </h2>
          <p className="text-lg text-slate-500">
            See how much your organization could save with Cendrix specialists.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(8,28,58,0.08)', background: '#FFFFFF' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: 'rgba(8,28,58,0.08)' }}>
            {/* Inputs */}
            <div className="p-8">
              <h3 className="text-lg font-bold mb-6" style={{ color: '#081C3A', fontFamily: 'Syne, sans-serif' }}>
                Your Current Operations
              </h3>

              <div className="space-y-7">
                <div>
                  <label className="flex justify-between text-sm font-semibold mb-3" style={{ color: '#081C3A' }}>
                    <span>Current Team Size</span>
                    <span style={{ color: '#00B67A' }}>{teamSize} staff</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200"
                    style={{ accentColor: '#00B67A' }}
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>1</span><span>50</span>
                  </div>
                </div>

                <div>
                  <label className="flex justify-between text-sm font-semibold mb-3" style={{ color: '#081C3A' }}>
                    <span>Avg. Annual Cost Per Employee</span>
                    <span style={{ color: '#00B67A' }}>${avgCost.toLocaleString('en-US')}</span>
                  </label>
                  <input
                    type="range"
                    min={30000}
                    max={150000}
                    step={1000}
                    value={avgCost}
                    onChange={(e) => setAvgCost(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-200"
                    style={{ accentColor: '#00B67A' }}
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>$30K</span><span>$150K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8" style={{ background: '#081C3A' }}>
              <h3 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Projected Savings
              </h3>
              <div className="space-y-5">
                <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-xs text-slate-400 mb-1">Current Annual Cost</div>
                  <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                    ${currentAnnualCost.toLocaleString('en-US')}
                  </div>
                </div>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(0,182,122,0.12)', border: '1px solid rgba(0,182,122,0.2)' }}>
                  <div className="text-xs mb-1" style={{ color: '#00B67A' }}>Estimated Annual Savings</div>
                  <div className="text-4xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#00B67A' }}>
                    ${annualSavings.toLocaleString('en-US')}
                  </div>
                  <div className="text-sm mt-1" style={{ color: '#00B67A' }}>
                    {savingsPercent}% reduction in operational costs
                  </div>
                </div>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-xs text-slate-400 mb-1">Efficiency Gains</div>
                  <div className="text-lg font-semibold text-white">24/7 coverage · Faster throughput · Zero HR overhead</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 block text-center py-4 rounded-2xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: '#00B67A' }}
              >
                Get Accurate Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---- Case Studies Preview ----
export function CaseStudiesPreview() {
  const studies = [
    {
      type: 'Healthcare',
      org: 'Multi-Location Dental Practice',
      challenge: 'Insurance verification was taking 2–3 days per patient, causing scheduling delays and revenue leakage.',
      solution: 'Deployed 3 dedicated insurance verification specialists with EHR system access and automated escalation workflows.',
      results: [
        { metric: '87%', label: 'Faster Verification' },
        { metric: '$420K', label: 'Revenue Recovered' },
        { metric: '4hrs', label: 'Avg. Turnaround' },
      ],
    },
    {
      type: 'Legal',
      org: 'Mid-Size Immigration Law Firm',
      challenge: 'Attorneys were spending 40% of billable time on document management and administrative intake tasks.',
      solution: 'Integrated a managed team of 5 LPO professionals handling intake, document review, and filing prep.',
      results: [
        { metric: '40%', label: 'More Billable Hours' },
        { metric: '3×', label: 'Matter Throughput' },
        { metric: '52%', label: 'Admin Cost Saved' },
      ],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <div className="compliance-badge mb-3" style={{ display: 'inline-flex' }}>
              Case Studies
            </div>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Real Outcomes, Real Numbers
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: '#081C3A' }}
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <div
              key={study.org}
              className="rounded-3xl overflow-hidden"
              style={{ border: '1px solid rgba(8,28,58,0.08)' }}
            >
              <div
                className="px-7 py-4 flex items-center justify-between"
                style={{ background: '#F8FAFC', borderBottom: '1px solid rgba(8,28,58,0.06)' }}
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{study.type}</div>
                  <div className="font-semibold text-sm mt-0.5" style={{ color: '#081C3A' }}>{study.org}</div>
                </div>
                <Building2 className="w-5 h-5 text-slate-300" />
              </div>
              <div className="p-7">
                <div className="mb-4">
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1.5">Challenge</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: '#00B67A' }}>Solution</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4" style={{ borderTop: '1px solid rgba(8,28,58,0.06)' }}>
                  {study.results.map(({ metric, label }) => (
                    <div key={label} className="text-center p-3 rounded-xl" style={{ background: '#F8FAFC' }}>
                      <div className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#00B67A' }}>{metric}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
