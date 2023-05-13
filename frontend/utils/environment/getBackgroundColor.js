import { envColors } from '@assets/env-colors'

export default function getBackgroundColor(timePoint) {
    let backgroundColor = ''

    switch (timePoint) {
        case 'evening':
            backgroundColor = envColors.evening.background
            break
        case 'night':
            backgroundColor = envColors.night.background
            break
        case 'lunch':
            backgroundColor = envColors.lunch.background
            break
        default:
            break
    }

    return backgroundColor
}