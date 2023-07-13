import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    title: HTMLHeadingElement
    titleRef: React.RefObject<HTMLHeadingElement>
}

const normalViewerPortalAnimation = ({ title, titleRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(title,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 0.4 }
        )
    }, titleRef)

    return ctx
}

export default normalViewerPortalAnimation