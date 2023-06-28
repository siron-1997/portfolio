import { gsap } from 'gsap'

export default function toggleButtonAnimation(bg, toggleButtonRef, isViewerActive) {
    const ctx = gsap.context(() => {
        let positionX = 0

        if (isViewerActive) {
            positionX = - 130
        }

        gsap.to(bg, { x: positionX, duration: 0.2, ease: 'power1.out' })

    }, toggleButtonRef)

    return ctx
}