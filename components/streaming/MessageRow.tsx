import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { navidad } from '@/data/navidad'
import { reveal } from './animations'

export function MessageRow() {
  return (
    <motion.section className="content-section messages-section" {...reveal}>
      <div className="section-heading"><h2>Mensajes para la familia</h2><span>Contenido especial</span></div>
      <div className="messages-grid">
        {navidad.messages.map((item) => (
          <motion.article className="message-card" key={item.recipient} whileHover={{ y: -4 }}>
            <Image src={item.photo} alt="" width={58} height={58} className="message-image" />
            <Quote className="quote-icon" size={24} />
            <p>{item.message}</p>
            <strong>{item.recipient}</strong>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
