import { useRef, useState } from "react"
import { EnumPlayerQuality } from "./playertypes"

const SKIP_SECONDS_TIME = 15

export function Player(){
    const playerRef = useRef<HTMLVideoElement>(null)
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

    return(
        <div>
            Player
        </div>
    )
}