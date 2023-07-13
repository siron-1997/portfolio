import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import { power2_out_opacity_left_move } from '@/assets/animation-options'

type Props = {
    skillList: any
    skillsListRef: React.RefObject<HTMLDivElement>
}

const skillsListAnimation = ({ skillList, skillsListRef }: Props) => {
    const ctx = gsap.context(() => {
        Array.from(skillList).forEach((item: any, i: number) => {
            const title = item.querySelector('h3'),
                  list = item.querySelectorAll('.skill-list')
            /* title animation */
            gsap.fromTo(title,
                power2_out_opacity_left_move.from,
                {
                    ...power2_out_opacity_left_move.to,
                    ...getScrollTriggerOption({ delay: 0.4, element: title, id: i.toString() })
                }
            )
            /* list animation */
            gsap.fromTo(list,
                power2_out_opacity_left_move.from,
                {
                    ...power2_out_opacity_left_move.to,
                    ...getScrollTriggerOption({ delay: 0.8, element: list, id: i.toString() })
                }
            )
        })
    }, skillsListRef)

    return ctx
}

export default skillsListAnimation