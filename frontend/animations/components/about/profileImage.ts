import React from 'react'
import { gsap } from 'gsap'
import { power2_out_opacity_right_move } from '@/assets/animation-options'

type CustomProps = {
    image: HTMLImageElement
    profileImageRef: React.RefObject<HTMLDivElement>
}

const profileImageAnimation = ({ image, profileImageRef }: CustomProps) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(image,
            power2_out_opacity_right_move.from,
            { ...power2_out_opacity_right_move.to }
        )
    }, profileImageRef)

    return ctx
}

export default profileImageAnimation