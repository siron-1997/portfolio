import { lazy, Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Ocean from './Ocean'
import Star from './Star'
import Rain from './Rain'
import s from '@styles/home/Portal.module.css'

const ModelComponent = lazy(() => import('./Model'))

export default function Portal () {
    const portalRef = useRef()
    // console.log(portalRef)

    useEffect(() => {
        console.log(portalRef.current)
    }, [])

    return (
        <div className={s.portal} ref={portalRef}>
            <Suspense fallback='loading...'>
                <Canvas
                    camera={{
                        position: [1, 1, 8]
                    }}
                    className={s.canvas}
                >
                    <directionalLight
                        color={'0x0064b5'}
                        intensity={2}
                        position={[50, 50, 50]}
                        castShadow
                    />
                    <ModelComponent />
                    <Ocean />
                    <Star />
                </Canvas>
            </Suspense>
            <Rain />
        </div>
    )
}