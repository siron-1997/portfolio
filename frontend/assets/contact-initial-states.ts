type Film = {
    readonly title: '3D' | 'web' | 'app',
    readonly type: 'three' | 'web' | 'app',
    readonly key: number
}
type FilmsInitialState = readonly Film[]

type ContentsInitialState = {
    name: boolean,
    email: boolean,
    message: boolean
}
type SendInitialState = {
    isLoading: boolean,
    isError: boolean,
    isComplete: boolean
}

type Step = {
    start: boolean,
    end: boolean
}
type StepsState = {
    first: Step,
    second: Step
}

/* Works */
const filmsInitialState: FilmsInitialState = [
    {
        title: '3D',
        type: 'three',
        key: 0
    },
    {
        title: 'web',
        type: 'web',
        key: 1
    },
    {
        title: 'app',
        type: 'app',
        key: 2
    }
]

/* Contact */
const contentsInitialState: ContentsInitialState = {
    name: false,
    email: false,
    message: false
}

const sendInitialState: SendInitialState = {
    isLoading: false,
    isError: false,
    isComplete: false
}

const stepsState: StepsState = {
    first: {
        start: false,
        end: false
    },
    second: {
        start: false,
        end: false
    }
}


export { filmsInitialState, contentsInitialState, sendInitialState, stepsState }