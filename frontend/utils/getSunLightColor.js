import { envColors } from '@assets/env-colors'

const setCurrentWeatherColor = (currentWeather, timePointColor) => {
    let color = ''

    switch (currentWeather) {
        case 'clear sky':
            color = timePointColor.clearSky
            break
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
            color = timePointColor.thinCloud
            break
        case 'light rain': // 小雨
        case 'moderate rain': // 中程度の雨
        case 'heavy intensity rain': // 激しい雨
        case 'very heavy rain': // 非常に激しい雨
        case 'extreme rain': // 極端な雨
        case 'freezing rain': // 凍結する雨
        case 'light intensity shower rain': // 弱いにわか雨                   
        case 'shower rain': // にわか雨
        case 'heavy intensity shower rain': // 激しいにわか雨
        case 'ragged shower rain': // 不規則なにわか雨
        case 'thunderstorm with light rain': // 弱い雷雨
        case 'thunderstorm with rain': // 雷雨
        case 'thunderstorm with heavy rain': // 激しい雷雨
        case 'overcast clouds':
            color = timePointColor.thickCloud
            break
        default:
            break
    }

    return color
}

export default function getSunLightColor(currentWeather, timePoint) {
    let sunLightColor = ''

    switch (timePoint) {
        case 'evening':
            sunLightColor = setCurrentWeatherColor(currentWeather, envColors.evening)
            break
        case 'night':
            sunLightColor = setCurrentWeatherColor(currentWeather, envColors.night)
            break
        case 'lunch':
            sunLightColor = setCurrentWeatherColor(currentWeather, envColors.lunch)
            break
        default:
            break
    }

    return sunLightColor
}