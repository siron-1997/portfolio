import { useEffect, useState } from 'react'
import { RepeatWrapping, PlaneGeometry, MeshLambertMaterial, MeshBasicMaterial, MeshStandardMaterial, Mesh, Group, MathUtils } from 'three'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

export default function BrokenCloud({ opacity, intensity }) {
    const [isIos, setIsIos] = useState()
    const { scene } = useThree()

    const group = new Group()
    const texture = useTexture('/images/textures/broken_cloud.png', texture => {
        texture.wrapS = texture.wrapT = RepeatWrapping
    })
    const geom = new PlaneGeometry(80, 80)
    const mat = new MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: isIos ? opacity : opacity / 100,
        envMap: scene.environment,
        envMapIntensity: intensity,
        depthTest: true,
        depthWrite: true
    })
    const cloud = new Mesh(geom, mat)
    cloud.position.set(0, - 40, - 10)
    group.rotation.x = MathUtils.degToRad(75)
    group.add(cloud)

    useEffect(() => setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream), [isIos])

    return <primitive object={group} name='broken-cloud' />
}