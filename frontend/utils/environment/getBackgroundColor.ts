import { envColors } from '@/assets/env-colors'

type TimePoint = 'evening' | 'night' | 'lunch'

const getBackgroundColor = (timePoint: TimePoint): string => {
    let backgroundColor: string = ''

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
        default: {
            const check: never = timePoint
            break
        }
    }

    return backgroundColor
}

export default getBackgroundColor