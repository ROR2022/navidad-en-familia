import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { navidad } from '@/data/navidad'

export function FamilyMessages() {
  return (
    <section className="content-section messages-section" id="mensajes">
      <div className="section-heading"><div><span className="section-kicker">Palabras para guardar cerca</span><h2>Mensajes para la familia</h2></div><span className="section-note">Con cariño</span></div>
      <div className="messages-grid">
        {navidad.messages.map((item, index) => (
          <motion.article className="message-card" key={item.recipient} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <Image src={item.photo} alt="" width={68} height={68} className="message-image" />
            <Quote className="quote-icon" size={24} />
            <p>{item.message}</p>
            <strong>{item.recipient}</strong>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
