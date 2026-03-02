'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/shared/Navigation'
import { instagramPosts } from '@/lib/data'
import type { InstagramPost } from '@/lib/data'

// Filter by series
const staircasePosts = instagramPosts.filter((p) => p.series === 'STAIRCASE')
const otherPosts = instagramPosts.filter((p) => p.series !== 'STAIRCASE')

const seriesColor: Record<InstagramPost['series'], string> = {
  STAIRCASE: 'text-atelier-warm/70',
  DETAIL: 'text-atelier-gray/50',
  PROCESS: 'text-atelier-gray/50',
  MATERIAL: 'text-atelier-gray/50',
}

export default function StaircasePage() {
  return (
    <div className="min-h-screen bg-atelier-black">
      <Navigation variant="dark" />

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="pt-14">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="py-14 border-b border-white/8">
            <Link
              href="/"
              className="inline-block font-mono text-[9px] tracking-[0.25em] text-atelier-gray/35 hover:text-atelier-gray/60 uppercase transition-colors duration-200 mb-8"
            >
              &larr; Back to Works
            </Link>
            <p className="font-mono text-[9px] tracking-[0.35em] text-atelier-warm/60 mb-3">
              Research
            </p>
            <h1 className="font-en font-light text-atelier-white/85 text-2xl md:text-3xl tracking-[0.1em]">
              Staircase Studies
            </h1>
            <p className="font-sans font-light text-atelier-white/35 text-sm md:text-base tracking-wider mt-3 leading-[2.0] max-w-lg">
              階段の設計意図をめぐる思考の記録。素材、構造、光の三要素が交差する場所としての階段を探求する。
            </p>
          </div>
        </div>
      </div>

      {/* ── STAIRCASE series — editorial layout ─────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 mt-16">
        <div className="space-y-0">
          {staircasePosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-white/5 ${
                i % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  i % 2 === 1 ? 'md:col-start-2' : ''
                }`}
              >
                <Image
                  src={post.image}
                  alt={`Staircase Study ${String(i + 1).padStart(2, '0')}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center px-0 py-10 md:py-16 ${
                  i % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:pr-16' : 'md:pl-16'
                }`}
              >
                <p className="font-mono text-[8px] tracking-[0.3em] text-atelier-warm/50 mb-6">
                  STAIRCASE — {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-sans font-light text-atelier-white/55 text-sm md:text-base leading-[2.2] tracking-wider">
                  {post.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Other research — compact grid ───────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-5 md:px-8 mt-20 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="border-t border-white/8 pt-10 mb-10">
            <p className="font-mono text-[9px] tracking-[0.35em] text-atelier-gray/40 uppercase">
              Detail &middot; Process &middot; Material
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {otherPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <p className={`font-en text-[7px] tracking-[0.3em] uppercase mb-2 ${seriesColor[post.series]}`}>
                  {post.series}
                </p>
                <div className="relative aspect-square overflow-hidden mb-3">
                  <Image
                    src={post.image}
                    alt={post.series}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <p
                  className="font-sans font-light text-[10px] leading-[1.9] tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {post.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

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
