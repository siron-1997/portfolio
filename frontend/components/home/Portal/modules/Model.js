import { memo } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Mesh, MeshStandardMaterial } from 'three'
import { treeMat, leavesMat_1, leavesMat_2, leavesMat_3, leavesMat_5 } from '@assets/mountain-materials'


const Model = memo(({ envMapIntensity }) => {
    const model = useGLTF('models/gltf/mountain.glb')
    model.scene.name = 'mountain'

    const { scene } = useThree()
    const environment = scene.environment

    // 各マテリアルに環境マップと環境光を設定
    treeMat.envMap = leavesMat_1.envMap = leavesMat_2.envMap = leavesMat_3.envMap = leavesMat_5.envMap = environment
    treeMat.envMapIntensity = leavesMat_1.envMapIntensity = leavesMat_2.envMapIntensity = leavesMat_3.envMapIntensity = leavesMat_5.envMapIntensity = envMapIntensity

    const createMaterial = (color, environment, name) => {
        const material = new MeshStandardMaterial({
            color: color,
            envMap: environment,
            envMapIntensity: envMapIntensity,
            roughness: 0.45,
            name: name
        })
        return material
    }

    model.scene.children.forEach(child => {
        if (child instanceof Mesh) {
            if (child.material.name.match(/^Tree|^Three/)) {
                treeMat.color = child.material.color
                treeMat.needsUpdate = true
                child.material = treeMat
            }
            else if (child.material.name.match(/^Leaves_1/)) {
                leavesMat_1.color = child.material.color
                leavesMat_1.needsUpdate = true
                child.material = leavesMat_1
            }
            else if (child.material.name.match(/^Leaves_2/)) {
                leavesMat_2.color = child.material.color
                leavesMat_2.needsUpdate = true
                child.material = leavesMat_2
            }
            else if (child.material.name.match(/^Leaves_3/)) {
                leavesMat_3.color = child.material.color
                leavesMat_3.needsUpdate = true
                child.material = leavesMat_3
            }
            else if (child.material.name.match(/^Leaves_5/)) {
                leavesMat_5.color = child.material.color
                leavesMat_5.needsUpdate = true
                child.material = leavesMat_5
            }
            child.material.needsUpdate = true
            child.castShadow = true
        } else {
            child.children.forEach(mesh => {
                mesh.material = createMaterial(mesh.material.color, environment, mesh.material.name)
                mesh.material.needsUpdate = true
                mesh.receiveShadow = true
            })
        }
    })

    return (
        <group renderOrder={0} name='mountain'>
            <primitive object={model.scene} />
        </group>
    )
})

export default Model