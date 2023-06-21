import { envColors } from '@assets/env-colors'

const setCurrentWeatherColor = (currentWeather, timePointColor) => {
    let color = ''

    switch (currentWeather.description) {
        // 雨、雨雲、霧
        case 'light rain':
        case 'moderate rain':
        case 'heavy intensity rain':
        case 'very heavy rain':
        case 'extreme rain':
        case 'freezing rain':
        case 'light intensity shower rain':                  
        case 'shower rain':
        case 'heavy intensity shower rain':
        case 'ragged shower rain':
        case 'thunderstorm with light rain':
        case 'thunderstorm with rain':
        case 'thunderstorm with heavy rain':
        case 'thunderstorm with light drizzle':
        case 'thunderstorm with drizzle':
        case 'thunderstorm with heavy drizzle':
        case 'light thunderstorm':
        case 'thunderstorm':
        case 'heavy thunderstorm':
        case 'ragged thunderstorm':
        case 'overcast clouds':
        case 'mist':
            color = timePointColor.thickCloud
            break
        // 曇り
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
            color = timePointColor.thinCloud
            break
        // 快晴
        case 'clear sky':
            color = timePointColor.clearSky
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