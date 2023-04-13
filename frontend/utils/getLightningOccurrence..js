export default function getLightningOccurrence(currentWeather) {
    console.log('lightning occurrence test', currentWeather)

    const configs = {
        position: {
            x: 0, z: 0
        },
        radiusRange: 0,
        visible: false
    }

    switch (currentWeather) {
        // 弱い雷
        case 'thunderstorm with light rain':
        case 'light thunderstorm':
        case 'thunderstorm with light drizzle':
            configs.position.x = 0
            configs.position.z = 0
            configs.radiusRange = 3000
            configs.visible = true           
            break
        // 雷
        case 'thunderstorm with rain':
        case 'thunderstorm':
        case 'thunderstorm with drizzle':
            configs.position.x = 0
            configs.position.z = 0
            configs.radiusRange = 2000
            configs.visible = true
            break
        // 強い雷
        case 'thunderstorm with heavy rain':
        case 'heavy thunderstorm':
        case 'thunderstorm with heavy drizzle':
            configs.position.x = 0
            configs.position.z = 0
            configs.radiusRange = 1000
            configs.visible = true
            break
    }

    return configs
}