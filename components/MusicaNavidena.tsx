'use client'

import { Pause, Play, Volume2 } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { navidad } from '@/data/navidad'

export function MusicaNavidena() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  const play = useCallback(async () => {
    if (!audioRef.current) return
    setError(false)
    try {
      await audioRef.current.play()
    } catch {
      setPlaying(false)
      setError(true)
    }
  }, [])

  useEffect(() => {
    if (!navidad.music.enabled) return
    const audio = audioRef.current
    if (audio) audio.volume = navidad.music.volume
    const startOnInteraction = () => {
      document.removeEventListener('click', startOnInteraction, true)
      void play()
    }
    document.addEventListener('click', startOnInteraction, true)
    return () => document.removeEventListener('click', startOnInteraction, true)
  }, [play])

  if (!navidad.music.enabled) return null

  return (
    <div className="music-control">
      <audio
        ref={audioRef}
        src={navidad.music.src}
        loop
        preload="none"
        onPlay={() => { setPlaying(true); setError(false) }}
        onPause={() => setPlaying(false)}
        onError={() => { setPlaying(false); setError(true) }}
      />
      <button type="button" onClick={() => audioRef.current?.paused ? void play() : audioRef.current?.pause()} aria-label={playing ? 'Pausar música navideña' : 'Reproducir música navideña'}>
        {playing ? <Pause size={17} /> : <Play size={17} />}
        <span>{playing ? 'Pausar música' : 'Música navideña'}</span>
        {!playing && !error && <Volume2 size={15} />}
      </button>
      {error && <p role="status">No se pudo reproducir la música. Puedes reintentarlo.</p>}
    </div>
  )
}
