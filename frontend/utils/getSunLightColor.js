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
        case 'overcast clouds':
        case 'rain':
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