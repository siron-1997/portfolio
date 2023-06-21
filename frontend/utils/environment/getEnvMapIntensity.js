const setTimePointIntensity = (value, timePoint, type) => {
    let intensity = 0

    switch (timePoint) {
        case 'night':
            intensity = type === 'model' ? value + 6 : type === 'cloud' && value + 50
            break
        case 'evening':
            intensity = type === 'model' ? value - 2 : type === 'cloud' && value + 20
            break
        case 'lunch':
            intensity = type === 'model' ? value + 12 : type === 'cloud' && value + 200
            break
        default:
            break
    }

    return intensity
}

export default function getEnvMapIntensity(currentWeather, timePoint, type) {
    let envMapIntensity = 0

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
            envMapIntensity = setTimePointIntensity(type === 'model' ? 5.4 : type === 'cloud' && 1, timePoint, type)
            break
        // 曇り
        case 'broken clouds':
        case 'scattered clouds':
        case 'few clouds':
            envMapIntensity = setTimePointIntensity(type === 'model' ? 8.6 : type === 'cloud' && 3.0, timePoint, type)
            break
        // 快晴
        case 'clear sky':
            envMapIntensity = setTimePointIntensity(type === 'model' && 8.8, timePoint, type)
            break
        default:
            break
    }

    return envMapIntensity
}