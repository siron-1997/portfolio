import { gsap } from 'gsap'
import { power2_out_top, power2_out_left, power2_out_right } from '@/assets/animation-options'

export default function normalViewerAnimation({
    title, mainImage, normal, description, images
}) {
    const getOptions = (element, type) => {
        const options = {
            delay: 0.5,
            scrollTrigger: {
                trigger: element,
                markers: false,
                start: type === 'top' ? '-120px bottom' : 'top bottom'
            }
        }

        return options
    }

    const titleAnimation = gsap.timeline(getOptions(title, 'top')),
          mainImageAnimation = gsap.timeline(getOptions(mainImage, 'top')),
          normalAnimation = gsap.timeline(getOptions(normal)),
          descriptionAnimation = gsap.timeline(getOptions(description, 'top'))

    titleAnimation.fromTo(title, power2_out_top.from, power2_out_top.to)
    mainImageAnimation.fromTo(mainImage, power2_out_top.from, power2_out_top.to)
    normalAnimation.fromTo(normal, power2_out_top.from, power2_out_top.to)
    descriptionAnimation.fromTo(description, power2_out_top.from, power2_out_top.to)

    const imageAnimations = Array.from(images.children).map((child, i) => {
        const animation = gsap.timeline(getOptions(child, (i + 1) % 2 === 0 ? 'right' : 'left'))

        if ((i + 1) % 2 === 0) {
            animation.fromTo(
                child, power2_out_right.from, power2_out_right.to
            )
        } else {
            animation.fromTo(
                child, power2_out_left.from, power2_out_left.to
            )
        }

        return animation
    })
    
    return () => {
        titleAnimation.kill()
        mainImageAnimation.kill()
        normalAnimation.kill()
        descriptionAnimation.kill()
        imageAnimations.forEach(animation => animation.kill())
    }
}