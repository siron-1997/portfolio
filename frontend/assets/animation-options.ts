type From = {
    readonly x?: number,
    readonly y?: number,
    readonly opacity: number
}
type To = {
    readonly x?: number
    readonly y?: number
    readonly opacity: number
    readonly duration: number
    readonly delay?: number
    readonly ease: string
}
type AnimationConfig = {
    readonly from: From
    readonly to: To
}

const duration: number = 1.8

const power2_out_opacity_top_move: AnimationConfig = {
    from : { y: 120, opacity: 0 },
    to: { y: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_opacity_bottom_move: AnimationConfig = {
    from : { y: - 120, opacity: 0 },
    to: { y: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_opacity_left_move: AnimationConfig = {
    from : { x: 120, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power2_out_opacity_right_move: AnimationConfig = {
    from : { x: - 120, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const power4_out_opacity_top_move: AnimationConfig = {
    from : { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1, duration: duration, ease: 'power2.out' }
}
const back_out_opacity_left_move: AnimationConfig = {
    from : { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, delay: 0.2, ease: 'back.out' }
}
const back_out_opacity_right_move: AnimationConfig = {
    from : { x: - 100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: duration, delay: 0.2, ease: 'back.out' }
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