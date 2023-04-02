import { RepeatWrapping, PlaneGeometry, MeshLambertMaterial, Mesh, Group, MathUtils } from 'three'
import { useTexture } from '@react-three/drei'

export default function Cloud({ density }) {
    const group = new Group()
    const texture = useTexture('/images/textures/smoke.png', texture => {
        texture.wrapS = texture.wrapT = RepeatWrapping
    })
    const geom = new PlaneGeometry(500, 500)
    const mat = new MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: density * 0.1
    })
    const cloud1 = new Mesh(geom, mat)

    cloud1.position.y = 10
    cloud1.position.z = - 50
    cloud1.rotation.x = MathUtils.degToRad(80)
    cloud1.rotation.z = MathUtils.degToRad(- 90)

    group.add(cloud1)

    return <primitive object={group} name='cloud' />
}