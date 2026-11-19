import { MessageCircle } from 'lucide-react'
import { navidad } from '@/data/navidad'

export function WhatsAppContact() {
  const message = 'Hola, me gustó la idea y quiero crear mi propia serie'
  const href = `https://wa.me/${navidad.contact.whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="whatsapp-contact">
      <p>¿Te gustó la idea? ¿Quieres crear tu propia serie?</p>
      <a className="whatsapp-contact-link" href={href} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" size={18} />
        Escríbenos por WhatsApp
      </a>
    </div>
  )
}
