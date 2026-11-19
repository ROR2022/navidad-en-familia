import Image from 'next/image'
import { ArrowDown, Heart, Play } from 'lucide-react'
import { navidad } from '@/data/navidad'

export function FamilyHero({ onExplore, onCast }: { onExplore: () => void; onCast: () => void }) {
  return (
    <section className="family-hero" id="inicio">
      <Image className="hero-photo" src={navidad.heroImage} alt="Ilustración de una celebración familiar navideña" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="hero-copy">
        <div className="hero-kicker"><span>✦</span> ESPECIAL NAVIDEÑO FAMILIAR</div>
        <h1>Navidad <em>en Familia</em></h1>
        <p className="hero-tagline">{navidad.tagline}</p>
        <div className="hero-meta"><span className="match">100% para nuestra familia</span><span>Edición 2026</span><span>Para todas las edades</span></div>
        <p className="hero-description">{navidad.introText}</p>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onExplore}><Play fill="currentColor" size={18} /> Ver recuerdos</button>
          <button className="secondary-button" type="button" onClick={onCast}><Heart size={18} /> Conocer al elenco</button>
        </div>
      </div>
      <button className="hero-scroll" type="button" onClick={onExplore} aria-label="Bajar a los recuerdos"><span>Descubrir la historia</span><ArrowDown size={18} /></button>
    </section>
  )
}
