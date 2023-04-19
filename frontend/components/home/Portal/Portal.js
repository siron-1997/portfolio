import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, BakeShadows } from '@react-three/drei'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Loading } from '@components/etc'
import { getBackgroundColor } from '@/utils'
import { Clouds, Fog, Lightning, Ocean, Rain, RigCamera, Star, SunLight, WeatherEnvironment } from './modules'
import s from '@styles/home/Portal.module.css'
import axios from 'axios'

extend({ OrbitControls })

const Model = lazy(() => import('./modules/Model'))

export default function Portal () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [timePoint, setTimePoint] = useState('')
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
                if (permissionStatus.state === 'granted') { // 位置情報の取得が許可
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(async position => {
                            let lat = position.coords.latitude, // 緯度
                                lon = position.coords.longitude // 経度
                            try {
                                const response = await axios.post('/api/submit-form', {
                                    lat: lat,
                                    lon: lon,
                                })
                                setData(response.data)
                            } catch (error) {
                                setData('default')
                                console.error(error)
                            }
                        })
                    }
                } else { // 位置情報の取得がブロック
                    // window.alert('Geolocationはサポートされていません。')
                    const getDefaultLocation = async () => {
                        try {
                            const response = await axios.post('/api/submit-form', {
                                lat: 35.68944,
                                lon: 139.69167,
                            })
                            setData(response.data)
                        } catch (error) {
                            setData('default')
                            console.log(error)
                        }
                    }
                    getDefaultLocation()
                }
            })
        }
    }, [data !== null])

    useEffect(() => {
        if (data) {
            const currentTime = new Date(),
                  currentHour = currentTime.getHours(),
                  currentMinute = currentTime.getMinutes() / 100
            const currentPoint = currentHour + currentMinute
    
            const areaMinute = 45 / 100
    
            let startSunrise = 3, // 日の入り開始
                endSunrise = 6 + areaMinute // 日の入り終了
    
            let startSunset = 15, // 日没開始
                endSunset = 18 + areaMinute // 日没終了
    
            if (data?.sys?.sunrise) {
                const sunriseTime = new Date(data.sys.sunrise * 1000),
                      sunriseHour = sunriseTime.getHours(),
                      sunriseMinute = sunriseTime.getMinutes() / 100
                endSunrise = (sunriseHour + sunriseMinute) + areaMinute // 日の入り終了
            }
    
            if (data?.sys?.sunset) {
                const sunsetTime = new Date(data.sys.sunset * 1000),
                      sunsetHour = sunsetTime.getHours(),
                      sunsetMinute = sunsetTime.getMinutes() / 100
                endSunset = (sunsetHour + sunsetMinute) + areaMinute // 日没ポイント後
            }
    
            const points = {
                lunch: currentPoint > endSunrise && currentPoint < startSunset,
                evening: (currentPoint > startSunrise && currentPoint < endSunrise) || (currentPoint > startSunset && currentPoint < endSunset),
                night: currentPoint > endSunset || currentPoint < startSunrise
            }
    
            setTimePoint(points.lunch ? 'lunch' : points.evening ? 'evening' : points.night && 'night')
            setCurrentWeather(data?.weather ? data.weather : ['clear sky'])
            setLoading(false)

            console.log(data)
        }
    }, [data, currentWeather])
        
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
                        style={{ background: getBackgroundColor(timePoint), zIndex: 1000 }}
                    >
                        {/* 薄曇、散在雲、切雲、厚雲のとき追加。曇り度によって透明度を制御 */}
                        <WeatherEnvironment timePoint={timePoint} />
                        {/* 霧 */}
                        <Fog humidity={data?.main?.humidity} timePoint={timePoint} />
                        {/* 太陽 */}
                        <SunLight currentWeather={currentWeather} timePoint={timePoint} />
                        {/* 薄曇、散在雲、切雲、厚雲、晴れ、雨の状態によって環境光の輝度を制御 */}
                        <Model currentWeather={currentWeather} timePoint={timePoint} />
                        {/* 雨の時、シーンに追加 */}
                        <Ocean visible={data?.rain !== undefined ? true : false} />
                        {/* 星 */}
                        <Star opacity={data?.clouds?.all} timePoint={timePoint} />
                        {/* 薄曇、散在雲、切雲のときはBrokenCloudでそれ以外はCloud */}
                        <Clouds cloudsAll={data?.clouds?.all} currentWeather={currentWeather} timePoint={timePoint} />
                        {/* 雷 */}
                        <Lightning currentWeather={currentWeather} />
                        <RigCamera />
                        {/* <OrbitControls /> */}
                        <BakeShadows bias={- 0.3} />
                    </Canvas>
                    <Rain data={data} currentWeather={currentWeather} />
                </Suspense>
            </div>
        )
    } else return <Loading />
}