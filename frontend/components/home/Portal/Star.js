import { BufferGeometry, BufferAttribute, PointsMaterial, Points } from 'three'

export default function Star() {
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
        color: 0xaaaaaa,
        size: 0.3,
        transparent: true
    })

    const star = new Points(starGeom, starMaterial)
    star.name = 'star'

    return <primitive object={star} />
}