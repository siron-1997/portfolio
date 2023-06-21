import { gsap } from 'gsap'
import { power2_out_top, power2_out_left } from '@/assets/animation-options'

export const homeAnimation = (topSection, works) => {
    const topSectionAnimation = gsap.fromTo(
        topSection, power2_out_top.from, { ...power2_out_top.to, delay: 2 }
    )

    const worksTitleAnimation = gsap.timeline({
        delay: 0.3,
        scrollTrigger: {
            trigger: works,
            markers: false
        }
    })
    worksTitleAnimation.fromTo( // 見出し
        works.children[0], power2_out_top.from, power2_out_top.to
    )

    const worksCardsAnimation = gsap.timeline({
        delay: 0.6,
        scrollTrigger: {
            trigger: works,
            markers: false,
            start: '20% bottom'
        }
    })
    worksCardsAnimation.fromTo( // カードリスト
        works.children[1], power2_out_left.from, power2_out_left.to
    )

    return () => {
        topSectionAnimation.kill()
        worksTitleAnimation.kill()
        worksCardsAnimation.kill()
    }
}