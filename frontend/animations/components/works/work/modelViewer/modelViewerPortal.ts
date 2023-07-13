import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_right_move } from '@/assets/animation-options'

type Props = {
    section: HTMLElement
    sectionRef: React.RefObject<HTMLElement>
}

const modelViewerPortalAnimation = ({ section, sectionRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(section,
            power2_out_opacity_right_move.from,
            { ...power2_out_opacity_right_move.to, delay: 1.5 }
        )
    }, sectionRef)

    return ctx
}

export default modelViewerPortalAnimation