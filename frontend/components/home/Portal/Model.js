import { useGLTF } from '@react-three/drei'
import { MeshLambertMaterial, Color, Mesh } from 'three'

export default function Model({ currentTime }) {
    const model = useGLTF('models/gltf/mountain.glb')
    model.scene.name = 'mountain'

    model.scene.children.forEach(child => {
        if (child instanceof Mesh) {
            const matColor = child.material.color
            const color = new Color(matColor.r, matColor.g, matColor.b)
            const mat = new MeshLambertMaterial({ color: color })
            mat.name = child.material.name
            child.material = mat
            child.material.needsUpdate = true
            child.castShadow = true
        } else {
            child.children.forEach(mesh => {
                const matColor = mesh.material.color
                const color = new Color(matColor.r, matColor.g, matColor.b)
                const mat = new MeshLambertMaterial({ color: color })
                mat.name = mesh.material.name
                mesh.material = mat
                mesh.material.needsUpdate = true
                mesh.receiveShadow = true
                mesh.castShadow = true
            })
        }
    })

    return <primitive object={model.scene} />
}