import { getFogColor } from '@/utils/environment'
import { useWindowSize } from '@/utils/hooks'
import { BREAK_POINT_MB } from '@/assets/break-points'

export default function Fog({ humidity = 0, timePoint }) {
    const { width } = useWindowSize()
    const color = getFogColor(timePoint)

    return (
        <fog
            attach='fog'
            color={color}
            near={width > BREAK_POINT_MB ? 5 : 8} // 湿度に応じて霧の最少距離を制御
            far={width > BREAK_POINT_MB ? 115 - humidity : 145 - humidity} // 湿度に応じて霧の最大距離を制御
        />
    )
}