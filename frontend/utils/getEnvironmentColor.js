import { envColors } from '@assets/env-colors'

export default function getEnvironmentColor(timePoint) {
    let environmentColor = ''

    switch (timePoint) {
        case 'evening':
            environmentColor = envColors.evening.environment
            break
        case 'night':
            environmentColor = envColors.night.environment
            break
        case 'lunch':
            environmentColor = envColors.night.environment
            break
        default:
            break
    }

    return environmentColor
}