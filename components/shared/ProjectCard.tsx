'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  aspect?: '1/1' | '4/3' | '3/4' | '2/1'
  index?: number
  featured?: boolean
}

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}

const textVariants = {
  rest: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.05, ease: 'easeOut' } },
}

const idVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
}

export function ProjectCard({ project, aspect = '1/1', index = 0, featured = false }: ProjectCardProps) {
  const aspectClass = {
    '1/1': 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '3/4': 'aspect-[3/4]',
    '2/1': 'aspect-[2/1]',
  }[aspect]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.6) }}
      className={`relative overflow-hidden ${aspectClass} cursor-pointer`}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardVariants}
        className="absolute inset-0"
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes={
            featured
              ? '(max-width: 640px) 100vw, 66vw'
              : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
          }
          priority={featured}
          unoptimized
        />

        {/* Hover overlay */}
        <motion.div
          variants={overlayVariants}
          className="absolute inset-0 bg-atelier-black/65 flex flex-col justify-end p-5 md:p-6"
        >
          <motion.div variants={textVariants}>
            <span
              className="block font-en text-[9px] tracking-[0.3em] uppercase mb-2"
              style={{ color: 'rgba(255,255,255,0.55)', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
              {project.category} &mdash; {project.year}
            </span>
            <h3
              className={`font-sans font-light tracking-wider leading-snug ${featured ? 'text-xl md:text-2xl' : 'text-sm md:text-base'}`}
              style={{ color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
            >
              {project.title}
            </h3>
            {featured && (
              <p
                className="font-en font-light text-[11px] tracking-[0.15em] mt-1 italic"
                style={{ color: 'rgba(255,255,255,0.5)', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
              >
                {project.titleEn}
              </p>
            )}
            <p
              className="font-en text-[9px] tracking-wider mt-2 uppercase"
              style={{ color: 'rgba(255,255,255,0.35)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
            >
              {project.location}
            </p>
          </motion.div>
        </motion.div>

        {/* Project ID - top-right corner */}
        <motion.div
          variants={idVariants}
          className="absolute top-3 right-3"
        >
          <span className="font-mono text-[9px] text-white/40 tracking-widest">
            {project.id}
          </span>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
