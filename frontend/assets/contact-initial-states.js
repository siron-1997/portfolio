/* Works */
const filmsInitialState = [
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
const contentsInitialState = {
    name: false,
    email: false,
    message: false
}

const sendInitialState = {
    isLoading: false,
    isError: false,
    isComplete: false
}

const stepsState = {
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