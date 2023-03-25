import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Loading } from '@components/etc'
import Ocean from './Ocean'
import Star from './Star'
import Rain from './Rain'
import Lightning from './Lightning'
import SunLight from './SunLight'
import Cloud from './Cloud'
import s from '@styles/home/Portal.module.css'

const ModelComponent = lazy(() => import('./Model'))

export default function Portal () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude,
                    lon = position.coords.longitude
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
                    .then(res => res.json())
                    .then(d => {
                        setData(d)
                        setLoading(false)
                    })
                    .catch(error => console.log(error))
            })
        } else {
            alert('Geolocationはサポートされていません。')
        }
        console.log(data)

    }, [loading])

    if (loading) return <Loading />

    return (
        <div className={s.portal}>
            <Suspense fallback={<Loading />}>
                <Canvas
                    dpr={[ 1, 2 ]}
                    gl={{
                        antialias: true,
                        toneMapping: ACESFilmicToneMapping,
                        outputEncoding: sRGBEncoding
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
                    <Cloud />
                </Canvas>
            </Suspense>
            <Rain />
        </div>
    )
}