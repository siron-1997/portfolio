import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    categories: HTMLDivElement
    categoriesContainer: HTMLDivElement
    categoriesRef: React.RefObject<HTMLDivElement>
}

const categoriesAnimation = ({ categories, categoriesContainer, categoriesRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(categories,
            power2_out_opacity_top_move.from,
            {
                ...power2_out_opacity_top_move.to,
                ...getScrollTriggerOption({
                    delay: 0.4,
                    element: categoriesContainer,
                    start: 'start 85%',
                    markers: false
                })
            }
        )
    }, categoriesRef)

    return ctx
}

export default categoriesAnimation