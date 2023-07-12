type RainState = {
    color?: string
    currentWeather?: any
    lineWidth?: number
    length?: number
    xSpeed?: number
    ySpeed?: number
}

const getRainState = (config: RainState) => {
    const rainState: RainState = {
        color: 'rgba(174, 194, 224, 0.25)',
        lineWidth: config.lineWidth,
        length: config.length,
        xSpeed: config.xSpeed,
        ySpeed: config.ySpeed
    }

    switch (config.currentWeather.description) {
        // 弱い雨
        case 'light rain':
        case 'light intensity shower rain':                  
        case 'thunderstorm with light rain':
        case 'freezing rain':
            rainState.color = `rgba(174, 194, 224, ${0.25})`
            rainState.length = config.length - 0.2
            rainState.ySpeed = config.ySpeed - 2
            break
        // 雨
        case 'moderate rain':
        case 'shower rain':
        case 'ragged shower rain':
        case 'thunderstorm with rain':
            rainState.color = `rgba(174, 194, 224, ${0.20})`
            rainState.length = config.length + 1
            rainState.lineWidth = 2.5
            rainState.ySpeed = config.ySpeed + 2.5
            break
        // 激しい雨
        case 'heavy intensity rain':
        case 'heavy intensity shower rain':
        case 'thunderstorm with heavy rain':
            rainState.color = `rgba(174, 194, 224, ${0.20})`
            rainState.length = config.length + 2
            rainState.lineWidth = 3
            rainState.xSpeed = config.xSpeed + 1
            rainState.ySpeed = config.ySpeed + 5
            break
        // 非常に激しい雨
        case 'very heavy rain':
        case 'extreme rain':
            rainState.color = `rgba(174, 194, 224, ${0.15})`
            rainState.length = config.length + 3
            rainState.lineWidth = 4
            rainState.xSpeed = config.xSpeed + 2
            rainState.ySpeed = config.ySpeed + 10
            break
        default:
            break
    }

    return rainState
}

export default getRainState