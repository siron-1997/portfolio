import { gsap } from 'gsap'
import { power2_out_top } from '@/assets/animation-options'

export const contactAnimation = ({ title, progress, contactRef }) => {
    const ctx = gsap.context(() => {
        /* contact state */
        gsap.fromTo(
            title, power2_out_top.from, { ...power2_out_top.to, delay: 0.5 }
        )
        /* progress */
        gsap.fromTo(
            progress, power2_out_top.from, { ...power2_out_top.to, delay: 0.5 }
        )
    }, contactRef)

    return ctx
}