'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/shared/Navigation'
import { projectList } from '@/lib/data'
import type { ProjectListItem } from '@/lib/data'

function statusColor(status: ProjectListItem['status']): string {
  switch (status) {
    case 'Complete':
      return 'text-white/30'
    case 'In Progress':
      return 'text-atelier-warm/60'
    case 'Concept':
      return 'text-white/15'
  }
}

const members = [
  { ja: '池田 淳', en: 'Atsushi Ikeda' },
  { ja: '池田 里圭子', en: 'Rikako Ikeda' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-atelier-black">
      <Navigation variant="dark" />

      {/* ── About ────────────────────────────────────────────────────────── */}
      <main className="pt-14 pb-32">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl pt-16"
          >
            {/* Section label */}
            <p className="font-mono text-[8px] tracking-[0.35em] text-white/25 uppercase mb-12">
              About
            </p>

            {/* ── Bio ── */}
            <div className="mb-14">
              <p className="font-sans font-light text-[12px] leading-[2.4] tracking-[0.06em] text-white/55 mb-8">
                私たちのプロジェクトは、あらゆる規模の改修工事に焦点を当てています。私たちは建築を、伝統と地域的文脈との折衷的かつ享楽的な連続性から捉え、現代の建設技術の可能性を活かしてアプローチします。
              </p>
              <div className="border-t border-white/[0.06] pt-7">
                <p className="font-en font-light text-[11px] leading-[2.2] tracking-[0.04em] text-white/28 italic">
                  Our projects focus on renovation works of all scales. We approach architecture as an eclectic and hedonistic continuity with tradition and regional context, while leveraging the possibilities of contemporary construction techniques.
                </p>
              </div>
            </div>

            {/* ── Members ── */}
            <div className="border-t border-white/[0.06] pt-10 mb-14">
              <p className="font-mono text-[8px] tracking-[0.3em] text-white/25 uppercase mb-8">
                Members
              </p>
              <div className="space-y-0">
                {members.map((m) => (
                  <div
                    key={m.en}
                    className="flex items-baseline gap-6 py-4 border-b border-white/[0.05]"
                  >
                    <span className="font-sans font-light text-[12px] tracking-[0.08em] text-white/60 w-32 shrink-0">
                      {m.ja}
                    </span>
                    <span className="font-en font-light text-[10px] tracking-[0.15em] text-white/25">
                      {m.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Project List ── */}
            <div className="border-t border-white/[0.06] pt-10">
              <p className="font-mono text-[8px] tracking-[0.3em] text-white/25 uppercase mb-8">
                Projects
              </p>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.05]">
                    {['Year', 'Project', 'Scale', 'Status'].map((h) => (
                      <th
                        key={h}
                        className="font-mono text-[7px] tracking-[0.25em] text-white/18 uppercase text-left py-3 pr-6 font-normal"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {projectList.map((item, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                      className="border-b border-white/[0.04] group"
                    >
                      <td className="font-mono text-[9px] tracking-[0.15em] text-white/25 py-3 pr-6 align-top">
                        {item.year}
                      </td>
                      <td className="py-3 pr-6 align-top">
                        <span className="font-sans font-light text-[9px] tracking-[0.1em] text-white/50 block leading-[1.8]">
                          {item.name}
                        </span>
                        <span className="font-en font-light text-[8px] tracking-[0.15em] text-white/20 block leading-[1.8]">
                          {item.nameEn}
                        </span>
                      </td>
                      <td className="font-sans font-light text-[9px] tracking-[0.1em] text-white/25 py-3 pr-6 align-top">
                        {item.scale}
                      </td>
                      <td className={`font-mono text-[8px] tracking-[0.15em] py-3 align-top ${statusColor(item.status)}`}>
                        {item.status}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
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
