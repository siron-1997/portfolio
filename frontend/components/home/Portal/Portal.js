import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, BakeShadows, Environment } from '@react-three/drei'
import { ACESFilmicToneMapping, sRGBEncoding, BackSide } from 'three'
import { Loading } from '@components/etc'
import { useWindowSize } from '@/utils/hooks'
import { BrokenCloud, Cloud, Ocean, Rain, RigCamera, Star, SunLight } from './modules'
import s from '@styles/home/Portal.module.css'
import axios from 'axios'

extend({ OrbitControls })

const Model= lazy(() => import('./modules/Model'))

export default function Portal () {
    const { width } = useWindowSize()

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [timePoint, setTimePoint] = useState('')
    const [currentWeather, setCurrentWeather] = useState('')

    const bgEvening = 'linear-gradient(0deg, rgba(212, 139, 0, 1) 28%, rgba(174, 21, 58, 1) 61%, rgba(68, 4, 116, 1) 84%, rgba(43, 7, 110, 1) 91%, rgba(1, 3, 93, 1) 99%)',
          bgNight = 'linear-gradient(0deg, rgba(15, 32, 114, 1) 8%, rgba(10, 8, 105, 1) 47%, rgba(9, 7, 90, 1) 90%)',
          bgLunch = data?.rain ? '#eee' : 'linear-gradient(0deg, rgba(116, 201, 246, 1) 8%, rgba(73, 160, 255, 1) 47%, rgba(60, 121, 255, 1) 90%)'


    const getEnvironmentColor = () => {
        let environmentColor = ''
        switch (timePoint) {
            case 'evening':
                // environmentColor = '#B45DD1'
                currentWeather === 'sky is clear' || currentWeather === 'few clouds' || currentWeather === 'scattered clouds' ? environmentColor = '#B45DD1' : environmentColor = '#9E81C2'
                break
            case 'night':
                environmentColor = '#694DDC'
                break
            case 'lunch':
                currentWeather === 'sky is clear' || currentWeather === 'few clouds' || currentWeather === 'scattered clouds' ? environmentColor = '#ABCEE7' : environmentColor = '#849BA9'
                break
            default:
                environmentColor = 'red'
                break
        }
        return environmentColor
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async position => {
                let lat = position.coords.latitude, // 緯度
                    lon = position.coords.longitude // 経度
                try {
                    const response = await axios.post('/api/submit-form', {
                        lat: lat,
                        lon: lon,
                    })
                    const d = response.data
                    setData(d)
                } catch (error) {
                    console.error(error)
                }
            })
        } else {
            alert('Geolocationはサポートされていません。')
        }
    }, [])

    useEffect(() => {
        if (data) {
            const areaMinute = 45 / 100
            // 現在時間、日没時間、日の出時間
            const currentTime = new Date(),
                  sunriseTime = new Date(data?.sys?.sunrise * 1000),
                  sunsetTime = new Date(data?.sys?.sunset * 1000)
            // 時（現在、日没、日の出）
            const currentHour = currentTime.getHours(),
                  sunriseHour = sunriseTime.getHours(),
                  sunsetHour = sunsetTime.getHours()
            // 分（現在、日没、日の出）
            const currentMinute = currentTime.getMinutes(),
                  sunriseMinute = sunriseTime.getMinutes(),
                  sunsetMinute = sunsetTime.getMinutes()
            // 15時以降～日没時間（日没から45分経過）の間
            const sunsetPoint = currentHour >= 15 && currentHour + (currentMinute / 100) < (sunsetHour + (sunsetMinute / 100)) + areaMinute
            // 3時以降～日の出時間（日の出から45分経過）の間
            const sunrisePoint = currentHour >= 3 && currentHour + (currentMinute / 100) < (sunriseHour + (sunriseMinute / 100)) + areaMinute
            // 日没時間（日没から45分経過）～ 3時以前の間
            const nightPoint = currentHour < 3 || currentHour + (currentMinute / 100) >= (sunsetHour + (sunsetMinute / 100)) + areaMinute
            // 朝～昼、夕方または明け方、夜の判定。
            // 日の出時間（日の出から45分経過）～日没時間（日没から45分経過）の間
            sunsetPoint || sunrisePoint ? setTimePoint('evening') : nightPoint ? setTimePoint('night') : setTimePoint('lunch')

            data?.weather.forEach(w => w.main === 'Clouds' && setCurrentWeather(w.description))

            setLoading(false)

            // console.log(timePoint)
        }
        
    }, [data])
        
    if (!loading) {
        return (
            <div className={s.portal}>
                <Suspense fallback={<Loading />}>
                    <Canvas
                        shadows
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
                        style={{background: timePoint === 'evening' ? bgEvening : timePoint === 'night' ? bgNight : bgLunch, zIndex: 1000}}
                    >
                        {/* 薄曇、散在雲、切雲、厚雲のとき追加。曇り度によって透明度を制御 */}
                        {(currentWeather === 'broken clouds' || currentWeather === 'scattered clouds' || currentWeather === 'few clouds' || currentWeather === 'overcast clouds') && 
                            <Environment background>
                                <mesh>
                                    <boxBufferGeometry args={[100, 100, 100]} />
                                    <meshBasicMaterial
                                        color={timePoint === 'evening' ? '#916CB5' : timePoint === 'night' ? '#3F226A' : '#8DA1AA'}
                                        side={BackSide}
                                        transparent={true}
                                        opacity={data?.clouds?.all / 100}
                                    />
                                </mesh>
                            </Environment>
                        }
                        {/* 雨の時 */}
                        {data?.rain &&
                            <fog
                                attach="fog"
                                color={timePoint === 'evening' ? '#67517D' : timePoint === 'night' ? '#341E55' : '#8DA1AA'}
                                near={width < 768 ? 35 : 10}
                                far={width < 768 ? 40 : 25}
                            />
                        }
                        <SunLight
                            color={getEnvironmentColor()}
                            intensity={currentWeather === 'Clouds' ? 1.5 : 2}
                        />
                        {/* 薄曇、散在雲、切雲、厚雲の状態によって環境光の輝度を制御 */}
                        <Model
                            timePoint={timePoint}
                            intensity={currentWeather === 'broken clouds' ? 0.8 : currentWeather === 'scattered clouds' ? 1.0 : currentWeather === 'few clouds' ? 1.2 : currentWeather === 'overcast clouds' && 0.4}
                        />
                        {/* 雨の時、シーンに追加 */}
                        <Ocean
                            timePoint={timePoint}
                            visible={data?.rain !== undefined ? true : false}
                            />
                        <Star />
                        {/* 薄曇、散在雲、切雲のときはBrokenCloudでそれ以外はCloud */}
                        {currentWeather === 'broken clouds' || currentWeather === 'scattered clouds' || currentWeather === 'few clouds' ?
                            <BrokenCloud
                                opacity={data?.clouds?.all}
                                intensity={currentWeather === 'broken clouds' ? 2 : currentWeather === 'scattered clouds' ? 2.5 : currentWeather === 'few clouds' && 3}
                            />
                            :
                            <Cloud
                                opacity={data?.clouds?.all}
                                intensity={1}
                            />
                        }
                        <RigCamera />
                        {/* <OrbitControls /> */}
                        <BakeShadows bias={- 0.3} />
                    </Canvas>
                    <Rain data={data} />
                </Suspense>
            </div>
        )
    } else {
        return <Loading />
    }
}