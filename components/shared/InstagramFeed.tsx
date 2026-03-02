'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { instagramPosts } from '@/lib/data'
import type { InstagramPost } from '@/lib/data'

interface InstagramFeedProps {
  layout?: 'grid' | 'horizontal-scroll'
  title?: string
  showCaption?: boolean
  posts?: InstagramPost[]
}

const seriesColors: Record<InstagramPost['series'], string> = {
  STAIRCASE: 'text-atelier-warm',
  DETAIL: 'text-atelier-gray',
  PROCESS: 'text-atelier-gray',
  MATERIAL: 'text-atelier-gray',
}

export function InstagramFeed({
  layout = 'grid',
  title,
  showCaption = false,
  posts = instagramPosts,
}: InstagramFeedProps) {
  if (layout === 'horizontal-scroll') {
    return (
      <section className="py-16 md:py-24">
        {title && (
          <div className="px-6 md:px-12 mb-10">
            <p className="font-en text-[10px] tracking-[0.35em] uppercase text-atelier-gray">
              {title}
            </p>
          </div>
        )}

        <div
          className="flex gap-px overflow-x-auto snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`flex-none snap-start ${showCaption ? 'w-[300px] md:w-[400px]' : 'w-[200px] md:w-[280px]'}`}
            >
              {showCaption ? (
                <div className="flex flex-col h-full">
                  <div className="relative aspect-square flex-none">
                    <Image
                      src={post.image}
                      alt={`Instagram: ${post.series}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="bg-atelier-white p-5 flex-1">
                    <p className={`font-en text-[9px] tracking-[0.25em] uppercase mb-3 ${seriesColors[post.series]}`}>
                      {post.series}
                    </p>
                    <p className="font-sans font-light text-[12px] text-atelier-black leading-[2.0] tracking-wider">
                      {post.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-square">
                  <Image
                    src={post.image}
                    alt={`Instagram: ${post.series}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  // Grid layout
  return (
    <section>
      {title && (
        <div className="mb-8">
          <p className="font-en text-[10px] tracking-[0.35em] uppercase text-atelier-gray">
            {title}
          </p>
        </div>
      )}

      <div className={`grid grid-cols-3 ${showCaption ? 'gap-8' : 'gap-px'}`}>
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {showCaption ? (
              <div>
                <div className="relative aspect-square mb-4 overflow-hidden group">
                  <Image
                    src={post.image}
                    alt={`Instagram: ${post.series}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    unoptimized
                  />
                </div>
                <p className={`font-en text-[9px] tracking-[0.25em] uppercase mb-2 ${seriesColors[post.series]}`}>
                  {post.series}
                </p>
                <p className="font-sans font-light text-[11px] text-atelier-black leading-[2.0] tracking-wider">
                  {post.caption}
                </p>
              </div>
            ) : (
              <div className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image
                  src={post.image}
                  alt={`Instagram: ${post.series}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-atelier-black/0 group-hover:bg-atelier-black/30 transition-colors duration-300 flex items-end p-3">
                  <span className={`font-en text-[9px] tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${seriesColors[post.series]}`}>
                    {post.series}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
