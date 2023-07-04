import { gsap } from 'gsap'
import { power2_out_top, power2_out_left } from '@/assets/animation-options'

export const homeAnimation = ({ portalSection, pageHeaderRef, worksRef }) => {
    const pageHeaderCtx = gsap.context(() => {
            gsap.fromTo(portalSection, power2_out_top.from, { ...power2_out_top.to, delay: 2 })
    }, pageHeaderRef)

    const worksCtx = gsap.context(() => {
        gsap.fromTo( // 見出し
            worksRef.current.children[0],
            power2_out_top.from,
            {
                ...power2_out_top.to,
                delay: 0.3,
                scrollTrigger: {
                    trigger: worksRef.current,
                    markers: false
                }
            }
        )

        gsap.fromTo( // カードリスト
            worksRef.current.children[1],
            power2_out_left.from,
            {
                ...power2_out_left.to,
                delay: 0.6,
                scrollTrigger: {
                    trigger: worksRef.current,
                    markers: false,
                    start: '20% bottom'
                }
            }
        )
    }, worksRef)

    return { pageHeaderCtx, worksCtx }
}