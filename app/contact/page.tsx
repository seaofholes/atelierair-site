'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/shared/Navigation'

const contactItems = [
  {
    label: 'a.',
    value: '京都府京都市中京区',
  },
  {
    label: 'p.',
    value: '075-708-3668-01',
  },
  {
    label: 'm.',
    value: 'info@atelierair.jp',
    href: 'mailto:info@atelierair.jp',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-atelier-black">
      <Navigation variant="dark" />

      {/* ── Contact ─────────────────────────────────────────────────────── */}
      <main className="min-h-screen flex items-center">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs"
          >
            {/* Section label */}
            <p className="font-mono text-[8px] tracking-[0.35em] text-white/25 uppercase mb-10">
              Contact
            </p>

            {/* Contact items */}
            <div>
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-baseline gap-5 py-4 border-b border-white/[0.06]"
                >
                  <span className="font-mono text-[8px] tracking-[0.3em] text-white/30 w-5 shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-sans font-light text-[11px] tracking-[0.08em] text-white/55 hover:text-white/80 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-sans font-light text-[11px] tracking-[0.08em] text-white/55">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* ── Footer nav ──────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-8 flex items-center justify-between">
          <span className="font-en font-light text-[9px] tracking-[0.3em] text-atelier-gray/30 uppercase">
            Atelier Air
          </span>
          <nav className="flex items-center gap-8">
            {[
              { label: 'Works', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-en text-[9px] tracking-[0.25em] uppercase text-atelier-gray/35 hover:text-atelier-gray/70 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
