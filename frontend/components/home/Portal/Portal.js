import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Loading } from '@components/etc'
import Ocean from './Ocean'
import Star from './Star'
import Rain from './Rain'
import Rig from './Rig'
import Lightning from './Lightning'
import SunLight from './SunLight'
import Cloud from './Cloud'
import s from '@styles/home/Portal.module.css'

const ModelComponent = lazy(() => import('./Model'))

export default function Portal () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentTime, setCurrentTime] = useState('')

    const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY || process.env.OPEN_WEATHER_API_KEY

    const bgEvening = 'linear-gradient(0deg, rgba(212, 139, 0, 1) 28%, rgba(174, 21, 58, 1) 61%, rgba(68, 4, 116, 1) 84%, rgba(43, 7, 110, 1) 91%, rgba(1, 3, 93, 1) 99%)',
          bgNight = 'linear-gradient(0deg, rgba(2, 69, 111, 1) 20%, rgba(23, 17, 105, 1) 53%, rgba(0, 2, 71, 1) 79%)',
          bgLunch = 'linear-gradient(0deg, rgba(153, 185, 250, 1) 13%, rgba(80, 91, 228, 1) 88%)'

    const hours = new Date().getHours()

    useEffect(() => {
        // デバイスの位置情報を取得
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
        // 朝、昼、夕方または明け方、夜の判定
        if ((hours > 15 && hours < 18) || (hours > 3 && hours < 6)) {
            setCurrentTime('evening')
        }
        else if ((hours > 18 || hours < 3)) {
            setCurrentTime('night')
        }
        else setCurrentTime('lunch')

        console.log(currentTime)
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
                        outputEncoding: sRGBEncoding,
                    }}
                    camera={{
                        position: [1.5, 1, 10],
                        fov: 45,
                        near: 1,
                        far: 200,
                    }}
                    className={s.canvas}
                    shadows
                    style={{background: (hours > 15 && hours < 18) || (hours > 3 && hours < 6) ? bgEvening : hours < 3 ? bgNight : bgLunch }}
                >
                    <SunLight
                        color={currentTime === 'evening' ? '#B45DD1' : currentTime === 'night' ? '#694DDC' : '#98BFC7'}
                    />
                    <ambientLight
                        color={currentTime === 'lunch' && '#fff'}
                        intensity={currentTime === 'lunch' ? 0.08 : 0}
                    />
                    <ModelComponent />
                    {data?.rain !== undefined && <Ocean />}
                    <Star />
                    {/* <Lightning /> */}
                    {/* <Cloud /> */}
                    {/* カメラ */}
                    <Rig />
                </Canvas>
            </Suspense>
            <Rain data={data} />
        </div>
    )
}