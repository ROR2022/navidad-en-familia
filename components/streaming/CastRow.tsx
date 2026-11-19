import Image from 'next/image'
import { motion } from 'framer-motion'
import { navidad } from '@/data/navidad'
import { reveal } from './animations'

export function CastRow() {
  return (
    <motion.section className="content-section cast-section" id="reparto" {...reveal}>
      <div className="section-heading"><h2>Reparto</h2><span>Las personas que hacen posible la historia</span></div>
      <div className="cast-list">
        {navidad.familyMembers.map((person) => (
          <motion.article className="cast-person" key={person.name} whileHover={{ y: -5 }}>
            <div className="cast-photo"><Image src={person.photo} alt={`Retrato de ${person.name}`} fill sizes="76px" /></div>
            <div><strong>{person.name}</strong><span>{person.role}</span></div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
