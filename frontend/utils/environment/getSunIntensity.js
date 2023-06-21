const setTimePointIntensity = (value, timePoint) => {
    let intensity = 0

    // timePoint
    switch (timePoint) {
        case 'evening':
            intensity = value - 0.0
            break
        case 'night':
            intensity = value + 1.5
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
            sunIntensity = setTimePointIntensity(3.2, timePoint)
            break
        // 曇り
        case 'broken clouds':
            sunIntensity = setTimePointIntensity(5.8, timePoint)
            break
        case 'scattered clouds':
            sunIntensity = setTimePointIntensity(5.2, timePoint)
            break
        case 'few clouds':
            sunIntensity = setTimePointIntensity(5.6, timePoint)
            break
        // 快晴
        case 'clear sky':
            sunIntensity = setTimePointIntensity(8.0, timePoint)
            break
        default:
            break
    }

    return sunIntensity
}