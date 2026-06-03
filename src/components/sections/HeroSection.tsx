'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, CheckCircle, Wifi, Smartphone } from 'lucide-react'

const healthcareMetrics = [
  { label: 'Patients Scheduled', value: 1847, unit: '' },
  { label: 'Claims Verified', value: 423, unit: '' },
  { label: 'Records Updated', value: 2156, unit: '' },
]
const legalMetrics = [
  { label: 'Contracts Reviewed', value: 94, unit: '' },
  { label: 'Documents Processed', value: 378, unit: '' },
  { label: 'Transcriptions Done', value: 61, unit: '' },
]
const securityBadges = [
  { label: 'HIPAA Compliant', icon: Shield, color: '#00B67A' },
  { label: 'GDPR Aligned', icon: Lock, color: '#00B67A' },
  { label: 'VPN Protected', icon: Wifi, color: '#00B67A' },
  { label: 'MFA Enabled', icon: Smartphone, color: '#00B67A' },
]

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return <span>{count.toLocaleString('en-US')}</span>
}

function DashboardWidget() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 300) }, [])

  return (
    <div
      className="relative rounded-3xl p-6 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.95)',
        border: '1px solid rgba(8,28,58,0.08)',
        boxShadow: '0 24px 80px rgba(8,28,58,0.12)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Operations Dashboard</div>
          <div className="text-sm font-bold text-slate-800 mt-0.5">Live Activity</div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(0,182,122,0.1)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ background: '#00B67A' }}></span>
          <span className="text-xs font-semibold" style={{ color: '#00B67A' }}>Active</span>
        </div>
      </div>

      {/* Healthcare metrics */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-1.5 h-5 rounded-full" style={{ background: '#00B67A' }}></div>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Healthcare</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {healthcareMetrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-3"
              style={{ background: '#F8FAFC', border: '1px solid rgba(8,28,58,0.06)' }}
            >
              <div className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
                {mounted ? <AnimatedCounter target={m.value} /> : '0'}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal metrics */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-1.5 h-5 rounded-full bg-blue-500"></div>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Legal</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {legalMetrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-3"
              style={{ background: '#F8FAFC', border: '1px solid rgba(8,28,58,0.06)' }}
            >
              <div className="text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
                {mounted ? <AnimatedCounter target={m.value} duration={2500} /> : '0'}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Security badges */}
      <div className="pt-4 border-t" style={{ borderColor: 'rgba(8,28,58,0.06)' }}>
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Security Status</div>
        <div className="grid grid-cols-2 gap-2">
          {securityBadges.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{ background: 'rgba(0,182,122,0.06)', border: '1px solid rgba(0,182,122,0.15)' }}
            >
              <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#00B67A' }} />
              <span className="text-xs font-semibold text-slate-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: '#F8FAFC' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-60" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, #00B67A 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="compliance-badge mb-6" style={{ display: 'inline-flex' }}>
              <CheckCircle className="w-3 h-3" />
              Trusted by Healthcare & Legal Leaders
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}
            >
              Scale Your Practice{' '}
              <span style={{ color: '#00B67A' }}>Without Expanding</span>{' '}
              Operational Overhead
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              Dedicated healthcare and legal professionals trained in secure, compliant workflows that help your organization scale efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:opacity-90 hover:shadow-xl"
                style={{ background: '#081C3A' }}
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/healthcare"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-2xl transition-all"
                style={{
                  background: 'transparent',
                  color: '#081C3A',
                  border: '2px solid rgba(8,28,58,0.15)',
                }}
              >
                Explore Solutions
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t" style={{ borderColor: 'rgba(8,28,58,0.08)' }}>
              {[
                { label: 'HIPAA Compliant' },
                { label: 'GDPR Aligned' },
                { label: 'SOC 2 Trained' },
                { label: '24/7 Coverage' },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" style={{ color: '#00B67A' }} />
                  <span className="text-xs font-semibold text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard */}
          <div className="lg:pl-8">
            <DashboardWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
