import Image from 'next/image'
import { motion } from 'framer-motion'
import { navidad } from '@/data/navidad'

export function FamilyCast() {
  return (
    <section className="content-section cast-section" id="elenco">
      <div className="section-heading">
        <div><span className="section-kicker">Las personas que hacen posible la historia</span><h2>El elenco de esta Navidad</h2></div>
        <span className="section-note">Todos tienen un papel especial.</span>
      </div>
      <div className="cast-grid">
        {navidad.familyMembers.map((member, index) => (
          <motion.article className="cast-card" key={member.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
            <div className="cast-photo"><Image src={member.photo} alt={`Retrato de ${member.name}`} fill sizes="160px" /></div>
            <div><span>{member.role}</span><h3>{member.name}</h3><p>{member.description}</p></div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
