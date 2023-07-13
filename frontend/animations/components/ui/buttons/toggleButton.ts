import React from 'react'
import { gsap } from 'gsap'

type Props = {
    bg: HTMLDivElement
    toggleButtonRef: React.RefObject<HTMLDivElement>
    isViewerActive: boolean
}

const toggleButtonAnimation = ({ bg, toggleButtonRef, isViewerActive }: Props) => {
    const ctx = gsap.context(() => {
        let positionX= 0

        if (isViewerActive) {
            positionX = - 130
        }

        gsap.to(bg, { x: positionX, duration: 0.2, ease: 'power1.out' })

    }, toggleButtonRef)

    return ctx
}

export default toggleButtonAnimation