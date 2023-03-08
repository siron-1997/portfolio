import { MathUtils } from 'three'

export default function TestObjects() {
    console.log(MathUtils.degToRad(45))
    return (
        <group>
            <mesh position={[10, 5, 0]}>
                <boxBufferGeometry args={[10, 10, 10]} />
                <meshStandardMaterial color={'red'} />
            </mesh>
            <mesh position={[-10, 5, 0]}>
                <boxBufferGeometry args={[10, 10, 10]} />
                <meshStandardMaterial color={'blue'} />
            </mesh>
            <mesh rotation-x={MathUtils.degToRad(- 90)}>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color={'green'} />
            </mesh>
        </group>
    )
}