import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    mainImage: HTMLDivElement
    mainImageRef: React.RefObject<HTMLDivElement>
}

const mainImageAnimation = ({ mainImage, mainImageRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(mainImage,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 0.8 }
        )
    }, mainImageRef)
    
    return ctx
}

export default mainImageAnimation