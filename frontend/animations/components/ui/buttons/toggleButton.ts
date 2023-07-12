import React from 'react'
import { gsap } from 'gsap'

const toggleButtonAnimation = (
    bg: HTMLDivElement | null, toggleButtonRef: React.RefObject<HTMLDivElement | null>, isViewerActive: boolean
) => {
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