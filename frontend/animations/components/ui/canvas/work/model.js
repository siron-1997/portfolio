import { gsap } from 'gsap'

export default function modelAnimation (navigation, navigationVisible) {
    const animate = gsap.timeline({ paused: true })

    if (navigationVisible) {
        animate.fromTo(navigation,
            { opacity: 0, display: 'block' },
            { opacity: 1, duration: 0.3, ease: 'sine.out' }
        )
    } else {
        animate.fromTo(navigation,
            { opacity: 1 },
            { opacity: 0, display: 'none', duration: 0.3, ease: 'sine.out' }
        )
    }

    animate.play()

    return () => animate.kill()
}