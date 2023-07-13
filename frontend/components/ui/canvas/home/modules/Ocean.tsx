import React, { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame, Object3DNode } from '@react-three/fiber'
import {
    Texture,
    TextureLoader,
    PlaneGeometry,
    RepeatWrapping,
    Vector3,
    WebGLRenderer,
    MathUtils
} from 'three'
import { Water } from 'three/examples/jsm/objects/Water'

extend({ Water })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            water: Object3DNode<Water, typeof Water>
        }
    }
}

type Props = {
    visible: boolean
}
type WaterConfig = {
    textureWidth: number
    textureHeight: number
    waterNormals: Texture
    sunDirection: Vector3
    sunColor: string
    waterColor: string
    distortionScale: number
    fog: boolean
    format: WebGLRenderer
}

const Ocean: React.FC<Props> = ({ visible }) => {
    const waterRef = useRef<Water | null>(null)
    const gl = useThree(state => state.gl)

    const waterNormals = useLoader(
        TextureLoader,
        'images/textures/waternormals.jpg'
    )
    waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping

    const geom: PlaneGeometry = useMemo(() => new PlaneGeometry(15, 15), [])
    const config: WaterConfig = useMemo(() => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals,
        sunDirection: new Vector3(),
        sunColor: '#98BFC7',
        waterColor: '#01DFD7',
        distortionScale: 1.6,
        fog: true,
        format: gl,
    }), [waterNormals, gl])

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

export default Ocean