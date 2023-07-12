import { gsap } from 'gsap'

const toggleButtonAnimation = (bg: HTMLDivElement | null, toggleButtonRef: any, isViewerActive: boolean) => {
    const ctx = gsap.context(() => {
        let positionX: number = 0

        if (isViewerActive) {
            positionX = - 130
        }

        gsap.to(bg, { x: positionX, duration: 0.2, ease: 'power1.out' })

    }, toggleButtonRef)

    return ctx
}

export default toggleButtonAnimation