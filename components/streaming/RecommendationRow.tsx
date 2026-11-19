import Image from 'next/image'
import { motion } from 'framer-motion'
import { navidad } from '@/data/navidad'
import { reveal } from './animations'

export function RecommendationRow() {
  return (
    <motion.section className="content-section recommendations" id="recomendaciones" {...reveal}>
      <div className="section-heading"><h2>Más como esto</h2><span>Historias que siempre recomendamos</span></div>
      <div className="recommendation-grid">
        {navidad.recommendations.map((item) => (
          <motion.article className="recommendation-card" key={item.title} whileHover={{ scale: 1.035 }}>
            <div className="rec-image"><Image src={item.image} alt={`Imagen de ${item.title}`} fill sizes="(max-width: 700px) 45vw, 250px" /></div>
            <div className="rec-info"><span className="match">100% para nuestra familia</span><h3>{item.title}</h3><p>{item.description}</p></div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
