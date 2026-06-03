import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Button component
interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function Button({ children, href, variant = 'primary', size = 'md', className = '', onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200'
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }
  const variants = {
    primary: 'bg-navy-500 text-white hover:bg-navy-600 hover:shadow-lg',
    secondary: 'text-white hover:opacity-90 hover:shadow-glow',
    outline: 'border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white',
    ghost: 'text-navy-500 hover:bg-navy-50',
  }

  const primaryStyle = variant === 'primary' ? { background: '#081C3A' } : {}
  const secondaryStyle = variant === 'secondary' ? { background: '#00B67A' } : {}

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls} style={{ ...primaryStyle, ...secondaryStyle }}>
        {children}
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={cls} style={{ ...primaryStyle, ...secondaryStyle }}>
      {children}
    </button>
  )
}

// Section header
interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({ badge, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className={`compliance-badge mb-4 ${centered ? 'mx-auto' : ''}`} style={{ display: 'inline-flex' }}>
          {badge}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-navy-500'}`}
        style={{ fontFamily: 'Syne, sans-serif', color: light ? '#fff' : '#081C3A' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// Card component
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  dark?: boolean
}

export function Card({ children, className = '', hover = false, dark = false }: CardProps) {
  return (
    <div
      className={`rounded-3xl p-8 ${hover ? 'card-hover cursor-pointer' : ''} ${dark ? 'dark-section' : 'bg-white premium-border'} ${className}`}
      style={dark ? { background: '#081C3A' } : { background: '#FFFFFF', border: '1px solid rgba(8,28,58,0.08)' }}
    >
      {children}
    </div>
  )
}

// Stat component
interface StatProps {
  value: string
  label: string
  accent?: boolean
}

export function Stat({ value, label, accent = false }: StatProps) {
  return (
    <div className="text-center p-6">
      <div
        className={`text-4xl lg:text-5xl font-bold mb-2`}
        style={{ fontFamily: 'Syne, sans-serif', color: accent ? '#00B67A' : '#081C3A' }}
      >
        {value}
      </div>
      <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</div>
    </div>
  )
}

// Feature row
interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  description: string
  light?: boolean
}

export function FeatureItem({ icon, title, description, light = false }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(0,182,122,0.1)' }}
      >
        <span style={{ color: '#00B67A' }}>{icon}</span>
      </div>
      <div>
        <h4 className={`font-semibold mb-1 ${light ? 'text-white' : 'text-navy-500'}`} style={{ color: light ? '#fff' : '#081C3A' }}>
          {title}
        </h4>
        <p className={`text-sm leading-relaxed ${light ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
      </div>
    </div>
  )
}

// CTA Banner
interface CTABannerProps {
  title: string
  subtitle: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABanner({
  title,
  subtitle,
  primaryLabel = 'Book Consultation',
  primaryHref = '/contact',
  secondaryLabel = 'Schedule Discovery Call',
  secondaryHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="section-padding" style={{ background: '#081C3A' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {title}
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:opacity-90 hover:shadow-lg"
            style={{ background: '#00B67A' }}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl transition-all"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
