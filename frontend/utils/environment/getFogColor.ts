import { envColors } from '@/assets/env-colors'

const getFogColor = (timePoint: 'evening' | 'night' | 'lunch') => {
    let fogColor: string = ''

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
            const check: never = timePoint
            break
    }

    return fogColor
}

export default getFogColor