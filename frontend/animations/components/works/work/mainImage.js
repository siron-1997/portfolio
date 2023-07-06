import { gsap } from 'gsap'
import { power2_out_opacity_top_move } from '@/assets/animation-options'

export default function mainImageAnimation(mainImageRef) {
    const ctx = gsap.context(() => {
        gsap.fromTo(mainImageRef.current.children[0],
            power2_out_opacity_top_move.from,
            { ...power2_out_opacity_top_move.to, delay: 0.8 }
        )
    }, mainImageRef)
    
    return ctx
}