'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/shared/Navigation'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { projects, instagramPosts, projectList } from '@/lib/data'

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = 'ALL' | 'RESIDENTIAL' | 'CULTURAL' | 'INTERIOR'

// ─── Aspect rhythm ────────────────────────────────────────────────────────────
function getAspect(idx: number, isFeatured: boolean): '2/1' | '1/1' | '3/4' {
  if (isFeatured) return '2/1'
  const cycle = (idx - 1) % 3
  return cycle === 2 ? '3/4' : '1/1'
}

// ─── Status label ─────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = ['ALL', 'RESIDENTIAL', 'CULTURAL', 'INTERIOR']

export default function PatternA() {
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
      {/* 1. WORKS                                                            */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <div className="pt-14" id="works">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">

          {/* Title row */}
          <div className="flex items-baseline justify-between py-7 border-b border-white/8">
            <h1 className="font-en font-light text-atelier-white text-lg md:text-xl tracking-[0.2em]">
              All Works
            </h1>
            <p className="font-mono text-[10px] text-atelier-gray/50 tracking-wider hidden md:block">
              {filteredProjects.length}&nbsp;Projects
            </p>
          </div>

          {/* Category filter */}
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

        {/* Projects grid — pure works, no IG mixing */}
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
      {/* 2. RESEARCH / STUDIES                                               */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="research" className="max-w-screen-xl mx-auto px-5 md:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section header */}
          <div className="border-t border-white/8 pt-10 pb-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-[9px] tracking-[0.35em] text-atelier-warm/70 mb-2">
                &mdash;&nbsp;Studies
              </p>
              <h2 className="font-en font-light text-atelier-white/80 text-sm tracking-[0.15em]">
                階段と素材の記録
              </h2>
            </div>
            <Link
              href="/staircase"
              className="font-mono text-[9px] tracking-[0.25em] text-atelier-gray/40 hover:text-atelier-warm/70 transition-colors duration-200 uppercase"
            >
              View all &rarr;
            </Link>
          </div>

          {/* Research grid — captions always visible */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 pb-16">
            {instagramPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Series badge */}
                <p className="font-en text-[8px] tracking-[0.3em] uppercase text-atelier-warm/60 mb-2">
                  {post.series}
                </p>

                {/* Image */}
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.series}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Caption — always visible */}
                <p
                  className="font-sans font-light text-[11px] leading-[2.0] tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {post.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* 3. ABOUT                                                            */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="max-w-screen-xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/8 pt-14"
        >
          {/* Top: Bio + Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-16">

            {/* Bio — spans 2 cols */}
            <div className="md:col-span-2">
              <p className="font-en text-[9px] tracking-[0.4em] uppercase text-atelier-gray mb-6">
                About
              </p>
              <p className="font-sans font-light text-atelier-white/65 text-sm md:text-base leading-[2.2] tracking-wider">
                私たちのプロジェクトは、あらゆる規模の改修工事に焦点を当てています。私たちは建築を、伝統と地域的文脈との折衷的かつ享楽的な連続性から捉え、現代の建設技術の可能性を活かしてアプローチします。
              </p>
              <p className="font-sans font-thin text-atelier-gray/40 text-[11px] tracking-wider mt-6">
                Atelier Air — Architecture Studio, est. 2015
              </p>
            </div>

            {/* Members */}
            <div>
              <p className="font-en text-[9px] tracking-[0.4em] uppercase text-atelier-gray mb-6">
                Members
              </p>
              <ul className="space-y-4">
                {[
                  { ja: '池田 淳', en: 'Atushi Ikeda' },
                  { ja: '池田 里圭子', en: 'Rikako Ikeda' },
                ].map((m) => (
                  <li key={m.en}>
                    <p className="font-sans font-light text-atelier-white/70 text-sm tracking-wider">
                      {m.ja}
                    </p>
                    <p className="font-en font-light text-atelier-gray/40 text-[10px] tracking-[0.15em] mt-0.5">
                      {m.en}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project List table */}
          <div className="mb-20">
            <p className="font-en text-[9px] tracking-[0.4em] uppercase text-atelier-gray mb-5">
              Works &mdash; 2023 / 2026
            </p>

            {/* Table header */}
            <div className="grid grid-cols-[3rem_1fr_auto_auto] gap-x-6 md:gap-x-10 pb-2 border-b border-white/8">
              {['Year', 'Project', 'Scale', 'Status'].map((h) => (
                <p key={h} className="font-mono text-[8px] tracking-[0.2em] uppercase text-atelier-gray/35">
                  {h}
                </p>
              ))}
            </div>

            {/* Table rows */}
            {projectList.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.name}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="grid grid-cols-[3rem_1fr_auto_auto] gap-x-6 md:gap-x-10 py-3 border-b border-white/5"
              >
                <span className="font-mono text-[10px] text-atelier-gray/40 tracking-wider self-center">
                  {item.year}
                </span>
                <div className="self-center min-w-0">
                  <p className="font-sans font-light text-atelier-white/65 text-[11px] md:text-xs tracking-wider truncate">
                    {item.name}
                  </p>
                  <p className="font-en text-[9px] text-atelier-gray/30 tracking-wider truncate hidden md:block">
                    {item.nameEn}
                  </p>
                </div>
                <span className="font-sans font-light text-[9px] text-atelier-gray/35 tracking-wider self-center text-right whitespace-nowrap">
                  {item.scale}
                </span>
                <span
                  className={`font-mono text-[8px] tracking-[0.15em] uppercase self-center text-right whitespace-nowrap ${
                    item.status === 'Complete'
                      ? 'text-atelier-gray/50'
                      : item.status === 'In Progress'
                      ? 'text-atelier-warm/70'
                      : 'text-atelier-gray/25'
                  }`}
                >
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* 4. CONTACT                                                          */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="max-w-screen-xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/8 pt-12 pb-20"
        >
          <p className="font-en text-[9px] tracking-[0.4em] uppercase text-atelier-gray mb-8">
            Contact
          </p>

          <ul className="space-y-5">
            {[
              { label: 'a', content: '京都府京都市中京区', href: undefined },
              { label: 'i', content: '@okakir__', href: 'https://www.instagram.com/okakir__/' },
              { label: 'p', content: '075-708-3668-01', href: 'tel:07570836680 1' },
              { label: 'm', content: 'info@atelierair.jp', href: 'mailto:info@atelierair.jp' },
            ].map((item) => (
              <li key={item.label} className="flex items-baseline gap-5">
                <span className="font-mono text-[9px] text-atelier-warm/50 tracking-widest w-4 flex-shrink-0">
                  {item.label}.
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-sans font-light text-atelier-white/55 text-sm tracking-wider hover:text-atelier-white/85 transition-colors duration-200"
                  >
                    {item.content}
                  </a>
                ) : (
                  <span className="font-sans font-light text-atelier-white/55 text-sm tracking-wider">
                    {item.content}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* 5. FOOTER — nav only                                                */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-8 flex items-center justify-between">
          <span className="font-en font-light text-[9px] tracking-[0.3em] text-atelier-gray/30 uppercase">
            Atelier Air
          </span>
          <nav className="flex items-center gap-8">
            {[
              { label: 'Works', href: '#works' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-en text-[9px] tracking-[0.25em] uppercase text-atelier-gray/35 hover:text-atelier-gray/70 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
