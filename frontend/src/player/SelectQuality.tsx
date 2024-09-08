import { EnumPlayerQuality } from "./playertypes"
import { useOutside } from "@/hooks/useOutside"
import { ChevronUp } from 'lucide-react'
import cn from 'clsx'

const QUALITIES: EnumPlayerQuality[] = [
    EnumPlayerQuality.original,
    EnumPlayerQuality["1080p"],
    EnumPlayerQuality["720p"],
    EnumPlayerQuality["480p"],
    EnumPlayerQuality["360p"]
]
interface IProps {
    currentValue: EnumPlayerQuality
    onChange: (quality: EnumPlayerQuality) => void
}

export function SelectQuality({ currentValue, onChange }: IProps) {
    const { isShow, ref, setIsShow } = useOutside(false)

    return (
        <div className="relative"
            ref={ref}>
            <button
                onClick={() => setIsShow(!isShow)}
                className='flex items-center gap-1 hoverPrimary'>
                {currentValue}
                <ChevronUp />
            </button>
            {isShow && (
                <ul
                    className='bg-dark-600 py-2 px-4 rounded absolute bottom-full right-0 z-10 mb-2'>
                    {QUALITIES.map(quality => (
                        <li key={quality}
                            className='mb-1'>
                            <button
                                onClick={() => {
                                    onChange(quality)
                                    setIsShow(false)
                                }}
                                className={cn('flex items-center gap-1 hoverPrimary', {
                                    'font-bold text-primary': currentValue === quality
                                })}
                            >
                                {currentValue === quality && <span>•</span>} {quality}
                            </button>
                        </li>
                    ))
                    }
                </ul>
            )}
        </div>
    )
}