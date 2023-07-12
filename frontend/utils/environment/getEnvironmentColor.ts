import { envColors } from '@/assets/env-colors'

type TimePoint = 'evening' | 'night' | 'lunch'

const getEnvironmentColor = (timePoint: TimePoint): string => {
    let environmentColor: string = ''

    switch (timePoint) {
        case 'evening':
            environmentColor = envColors.evening.environment
            break
        case 'night':
            environmentColor = envColors.night.environment
            break
        case 'lunch':
            environmentColor = envColors.lunch.environment
            break
        default:
            const check: never = timePoint
            break
    }

    return environmentColor
}

export default getEnvironmentColor