'use client'

import { useRef, useState, useEffect} from "react"
import { EnumPlayerQuality, HTMLCustomVideoElement } from "./playertypes"

const SKIP_SECONDS_TIME = 15

export function usePlayer(){

    const playerRef = useRef<HTMLCustomVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [quality, setQuality] = useState(EnumPlayerQuality['1080p'])

    const togglePlayPause = () => {
        if(isPlaying){
            playerRef.current?.pause()
        } else {
            playerRef.current?.play()
        }
        setIsPlaying(!isPlaying)
    }

    const skipTime = (type?: 'forward' | 'backward') =>{
      if(!playerRef.current?.currentTime) return

      if(type === 'forward'){
        playerRef.current.currentTime += SKIP_SECONDS_TIME
      } else {
        playerRef.current.currentTime -= SKIP_SECONDS_TIME
      }
    }

    const toggleFullScreen = () => {
        if(!playerRef.current) return

        if(playerRef.current.requestFullscreen){
            playerRef.current.requestFullscreen()
        } else if(playerRef.current?.mozRequestFullScreen){
            playerRef.current.mozRequestFullScreen()
        } else if(playerRef.current?.webkitRequestFullScreen){
            playerRef.current.webkitRequestFullScreen()
        } else if(playerRef.current.msRequestFullScreen){
            playerRef.current.msRequestFullScreen()
        }
    }

    const changeQuality = (quality: EnumPlayerQuality) => {
        if(!playerRef.current) return 
        setQuality(quality)

        playerRef.current.src = '/scorpions.mp4'
        playerRef.current.play()
        setIsPlaying(true)
    }

    const [currentTime, setCurrentTime] = useState(0)
    const [videoTime, setVideoTime] = useState(0)
    const [progress, setProgress] = useState(0)

    const updateProgress = () => {
        if (!playerRef.current) return
        const currentTime = playerRef.current.currentTime
        const duration = playerRef.current.duration
        setCurrentTime(currentTime)
        setProgress((currentTime / duration) * 100)
    }

    useEffect(() => {
        if (!playerRef.current) return
        setVideoTime(playerRef.current.duration) // Сохраним общее время видео

        // Обновляем прогресс при каждом обновлении времени
        playerRef.current.addEventListener('timeupdate', updateProgress)

        // Чистим слушатель при размонтировании компонента
        return () => {
            playerRef.current?.removeEventListener('timeupdate', updateProgress)
        }
    }, [playerRef.current?.duration])

    return {
        playerRef,
        isPlaying,
        quality,
        togglePlayPause,
        skipTime,
        toggleFullScreen,
        changeQuality,
        progress,
        currentTime,
        videoTime
    }
}