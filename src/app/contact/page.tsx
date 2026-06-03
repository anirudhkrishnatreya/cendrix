'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Shield, Clock, Lock, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', industry: '', companySize: '',
    teamSize: '', email: '', phone: '', challenge: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9e53c716-2513-4a1b-a009-e3e1734664ca",
          subject: "New Consultation Request from Cendrix Website",
          from_name: "Cendrix Website",
          ...form
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F8FAFC' }}>
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(0,182,122,0.1)' }}>
            <CheckCircle className="w-10 h-10" style={{ color: '#00B67A' }} />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            Request Received
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Thank you, {form.name}. A Cendrix consultant will reach out within 1 business day to schedule your discovery call.
          </p>
          <div className="rounded-2xl p-6 mb-6" style={{ background: '#081C3A' }}>
            <div className="text-sm font-bold text-white mb-2">What Happens Next</div>
            <ul className="text-left space-y-2.5">
              {[
                'Consultant reviews your operational challenge',
                'Discovery call scheduled within 24 hours',
                'Custom solution designed for your org',
                'Proposal delivered within 3 business days',
              ].map((step) => (
                <li key={step} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#00B67A' }} />
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: '#081C3A' }}
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16" style={{ background: '#F8FAFC' }}>
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="compliance-badge mb-5 mx-auto" style={{ display: 'inline-flex' }}>
            <Shield className="w-3 h-3" />
            Secure Consultation Request
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif', color: '#081C3A' }}>
            Let's Build Your Extended Team
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tell us about your operational challenges. We'll design a compliant, scalable solution around your specific needs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white border-t" style={{ borderColor: 'rgba(8,28,58,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-5">
              {[
                { icon: Clock, title: 'Response within 24 hours', desc: 'A consultant will reach out within one business day.' },
                { icon: Lock, title: 'Fully confidential', desc: 'Your information is encrypted and never shared.' },
                { icon: CheckCircle, title: 'No commitment required', desc: 'Discovery call is free with zero obligation.' },
                { icon: Shield, title: 'BAA available', desc: 'We sign Business Associate Agreements before any PHI discussion.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 p-5 rounded-2xl"
                  style={{ background: '#F8FAFC', border: '1px solid rgba(8,28,58,0.06)' }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,182,122,0.1)' }}>
                    <Icon className="w-4 h-4" style={{ color: '#00B67A' }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#081C3A' }}>{title}</div>
                    <div className="text-xs text-slate-500">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Sarah Chen"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: '#1F2937' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Company / Practice Name *</label>
                    <input
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Northside Medical Group"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: '#1F2937' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Industry *</label>
                    <select
                      name="industry"
                      required
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: form.industry ? '#1F2937' : '#9CA3AF' }}
                    >
                      <option value="">Select Industry</option>
                      <option>Medical Practice</option>
                      <option>Dental Clinic</option>
                      <option>Telehealth</option>
                      <option>Mental Health</option>
                      <option>Specialty Care</option>
                      <option>Law Firm</option>
                      <option>Corporate Legal Team</option>
                      <option>Other Healthcare</option>
                      <option>Other Legal</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Organization Size</label>
                    <select
                      name="companySize"
                      value={form.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: form.companySize ? '#1F2937' : '#9CA3AF' }}
                    >
                      <option value="">Select Size</option>
                      <option>1–5 providers</option>
                      <option>6–20 providers</option>
                      <option>21–50 providers</option>
                      <option>50+ providers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Current Admin Team Size</label>
                  <input
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    placeholder="e.g. 4 front-desk staff, 2 billers"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: '#1F2937' }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sarah@northsidemedical.com"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: '#1F2937' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: '#1F2937' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#081C3A' }}>Operational Challenge *</label>
                  <textarea
                    name="challenge"
                    required
                    rows={4}
                    value={form.challenge}
                    onChange={handleChange}
                    placeholder="Describe your current operational pain points. What's costing you time, revenue, or peace of mind? The more specific, the better we can prepare."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{ border: '1px solid rgba(8,28,58,0.12)', background: '#F8FAFC', color: '#1F2937' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-base font-semibold text-white rounded-2xl transition-all hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: '#081C3A' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree to our Privacy Policy. We will never sell your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
