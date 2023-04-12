import { BufferGeometry, BufferAttribute, PointsMaterial, Points } from 'three'
import { useIsIos } from '@/utils/hooks'

export default function Star({ opacity }) {
    const isIos = useIsIos()

    const starCount = 9500
    const starGeom = new BufferGeometry()
    const positions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = Math.random() * 400 - 200
        positions[i + 1] = Math.random() * 500 - 250
        positions[i + 2] = Math.random() * 50 -100
    }
    starGeom.setAttribute('position', new BufferAttribute(positions, 3))

    const starMaterial = new PointsMaterial({
        color: '#fff',
        size: 0.35,
        transparent: true,
        opacity: isIos ? 100 - opacity : 1 - opacity / 100,
        fog: false
    })

    const star = new Points(starGeom, starMaterial)
    star.name = 'star'

    return (
        <group renderOrder={1}>
            <primitive object={star} />
        </group>
    )
}