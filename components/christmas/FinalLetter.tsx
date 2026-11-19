import { Heart, RotateCcw, Share2, Sparkles } from 'lucide-react'
import { navidad } from '@/data/navidad'

export function FinalLetter({ onRestart, onShare }: { onRestart: () => void; onShare: () => void }) {
  return (
    <section className="final-letter" id="carta">
      <div className="letter-stars" aria-hidden="true"><Sparkles size={18} /><span>✦</span><Sparkles size={13} /></div>
      <span className="section-kicker">Una carta para nuestra familia</span>
      <h2>La mejor parte siempre es volver a encontrarnos.</h2>
      <p>{navidad.finalLetter}</p>
      <span className="signature">{navidad.signature}</span>
      <div className="letter-actions"><button className="primary-button" type="button" onClick={onShare}><Share2 size={17} /> Compartir especial</button><button className="secondary-button" type="button" onClick={onRestart}><RotateCcw size={17} /> Volver al inicio</button></div>
      <Heart className="letter-heart" fill="currentColor" size={21} />
    </section>
  )
}
