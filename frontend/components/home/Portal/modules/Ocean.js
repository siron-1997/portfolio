import { useRef, useMemo, useEffect } from 'react'
import { extend, useThree, useLoader, useFrame  } from '@react-three/fiber'
import { TextureLoader, PlaneGeometry, RepeatWrapping, Vector3, MathUtils, Clock } from 'three'
import { Water } from 'three/examples/jsm/objects/Water'

extend({ Water })

// #98BFC7
// default 0xeb8934 0x0064b5

export default function Ocean({ currentTime, visible }) {
    const waterRef = useRef()
    const gl = useThree(state => state.gl)
    const waterNormals = useLoader(
        TextureLoader,
        'images/textures/waternormals.jpg'
    )
    waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping
    // const sunColor = currentTime === 'evening' ? 
    const geom = useMemo(() => new PlaneGeometry(15, 15))
    const config = useMemo(() => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals,
        sunDirection: new Vector3(),
        sunColor: '#98BFC7',
        waterColor: '#01DFD7',
        distortionScale: 0.35,
        fog: true,
        format: gl.encoding,
    }), [waterNormals])

    useFrame((state, delta) => {
        waterRef.current.material.uniforms['time'].value += delta * 0.4
    })

    return (
        <group name='water' visible={visible}>
            <water
                ref={waterRef}
                args={[geom, config]}
                rotation-x={MathUtils.degToRad(- 90)}
                name={'my ocean'}    
            />
        </group>
    )
}