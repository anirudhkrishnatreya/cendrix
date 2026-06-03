'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { withBasePath } from '@/lib/base-path'

const navItems = [
  {
    label: 'Solutions',
    children: [
      { label: 'Healthcare Solutions', href: '/healthcare', desc: 'For medical practices & clinics' },
      { label: 'Legal Solutions', href: '/legal', desc: 'For law firms & legal teams' },
    ]
  },
  { label: 'Security & Compliance', href: '/security' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const cleanPath = (pathname || '')
    .replace(/\/$/, '')
    .replace(/\/index\.html$/, '')
    .replace(/\.html$/, '')
  const isDarkHero = (cleanPath === '/security' || cleanPath === '/case-studies' || cleanPath === '/healthcare') && !scrolled

  const linkClass = `px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${isDarkHero
      ? 'text-slate-300 hover:text-white hover:bg-white/10'
      : 'text-slate-600 hover:text-navy-500 hover:bg-slate-50'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" style={{ height: '70px' }}>
          <Image
            src={withBasePath('/Logo.png')}
            alt="Cendrix Group"
            width={290}
            height={100}
            className={`h-12 w-auto object-contain ${isDarkHero ? 'brightness-0 invert' : ''}`}
            style={{ maxHeight: '50px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={linkClass}>
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-premium-lg p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-all"
                        >
                          <div className="text-sm font-semibold text-navy-500">{child.label}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{child.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={linkClass}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" style={{ width: 6, height: 6 }}></span>
            HIPAA Compliant
          </div>
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-xl transition-all hover:opacity-90 hover:shadow-lg"
            style={
              isDarkHero
                ? { background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }
                : { background: '#081C3A', color: 'white' }
            }
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile menu btn */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-all ${isDarkHero ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-navy-500 rounded-lg hover:bg-slate-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-navy-500 rounded-lg hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <Link
                href="/contact"
                className="block w-full text-center py-3 text-sm font-semibold text-white rounded-xl"
                style={{ background: '#081C3A' }}
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
