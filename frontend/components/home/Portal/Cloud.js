import { useEffect, useState } from 'react'
import { RepeatWrapping, PlaneGeometry, MeshLambertMaterial, Mesh, Group, MathUtils } from 'three'
import { useTexture } from '@react-three/drei'

// const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

export default function Cloud({ opacity }) {
    const [isIos, setIsIos] = useState()

    const group = new Group()
    const texture = useTexture('/images/textures/smoke.png', texture => {
        texture.wrapS = texture.wrapT = RepeatWrapping
    })
    const geom = new PlaneGeometry(250, 250)
    const mat = new MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: isIos ? opacity : opacity / 100,
        depthTest: true,
        depthWrite: true
    })
    const cloud1 = new Mesh(geom, mat)

    cloud1.position.y = 5.3
    cloud1.position.z = - 10
    cloud1.rotation.x = MathUtils.degToRad(75)
    cloud1.rotation.z = MathUtils.degToRad(- 90)

    group.add(cloud1)

    useEffect(() => setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream), [isIos])

    return <primitive object={group} name='cloud' />
}