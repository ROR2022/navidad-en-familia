import { Bell, ChevronDown, Search } from 'lucide-react'
import { navidad } from '@/data/navidad'

export function StreamingNavbar() {
  return (
    <header className="navbar">
      <a className="wordmark" href="#inicio">{navidad.title}</a>
      <nav aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#episodios">Episodios</a>
        <a href="#reparto">Reparto</a>
        <a href="#recomendaciones">Mi lista</a>
      </nav>
      <div className="nav-right">
        <button type="button" aria-label="Buscar"><Search /></button>
        <button type="button" aria-label="Notificaciones"><Bell /></button>
        <button className="avatar-mini" type="button" aria-label="Perfil familiar">♥</button>
        <ChevronDown className="nav-chevron" size={15} />
      </div>
    </header>
  )
}
