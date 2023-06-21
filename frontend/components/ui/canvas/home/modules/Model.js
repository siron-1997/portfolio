import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Mesh, MeshStandardMaterial } from 'three'
import { materials } from '@assets/mountain-materials'
import { getEnvMapIntensity } from '@/utils/environment'

export default function Model({ currentWeathers, timePoint }) {
    const model = useGLTF('models/gltf/mountain.glb')
    model.scene.name = 'mountain'
    const children = [...model.scene.children]
    const { scene } = useThree()

    const currentWeather = currentWeathers.filter(w => 
        w.main === 'Clear' || w.main === 'Clouds' || w.main === 'Rain' || w.main === 'Drizzle' || w.main === 'Thunderstorm'
    )[0]

    const environment = scene.environment
    const envMapIntensity = getEnvMapIntensity(currentWeather, timePoint, 'model')

    // 環境マップと環境光を設定
    for (const key in materials) {
        materials[key].envMap = environment
        materials[key].envMapIntensity = envMapIntensity
    }

    /* マテリアル作成 */
    const createMaterial = (color, environment, name) => {
        const material = new MeshStandardMaterial({
            color: color,
            envMap: environment,
            envMapIntensity: envMapIntensity,
            roughness: 0.4,
            name: name
        })
        return material
    }

    children.forEach(child => {
        if (child instanceof Mesh) { // 木および葉
            switch (child.material.name) {
                case materials.leavesMat_1.name:
                    materials.leavesMat_1.color = child.material.color
                    materials.leavesMat_1.needsUpdate = true
                    child.material = materials.leavesMat_1
                    break
                case materials.leavesMat_2.name:
                    materials.leavesMat_2.color = child.material.color
                    materials.leavesMat_2.needsUpdate = true
                    child.material = materials.leavesMat_2
                    break
                case materials.leavesMat_3.name:
                    materials.leavesMat_3.color = child.material.color
                    materials.leavesMat_3.needsUpdate = true
                    child.material = materials.leavesMat_3
                    break
                case materials.leavesMat_4.name:
                    materials.leavesMat_4.color = child.material.color
                    materials.leavesMat_4.needsUpdate = true
                    child.material = materials.leavesMat_4
                    break
                case materials.leavesMat_5.name:
                    materials.leavesMat_5.color = child.material.color
                    materials.leavesMat_5.needsUpdate = true
                    child.material = materials.leavesMat_5
                    break
                case materials.leavesMat_6.name:
                    materials.leavesMat_6.color = child.material.color
                    materials.leavesMat_6.needsUpdate = true
                    child.material = materials.leavesMat_6
                    break
                default:
                    break
            }
            child.material.needsUpdate = true
            child.castShadow = true
            child.receiveShadow = true
        } else { // グラウンド
            child.children.forEach(mesh => {
                mesh.material = createMaterial(mesh.material.color, environment, mesh.material.name)
                mesh.material.needsUpdate = true
                mesh.castShadow = true
                mesh.receiveShadow = true
            })
        }
    })

    return (
        <group renderOrder={0} name='mountain'>
            <primitive object={model.scene} />
        </group>
    )
}