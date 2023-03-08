import { useGLTF, useCubeTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export default function Model({ file }) {
    const cubeTexture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/images/environments/standard-cube-map/' }
    )

    const model = useGLTF(file)
    const children = [...model.scene.children]

    for (const child of children) {
        if (child.material instanceof MeshStandardMaterial) {
            child.material.envMap = cubeTexture
            child.material.envMapIntensity = 0.5
        }
    }

    return <primitive object={model.scene} />
}