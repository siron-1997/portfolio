import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    title: HTMLHeadingElement
    progressBar: HTMLDivElement
    contactStateRef: React.RefObject<HTMLDivElement>
}

const contactStateAnimation = ({ title, progressBar, contactStateRef }: Props) => {
    const ctx = gsap.context(() => {
        /* title*/
        gsap.fromTo(title,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 0.8 }
        )
        /* progress */
        gsap.fromTo(progressBar,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 0.8 }
        )
    }, contactStateRef)

    return ctx
}

export default contactStateAnimation