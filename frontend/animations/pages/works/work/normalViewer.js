import { gsap } from 'gsap'
import { power2_out_top } from '@/assets/animation-options'

export default function normalViewerAnimation({ normalViewerRef, title, normal, description }) {
    const ctx = gsap.context(() => {
        const delay = '+=0.3'

        gsap.fromTo(title,
            power2_out_top.from,
            {
                ...power2_out_top.to,
                scrollTrigger: {
                    trigger: title,
                    markers: false,
                    start: 'start 85%'
                }
            }
        )

        gsap.fromTo(normal,
            power2_out_top.from,
            {
                ...power2_out_top.to,
                delay: 0.3,
                scrollTrigger: {
                    trigger: normal,
                    markers: false,
                    start: 'start 85%'
                }
            },
            delay
        )
        gsap.fromTo(description,
            power2_out_top.from,
            {
                ...power2_out_top.to,
                delay: 0.3,
                scrollTrigger: {
                    trigger: description,
                    markers: false,
                    start: 'start 85%'
                }
            },
            delay
        )

    }, normalViewerRef)

    return ctx
}