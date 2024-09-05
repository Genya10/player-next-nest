import { Maximize, RotateCw } from "lucide-react"
import { usePlayer } from "./usePlayer"
import { Play, Pause, RotateCcw} from 'lucide-react'

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
              src='/'
            />
            <div className="flex items-center justify-between p-3 bg-[#506f7d]">
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
                <button onClick={toggleFullScreen}>
                 <Maximize/>
                </button>
               </div>
            </div>
        </div>
    )
}