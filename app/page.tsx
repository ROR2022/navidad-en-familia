'use client'

import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { toast, Toaster } from 'sonner'
import { navidad, type EpisodeItem } from '@/data/navidad'
import { EpisodeModal } from '@/components/streaming/EpisodeModal'
import { EpisodeRow } from '@/components/streaming/EpisodeRow'
import { Footer } from '@/components/streaming/Footer'
import { CastRow } from '@/components/streaming/CastRow'
import { MessageRow } from '@/components/streaming/MessageRow'
import { PostCredits } from '@/components/streaming/PostCredits'
import { RecommendationRow } from '@/components/streaming/RecommendationRow'
import { SearchIntro } from '@/components/streaming/SearchIntro'
import { SeriesHero } from '@/components/streaming/SeriesHero'
import { StreamingNavbar } from '@/components/streaming/StreamingNavbar'

export default function Page() {
  const [phase, setPhase] = useState<1 | 2>(1)
  const [episode, setEpisode] = useState<EpisodeItem | null>(null)

  const openEpisodes = useCallback(() => {
    document.getElementById('episodios')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: navidad.title,
          text: navidad.tagline,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        toast.success('Enlace copiado. Compártelo con la familia.')
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      toast.error('No fue posible compartir todavía.')
    }
  }

  const playEpisode = () => {
    setEpisode(null)
    toast('Este episodio lo vivimos juntos ✦')
  }

  return (
    <main className="app-shell">
      <Toaster theme="dark" position="top-center" />
      <AnimatePresence mode="wait">
        {phase === 1 ? (
          <motion.div
            key="search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45 }}
          >
            <SearchIntro onSelect={() => setPhase(2)} />
          </motion.div>
        ) : (
          <motion.div
            key="series"
            className="series-page"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.42 }}
          >
            <StreamingNavbar />
            <SeriesHero onPlay={openEpisodes} onInfo={openEpisodes} />
            <div className="content-wrap">
              <CastRow />
              <EpisodeRow onEpisode={setEpisode} />
              <MessageRow />
              <RecommendationRow />
              <PostCredits
                onRestart={() => {
                  setEpisode(null)
                  setPhase(1)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                onShare={share}
              />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <EpisodeModal episode={episode} onClose={() => setEpisode(null)} onPlay={playEpisode} />
    </main>
  )
}
