import Image from 'next/image'
import { ChevronDown, Info, Play } from 'lucide-react'
import { navidad } from '@/data/navidad'

export function SeriesHero({ onPlay, onInfo }: { onPlay: () => void; onInfo: () => void }) {
  return (
    <section className="hero" id="inicio">
      <Image className="hero-image" src={navidad.heroImage} alt="Celebración familiar navideña" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="series-kicker"><span className="n-mark">N</span><span>S E R I E &nbsp; O R I G I N A L &nbsp; F A M I L I A R</span></div>
        <h1>{navidad.title1}<br className="mobile-break" /> <em>{navidad.title2}</em></h1>
        <p className="hero-tagline">{navidad.tagline}</p>
        <div className="badges">
          <span className="match">{navidad.badges[1]}</span>
          <span>{navidad.badges[2]}</span>
          <span className="quality">{navidad.badges[3]}</span>
          <span className="badge-original">{navidad.badges[0]}</span>
        </div>
        <p className="hero-description">{navidad.synopsis}</p>
        <div className="hero-actions">
          <button className="button button-light" type="button" onClick={onPlay}><Play fill="currentColor" size={19} /> Reproducir</button>
          <button className="button button-muted" type="button" onClick={onInfo}><Info size={20} /> Más información</button>
        </div>
      </div>
      <div className="hero-rating"><span>Para todas las edades</span></div>
      <button className="hero-bottom" type="button" onClick={onPlay}><span>Descubrir la historia</span><ChevronDown size={18} /></button>
    </section>
  )
}
