import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    tags: HTMLDivElement
    tagsContainer: HTMLDivElement
    tagsRef: React.RefObject<HTMLDivElement>
}

const tagsAnimation = ({ tags, tagsContainer, tagsRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(tags,
            power2_out_opacity_top_move.from,
            {
                ...power2_out_opacity_top_move.to,
                ...getScrollTriggerOption({
                    delay: 0.4,
                    element: tagsContainer,
                    start: 'start 85%',
                    markers: false
                })
            }
        )
    }, tagsRef)

    return ctx
}

export default tagsAnimation