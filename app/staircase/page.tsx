'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/shared/Navigation'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { projects, instagramPosts } from '@/lib/data'

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = 'ALL' | 'RESIDENTIAL' | 'CULTURAL' | 'INTERIOR'
const CATEGORIES: Category[] = ['ALL', 'RESIDENTIAL', 'CULTURAL', 'INTERIOR']

// STAIRCASE series only for Research
const staircasePosts = instagramPosts.filter((p) => p.series === 'STAIRCASE')

function getAspect(idx: number, isFeatured: boolean): '2/1' | '1/1' | '3/4' {
  if (isFeatured) return '2/1'
  const cycle = (idx - 1) % 3
  return cycle === 2 ? '3/4' : '1/1'
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL')

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'ALL'
        ? projects
        : projects.filter((p) => p.category.toUpperCase() === activeCategory),
    [activeCategory]
  )

  return (
    <div className="min-h-screen bg-atelier-black">
      <Navigation variant="dark" />

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* WORKS                                                               */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <div className="pt-14" id="works">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <div className="flex items-baseline justify-between py-7 border-b border-white/8">
            <h1 className="font-en font-light text-atelier-white text-lg md:text-xl tracking-[0.2em]">
              All Works
            </h1>
            <p className="font-mono text-[10px] text-atelier-gray/50 tracking-wider hidden md:block">
              {filteredProjects.length}&nbsp;Projects
            </p>
          </div>

          <div className="flex items-center gap-1 py-4 border-b border-white/5 overflow-x-auto scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative font-en text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'text-atelier-white'
                    : 'text-atelier-gray/50 hover:text-atelier-gray'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 border border-white/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-5 md:px-8 pt-[3px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              layout
              className="grid grid-cols-2 md:grid-cols-3 gap-[3px]"
            >
              {filteredProjects.map((project, i) => {
                const isFeatured = i === 0
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.5) }}
                    className={isFeatured ? 'col-span-2' : ''}
                  >
                    <ProjectCard
                      project={project}
                      aspect={getAspect(i, isFeatured)}
                      index={i}
                      featured={isFeatured}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* RESEARCH — Staircase only                                          */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="research" className="mt-24">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/8 pt-10 pb-8 flex items-end justify-between"
          >
            <div>
              <p className="font-mono text-[9px] tracking-[0.35em] text-atelier-warm/60 mb-2">
                &mdash;&nbsp;Research
              </p>
              <h2 className="font-en font-light text-atelier-white/75 text-sm tracking-[0.15em]">
                Staircase Design Process
              </h2>
            </div>
            <Link
              href="/staircase"
              className="font-mono text-[9px] tracking-[0.2em] text-atelier-gray/35 hover:text-atelier-warm/60 transition-colors duration-200 uppercase"
            >
              All studies &rarr;
            </Link>
          </motion.div>
        </div>

        {/* Alternating editorial entries */}
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          {staircasePosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 border-b border-white/[0.06]"
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  i % 2 === 1 ? 'md:order-last' : ''
                }`}
              >
                <Image
                  src={post.image}
                  alt={`Staircase Research ${String(i + 1).padStart(2, '0')}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center py-10 md:py-0 ${
                  i % 2 === 1
                    ? 'md:pr-12 lg:pr-20'
                    : 'md:pl-12 lg:pl-20'
                }`}
              >
                <span className="font-mono text-[8px] tracking-[0.3em] text-atelier-warm/40 mb-5 block">
                  STAIRCASE &mdash; {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="font-sans font-light text-[11px] md:text-xs leading-[2.2] tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-24" />
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* FOOTER — nav only                                                   */}
      {/* ════════════════════════════════════════════════════════════════════ */}
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
