import { envColors } from '@assets/env-colors'

export default function getFogColor(timePoint) {
    let fogColor = ''

    switch (timePoint) {
        case 'evening':
            fogColor = envColors.evening.fog
            break
        case 'night':
            fogColor = envColors.night.fog
            break
        case 'lunch':
            fogColor = envColors.lunch.fog
            break
        default:
            break
    }

    return fogColor
}