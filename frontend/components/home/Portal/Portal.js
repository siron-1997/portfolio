import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { OrbitControls } from '@react-three/drei'
import { Loading } from '@components/etc'
import { useWindowSize } from '@/utils/hooks'
import Ocean from './Ocean'
import Star from './Star'
import Rain from './Rain'
import Rig from './Rig'
import SunLight from './SunLight'
import Cloud from './Cloud'
import s from '@styles/home/Portal.module.css'

extend({ OrbitControls })

const ModelComponent = lazy(() => import('./Model'))

export default function Portal () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentTime, setCurrentTime] = useState('')

    const { width } = useWindowSize()

    // NEXT_PUBLIC_OPEN_WEATHER_API_KEY
    // OPEN_WEATHER_API_KEY
    const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

    const bgEvening = 'linear-gradient(0deg, rgba(212, 139, 0, 1) 28%, rgba(174, 21, 58, 1) 61%, rgba(68, 4, 116, 1) 84%, rgba(43, 7, 110, 1) 91%, rgba(1, 3, 93, 1) 99%)',
          bgNight = 'linear-gradient(0deg, rgba(15, 32, 114, 1) 8%, rgba(10, 8, 105, 1) 47%, rgba(9, 7, 90, 1) 90%)',
          bgLunch = 'linear-gradient(0deg, rgba(116, 201, 246, 1) 8%, rgba(73, 160, 255, 1) 47%, rgba(60, 121, 255, 1) 90%)'

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
        if ((hours >= 15 && hours <= 18) || (hours > 3 && hours < 6)) {
            setCurrentTime('evening')
        }
        else if ((hours > 18 || hours < 3)) {
            setCurrentTime('night')
        }
        else setCurrentTime('lunch')
    }, [loading])

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
                        fov: 45,
                        near: 1,
                        far: 200,
                    }}
                    className={s.canvas}
                    shadows
                    style={{background: (hours > 15 && hours < 18) || (hours > 3 && hours < 6) ? bgEvening : (hours > 18 || hours < 3) ? bgNight : bgLunch}}
                >
                    {/* <fog attach="fog" color={'#605D7B'} near={width < 768 ? 35 : 25} far={width < 768 ? 40 : 50} /> */}
                    <SunLight
                        color={currentTime === 'evening' ? '#B45DD1' : currentTime === 'night' ? '#694DDC' : '#AFD4FF'}
                        intensity={currentTime === 'lunch' ? 3 : 3.5}
                    />
                    <ambientLight
                        color={currentTime === 'evening' ? '#B45DD1' : currentTime === 'night' ? '#694DDC' : '#AFD4FF'}
                        intensity={currentTime === 'lunch' ? 0.3 : 0.3}
                    />
                    <ModelComponent currentTime={currentTime} />
                    <Ocean currentTime={currentTime} visible={data?.rain !== undefined ? true : false} />
                    <Star />
                    {/* カメラ */}
                    <Rig />
                    <Cloud density={data ? data.cloud : 0} opacity={data?.clouds.all} />
                    {/* <OrbitControls /> */}
                </Canvas>
            </Suspense>
            <Rain data={data} />
        </div>
    )
}