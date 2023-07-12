import React from 'react'
import { gsap } from 'gsap'
import {
    power2_out_opacity_top_move,
    power2_out_opacity_bottom_move,
    power2_out_opacity_left_move,
    power2_out_opacity_right_move
} from '@/assets/animation-options'

type CustomProps = {
    pageHeaderRef: React.RefObject<HTMLElement | null>,
    introductionRef: React.RefObject<HTMLDivElement | null>,
    controlsRef: React.RefObject<HTMLDivElement | null>,
    pageHeaderSection: HTMLElement | null,
    introductionSection: HTMLElement | null,
    controlsSection: HTMLElement | null,
    controlsListPC: HTMLElement | null,
    controlsListMB: HTMLElement | null
}

const modelViewerAnimation = ({
    pageHeaderRef,
    introductionRef,
    controlsRef,
    pageHeaderSection,
    introductionSection,
    controlsSection,
    controlsListPC,
    controlsListMB
}: CustomProps) => {
    const delay: number = 0.4

    const getOptions = (element: HTMLElement) => {
        return {
            delay: delay,
            scrollTrigger: {
                trigger: element,
                markers: false
            }
        }
    }

    const pageHeaderCtx = gsap.context(() => {
        gsap.fromTo(pageHeaderSection,
            power2_out_opacity_right_move.from,
            { ...power2_out_opacity_right_move.to, delay: 1.5 }
        )
    }, pageHeaderRef)

    const introductionCtx = gsap.context(() => {
        const toggleButton: HTMLDivElement = introductionSection.querySelector('#toggle-button')
        /* 見出し */
        gsap.fromTo(introductionSection.querySelector('h2'),
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(introductionSection) }
        )
        /* 説明文 */
        gsap.fromTo(introductionSection.querySelector('p'),
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: -1.8, ...getOptions(introductionSection) }
        )
        /* トグルボタン */
        gsap.fromTo(toggleButton,
            power2_out_opacity_bottom_move.from,
            { ...power2_out_opacity_bottom_move.to, ...getOptions(toggleButton) }
        )
    }, introductionRef)

    const controlsCtx = gsap.context(() => {
        /* セクション */
        gsap.fromTo(controlsSection,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(controlsRef.current.querySelector('div').querySelector('div')) }
        )
        /* コントロールリスト PC */
        if (controlsListPC.style.display !== 'none') {
            const list: HTMLUListElement = controlsListPC.querySelector('ul')
            gsap.fromTo(list,
                power2_out_opacity_left_move.from,
                { ...power2_out_opacity_left_move.to, delay: 0.4, ...getOptions(list) }
            )
        }
        /* コントロールリスト MB */
        if (controlsListMB.style.display !== 'none') {
            const list: HTMLUListElement = controlsListMB.querySelector('#controls-mb-text')
            gsap.fromTo(list,
                power2_out_opacity_right_move.from,
                { ...power2_out_opacity_right_move.to, ...getOptions(list) }
            )
            /* コントロールバー */
            gsap.fromTo(controlsListMB.querySelector('#controls-mb-carousel'),
                power2_out_opacity_top_move.from,
                { ...power2_out_opacity_top_move.to, ...getOptions(controlsListMB) }
            )
        }
    }, controlsRef)

    return { pageHeaderCtx, introductionCtx, controlsCtx }
}

export default modelViewerAnimation