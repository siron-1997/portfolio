import { lazy, Suspense, useEffect, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls, BakeShadows } from '@react-three/drei'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Loading } from '@components/etc'
import { getBackgroundColor, getEnvironmentColor, getEnvMapIntensity, getFogColor, getSunIntensity, getSunLightColor } from '@/utils'
import { Clouds, Fog, Ocean, Rain, RigCamera, Star, SunLight, WeatherEnvironment } from './modules'
import s from '@styles/home/Portal.module.css'
import axios from 'axios'

extend({ OrbitControls })



const Model= lazy(() => import('./modules/Model'))

export default function Portal () {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [timePoint, setTimePoint] = useState('')
    const [currentWeather, setCurrentWeather] = useState('')

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
            // 15時以降～日没時間（日没から45分経過）
            const sunsetPoint = currentHour >= 15 && currentHour + (currentMinute / 100) < (sunsetHour + (sunsetMinute / 100)) + areaMinute
            // 3時以降～日の出時間（日の出から45分経過）
            const sunrisePoint = currentHour >= 3 && currentHour + (currentMinute / 100) < (sunriseHour + (sunriseMinute / 100)) + areaMinute
            // 日没時間（日没から45分経過）～ 3時以前
            const nightPoint = currentHour < 3 || currentHour + (currentMinute / 100) >= (sunsetHour + (sunsetMinute / 100)) + areaMinute
            // 朝～昼、夕方または明け方、夜の判定。
            // 日の出時間（日の出から45分経過）～日没時間（日没から45分経過）

            // sunsetPoint || sunrisePoint ? setTimePoint('evening') : nightPoint ? setTimePoint('night') : setTimePoint('lunch')
            setTimePoint('lunch')

            // setCurrentWeather(data.weather[0].description)

            /* -------------------

            "clear sky" 
            "few clouds"
            "scattered clouds"
            "broken clouds"
            "overcast clouds"
            
            ---------------------- */
            
            setCurrentWeather("clear sky")
            setLoading(false)

            console.log(data)
            console.log(currentWeather)
            console.log(timePoint)
        }
    }, [data])
        
    // if (!loading) {
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
                        style={{ background: data && getBackgroundColor(timePoint), zIndex: 1000 }}
                    >
                        {/* 薄曇、散在雲、切雲、厚雲のとき追加。曇り度によって透明度を制御 */}
                        <WeatherEnvironment
                            background={true}
                            timePoint={timePoint}
                            currentWeather={currentWeather}
                            // cloudsAll={data?.clouds?.all}
                            cloudsAll={100}
                            color={getEnvironmentColor(timePoint)}
                        />
                        {/* 雨の時 */}
                        <Fog
                            humidity={data?.main?.humidity}
                            color={getFogColor(timePoint)}
                        />
                        <SunLight
                            color={getSunLightColor(currentWeather, timePoint)}
                            intensity={getSunIntensity(currentWeather, timePoint)}
                        />
                        {/* 薄曇、散在雲、切雲、厚雲、晴れ、雨の状態によって環境光の輝度を制御 */}
                        <Model envMapIntensity={getEnvMapIntensity(currentWeather, timePoint, 'model')} />
                        {/* 雨の時、シーンに追加 */}
                        <Ocean
                            // visible={data?.rain !== undefined ? true : false}
                            visible={true}
                        />
                        <Star
                            opacity={data?.clouds?.all}
                            timePoint={timePoint}
                        />
                        {/* 薄曇、散在雲、切雲のときはBrokenCloudでそれ以外はCloud */}
                        <Clouds
                            // opacity={data?.clouds?.all}
                            opacity={95}
                            envMapIntensity={getEnvMapIntensity(currentWeather, timePoint, 'clouds')}
                            thinCloudVisible={currentWeather === 'broken clouds' || currentWeather === 'scattered clouds' || currentWeather === 'few clouds' && true}
                            thickCloudVisible={currentWeather === 'overcast clouds' || currentWeather === 'rain' && true}
                        />
                        {/* 星 */}
                        <RigCamera />
                        {/* <OrbitControls /> */}
                        {/* <BakeShadows bias={- 0.3} /> */}
                    </Canvas>
                    <Rain data={data} />
                </Suspense>
            </div>
        )
    // } 
    //else {
    //     return <Loading />
    // }
}