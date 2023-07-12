import { MeshStandardMaterial } from 'three'

type Materials = {
    [key: string]: MeshStandardMaterial
}

const roughness: number = 0.45

export const materials: Materials = {
    treeMat_1: new MeshStandardMaterial({ roughness: roughness, name: 'Tree_1' }),
    treeMat_2: new MeshStandardMaterial({ roughness: roughness, name: 'Tree_2' }),
    leavesMat_1: new MeshStandardMaterial({ roughness: roughness, name: 'Leaves_1' }),
    leavesMat_2: new MeshStandardMaterial({ roughness: roughness, name: 'Leaves_2' }),
    leavesMat_3: new MeshStandardMaterial({ roughness: roughness, name: 'Leaves_3' }),
    leavesMat_4: new MeshStandardMaterial({ roughness: roughness, name: 'Leaves_4' }),
    leavesMat_5: new MeshStandardMaterial({ roughness: roughness, name: 'Leaves_5' }),
    leavesMat_6: new MeshStandardMaterial({ roughness: roughness, name: 'Leaves_6' })
}