const setTimePointIntensity = (value, timePoint) => {
    let intensity = 0

    switch (timePoint) {
        case 'night':
            intensity = value + 0.5
            break
        default:
            intensity = value + 0
            break
    }

    return intensity
}

export default function getSunIntensity(currentWeather, timePoint) {
    let sunIntensity = 0

    switch (currentWeather) {
        case 'rain':
        case 'overcast clouds':
            sunIntensity = setTimePointIntensity(1.4, timePoint)
            break
        case 'broken clouds':
            sunIntensity = setTimePointIntensity(1.8, timePoint)
            break
        case 'scattered clouds':
            sunIntensity = setTimePointIntensity(2.2, timePoint)
            break
        case 'few clouds':
            sunIntensity = setTimePointIntensity(2.6, timePoint)
            break
        case 'clear sky':
            sunIntensity = setTimePointIntensity(3.0, timePoint)
            break
        default:
            sunIntensity = setTimePointIntensity(6.0, timePoint)
            break
    }

    return sunIntensity
}