export default function getRainState({
    currentWeather, lineWidth = 0, length = 0, xSpeed = 0, ySpeed = 0
}){
    const rainState = {
        color: 'rgba(174, 194, 224, 0.25)',
        lineWidth: lineWidth,
        length: length,
        xSpeed: xSpeed,
        ySpeed: ySpeed
    }

    switch (currentWeather.description) {
        // 弱い雨
        case 'light rain':
        case 'light intensity shower rain':                  
        case 'thunderstorm with light rain':
        case 'freezing rain':
            rainState.color = `rgba(174, 194, 224, ${0.25})`
            rainState.length = length - 0.2
            rainState.ySpeed = ySpeed - 2
            break
        // 雨
        case 'moderate rain':
        case 'shower rain':
        case 'ragged shower rain':
        case 'thunderstorm with rain':
            rainState.color = `rgba(174, 194, 224, ${0.20})`
            rainState.length = length + 1
            rainState.lineWidth = 2.5
            rainState.ySpeed = ySpeed + 2.5
            break
        // 激しい雨
        case 'heavy intensity rain':
        case 'heavy intensity shower rain':
        case 'thunderstorm with heavy rain':
            rainState.color = `rgba(174, 194, 224, ${0.20})`
            rainState.length = length + 2
            rainState.lineWidth = 3
            rainState.xSpeed = xSpeed + 1
            rainState.ySpeed = ySpeed + 5
            break
        // 非常に激しい雨
        case 'very heavy rain':
        case 'extreme rain':
            rainState.color = `rgba(174, 194, 224, ${0.15})`
            rainState.length = length + 3
            rainState.lineWidth = 4
            rainState.xSpeed = xSpeed + 2
            rainState.ySpeed = ySpeed + 10
            break
        default:
            break
    }

    return rainState
}