export default function getLightningOccurrence(currentWeather) {
    let currentPower = 0

    const configs = {
        power: () => 0,
        positionX: () => null,
        positionZ: () => null,
        visible: false
    }

    switch (currentWeather) {
        // 弱い雷
        case 'thunderstorm with light rain':
        case 'light thunderstorm':
        case 'thunderstorm with light drizzle':
            configs.power = value => {
                currentPower = Math.random() * value
                return currentPower >= 5 ? 5 : currentPower
            }
            configs.positionX = value => (Math.random() * (value * 3)) - (value / 2)
            configs.positionZ = value => (Math.random() * (value * 3)) - (value / 2)
            configs.visible = true           
            break
        // 雷
        case 'thunderstorm with rain':
        case 'thunderstorm':
        case 'thunderstorm with drizzle':
            configs.power = value => {
                currentPower = Math.random() * value
                return currentPower >= 10 ? 10 : currentPower
            }
            configs.positionX = value => (Math.random() * (value * 2)) - (value / 2)
            configs.positionZ = value => (Math.random() * (value * 2)) - (value / 2)
            configs.visible = true
            break
        // 強い雷
        case 'thunderstorm with heavy rain':
        case 'heavy thunderstorm':
        case 'thunderstorm with heavy drizzle':
            configs.power = value => Math.random() * value
            configs.positionX = value => (Math.random() * value) - (value / 2)
            configs.positionZ = value => (Math.random() * value) - (value / 2)
            configs.visible = true
            break
        default:
            break
    }

    return configs
}