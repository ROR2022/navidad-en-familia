'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { MemoryEpisode } from '@/data/navidad'

export function MemoryModal({ episode, onClose }: { episode: MemoryEpisode | null; onClose: () => void }) {
  const modalRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!episode) return
    const previous = document.activeElement as HTMLElement | null
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>('button,[href],[tabindex]:not([tabindex="-1"])')
    focusable?.[0]?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); previous?.focus() }
  }, [episode, onClose])

  return (
    <AnimatePresence>
      {episode && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
          <motion.section ref={modalRef} className="memory-modal" role="dialog" aria-modal="true" aria-labelledby="memory-title" initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}>
            <div className="modal-photo"><Image src={episode.image} alt="" fill sizes="(max-width: 700px) 100vw, 760px" /><button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar capítulo"><X size={20} /></button><div><span>CAPÍTULO {episode.number}</span><h2 id="memory-title">{episode.title}</h2></div></div>
            <div className="modal-copy"><span className="modal-date">{episode.date}</span><p>{episode.details}</p><button className="secondary-button" type="button" onClick={onClose}>Volver a la historia</button></div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
