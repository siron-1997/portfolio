import { useWindowSize } from '@/utils/hooks'

export default function Fog({ rain, color }) {
    const { width } = useWindowSize()
    
    rain && <fog
        attach="fog"
        color={color}
        near={width < 768 ? 35 : 10}
        far={width < 768 ? 40 : 25}
    />
}