'use client'

import { Maximize, RotateCw } from "lucide-react"
import { usePlayer } from "./usePlayer"
import { Play, Pause, RotateCcw } from 'lucide-react'
import { SelectQuality } from "./SelectQuality"
import { ProgressBar } from "./ProgressBar"

export function Player() {
    const player = usePlayer()
    console.log('usePlayer result:', player)
    const {
        isPlaying,
        playerRef,
        changeQuality,
        quality,
        skipTime,
        togglePlayPause,
        toggleFullScreen,
        progress,
        currentTime,
        videoTime
    } = usePlayer()

    return (
        <div className="max-w-4xl mx-auto relative rounded-lg overflow-hidden">
            <video
                ref={playerRef}
                className='w-full h-full aspect-video'
                controls={false}
                src='/scorpions.mp4#t=6'
                preload="metadata"
            />
            <div className="flex items-center justify-between p-3 bg-dark-700 relative">
                <ProgressBar progress={progress}/>
                <div className="flex items-center gap-3">
                    <button onClick={togglePlayPause}
                        className='hoverPrimary'>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                    <button 
                        onClick={() => skipTime('backward')}
                        className='hoverPrimary'>
                        <RotateCcw />
                    </button>
                    <button 
                        onClick={() => skipTime('forward')}
                        className='hoverPrimary'>
                        <RotateCw />
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <SelectQuality
                        currentValue={quality}
                        onChange={changeQuality}
                    />
                    <button onClick={toggleFullScreen}>
                        <Maximize />
                    </button>
                </div>
            </div>
        </div>
    )
}