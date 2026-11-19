import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight, Play } from 'lucide-react'
import { navidad, type MemoryEpisode } from '@/data/navidad'

export function MemoryEpisodes({ onEpisode }: { onEpisode: (episode: MemoryEpisode) => void }) {
  return (
    <section className="content-section memories-section" id="recuerdos">
      <div className="section-heading">
        <div><span className="section-kicker">Una colección de momentos para volver a vivir</span><h2>Capítulos de nuestra historia</h2></div>
        <span className="section-note">{navidad.episodes.length} capítulos</span>
      </div>
      <div className="episode-grid">
        {navidad.episodes.map((episode, index) => (
          <motion.button className={`memory-card ${index === 0 ? 'memory-card-featured' : ''}`} key={episode.number} type="button" onClick={() => onEpisode(episode)} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <div className="memory-image"><Image src={episode.image} alt={`Imagen del capítulo ${episode.title}`} fill sizes="(max-width: 700px) 86vw, 360px" /><span className="episode-number">CAPÍTULO {episode.number}</span><span className="memory-play"><Play fill="currentColor" size={17} /></span></div>
            <div className="memory-copy"><span>{episode.date}</span><h3>{episode.title}</h3><p>{episode.description}</p><small>Leer capítulo <ChevronRight size={14} /></small></div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
