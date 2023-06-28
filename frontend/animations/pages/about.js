import { gsap } from 'gsap'
import { power2_out_left, power2_out_right, power2_out_left_title } from '@/assets/animation-options'

export const aboutAnimation = ({ profileImage, introduction, skillList, aboutRef }) => {
    const ctx = gsap.context(() => {
        /* ProfileImage */
        gsap.fromTo(
            profileImage, power2_out_right.from, {...power2_out_right.to}
        )
        /* Introduction */
        gsap.fromTo(
            introduction, power2_out_left.from, {...power2_out_left.to, delay: 0.5}
        )
         /* SkillList */
        Array.from(skillList.children).forEach((skill, i) => {
            /* title animation */
            const title = gsap.timeline({
                delay: 0.3,
                scrollTrigger: {
                    trigger: skill.children[0], // title
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    id: i
                }
            })
            title.fromTo(
                skill.children[0], power2_out_left_title.from, power2_out_left_title.to
            )
            /* list animation */
            const list = gsap.timeline({
                delay: 0.5,
                scrollTrigger: {
                    trigger: skill.children[1], // list
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    id: i
                }
            })
            list.fromTo(
                skill.children[1], power2_out_left.from, power2_out_left.to
            )
        })
    }, aboutRef)

    return ctx
}