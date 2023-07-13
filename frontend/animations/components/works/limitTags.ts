import React from 'react'
import { gsap } from 'gsap'
import { power4_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    limitTags: HTMLDivElement
    limitTagsRef: React.RefObject<HTMLDivElement>
}

const limitTagsAnimation = ({ limitTags, limitTagsRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(
            limitTags,
            power4_out_opacity_top_move.from,
            { ...power4_out_opacity_top_move.to, delay: 0.8 }
        )
    }, limitTagsRef)

    return ctx
}

export default limitTagsAnimation