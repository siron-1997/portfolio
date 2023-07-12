import React from 'react'
import { BufferGeometry, BufferAttribute, PointsMaterial, Points } from 'three'
import { useIsIos } from '@/utils/hooks'

type CustomProps = {
    opacity: number,
    timePoint: 'evening' | 'night' | 'lunch'
}

const Star: React.FC<CustomProps> = ({ opacity, timePoint }) =>  {
    const isIos = useIsIos()

    const starCount: number = 9500
    const starGeom: BufferGeometry = new BufferGeometry()
    const positions: Float32Array = new Float32Array(starCount * 3)

    for (let i: number; i < starCount * 3; i += 3) {
        positions[i] = Math.random() * 400 - 200
        positions[i + 1] = Math.random() * 500 - 250
        positions[i + 2] = Math.random() * 50 -100
    }
    starGeom.setAttribute('position', new BufferAttribute(positions, 3))

    const starMaterial: PointsMaterial = new PointsMaterial({
        color: '#fff',
        size: timePoint === 'lunch' ? 0 : 0.35,
        transparent: true,
        opacity: isIos ? 100 - opacity :  timePoint === 'night' ? 1 - (opacity / 100) : timePoint === 'evening' ? 0.4 : 0,
        fog: false
    })

    const star: Points = new Points(starGeom, starMaterial)
    star.name = 'star'

    return (
        <group renderOrder={1}>
            <primitive object={star} />
        </group>
    )
}

export default Star