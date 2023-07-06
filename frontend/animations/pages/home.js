import { gsap } from 'gsap'
import {
    power2_out_opacity_top_move,
    power2_out_opacity_left_move
} from '@/assets/animation-options'

export const homeAnimation = ({
    pageHeaderTitle, worksTitle, worksCard, pageHeaderSectionRef, worksRef
}) => {
    const delay = 0.4

    const getOptions = (element, start) => {
        return {
            delay: delay,
            scrollTrigger: {
                trigger: element,
                markers: false,
                start: start
            }
        }
    }

    /* ファーストビュー見出し */
    const pageHeaderCtx = gsap.context(() => {
        gsap.fromTo(pageHeaderTitle,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 1.5 }
        )
    }, pageHeaderSectionRef)

    const worksCtx = gsap.context(() => {
        /* Works見出し */
        gsap.fromTo(worksTitle,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(worksRef.current, 'start bottom') }
        )
        /* Works カード */
        gsap.fromTo(worksCard,
            power2_out_opacity_left_move.from,
            { ...power2_out_opacity_left_move.to, ...getOptions(worksCard, '20% bottom') }, '+=0.8'
        )
    }, worksRef)

    return { pageHeaderCtx, worksCtx }
}