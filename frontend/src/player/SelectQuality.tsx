import { EnumPlayerQuality } from "./playertypes"
import { useOutside } from "@/hooks/useOutside"

const QUALITIES:EnumPlayerQuality[] = [
    EnumPlayerQuality.original,
    EnumPlayerQuality["1080p"],
    EnumPlayerQuality["720p"],
    EnumPlayerQuality["480p"],
    EnumPlayerQuality["360p"]
]

interface IProps {
    currentValue: EnumPlayerQuality
    onChange:(quality: EnumPlayerQuality) => void
}

export function SelectQuality({currentValue, onChange}: IProps){
    const {isShow, ref, setIsShow} = useOutside(false)

    return (
    <div>
      <button>{currentValue}</button>
      <ul ref={ref}>
        {QUALITIES.map(quality => (
            <li key={quality}>
             <button
                onClick={()=> {
                    onChange(quality)
                    setIsShow(false)
                }}
           >
             </button>
            </li>
        ))
        }
      </ul>
    </div>
    )
}