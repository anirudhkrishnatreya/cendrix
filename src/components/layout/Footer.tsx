import Link from 'next/link'
import Image from 'next/image'
import { Lock, CheckCircle } from 'lucide-react'
import { withBasePath } from '@/lib/base-path'

export function Footer() {
  return (
    <footer style={{ background: '#081C3A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src={withBasePath('/Logo.png')}
                alt="Cendrix Group"
                width={130}
                height={38}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Enterprise healthcare and legal workforce solutions. Trained professionals, compliant operations, measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-2">
              {['HIPAA Compliant', 'GDPR Aligned', 'ISO Trained', 'SOC 2'].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(0,182,122,0.12)', color: '#00B67A', border: '1px solid rgba(0,182,122,0.2)' }}
                >
                  <CheckCircle className="w-3 h-3" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                ['Healthcare Solutions', '/healthcare'],
                ['Legal Solutions', '/legal'],
                ['Security & Compliance', '/security'],
                ['Industries', '/industries'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              {[
                ['About Us', '/about'],
                ['Case Studies', '/case-studies'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-400">United States</li>
              <li className="text-sm text-slate-400">United Kingdom</li>
              <li>
                <a href="mailto:info@cendrix.com" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors" style={{ color: '#00B67A' }}>
                  info@cendrixgroup.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Lock className="w-4 h-4 flex-shrink-0" style={{ color: '#00B67A' }} />
              <span className="text-xs text-slate-400">All communications are encrypted and confidential</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Cendrix Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'BAA Agreement', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
