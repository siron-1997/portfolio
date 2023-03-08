import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'
import s from '@styles/Canvas.module.css'

const cameraSettings = {
    fov: 45,
    near: 1,
    far: 10000,
    position: [3200, 2000, 2000]
}

export default function CanvasHome() {
    return (
        <div className={s.canvas}>
            <Canvas camera={cameraSettings}>
                <Experience />
            </Canvas>
        </div>
    )
}