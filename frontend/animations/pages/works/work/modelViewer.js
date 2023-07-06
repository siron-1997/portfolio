import { gsap } from 'gsap'
import {
    power2_out_opacity_top_move,
    power2_out_opacity_bottom_move,
    power2_out_opacity_left_move,
    power2_out_opacity_right_move
} from '@/assets/animation-options'

export default function modelViewerAnimation({
    pageHeaderRef,
    introductionRef,
    controlsRef,
    pageHeaderSection,
    introductionSection,
    controlsSection,
    controlsListPC,
    controlsListMB
}) {
    const delay = 0.4

    const getOptions = element => {
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
        /* 見出し */
        gsap.fromTo(introductionSection.children[0],
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(introductionSection) }
        )
        /* 説明文 */
        gsap.fromTo(introductionSection.children[1],
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(introductionSection) }, '-=1.8'
        )
        /* トグルボタン */
        gsap.fromTo(introductionSection.children[3],
            power2_out_opacity_bottom_move.from,
            { ...power2_out_opacity_bottom_move.to, ...getOptions(introductionSection.children[3]) }
        )
    }, introductionRef)

    const controlsCtx = gsap.context(() => {
        /* セクション */
        gsap.fromTo(controlsSection,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(controlsRef.current.children[0].children[0]) }
        )
        /* コントロールリスト PC */
        if (controlsListPC.style.display !== 'none') {
            gsap.fromTo(controlsListPC.children[0],
                power2_out_opacity_left_move.from,
                { ...power2_out_opacity_left_move.to, ...getOptions(controlsListPC.children[0]) }, '+=0.4'
            )
        }
        /* コントロールリスト MB */
        if (controlsListMB.style.display !== 'none') {
            gsap.fromTo(controlsListMB.children[0],
                power2_out_opacity_right_move.from,
                { ...power2_out_opacity_right_move.to, ...getOptions(controlsListMB.children[0]) }
            )
            /* コントロールバー */
            gsap.fromTo(controlsListMB.children[1],
                power2_out_opacity_top_move.from,
                { ...power2_out_opacity_top_move.to, ...getOptions(controlsListMB) }
            )
        }
    }, controlsRef)

    return { pageHeaderCtx, introductionCtx, controlsCtx }
}