const duration = 1.5

const power2_out_top = {
    from : { y: 120, opacity: 0 },
    to: { y: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_bottom = {
    from : { y: - 120, opacity: 0 },
    to: { y: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}

const power2_out_left = {
    from : { x: 120, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_left_title = {
    from : { x: 120, opacity: 0 },
    to: { x: 0, opacity: 0.85, duration: duration, ease: 'power2.out' }
}

const power2_out_right = {
    from : { x: - 120, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}

const power4_out_top = {
    from : { y: 100, opacity: 0, duration: duration, ease: 'power2.out' },
    to: { y: 0, opacity: 1 }
}

const power4_out_scale_1 = {
    from: { scale: 0, duration: .4 },
    to: { scale: 1 }
}

const back_out_left_1 = {
    from : { x: 100, opacity: 0, duration: duration, delay: .2, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}

const back_out_right_1 = {
    from : { x: - 100, opacity: 0, duration: duration, delay: .2, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}


export {
    power2_out_top,
    power2_out_bottom,
    power2_out_left,
    power2_out_right,
    power2_out_left_title,
    power4_out_top,
    power4_out_scale_1,
    back_out_left_1,
    back_out_right_1,
}