import React from 'react'
import { gsap } from 'gsap'

type Props = {
    image: HTMLImageElement,
    text: HTMLParagraphElement,
    fingerPressRef: React.RefObject<HTMLDivElement>,
    currentWidth: number,
    isFingerVisible: boolean
}

const fingerPressAnimation = ({ image, text, fingerPressRef, currentWidth, isFingerVisible }: Props) => {
    const ctx = gsap.context(() => {
        const opacities = { point1: 0, point2: 0.85, point3: 0.4 }
        const imageAnimation = gsap.timeline({ repeat: - 1 }),
              textAnimation = gsap.timeline({  }),
              arrowIconAnimation = gsap.timeline({ paused: true })

        if (image !== null) {
            imageAnimation.fromTo(image,
                { opacity: 0 },
                { opacity: 0.85, scale: 1.2, duration: 0.3, ease: 'power1.out' }
            )
            imageAnimation.fromTo(image,
                { opacity: 0.85 },
                { opacity: 0.4, scale: 1.0, duration: 0.3, ease: 'power1.out' }
            )
            imageAnimation.fromTo(image,
                { x: - currentWidth },
                { x: currentWidth, duration: 1, ease: 'power2.out' }
            )
            imageAnimation.fromTo(image,
                { opacity: opacities.point3 },
                { opacity: opacities.point1, duration: 0.5, ease: 'power1.out' }
            )
            if (isFingerVisible) {
                imageAnimation.play()
            }
        }
        if (text !== null) {
            textAnimation.fromTo(text,
                { opacity: opacities.point1, y: 50 },
                { opacity: opacities.point2, y: 0 }    
            )
            textAnimation.fromTo(text,
                { opacity: opacities.point2 - 0.15 },
                { opacity: opacities.point3, duration: 1.2, repeat: - 1, yoyoEase: true, ease: 'none' }
            )
            arrowIconAnimation.fromTo(text.children[1],
                { y: 0 },
                { y: 20, duration: 1.2, delay: 1.2, yoyo: true, repeat: - 1, ease: 'none' }            
            )
        }
    }, fingerPressRef)

    return ctx
}

export default fingerPressAnimation