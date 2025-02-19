"use client"

import { useRef, useEffect, useState } from "react"

export function useAudio(src: string) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    audio.current = new Audio(src)
    audio.current.onerror = () => {
      setError(`Failed to load audio: ${src}`)
      console.error(`Failed to load audio: ${src}`)
    }
    return () => {
      if (audio.current) {
        audio.current.onerror = null
      }
    }
  }, [src])

  const play = () => {
    if (audio.current) {
      audio.current.currentTime = 0
      audio.current.play().catch((err) => {
        setError(`Failed to play audio: ${err.message}`)
        console.error(`Failed to play audio: ${err.message}`)
      })
    }
  }

  return { play, error }
}

