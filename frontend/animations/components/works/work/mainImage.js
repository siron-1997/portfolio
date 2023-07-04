import { gsap } from 'gsap'
import { power2_out_top } from '@/assets/animation-options'

export default function mainImageAnimation(mainImageRef) {
    const ctx = gsap.context(() => {
        const options = {
            scrollTrigger: {
                trigger: mainImageRef.current,
                markers: false,
                start: 'start 85%'
            }
        }
        gsap.fromTo(mainImageRef.current, power2_out_top.from, { ...power2_out_top.to, options })
    }, mainImageRef)
    
    return ctx
}