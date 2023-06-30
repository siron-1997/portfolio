/* Works */
const filmsInitialState = [
    {
        title: '3D',
        type: 'three',
        visible: true
    },
    {
        title: 'web',
        type: 'web',
        visible: true
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