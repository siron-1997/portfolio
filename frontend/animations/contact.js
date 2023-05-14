import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { back_out_right_1, back_out_2, back_out_left_2 } from '@/assets/animation-options'

gsap.registerPlugin(ScrollTrigger)

export const contactAnimate = (contactRef, title, progress, form) => {
    const ctx = gsap.context(() => {
        /* contact state */
        gsap.timeline() // title
            .from(title, back_out_right_1.from).to(title, back_out_right_1)
        gsap.timeline()
            .from(progress, back_out_2.from).to(progress, back_out_2.to) // progress
        /* form */
        gsap.timeline({
            scrollTrigger: {
                trigger: form,
                start: 'top bottom',
                end: 'bottom top',
                markers: false
            }
        })
        .from(form, back_out_left_2.from).to(form, back_out_left_2.to)
    }, contactRef)



    return ctx
}