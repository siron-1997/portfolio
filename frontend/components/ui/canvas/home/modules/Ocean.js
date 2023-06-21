import { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader, PlaneGeometry, RepeatWrapping, Vector3, MathUtils } from 'three'
import { Water } from 'three/examples/jsm/objects/Water'

extend({ Water })

export default function Ocean({ visible }) {
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
        sunColor: '#98BFC7',
        waterColor: '#01DFD7',
        distortionScale: 1.6,
        fog: true,
        format: gl.encoding,
    }), [waterNormals])

    useFrame((_, delta) => {
        waterRef.current.material.uniforms['time'].value += delta * 0.2
    })

    return (
        <group name='water' visible={visible} position-y={- 0.095}>
            <water
                ref={waterRef}
                args={[geom, config]}
                rotation-x={MathUtils.degToRad(- 90)}
                name={'my ocean'}    
            />
        </group>
    )
}