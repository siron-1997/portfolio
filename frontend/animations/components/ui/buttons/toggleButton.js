import { gsap } from 'gsap'

export default function toggleButtonAnimation(bg, isViewerActive) {
    const animation = gsap.timeline({ paused: true })
    let positionX = 0

    if (isViewerActive) {
        positionX = - 130
    }

    animation.to(bg, { x: positionX, duration: 0.025, ease: 'power1.out' })
    animation.play()

    return () => animation.kill()
}