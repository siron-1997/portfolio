import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_left_move } from '@/assets/animation-options'

type Props = {
    section: HTMLElement
    introductionRef: React.RefObject<HTMLDivElement>
}

const introductionAnimation = ({ section, introductionRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(section,
            power2_out_opacity_left_move.from,
            { ...power2_out_opacity_left_move.to, delay: 0.4 }
        )
    }, introductionRef)

    return ctx
}

export default introductionAnimation