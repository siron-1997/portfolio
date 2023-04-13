export default function getLightningOccurrence(currentWeather) {
    const position = {
        x: 0,
        z: 0
    }

    switch (currentWeather) {
        // 弱い雷
        case 'thunderstorm with light rain':
        case 'light thunderstorm':
        case 'thunderstorm with light drizzle':
            position.x = 0
            position.z = 0
            break
        // 雷
        case 'thunderstorm with rain':
        case 'thunderstorm':
        case 'thunderstorm with drizzle':
            position.x = 0
            position.z = 0
            break
        // 強い雷
        case 'thunderstorm with heavy rain':
        case 'heavy thunderstorm':
        case 'thunderstorm with heavy drizzle':
            position.x = 0
            position.z = 0
            break
    }

    return position
}