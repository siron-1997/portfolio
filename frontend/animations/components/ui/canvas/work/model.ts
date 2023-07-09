import { gsap } from 'gsap'

const modelAnimation = (navigation: HTMLSpanElement | null, navigationVisible: boolean): (() => void) => {
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

export default modelAnimation