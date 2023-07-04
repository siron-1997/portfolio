import { gsap } from 'gsap'
import { power2_out_left, power2_out_right } from '@/assets/animation-options'

export default function imagesAnimation(imagesRef) {
    const ctx = gsap.context(() => {
        Array.from(imagesRef.current.children).forEach((child, i) => {
            if ((i + 1) % 2 === 0) {
                gsap.fromTo(child,
                    {
                        ...power2_out_right.from,
                        scrollTrigger: {
                            trigger: child,
                            markers: false,
                            start: 'start 75%'
                        }
                    },
                    power2_out_right.to
                )
            } else {
                gsap.fromTo(child,
                    {
                        ...power2_out_left.from,
                        scrollTrigger: {
                            trigger: child,
                            markers: false,
                            start: 'start 75%'
                        }
                    },
                    power2_out_left.to
                )
            }
        })
    }, imagesRef)

    return ctx
}