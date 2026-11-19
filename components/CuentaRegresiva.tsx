'use client'

import { useEffect, useState } from 'react'
import { navidad } from '@/data/navidad'

type Remaining = { days: number; hours: number; minutes: number; seconds: number; finished: boolean }

function getRemaining(): Remaining {
  const distance = new Date(navidad.countdownDate).getTime() - Date.now()
  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true }
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
    finished: false,
  }
}

const pad = (value: number) => value.toString().padStart(2, '0')

export function CuentaRegresiva() {
  const [remaining, setRemaining] = useState<Remaining>(() => getRemaining())

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  if (remaining.finished) return <p className="countdown-finished">Hoy celebramos juntos ✦</p>

  return (
    <div className="countdown" aria-live="polite">
      <div><strong>{remaining.days}</strong><span>días</span></div>
      <b>:</b>
      <div><strong>{pad(remaining.hours)}</strong><span>horas</span></div>
      <b>:</b>
      <div><strong>{pad(remaining.minutes)}</strong><span>min</span></div>
      <b>:</b>
      <div><strong>{pad(remaining.seconds)}</strong><span>seg</span></div>
    </div>
  )
}
