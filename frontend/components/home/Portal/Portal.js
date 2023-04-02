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

    const API_KEY = process.env.OPEN_WEATHER_API_KEY

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
        if ((hours >= 15 && hours <= 18) || (hours > 3 && hours < 6)) {
            setCurrentTime('evening')
        }
        else if ((hours > 18 || hours < 3)) {
            setCurrentTime('night')
        }
        else setCurrentTime('lunch')
    }, [loading])

    // if (loading) {
    //     return <Loading />
    // } else {
    // }
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
                    style={{background: (hours > 15 && hours < 18) || (hours > 3 && hours < 6) ? bgEvening : hours < 3 ? bgNight : bgLunch, zIndex: 10000}}
                >
                    <fog attach="fog" color={'#605D7B'} near={width < 768 ? 35 : 25} far={width < 768 ? 40 : 50} />
                    <SunLight
                        color={currentTime === 'evening' ? '#B45DD1' : currentTime === 'night' ? '#694DDC' : '#98BFC7'}
                    />
                    <ambientLight
                        color={currentTime === 'evening' ? '#B45DD1' : currentTime === 'night' ? '#694DDC' : '#98BFC7'}
                        intensity={currentTime === 'lunch' ? 0.25 : 0.25}
                    />
                    <ModelComponent currentTime={currentTime} />
                    <Ocean currentTime={currentTime} visible={data?.rain !== undefined ? true : false} />
                    <Star />
                    {/* カメラ */}
                    <Rig />
                    <Cloud density={data ? data.cloud : 0} />
                    {/* <OrbitControls /> */}
                </Canvas>
            </Suspense>
            <Rain data={data} />
        </div>
    )
}