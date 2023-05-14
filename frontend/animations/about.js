import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { power4_out_1, back_out_left_1, back_out_2, back_out_3 } from '@/assets/animation-options'

gsap.registerPlugin(ScrollTrigger)

export const aboutAnimate = (aboutRef, image, text, skills) => {
    const ctx = gsap.context(() => {
        // profile image
        gsap.timeline()
            .from(image, power4_out_1.from).to(image, power4_out_1.to)
        // profile text
        gsap.timeline()
            .from(text, back_out_left_1.from).to(text, back_out_left_1.to)
        // skill title
        Array.from(skills.children).forEach((skill, i) => {
            const title = skill.children[0], // skill title
                  list = skill.children[1] // skill list
            // title animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: skill,
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    id: i
                }
            })
            .from(title, back_out_2.from).to(title, back_out_2.to)
            // list animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: skill,
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    id: i
                }
            })
            .from(list, back_out_3.from).to(list, back_out_3.to)
        })
    }, aboutRef)

    return ctx
}