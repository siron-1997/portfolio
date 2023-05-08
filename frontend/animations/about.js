import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const aboutAnimate = (aboutRef, image, text, skills) => {
    const ctx = gsap.context(() => {
        // profile image
        gsap.timeline()
            .from(image, { x: - 200, opacity: 0, duration: 1.6, ease: 'power4.out' })
            .to(image, { x: 0, opacity: 1 })
        // profile text
        gsap.timeline()
            .from(text, { x: 150, opacity: 0, duration: 1.6, delay: 0.2, ease: 'back.out' })
            .to(text, { x: 0, opacity: 1 })
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
            .from(title, { y: 130, opacity: 0, duration: 1, delay: 0.4, ease: 'back.out' })
            .to(title, { y: 0, opacity: 0.8 })
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
            .from(list, { x: 150, opacity: 0, duration: 1.2, delay: 0.8, ease: 'back.out' })
            .to(list, { x: 0, opacity: 1 })
        })
    }, aboutRef)

    return ctx
}