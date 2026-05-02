'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" /> // placeholder

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-parchment/10 border border-parchment/30 text-parchment/80 hover:bg-parchment/20 hover:scale-110'
            : 'bg-gold/20 border border-gold/40 text-gold hover:bg-gold/40 hover:scale-110'
        }`}
        aria-label="Toggle dark mode"
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg"
            >
              🌙
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg"
            >
              ☀️
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute top-11 right-0 whitespace-nowrap text-xs font-cinzel px-2 py-1 rounded bg-leather text-parchment dark:bg-parchment dark:text-leather"
          >
            {theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
