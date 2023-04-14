import { Color, MeshStandardMaterial } from 'three'

const roughness = 0.45

const treeMat = new MeshStandardMaterial({
    color: new Color(),
    roughness: roughness,
    name: 'Tree'
})

const leavesMat_1 = new MeshStandardMaterial({
    color: new Color(),
    roughness: roughness,
    name: 'Leaves_1'
})

const leavesMat_2 = new MeshStandardMaterial({
    color: new Color(),
    roughness: roughness,
    name: 'Leaves_2'
})

const leavesMat_3 = new MeshStandardMaterial({
    color: new Color(),
    roughness: roughness,
    name: 'Leaves_3'
})

const leavesMat_5 = new MeshStandardMaterial({
    color: new Color(),
    roughness: roughness,
    name: 'Leaves_5'
})

export { treeMat, leavesMat_1, leavesMat_2, leavesMat_3, leavesMat_5 }