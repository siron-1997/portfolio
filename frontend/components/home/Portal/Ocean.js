import { useRef, useMemo, useEffect } from 'react'
import { extend, useThree, useLoader, useFrame  } from '@react-three/fiber'
import { TextureLoader, PlaneGeometry, RepeatWrapping, Vector3, MathUtils, Clock } from 'three'
import { Water } from 'three/examples/jsm/objects/Water'

extend({ Water })

export default function Ocean() {
    const waterRef = useRef()
    const gl = useThree(state => state.gl)
    const waterNormals = useLoader(
        TextureLoader,
        'images/textures/waternormals.jpg'
    )
    waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping
    const geom = useMemo(() => new PlaneGeometry(15, 15))
    const config = useMemo(() => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals,
        sunDirection: new Vector3(),
        sunColor: 0xeb8934,
        waterColor: 0x0064b5,
        distortionScale: 0.15,
        fog: false,
        format: gl.encoding,
    }), [waterNormals])

    useFrame((state, delta) => {
        waterRef.current.material.uniforms['time'].value += delta
    })

    return (
        <water
            ref={waterRef}
            args={[geom, config]}
            rotation-x={MathUtils.degToRad(- 90)}
            position-y={- 0.0003}
            name={'my ocean'}    
        />
    )
}