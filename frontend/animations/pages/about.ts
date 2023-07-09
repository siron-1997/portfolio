import { gsap } from 'gsap'
import {
    power2_out_opacity_left_move,
    power2_out_opacity_right_move
} from '@/assets/animation-options'

type CustomProps = {
    profileImage: HTMLElement | null,
    introduction: HTMLElement | null,
    skillList: HTMLElement | null,
    aboutRef: any
}

export const aboutAnimation = ({ profileImage, introduction, skillList, aboutRef }: CustomProps) => {
    const ctx = gsap.context(() => {
        const delay: number = 0.4

        const getOptions = (element: HTMLElement, index: number): any => {
            return {
                delay: delay,
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    id: index
                }
            }
        }

        /* ProfileImage */
        gsap.fromTo(profileImage,
            power2_out_opacity_right_move.from,
            { ...power2_out_opacity_right_move.to }
        )
        /* Introduction */
        gsap.fromTo(introduction,
            power2_out_opacity_left_move.from,
            { ...power2_out_opacity_left_move.to, delay: delay }
        )
         /* SkillList */
        Array.from(skillList.children).forEach((skill: any, i) => {
            /* title animation */
            const title = gsap.timeline({ ...getOptions(skill.children[0], i) })
            title.fromTo(skill.children[0],
                power2_out_opacity_left_move.from,
                power2_out_opacity_left_move.to
            )
            /* list animation */
            const list = gsap.timeline({ ...getOptions(skill.children[1], i) })
            list.fromTo(skill.children[1],
                power2_out_opacity_left_move.from,
                power2_out_opacity_left_move.to
            )
        })
    }, aboutRef)

    return ctx
}