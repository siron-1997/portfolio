import React from 'react'
import { gsap } from 'gsap'
import { getScrollTriggerOption } from '@/utils/gsap'
import {
    power2_out_opacity_top_move,
    power2_out_opacity_left_move,
    power2_out_opacity_right_move
} from '@/assets/animation-options'

type Props = {
    section: HTMLElement
    listPC: HTMLDivElement
    listMB: HTMLDivElement
    controlsRef: React.RefObject<HTMLDivElement>
}

const controlsAnimation = ({ section, listPC, listMB, controlsRef }: Props) => {
    const ctx = gsap.context(() => {
        /* セクション */
        gsap.fromTo(section,
            power2_out_opacity_top_move.from,
            {
                ...power2_out_opacity_top_move.to,
                ...getScrollTriggerOption({
                    delay: 0.4,
                    element: controlsRef.current.querySelector('div').querySelector('div'),
                    markers: false
                })
            }
        )
        /* コントロールリスト PC */
        if (listPC.style.display !== 'none') {
            const list: HTMLUListElement = listPC.querySelector('ul')
            gsap.fromTo(list,
                power2_out_opacity_left_move.from,
                {
                    ...power2_out_opacity_left_move.to,
                    ...getScrollTriggerOption({ delay: 0.4, element: list, markers: false })
                }
            )
        }
        /* コントロールリスト MB */
        if (listMB.style.display !== 'none') {
            const list: HTMLUListElement = listMB.querySelector('#controls-mb-text')
            gsap.fromTo(list,
                power2_out_opacity_right_move.from,
                {
                    ...power2_out_opacity_right_move.to,
                    ...getScrollTriggerOption({ delay: 0.4, element: list, markers: false })
                }
            )
            /* コントロールバー */
            gsap.fromTo(listMB.querySelector('#controls-mb-carousel'),
                power2_out_opacity_top_move.from,
                {
                    ...power2_out_opacity_top_move.to,
                    ...getScrollTriggerOption({ delay: 0.4, element: listMB, markers: false })
                }
            )
        }
    }, )

    return ctx
}

export default controlsAnimation