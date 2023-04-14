export default function getRainState({
    currentWeather, lineWidth = 0, length = 0, xSpeed, ySpeed = 0
}){
    const rainState = {
        color: 'rgba(174, 194, 224, 0.25)',
        lineWidth: lineWidth,
        length: length,
        xSpeed: xSpeed,
        ySpeed: ySpeed
    }

    switch (currentWeather) {
        case 'light rain': // 小雨
        case 'light intensity shower rain': // 弱いにわか雨                   
        case 'thunderstorm with light rain': // 弱い雷雨
        case 'freezing rain': // 凍結する雨
            rainState.color = `rgba(174, 194, 224, ${0.25})`
            rainState.length = length - 0.2
            rainState.ySpeed = ySpeed - 2
            break
        case 'moderate rain': // 中程度の雨
        case 'shower rain': // にわか雨
        case 'ragged shower rain': // 不規則なにわか雨
        case 'thunderstorm with rain': // 雷雨
            rainState.color = `rgba(174, 194, 224, ${0.20})`
            rainState.length = length + 1
            rainState.lineWidth = 2.5
            rainState.ySpeed = ySpeed + 2.5
            break
        case 'heavy intensity rain': // 激しい雨
        case 'heavy intensity shower rain': // 激しいにわか雨
        case 'thunderstorm with heavy rain': // 激しい雷雨
            rainState.color = `rgba(174, 194, 224, ${0.20})`
            rainState.length = length + 2
            rainState.lineWidth = 3
            rainState.xSpeed = xSpeed + 1
            rainState.ySpeed = ySpeed + 5
            break
        case 'very heavy rain': // 非常に激しい雨
        case 'extreme rain': // 極端な雨
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