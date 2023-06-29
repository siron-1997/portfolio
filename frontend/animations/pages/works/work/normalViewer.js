import { gsap } from 'gsap'
import { power2_out_top, power2_out_left, power2_out_right } from '@/assets/animation-options'

export default function normalViewerAnimation({
    normalViewerRef, title, mainImage, normal, description, images
}) {
    const ctx = gsap.context(() => {
        const getOptions = (element, type) => {
            const options = {
                delay: 0.3,
                scrollTrigger: {
                    trigger: element,
                    markers: false,
                    start: type === 'top' ? '-120px bottom' : '-35px bottom'
                }
            }
    
            return options
        }

        const delay = '+=0.3'

        const titleAnimation = gsap.timeline(getOptions(title, 'top')),
              mainImageAnimation = gsap.timeline(getOptions(mainImage, 'top')),
              normalAnimation = gsap.timeline(getOptions(normal)),
              descriptionAnimation = gsap.timeline(getOptions(description, 'top'))

        titleAnimation.fromTo(title, power2_out_top.from, power2_out_top.to)
        mainImageAnimation.fromTo(mainImage, power2_out_top.from, power2_out_top.to, delay)
        normalAnimation.fromTo(normal, power2_out_top.from, power2_out_top.to, delay)
        descriptionAnimation.fromTo(description, power2_out_top.from, power2_out_top.to, delay)

        if (images.children.length > 0) {
            Array.from(images.children).forEach((child, i) => {
                const animation = gsap.timeline(getOptions(child))
    
                if ((i + 1) % 2 === 0) {
                    animation.fromTo(
                        child, power2_out_right.from, power2_out_right.to
                    )
                } else {
                    animation.fromTo(
                        child, power2_out_left.from, power2_out_left.to
                    )
                }
            })
        }
    }, normalViewerRef)

    return ctx
}