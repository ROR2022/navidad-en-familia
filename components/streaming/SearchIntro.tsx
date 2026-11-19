'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Search } from 'lucide-react'
import { navidad } from '@/data/navidad'

export function SearchIntro({ onSelect }: { onSelect: () => void }) {
  return (
    <motion.main
      className="intro-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45 }}
    >
      <motion.div
        className="intro-logo"
        animate={{ textShadow: ['0 0 18px #d7192060', '0 0 42px #d7192090', '0 0 18px #d7192060'] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        {navidad.title}
      </motion.div>
      <div className="intro-search" aria-label="Búsqueda de catálogo">
        <Search size={20} />
        <span>navidad en familia</span>
        <i />
      </div>
      <motion.button
        className="search-result"
        type="button"
        onClick={onSelect}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label={`Abrir ${navidad.title}`}
      >
        <div className="result-poster">
          <Image src={navidad.heroImage} alt="Una celebración familiar navideña" fill sizes="160px" />
        </div>
        <div className="result-copy">
          <span className="eyebrow"><b>N</b> SERIE ORIGINAL FAMILIAR</span>
          <strong>{navidad.title}</strong>
          <div className="result-tags"><span>Original</span><span>100% coincidencia</span></div>
          <small>1 resultado encontrado</small>
        </div>
        <Play className="result-play" fill="currentColor" size={22} />
      </motion.button>
      <p className="intro-hint">Una historia hecha para volver a encontrarnos.</p>
    </motion.main>
  )
}
