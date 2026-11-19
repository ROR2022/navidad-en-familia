import Image from 'next/image'
import { motion } from 'framer-motion'
import { Info, Play, Plus } from 'lucide-react'
import { navidad, type EpisodeItem } from '@/data/navidad'
import { reveal } from './animations'

export function EpisodeRow({ onEpisode }: { onEpisode: (episode: EpisodeItem) => void }) {
  return (
    <motion.section className="content-section" id="episodios" {...reveal}>
      <div className="section-heading"><h2>Episodios</h2><span>1 temporada <b>•</b> {navidad.episodes.length} episodios</span></div>
      <div className="episode-row">
        {navidad.episodes.map((episode) => (
          <motion.button
            className="episode-card"
            key={`${episode.season}-${episode.number}`}
            type="button"
            onClick={() => onEpisode(episode)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="episode-image">
              <Image src={episode.image} alt={`Escena de ${episode.title}`} fill sizes="(max-width: 700px) 78vw, 360px" />
              <div className="episode-overlay">
                <span><Play fill="currentColor" size={20} /></span>
                <span><Plus size={18} /></span>
                <span><Info size={18} /></span>
              </div>
              <span className="episode-number">T{episode.season}:E{episode.number}</span>
            </div>
            <div className="episode-copy">
              <div className="episode-title"><strong>{episode.title}</strong><span>{episode.duration}</span></div>
              <p>{episode.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.section>
  )
}
