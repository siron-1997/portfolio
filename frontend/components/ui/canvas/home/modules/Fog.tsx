import React from 'react'
import { getFogColor } from '@/utils/environment'
import { useWindowSize } from '@/utils/hooks'
import { BREAK_POINT_MB } from '@/assets/break-points'

type CustomProps = {
    humidity: number,
    timePoint: 'evening' | 'night' | 'lunch'
}

const Fog: React.FC<CustomProps> = ({ humidity = 0, timePoint }) => {
    const { width } = useWindowSize()
    const color = getFogColor(timePoint)

    return (
        <fog
            attach='fog'
            color={color}
            near={width > BREAK_POINT_MB ? 4 : 5} // 湿度に応じて霧の最少距離を制御
            far={width > BREAK_POINT_MB ? 140 - humidity : 160 - humidity} // 湿度に応じて霧の最大距離を制御
        />
    )
}

export default Fog