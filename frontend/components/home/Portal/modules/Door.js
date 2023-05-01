import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, useHelper } from '@react-three/drei'
import { MathUtils, PointLightHelper, MeshBasicMaterial, Group, BackSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' 
import gsap from 'gsap'

export default function Door() {
    const doorRef = useRef(null)
    const pointLightRef = useRef(null)
    const pointLightHelper = useHelper(pointLightRef, PointLightHelper, 1)
    const roomTexture = useTexture('images/textures/gradient_bluish_purple.png')

    const scale = 0.02

    const roomMat = new MeshBasicMaterial({
        // color: '#512173',
        side: BackSide,
        // map: roomTexture
    })

    useFrame((state, delta) => {
        state.scene.children.forEach(child => {
            if (child instanceof Group && child.name === 'Door') {
                child.children.forEach(c => {
                    if (c instanceof Group && c.name === 'door container') {
                        if (c.rotation.y <= MathUtils.degToRad(100)) c.rotation.y += 0.01
                    }
                })
            }
        })
    })


    useEffect(() => {
        const door = doorRef.current
        const doorContainer = new Group()
        doorContainer.name = 'door container'
        doorContainer.position.set(1.2, 0, 5.9)
    
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
    
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)
        gltfLoader.load(
            'models/gltf/door.glb',
            gltf => {
                const children = [...gltf.scene.children]
                children.forEach(child => {
                    if (door.children.length < 5) {
                        switch (child.name) {
                            case 'room':
                                roomMat.map = child.material.map
                                child.material = roomMat
                                child.material.needsUpdate = true
                                child.visible = true
                                door.add(child)
                                break
                            case 'handle':
                            case 'door':
                                child.position.set(- doorContainer.position.x, doorContainer.position.y, - doorContainer.position.z)
                                doorContainer.add(child)
                                door.add(doorContainer)
                                break
                            default:
                                door.add(child)
                                break
                        }
                    }
                })
            }
        )
        pointLightHelper.current.visible = false
    }, [])

    return (
        <group
            ref={doorRef}
            name='Door'
            scale={[ scale, scale, scale ]}
            rotation-y={ MathUtils.degToRad(- 90) }
            position={[ - 3.6, 0, 4.2 ]}
        >
            <pointLight
                ref={pointLightRef}
                power={50}
                color={'#ccac61'}
                distance={0.8}
                decay={1.2}
                position={[ 10, 31, 0 ]}
            />
        </group>
    )
}