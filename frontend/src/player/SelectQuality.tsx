import { EnumPlayerQuality } from "./playertypes"

const QUALITIES:EnumPlayerQuality = [
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
    return (
    <div>
      <button>{currentValue}</button>
    </div>
    )
}