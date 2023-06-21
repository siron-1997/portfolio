export default function setCloudsVisible(currentWeather) {
    const clouds = {
        thin: false,
        thick: false
    }

    switch (currentWeather.description) {
        // 雨、雨雲、雷、雷雲、霧
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
            clouds.thick = true
            break
        // 曇り
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
            clouds.thin = true
            break
        // 快晴
        case 'clear sky':
            clouds.thick = clouds.thin = false
        default:
            break
    }

    return clouds
}