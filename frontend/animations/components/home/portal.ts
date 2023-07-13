import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    title: HTMLHeadingElement
    portalRef: React.RefObject<HTMLElement>
}

const portalAnimation = ({ title, portalRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(title,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 1.5 }
        )
    }, portalRef)

    return ctx
}

export default portalAnimation