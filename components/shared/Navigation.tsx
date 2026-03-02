'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  variant?: 'light' | 'dark'
}

const navLinks = [
  { label: 'Works', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation({ variant = 'dark' }: NavigationProps) {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 60) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY + 4) {
        setVisible(false)
        setMenuOpen(false)
      } else if (currentScrollY < lastScrollY - 4) {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const isDark = variant === 'dark'
  const textClass = isDark ? 'text-atelier-white' : 'text-atelier-black'
  const bgClass = isDark ? 'bg-atelier-black/90' : 'bg-atelier-white/90'
  const borderClass = isDark ? 'border-white/10' : 'border-atelier-black/10'

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          key="nav"
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 ${bgClass} backdrop-blur-md border-b ${borderClass}`}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={`font-en font-light text-xs tracking-[0.3em] uppercase ${textClass} opacity-90 hover:opacity-100 transition-opacity`}
            >
              Atelier Air
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-en text-[10px] tracking-[0.25em] uppercase ${textClass} opacity-50 hover:opacity-100 transition-opacity duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden ${textClass} opacity-70 hover:opacity-100 transition-opacity`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className={`overflow-hidden border-t ${borderClass}`}
              >
                <nav className={`${bgClass} px-6 py-6 flex flex-col gap-5`}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-en text-xs tracking-[0.25em] uppercase ${textClass} opacity-60`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
