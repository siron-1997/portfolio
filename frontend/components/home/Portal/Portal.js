import { lazy, Suspense, ACESFilmicToneMapping, LinearEncoding } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Ocean from './Ocean'
import Star from './Star'
import Rain from './Rain'
import Lightning from './Lightning'
import SunLight from './SunLight'
import s from '@styles/home/Portal.module.css'

const ModelComponent = lazy(() => import('./Model'))

export default function Portal () {
    return (
        <div className={s.portal}>
            <Suspense fallback='loading...'>
                <Canvas
                    dpr={[ 1, 2 ]}
                    gl={{
                        antialias: true,
                        toneMapping: ACESFilmicToneMapping,
                        outputEncoding: LinearEncoding
                    }}
                    camera={{
                        position: [1.5, 1, 10],
                        fov: 45,
                        near: 1,
                        far: 200,
                    }}
                    className={s.canvas}
                    shadows
                >
                    <SunLight />
                    <ModelComponent />
                    <Ocean />
                    <Star />
                    <Lightning />
                </Canvas>
            </Suspense>
            <Rain />
        </div>
    )
}