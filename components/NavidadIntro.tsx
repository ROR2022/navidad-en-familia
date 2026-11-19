'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { navidad } from '@/data/navidad'
import { CuentaRegresiva } from './CuentaRegresiva'

export function NavidadIntro({ onStart }: { onStart: () => void }) {
  return (
    <section className="intro-screen">
      <div className="snow-field" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <i key={index} style={{ '--snow-delay': `${index * 0.3}s`, '--snow-left': `${(index * 17) % 100}%` } as React.CSSProperties} />)}
      </div>
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="intro-kicker"><Sparkles size={15} /> ESPECIAL ORIGINAL DE LA FAMILIA</div>
        <h1>Navidad <em>en Familia</em></h1>
        <p>{navidad.tagline}</p>
        <div className="intro-countdown">
          <span className="eyebrow">La celebración comienza en</span>
          <CuentaRegresiva />
        </div>
        <motion.button
          className="primary-button"
          type="button"
          onClick={onStart}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Comenzar especial <ArrowRight size={18} />
        </motion.button>
        <small>Una historia hecha de recuerdos, risas y amor.</small>
      </motion.div>
    </section>
  )
}
