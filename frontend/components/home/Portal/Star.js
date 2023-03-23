import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Star() {
    const starCount = 9500
    const starGeom = new THREE.BufferGeometry()
    const positions = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = Math.random() * 400 - 200
        positions[i + 1] = Math.random() * 500 - 250
        positions[i + 2] = Math.random() * 400 - 200
    }
    starGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.2,
        transparent: true
    })

    const star = new THREE.Points(starGeom, starMaterial)
    star.name = 'star'

    useFrame((state, delta) => {
    })

    return <primitive object={star} />
}