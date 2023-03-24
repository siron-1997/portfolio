import { RepeatWrapping, PlaneGeometry, MeshLambertMaterial, Mesh, Group } from 'three'
import { useTexture } from '@react-three/drei'

export default function Cloud() {
    const group = new Group()
    const texture = useTexture('/images/textures/smoke.png', texture => {
        texture.wrapS = texture.wrapT = RepeatWrapping
    })
    const geom = new PlaneGeometry(500, 500)
    const mat = new MeshLambertMaterial({
        map: texture,
        transparent: true
    })

    for (let i = 0; i < 25; i ++) {
        const cloud = new Mesh(geom, mat)
        cloud.position.set(
            Math.random() * 800 - 400,
            200,
            Math.random() * 500 - 450
        )
        cloud.rotation.x = 1.16
        cloud.rotation.y = - 0.12
        cloud.rotation.z = Math.random() * 360
        cloud.material.opacity = 0.6
        group.add(cloud)
    }

    return <primitive object={group} name='cloud' />
}