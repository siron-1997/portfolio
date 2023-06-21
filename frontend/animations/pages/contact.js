import { gsap } from 'gsap'
import { power2_out_top } from '@/assets/animation-options'

export const contactAnimation = (title, progress) => {
    /* contact state */
    const contactStateAnimate = gsap.timeline()
    contactStateAnimate.fromTo(
        title, power2_out_top.from, { ...power2_out_top.to, delay: 0.5 }
    )
    /* progress */
    const progressAnimate = gsap.timeline()
    progressAnimate.fromTo(
        progress, power2_out_top.from, { ...power2_out_top.to, delay: 0.5 }
    )

    return () => {
        contactStateAnimate.kill()
        progressAnimate.kill()
    }
}