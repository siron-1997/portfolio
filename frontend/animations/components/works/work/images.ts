import { gsap } from 'gsap'
import {
    power2_out_opacity_left_move,
    power2_out_opacity_right_move
} from '@/assets/animation-options'

const imagesAnimation = (imagesRef: any) => {
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
        Array.from(imagesRef.current.children).forEach((child: HTMLElement, i: number) => {
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