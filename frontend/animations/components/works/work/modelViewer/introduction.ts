import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import {
    power2_out_opacity_top_move,
    power2_out_opacity_bottom_move
} from '@/assets/animation-options'

type Props = {
    section: HTMLElement
    introductionRef: React.RefObject<HTMLDivElement>
}

const introductionAnimation = ({ section, introductionRef }: Props) => {
    const ctx = gsap.context(() => {
        const toggleButton: HTMLDivElement = section.querySelector('#toggle-button'),
              title: HTMLHeadingElement = section.querySelector('h2'),
              text: HTMLParagraphElement = section.querySelector('p')
        /* 見出し */
        gsap.fromTo(title,
            power2_out_opacity_top_move.from,
            {
                ...power2_out_opacity_top_move.to,
                ...getScrollTriggerOption({ delay: 0.4, element: section, markers: false })
            }
        )
        /* 説明文 */
        gsap.fromTo(text,
            power2_out_opacity_top_move.from,
            {
                ...power2_out_opacity_top_move.to,
                ...getScrollTriggerOption({ delay: 0.4, element: section, markers: false })
            }
        )
        /* トグルボタン */
        gsap.fromTo(toggleButton,
            power2_out_opacity_bottom_move.from,
            {
                ...power2_out_opacity_bottom_move.to,
                ...getScrollTriggerOption({ delay: 0.8, element: section, markers: false })
            }
        )
    }, introductionRef)

    return ctx
}

export default introductionAnimation