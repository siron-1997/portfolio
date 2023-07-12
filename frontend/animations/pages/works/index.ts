import { gsap } from 'gsap'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'
import {
    back_out_opacity_right_move,
    back_out_opacity_left_move,
    power4_out_opacity_top_move
} from '@/assets/animation-options'

type CustomProps = {
    title: HTMLElement | null,
    limitTags: HTMLElement | null,
    contents: HTMLElement | null,
    worksRef: any
}

export const worksAnimation = ({ title, limitTags, contents, worksRef }: CustomProps) => {
    const ctx = gsap.context(() => {
        const width: number = window.innerWidth
        let point: boolean = true
    
        // works title
        gsap.fromTo(
            title,
            back_out_opacity_left_move.from,
            { ...back_out_opacity_left_move.to, delay: 0.4 }
        )
        // limitTags
        gsap.fromTo(
            limitTags,
            power4_out_opacity_top_move.from,
            { ...power4_out_opacity_top_move.to, delay: 0.8 }
        )
        // card
        Array.from(contents.children).forEach((item, i: number) => {
            const cardAnimate = gsap.timeline({
                delay: 0.4,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    end: 'bottom top',
                    markers: false,
                    id: i.toString()
                }
            })
            cardAnimate.fromTo(
                item,
                // from
                width < BREAK_POINT_MB && !((i + 1) % 2 === 0) ? back_out_opacity_right_move.from :
                width < BREAK_POINT_MB && ((i + 1) % 2 === 0) ? back_out_opacity_left_move.from :
                point ? back_out_opacity_right_move.from : back_out_opacity_left_move.from,
                // to
                width < BREAK_POINT_MB && !((i + 1) % 2 === 0) ? back_out_opacity_right_move.to :
                width < BREAK_POINT_MB && ((i + 1) % 2 === 0) ? back_out_opacity_left_move.to :
                point ? back_out_opacity_right_move.to : back_out_opacity_left_move.to
            )
    
            switch (true) {
                case (i + 1) % 2 === 0 && width >= BREAK_POINT_MB && width < BREAK_POINT_TB: // tb
                case (i + 1) % 3 === 0 && width >= BREAK_POINT_TB: // pc
                    point = !point
                    break
                default:
                    break
            }
        })
    }, worksRef)

    return ctx
}