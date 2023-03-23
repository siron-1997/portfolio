import { useGLTF } from '@react-three/drei'

export default function Model() {
    const model = useGLTF("http://localhost:3000/models/gltf/mountain.glb")
    const children = model.scene.children

    children.forEach((child) => {
        if (child.name === 'Plane') {
            child.children.forEach(c => {
                c.castShadow = true
                c.receiveShadow = true
                
            })
        } else {
            child.castShadow = true
            child.receiveShadow = true
        }
    })

    return <primitive object={model.scene} />
}