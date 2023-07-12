import React from 'react'
import { gsap } from 'gsap'
import {
    power2_out_opacity_left_move,
    power2_out_opacity_right_move
} from '@/assets/animation-options'

const imagesAnimation = (imagesRef: React.RefObject<HTMLElement | null>) => {
    const delay: number = 0.4

    const getOptions = (element: HTMLElement) => {
        return {
            delay: delay,
            scrollTrigger: {
                trigger: element,
                markers: false,
                start: 'start 85%'
            }
        }
    }

    const ctx = gsap.context(() => {
        Array.from(imagesRef.current.querySelectorAll('div')).forEach((child: HTMLDivElement, i: number) => {
            if ((i + 1) % 2 === 0) {
                gsap.fromTo(child, // Imageラップ要素
                    power2_out_opacity_right_move.from,
                    { ...power2_out_opacity_right_move.to, ...getOptions(child) }
                )
            } else {
                gsap.fromTo(child, // Imageラップ要素
                    power2_out_opacity_left_move.from,
                    { ...power2_out_opacity_left_move.to, ...getOptions(child) }
                )
            }
        })
    }, imagesRef)

    return ctx
}

export default imagesAnimation