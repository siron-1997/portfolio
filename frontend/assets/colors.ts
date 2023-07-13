type BorderColorConfig = {
    readonly default: string
    readonly hover: string
    readonly focus: string
}
type BgColorConfig = {
    readonly main: string
    readonly sub: string
    readonly textField: string
}
type NormalColorConfig = {
    readonly default: string
    readonly hover: string
}
type Colors = {
    readonly border: {
        readonly dark: BorderColorConfig
    }
    readonly text: {
        readonly dark: string
    }
    readonly bgColor: {
        readonly dark: BgColorConfig
    }
    readonly main: NormalColorConfig
    readonly error: NormalColorConfig
    readonly navigation: string 
}

export const colors: Colors = {
    border: {
        dark: {
            default: 'rgba(190, 190, 190, 0.4)',
            hover: 'rgba(190, 190, 190, 0.8)',
            focus: '#00AAAA' 
        }
    },
    text: {
        dark: '#FFFFFF'
    },
    bgColor: {
        dark: {
            main: '#1D1730',
            sub: '#2A2E3F',
            textField: '#3A3E4F'
        }
    },
    main: {
        default: '#00AAAA',
        hover: '#008888'
    },
    error: {
        default: '#FF2E3A',
        hover: '#AA1D29'
    },
    navigation: '#00FFFF'
}