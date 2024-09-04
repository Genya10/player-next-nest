'use client'

import { useRef, useState } from "react"
import { EnumPlayerQuality, HTMLCustomVideoElement } from "./playertypes"

const SKIP_SECONDS_TIME = 15

export function usePlayer(){
    console.log('usePlayer function is called')
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

        playerRef.current.src = '/'
        playerRef.current.play()
        setIsPlaying(true)
    }

    return {
        playerRef,
        isPlaying,
        quality,
        togglePlayPause,
        skipTime,
        toggleFullScreen,
        changeQuality
    }
}