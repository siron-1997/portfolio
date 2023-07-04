import { lazy, Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows } from '@react-three/drei'
import { ReinhardToneMapping } from 'three'
import { getBackgroundColor } from '@/utils/environment'
import { Clouds, Fog, Rain, RigCamera, Star, SunLight, WeatherEnvironment } from './modules'
import s from '@styles/Home.module.css'
import axios from 'axios'

const Model = lazy(() => import('./modules/Model')),
      Door = lazy(() => import('./modules/Door')),
      Ocean = lazy(() => import('./modules/Ocean')),
      Lightning = lazy(() => import('./modules/Lightning'))

export default function Home({ pageHeaderRef, setIsLoading }) {
    const doorRef = useRef(null)
    const [data, setData] = useState(null)
    const [timePoint, setTimePoint] = useState('')
    const [currentWeathers, setCurrentWeathers] = useState(null)
    const [isViewerLoading, setIsViewerLoading] = useState(false)

    const currentData = data !== null

    const getCurrentWeather = async (lat, lon) => {
        try {
            const res = await axios.post('/api/submit-form', {
                lat: lat,
                lon: lon,
            })
            setData(res.data)
        } catch (error) {
            setData('default')
            console.log('current weather data error', error)
        }
    }

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.permissions.query({ name: 'geolocation' }).then(async permissionStatus => {
                if (permissionStatus.state === 'granted') { // 位置情報の取得が許可
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(async position => {
                            let lat = position.coords.latitude, // 緯度
                                lon = position.coords.longitude // 経度
                            await getCurrentWeather(lat, lon)
                        })
                    }
                } else { // 位置情報の取得がブロック
                    await getCurrentWeather(35.06472449733225, 135.8277975469669) // 比叡山頂駅
                }
            })
        }
    }, [currentData])

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
            setCurrentWeathers(data?.weather ? data.weather : [{ main: 'Clear', description: 'clear sky' }])
            setIsViewerLoading(true)
        }
    }, [data, currentWeathers])

    if (isViewerLoading) {
        return (
            <div className={s.portal}>
                <Suspense fallback={null}>
                    <Canvas
                        shadows
                        dpr={[ 1, 2 ]}
                        gl={{
                            antialias: true,
                            toneMapping: ReinhardToneMapping,
                            useLegacyLights: true
                        }}
                        camera={{
                            fov: 45,
                            near: 0.01,
                            far: 200
                        }}
                        onCreated={() =>  setIsLoading(() => false)}
                        className={s.canvas}
                        style={{ background: getBackgroundColor(timePoint)}}
                    >
                        {/* 薄曇、散在雲、切雲、厚雲のとき追加。曇り度によって透明度を制御 */}
                        <WeatherEnvironment timePoint={timePoint} />
                        {/* 霧 */}
                        <Fog humidity={data?.main?.humidity} timePoint={timePoint} />
                        {/* 太陽 */}
                        <SunLight currentWeathers={currentWeathers} timePoint={timePoint} />
                        <group name='models'>
                            {/* 薄曇、散在雲、切雲、厚雲、晴れ、雨の状態によって環境光の輝度を制御 */}
                            <Model currentWeathers={currentWeathers} timePoint={timePoint} />
                            {/* ドア */}
                            <Door currentWeathers={currentWeathers} timePoint={timePoint} doorRef={doorRef} />
                            {/* 雨の時、シーンに追加 */}
                            <Ocean visible={data?.rain !== undefined ? true : true} />
                        </group>
                        {/* 星 */}
                        <Star opacity={data?.clouds?.all} timePoint={timePoint} />
                        {/* 薄曇、散在雲、切雲のときはBrokenCloudでそれ以外はCloud */}
                        <Clouds cloudsAll={data?.clouds?.all} currentWeathers={currentWeathers} timePoint={timePoint} />
                        {/* 雷 */}
                        <Lightning currentWeathers={currentWeathers} />
                        {/* カメラ */}
                        <RigCamera pageHeaderRef={pageHeaderRef} doorRef={doorRef} />
                        {/* シャドウベイク */}
                        <BakeShadows bias={- 0.3} />
                    </Canvas>
                    <Rain data={data} currentWeathers={currentWeathers} />
                </Suspense>
            </div>
        )
    }
}