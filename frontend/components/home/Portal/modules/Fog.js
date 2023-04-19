import { getFogColor } from '@/utils'
import { useWindowSize } from '@/utils/hooks'
import { BREAK_POINT_MOBILE } from '@/assets/break-points'

export default function Fog({ humidity = 0, timePoint }) {
    const { width } = useWindowSize()
    const color = getFogColor(timePoint)

    // 35, 40
    return (
        <fog
            attach='fog'
            color={color}
            near={width > BREAK_POINT_MOBILE ? 4 : 15}
            far={width > BREAK_POINT_MOBILE ? 115 - humidity : 140 - humidity}
        />
    )
}