const setTimePointIntensity = (value, timePoint, type) => {
    let intensity = 0

    switch (timePoint) {
        case 'night':
            intensity = type === 'model' ? value + 4 : type === 'cloud' && value + 50
            break
        case 'evening':
            intensity = type === 'model' ? value - 1 : type === 'cloud' && value + 2
            break
        case 'lunch':
            intensity = type === 'model' ? value + 8 : type === 'cloud' && value + 100
            break
        default:
            break
    }

    return intensity
}

export default function getEnvMapIntensity(currentWeather, timePoint, type) {
    let envMapIntensity = 0

    currentWeather.forEach(weather => {
        switch (weather.description) {
            // 雨、雨雲
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
                envMapIntensity = setTimePointIntensity(type === 'model' ? 6.4 : type === 'cloud' && 2.0, timePoint, type)
                break
            // 曇り
            case 'broken clouds':
            case 'scattered clouds':
            case 'few clouds':
                envMapIntensity = setTimePointIntensity(type === 'model' ? 6.6 : type === 'cloud' && 3.0, timePoint, type)
                break
            // 快晴
            case 'clear sky':
                envMapIntensity = setTimePointIntensity(type === 'model' && 6.8, timePoint, type)
                break
            default:
                break
        }
    })

    return envMapIntensity
}