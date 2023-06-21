import { gsap } from 'gsap'
import { power2_out_left, power2_out_right, power2_out_left_title } from '@/assets/animation-options'

export const aboutAnimation = (profileImage, introduction, skillList) => {
    /* ProfileImage */
    const profileImageAnimation = gsap.timeline()
    profileImageAnimation.fromTo(
        profileImage, power2_out_right.from, {...power2_out_right.to}
    )
    /* Introduction */
    const introductionAnimation = gsap.timeline()
    introductionAnimation.fromTo(
        introduction, power2_out_left.from, {...power2_out_left.to, delay: 0.5}
    )
    /* SkillList */
    const skillListAnimations = Array.from(skillList.children).map((skill, i) => {
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

        return { title, list }
    })

    return () => {
        profileImageAnimation.kill()
        introductionAnimation.kill()
        skillListAnimations.forEach((animation => {
            animation.title.kill()
            animation.list.kill()
        }))
    }
}