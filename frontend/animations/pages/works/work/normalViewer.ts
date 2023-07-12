import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type CustomProps = {
    normalViewerRef: any,
    title: HTMLElement | null,
    categories: HTMLElement | null,
    tags: HTMLElement | null,
    description: HTMLElement | null
}

const normalViewerAnimation = ({
    normalViewerRef, title, categories, tags, description
}: CustomProps) => {
    const ctx = gsap.context(() => {
        const delay = 0.4

        const getOptions = (element: HTMLElement) => {
            return {
                delay: delay,
                scrollTrigger: {
                    trigger: element,
                    markers: false,
                    start: 'start 85%'
                }
            }
        }

        /* Work見出し */
        gsap.fromTo(title,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: delay }
        )
        /* Categories */
        gsap.fromTo(categories.children[0],
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(categories) }
        )
        /* Tags */
        gsap.fromTo(tags.children[0],
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(tags) }
        )
        /* 説明文 */
        gsap.fromTo(description.children[0],
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, ...getOptions(description) }
        )

    }, normalViewerRef)

    return ctx
}

export default normalViewerAnimation