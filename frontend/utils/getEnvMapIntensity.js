const setTimePointIntensity = (value, timePoint, type) => {
    let intensity = 0

    if (type === 'model') {
        switch (timePoint) {
            case 'night':
                intensity = value + 4
                break
            case 'evening':
                intensity = value + 2
                break
            default:
                intensity = value + 0
                break
        }
    } else if (type === 'clouds') {
        switch (timePoint) {
            case 'night':
                intensity = value + 1
                break
            case 'evening':
                intensity = value + 2
                break
            default:
                intensity = 0
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
                envMapIntensity = setTimePointIntensity(0.4, timePoint, type)
                break
            case 'broken clouds':
            case 'scattered clouds':
            case 'few clouds':
                envMapIntensity = setTimePointIntensity(0.6, timePoint, type)
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