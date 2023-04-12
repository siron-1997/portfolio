const setTimePointIntensity = (value, timePoint) => {
    let intensity = 0

    switch (timePoint) {
        case 'evening':
            intensity = value - 0.5
            break
        case 'night':
            intensity = value + 0.2
            break
        case 'lunch':
            intensity = value - 0.8
        default:
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
            break
    }

    return sunIntensity
}