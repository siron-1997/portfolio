import { gsap } from 'gsap'
import { power2_out_bottom, power2_out_left, power2_out_right, power2_out_top } from '@/assets/animation-options'

export default function modelViewerAnimation({ modelViewerRef, pageHeader, introduction, controls }) {
    const ctx = gsap.context(() => {
        const pageHeaderSection = pageHeader.children[1].children[0].children[0],
              introductionSection = introduction.children[0].children[0],
              controlsSection = controls.children[0].children[0].children[0],
              controlsListPc = controls.children[0].children[0].children[1],
              controlsListMb = controls.children[0].children[0].children[2]

        const duration = 1.5,
              delay = 0.6

        /* PageHeader セクション */
        gsap.fromTo(
            pageHeaderSection, power2_out_right.from, { ...power2_out_right.to, delay: 1 }
        )

        /* Introduction セクション */
        const introductionAnimation = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
                trigger: introductionSection,
                markers: false
            }
        })
        introductionAnimation.fromTo( // タイトル
            introductionSection.children[0],
            { y: 120, opacity: 0 }, { y: 0, opacity: 0.9, duration: duration, ease: 'power2.out' }
        )
        introductionAnimation.fromTo( // 説明文
            introductionSection.children[1],
            { y: 120, opacity: 0 }, { y: 0, opacity: 0.75, duration: duration, ease: 'power2.out' },
            `-=${duration}`
        )

        /* Introduction ボタン */ 
        const introductionButtonAnimation = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
                trigger: introductionSection.children[3],
                markers: false
            }
        })
        introductionButtonAnimation.fromTo(
            introductionSection.children[3], power2_out_bottom.from, power2_out_bottom.to
        )

        /* Controls セクション */
        const controlsSectionAnimation = gsap.timeline({
            delay: delay,
            scrollTrigger: {
                trigger: controlsSection,
                markers: false
            }
        })
        controlsSectionAnimation.fromTo( // 見出し
            controlsSection.children[0],
            { y: 120, opacity: 0 }, { y: 0, opacity: 0.9, duration: duration, ease: 'power2.out' }
        )
        controlsSectionAnimation.fromTo( // 段落
            controlsSection.children[1],
            { y: 120, opacity: 0 }, { y: 0, opacity: 0.75, duration: duration, ease: 'power2.out' }, `-=${duration}`
        )

        /* Controls リスト PC */
        const controlsListPcAnimation = gsap.timeline({
            delay: delay,
            scrollTrigger: {
                trigger: controlsListPc,
                markers: false
            }
        })
        if (controlsListPc.style.display !== 'none') { // 非表示じゃない場合再生
            controlsListPcAnimation.fromTo(
                controlsListPc.children[0], power2_out_left.from, power2_out_left.to, '+=0.3'
            )
        }

        /* Controls リスト MB */
        const controlsListMbTextAnimation = gsap.timeline({
            delay: delay,
            scrollTrigger: {
                trigger: controlsListMb,
                markers: false
            }
        })
        const controlsListMbIconAnimation = gsap.timeline({
            delay: delay,
            scrollTrigger: {
                trigger: controlsListMb,
                markers: false,
                start: '85% bottom'
            }
        })
        if (controlsListMb.style.display !== 'none') { // 非表示じゃない場合再生
            controlsListMbTextAnimation.fromTo(
                controlsListMb.children[0], power2_out_right.from, power2_out_right.to
            )
            controlsListMbIconAnimation.from(
                controlsListMb.children[1], power2_out_top.from, power2_out_top.to
            )
        }

    }, modelViewerRef)

    return ctx
}