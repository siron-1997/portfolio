const power4_out_1 = {
    from : { x: - 200, opacity: 0, duration: 1.6, ease: 'power4.out' },
    to: { x: 0, opacity: 1 }
}

const power4_out_scale_1 = {
    from: { scale: 0, duration: 0.4 },
    to: { scale: 1 }
}

const back_out_left_1 = {
    from : { x: 150, opacity: 0, duration: 1.6, delay: 0.2, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}

const back_out_left_2 = {
    from : { x: 150, opacity: 0, duration: 1.6, delay: 1.0, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}

const back_out_right_1 = {
    from : { x: - 150, opacity: 0, duration: 1.6, delay: 0.2, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}

const back_out_2 = {
    from: { y: 130, opacity: 0, duration: 1, delay: 0.4, ease: 'back.out' },
    to: { y: 0, opacity: 0.8 }
}

const back_out_3 = {
    from : { x: 150, opacity: 0, duration: 1.2, delay: 0.8, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}


export {
    power4_out_1,
    power4_out_scale_1,
    back_out_left_1,
    back_out_left_2,
    back_out_right_1,
    back_out_2,
    back_out_3
}