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
                intensity = value + 9
                break
            default:
                break
        }
    } else if (type === 'clouds') {
        switch (timePoint) {
            case 'night':
                intensity = value + 20
                break
            case 'evening':
                intensity = value + 2
                break
            case 'lunch':
                intensity = value + 30
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
            case 'rain':
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
            case 'rain':
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