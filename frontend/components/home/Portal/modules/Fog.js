import { useWindowSize } from '@/utils/hooks'

export default function Fog({ humidity, color }) {
    const { width } = useWindowSize()

    return (
        <fog
            attach="fog"
            color={color}
            near={width < 768 ? 35 : 4}
            far={width < 768 ? 40 : 115 - humidity}
        />
    )
}