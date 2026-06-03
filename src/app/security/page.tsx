import Link from 'next/link'
import { Shield, Lock, Smartphone, Server, Key, Eye, CheckCircle, ArrowRight } from 'lucide-react'
import { CTABanner } from '@/components/ui'

export const metadata = {
  title: 'Security & Compliance — Cendrix Group',
  description: 'HIPAA-compliant, GDPR-aligned security framework. Full audit logging, MFA, VPN, encrypted devices, and enterprise access controls.',
}

const frameworks = [
  {
    title: 'HIPAA Compliance Framework',
    badge: 'Healthcare',
    color: '#00B67A',
    icon: Shield,
    items: [
      { title: 'Business Associate Agreements', desc: 'Every client engagement includes a signed BAA before any PHI access is provisioned.' },
      { title: 'Role-Based Access Control', desc: 'Specialists access only the systems and data required for their assigned functions.' },
      { title: 'Audit Controls', desc: 'All system activity is logged, monitored, and available for audit at any time.' },
      { title: 'Data Integrity Controls', desc: 'Systems ensure PHI is not altered or destroyed without authorization.' },
      { title: 'Transmission Security', desc: 'All data in transit is encrypted using TLS 1.3 or higher.' },
      { title: 'Breach Response Plan', desc: 'Documented incident response with <72hr breach notification procedures.' },
    ],
  },
  {
    title: 'GDPR Alignment Framework',
    badge: 'UK & EU',
    color: '#3B82F6',
    icon: Lock,
    items: [
      { title: 'Data Processing Agreements', desc: 'DPAs in place for all UK and EU client engagements as required by GDPR Article 28.' },
      { title: 'Privacy by Design', desc: 'Workflows built to minimize data collection and processing to what\'s strictly necessary.' },
      { title: 'Access Management', desc: 'Individual user credentials with no shared logins and automatic session expiration.' },
      { title: 'Right to Erasure Workflows', desc: 'Documented processes to respond to individual data deletion requests within required timeframes.' },
      { title: 'Data Localization Controls', desc: 'Data residency controls to ensure compliance with jurisdiction-specific requirements.' },
      { title: 'DPO Engagement', desc: 'Data Protection Officer oversight for all GDPR-covered client engagements.' },
    ],
  },
  {
    title: 'Operational Security Controls',
    badge: 'All Engagements',
    color: '#F59E0B',
    icon: Server,
    items: [
      { title: 'Multi-Factor Authentication', desc: 'MFA required for all system access. Hardware tokens available for high-security environments.' },
      { title: 'VPN-Only Access', desc: 'All specialists connect exclusively through enterprise-grade VPN. Direct internet access is blocked.' },
      { title: 'Encrypted Devices', desc: 'Full-disk encryption (AES-256) on all specialist workstations and devices.' },
      { title: 'Secure Workstations', desc: 'Managed endpoints with EDR software, automatic patching, and remote wipe capability.' },
      { title: 'Access Logging', desc: 'Every login, file access, and system action is logged with timestamps and session IDs.' },
      { title: 'Background Verification', desc: 'Criminal background checks, employment verification, and reference checks for every specialist.' },
    ],
  },
]

const certifications = [
  { label: 'HIPAA Trained', desc: 'Annual recertification required' },
  { label: 'GDPR Aligned', desc: 'UK GDPR & EU GDPR covered' },
  { label: 'SOC 2 Trained', desc: 'Trust Services Criteria' },
  { label: 'ISO 27001', desc: 'Information security standards' },
  { label: 'PCI DSS Aware', desc: 'For payment-adjacent workflows' },
  { label: 'NIST Framework', desc: 'Cybersecurity framework aligned' },
]

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: '#081C3A' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(rgba(0,182,122,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: 'rgba(0,182,122,0.15)', color: '#00B67A', border: '1px solid rgba(0,182,122,0.2)' }}>
            <Shield className="w-3 h-3" />
            Security & Compliance
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Security You Can{' '}
            <span style={{ color: '#00B67A' }}>Trust With PHI</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Built from the ground up for healthcare and legal data. Every control, every workflow, every specialist — aligned to the strictest compliance standards.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map(({ label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(0,182,122,0.12)', color: '#00B67A', border: '1px solid rgba(0,182,122,0.2)' }}
              >
                <CheckCircle className="w-3 h-3" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Compliance Frameworks
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Comprehensive controls mapped to the specific regulatory requirements of healthcare and legal industries.
            </p>
          </div>

          <div className="space-y-6">
            {frameworks.map(({ title, badge, color, icon: Icon, items }) => (
              <div key={title} className="bg-white rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(8,28,58,0.08)' }}>
                <div className="px-8 py-5 flex items-center gap-4" style={{ borderBottom: '1px solid rgba(8,28,58,0.06)', background: '#F8FAFC' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}14` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider mr-2" style={{ color }}>{badge}</span>
                    <h3 className="text-xl font-bold inline" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>{title}</h3>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map(({ title: itemTitle, desc }) => (
                    <div key={itemTitle} className="flex gap-3">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
                      <div>
                        <div className="font-semibold text-sm mb-1" style={{ color: '#081C3A' }}>{itemTitle}</div>
                        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access management detail */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
              Access Management Architecture
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Every access point is controlled, logged, and auditable. No exceptions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Key, title: 'Identity & Authentication', points: ['Unique credentials per specialist', 'MFA enforced on all accounts', 'Password policies with 90-day rotation', 'Hardware security keys for elevated access'] },
              { icon: Eye, title: 'Monitoring & Audit', points: ['Real-time access logging', 'Anomaly detection alerts', 'Quarterly access reviews', 'Full audit trails on request'] },
              { icon: Lock, title: 'Data Encryption', points: ['AES-256 at rest', 'TLS 1.3 in transit', 'Encrypted backup storage', 'No data on local devices'] },
              { icon: Smartphone, title: 'Device Security', points: ['MDM-enrolled endpoints', 'Remote wipe capability', 'Screen lock enforcement', 'Camera/USB restrictions'] },
            ].map(({ icon: Icon, title, points }) => (
              <div key={title} className="rounded-3xl p-7" style={{ border: '1px solid rgba(8,28,58,0.08)', background: '#F8FAFC' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#081C3A' }}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>{title}</h3>
                </div>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#00B67A' }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Security Questions? Let's Talk."
        subtitle="Our compliance team is available to review your specific requirements and provide documentation."
        primaryLabel="Request Security Documentation"
        secondaryLabel="Schedule Compliance Review"
      />
    </>
  )
}
