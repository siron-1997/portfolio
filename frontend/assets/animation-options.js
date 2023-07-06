const duration = 1.8

const power2_out_opacity_top_move = {
    from : { y: 120, opacity: 0 },
    to: { y: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_opacity_bottom_move = {
    from : { y: - 120, opacity: 0 },
    to: { y: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_opacity_left_move = {
    from : { x: 120, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_opacity_right_move = {
    from : { x: - 120, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}

const power4_out_opacity_top_move = {
    from : { y: 100, opacity: 0, duration: duration, ease: 'power2.out' },
    to: { y: 0, opacity: 1 }
}

const back_out_opacity_left_move = {
    from : { x: 100, opacity: 0, duration: duration, delay: .2, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}

const back_out_opacity_right_move = {
    from : { x: - 100, opacity: 0, duration: duration, delay: .2, ease: 'back.out' },
    to: { x: 0, opacity: 1 }
}


export {
    power2_out_opacity_top_move,
    power2_out_opacity_bottom_move,
    power2_out_opacity_left_move,
    power2_out_opacity_right_move,
    power4_out_opacity_top_move,
    back_out_opacity_left_move,
    back_out_opacity_right_move,
}