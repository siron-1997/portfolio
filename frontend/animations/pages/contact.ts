import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

type CustomProps = {
    title: HTMLDivElement | null,
    progress: HTMLDivElement | null,
    contactRef: any
}

export const contactAnimation = ({ title, progress, contactRef }: CustomProps) => {
    const ctx = gsap.context(() => {
        const delay: number = 0.8

        /* contact state */
        gsap.fromTo(title,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: delay }
        )
        /* progress */
        gsap.fromTo(progress,
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: delay }
        )
    }, contactRef)

    return ctx
}