const setTimePointIntensity = (value, timePoint, type) => {
    let intensity = 0

    if (type === 'model') {
        switch (timePoint) {
            case 'night':
                intensity = value + 4
                break
            case 'evening':
                intensity = value - 1
                break
            case 'lunch':
                intensity = value + 8
                break
            default:
                break
        }
    } else if (type === 'clouds') {
        switch (timePoint) {
            case 'night':
                intensity = value + 50
                break
            case 'evening':
                intensity = value + 2
                break
            case 'lunch':
                intensity = value + 100
                break
            default:
                break
        }
    }

    return intensity
}

export default function getEnvMapIntensity(currentWeather, timePoint, type) {
    let envMapIntensity = 0

    if (type === 'model') {
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
                envMapIntensity = setTimePointIntensity(6.4, timePoint, type)
                break
            case 'broken clouds':
            case 'scattered clouds':
            case 'few clouds':
                envMapIntensity = setTimePointIntensity(6.6, timePoint, type)
                break
            case 'clear sky':
                envMapIntensity = setTimePointIntensity(6.8, timePoint, type)
                break
            default:
                break
        }
    } else if (type === 'clouds') {
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
                envMapIntensity = setTimePointIntensity(2.0, timePoint, type)
                break
            case 'broken clouds':
            case 'scattered clouds':
            case 'few clouds':
                envMapIntensity = setTimePointIntensity(3.0, timePoint, type)
                break
            default:
                break
        }
    }

    return envMapIntensity
}