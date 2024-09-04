import { usePlayer } from "./usePlayer"

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
        <div>
            Player
        </div>
    )
}