'use client'

import { Maximize, RotateCw } from "lucide-react"
import { usePlayer } from "./usePlayer"
import { Play, Pause, RotateCcw} from 'lucide-react'
import { SelectQuality } from "./SelectQuality"

export function Player(){
    const player = usePlayer()
    console.log('usePlayer result:', player)
    const {
        isPlaying,
        playerRef,
        changeQuality,
        quality,
        skipTime,
        togglePlayPause,
        toggleFullScreen
    } = usePlayer()
    
    return(
        <div className="max-w-xl mx-auto relative rounded-lg overflow-hidden">
            <video 
              ref={playerRef}
              className='w-full h-full object-cover'
              controls={false}
              src='/scorpions.mp4'
            />
            <div className="flex items-center justify-between p-3 bg-dark-700">
                <div>
                <button onClick={togglePlayPause}>
                 {isPlaying ? <Pause/> : <Play/>}
                </button> 
                <button onClick={()=> skipTime('backward')}>
                    <RotateCcw/>
                </button>
                <button onClick={()=> skipTime('forward')}>
                    <RotateCw/>
                </button>
                </div>
               <div>
                <SelectQuality currentValue={quality} onChange={changeQuality}/>
                <button onClick={toggleFullScreen}>
                 <Maximize/>
                </button>
               </div>
            </div>
        </div>
    )
}