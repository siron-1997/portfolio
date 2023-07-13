import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import {
    power2_out_opacity_top_move,
    power2_out_opacity_left_move
} from '@/assets/animation-options'

type Props = {
    title: HTMLHeadingElement
    cards: HTMLDivElement
    worksRef: React.RefObject<HTMLElement>
}

const worksAnimation = ({ title, cards, worksRef }: Props) => {
    const ctx = gsap.context(() => {
        /* Works見出し */
        gsap.fromTo(title,
            power2_out_opacity_top_move.from,
            {
                ...power2_out_opacity_top_move.to,
                ...getScrollTriggerOption({ element: worksRef.current, start: 'top bottom' })
            }
        )
        /* Works カード */
        gsap.fromTo(cards,
            power2_out_opacity_left_move.from,
            {
                ...power2_out_opacity_left_move.to,
                ...getScrollTriggerOption({ element: cards, start: '20% bottom', delay: 0.8 })
            }
        )
    })

    return ctx
}

export default worksAnimation