import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { PointLightHelper } from 'three'

export default function Lightning() {
    const pointLightRef = useRef()

    const pointLightHelper = useHelper(pointLightRef, PointLightHelper, 100)

    useFrame((state, delta) => {
        state.scene.children.forEach(child => {
            if (child.name === 'lightning') {
                if (Math.random() > 0.93 || child.power > 100) {
                    if (child.power < 100) {
                        // child.position.set(
                        //   Math.random() * 400,
                        //   300 + Math.random() * 200,
                        //   5
                        // )
                        child.position.set(
                            (Math.random() * 1000) - 500,
                            // 300 + Math.random() * 100,
                            5,
                            Math.random() * 10
                        )
                    } 
                    child.power = 50 + Math.random() * 500
                }
            }
        })
    })

    useEffect(() => {
        pointLightHelper.current.visible = true
    }, [])

    return (
        <pointLight
            color='0x062d89'
            intensity={100}
            distance={300}
            decay={3}
            position={[- 20, 70, - 10]}
            name='lightning'
            castShadow
            ref={pointLightRef}
        />
    )
}