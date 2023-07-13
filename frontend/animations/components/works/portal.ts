import React from 'react'
import { gsap } from 'gsap'
import { back_out_opacity_left_move } from '@/assets/animation-options'

type Props = {
    title: HTMLHeadingElement
    titleRef: React.RefObject<HTMLHeadingElement>
}

const portalAnimation = ({ title, titleRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(
            title,
            back_out_opacity_left_move.from,
            { ...back_out_opacity_left_move.to, delay: 0.4 }
        )
    }, titleRef)

    return ctx
}

export default portalAnimation