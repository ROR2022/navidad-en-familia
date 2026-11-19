import { navidad } from '@/data/navidad'

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-brand">✦ {navidad.title}</span>
      <span>Hecho con amor para nuestra familia.</span>
      <span className="footer-copy">© 2026 · Una historia que seguimos escribiendo juntos.</span>
    </footer>
  )
}
