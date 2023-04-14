const setTimePointIntensity = (value, timePoint) => {
    let intensity = 0

    switch (timePoint) {
        case 'evening':
            intensity = value - 0.0
            break
        case 'night':
            intensity = value + 0.3
            break
        case 'lunch':
            intensity = value - 0.5
        default:
            break
    }

    return intensity
}

export default function getSunIntensity(currentWeather, timePoint) {
    let sunIntensity = 0

    switch (currentWeather) {
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