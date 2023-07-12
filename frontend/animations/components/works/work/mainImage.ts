import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

const mainImageAnimation = (mainImageRef: React.RefObject<HTMLDivElement | null>) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(mainImageRef.current.querySelector('div'),
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 0.8 }
        )
    }, mainImageRef)
    
    return ctx
}

export default mainImageAnimation