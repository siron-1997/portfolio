import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'
import {
    back_out_opacity_right_move,
    back_out_opacity_left_move
} from '@/assets/animation-options'

type Props = {
    cards: any
    cardsRef: React.RefObject<HTMLDivElement>
}

const cardsAnimation = ({ cards, cardsRef }: Props) => {
    const ctx = gsap.context(() => {
        const width = window.innerWidth
        let point = true

        Array.from(cards).forEach((item: any, i: number) => {
            const cardAnimate = gsap.timeline({
                ...getScrollTriggerOption({
                    delay: 0.4,
                    element: item,
                    start: 'top 90%',
                    end: 'bottom top',
                    markers: false,
                    id: i.toString()
                })
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
    }, cardsRef)

    return ctx
}

export default cardsAnimation