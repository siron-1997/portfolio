import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import {
    power2_out_opacity_left_move,
    power2_out_opacity_right_move
} from '@/assets/animation-options'

type Props = {
    images: any
    imagesRef: React.RefObject<HTMLDivElement>
}

const imagesAnimation = ({ images, imagesRef }: Props) => {
    const ctx = gsap.context(() => {
        Array.from(images).forEach((item: HTMLDivElement, i: number) => {
            if ((i + 1) % 2 === 0) {
                gsap.fromTo(item, // Imageラップ要素
                    power2_out_opacity_right_move.from,
                    {
                        ...power2_out_opacity_right_move.to,
                        ...getScrollTriggerOption({
                            delay: 0.4,
                            element: item,
                            start: 'start 85%',
                            markers: false
                        })
                    }
                )
            } else {
                gsap.fromTo(item, // Imageラップ要素
                    power2_out_opacity_left_move.from,
                    {
                        ...power2_out_opacity_left_move.to,
                        ...getScrollTriggerOption({
                            delay: 0.4,
                            element: item,
                            start: 'start 85%',
                            markers: false
                        })
                    }
                )
            }
        })
    }, imagesRef)

    return ctx
}

export default imagesAnimation