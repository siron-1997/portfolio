import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type Props = {
    description: HTMLDivElement
    descriptionrRef: React.RefObject<HTMLDivElement>
}

const descriptionAnimation = ({ description, descriptionrRef }: Props) => {
    const ctx = gsap.context(() => {
        gsap.fromTo(description,
            power2_out_opacity_top_move.from,
            {
                ...power2_out_opacity_top_move.to,
                ...getScrollTriggerOption({
                    delay: 0.4,
                    element: descriptionrRef.current,
                    start: 'start 85%',
                    markers: false
                })
            }
        )
    }, descriptionrRef)

    return ctx
}

export default descriptionAnimation