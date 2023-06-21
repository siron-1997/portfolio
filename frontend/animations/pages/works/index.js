import { gsap } from 'gsap'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'
import { back_out_right_1, back_out_left_1, power4_out_top } from '@/assets/animation-options'

export const worksAnimation = (title, limitTags, contentsRef) => {
    const width = window.innerWidth
    let point = true

    // works title
    const worksTitleAnimate = gsap.timeline()
    worksTitleAnimate.fromTo(
        title,
        back_out_left_1.from,
        { ...back_out_left_1.to, delay: 0.8 }
    )
    // limitTags
    const limitTagsAnimate = gsap.timeline()
    limitTagsAnimate.fromTo(
        limitTags,
        power4_out_top.from,
        { ...power4_out_top.to, delay: 0.8 }
    )
    // card
    const cardsAnimations = Array.from(contentsRef.current.children).map((item, i) => {
        const cardAnimate = gsap.timeline({
            delay: 0.3,
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                end: 'bottom top',
                markers: false,
                id: i
            }
        })
        cardAnimate.fromTo(
            item,
            // from
            width < BREAK_POINT_MB && !((i + 1) % 2 === 0) ? back_out_right_1.from :
            width < BREAK_POINT_MB && ((i + 1) % 2 === 0) ? back_out_left_1.from :
            point ? back_out_right_1.from : back_out_left_1.from,
            // to
            width < BREAK_POINT_MB && !((i + 1) % 2 === 0) ? back_out_right_1.to :
            width < BREAK_POINT_MB && ((i + 1) % 2 === 0) ? back_out_left_1.to :
            point ? back_out_right_1.to : back_out_left_1.to
        )

        switch (true) {
            case (i + 1) % 2 === 0 && width >= BREAK_POINT_MB && width < BREAK_POINT_TB: // tb
            case (i + 1) % 3 === 0 && width >= BREAK_POINT_TB: // pc
                point = !point
                break
            default:
                break
        }

        return cardAnimate
    })

    return () => {
        worksTitleAnimate.kill()
        limitTagsAnimate.kill()
        cardsAnimations.forEach(cardAnimate => cardAnimate.kill())
    }
}