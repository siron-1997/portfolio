import { useFrame } from '@react-three/fiber'

export default function Lightning() {
    useFrame((state, delta) => {
        state.scene.children.forEach(child => {
            if (child.name === 'lightning') {
                if (Math.random() > 0.93 || child.power > 100) {
                    if (child.power < 100) {
                        child.position.set(
                          Math.random() * 400,
                          300 + Math.random() * 200,
                          100
                        )
                    } 
                    child.power = 50 + Math.random() * 500
                }
            }
        })
    })

    return (
        <pointLight
            color='0x062d89'
            intensity={30}
            distance={500}
            decay={1.7}
            position={[- 200, 300, 100]}
            name='lightning'
            castShadow
        />
    )
}