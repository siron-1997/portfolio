import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Color, Mesh, MeshStandardMaterial } from 'three'

export default function Model({ timePoint, intensity }) {
    const model = useGLTF('models/gltf/mountain.glb')
    model.scene.name = 'mountain'

    const { scene } = useThree()
    const environment = scene.environment

    const createMaterial = (color, environment, name) => {
        const material = new MeshStandardMaterial({
            color: color,
            envMap: environment,
            envMapIntensity: intensity,
            roughness: 0.45,
            name: name
        })
        return material
    }

    model.scene.children.forEach(child => {
        if (child instanceof Mesh) {
            const matColor = child.material.color
            const color = new Color(matColor.r, matColor.g, matColor.b)
            child.material = createMaterial(color, environment, child.material.name)
            child.material.needsUpdate = true
            child.castShadow = true
        } else {
            child.children.forEach(mesh => {
                const matColor = mesh.material.color
                const color = new Color(matColor.r, matColor.g, matColor.b)
                mesh.material = createMaterial(color, environment, mesh.material.name)
                mesh.material.needsUpdate = true
                mesh.receiveShadow = true
            })
        }
    })

    return <primitive object={model.scene} />
}