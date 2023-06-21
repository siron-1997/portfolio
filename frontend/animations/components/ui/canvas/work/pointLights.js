import { gsap } from 'gsap'

export default function pointLightsAnimation(pointLights, pointLightsData) {
    const animations = pointLights.children.map((light, i) => {
        if (pointLightsData[i].type === 'nav_light') {
            const animation = gsap.timeline({ paused: true, repeat: - 1 })

            if (pointLightsData[i].name.match(/_red$/)) { // ライト赤
                animation.to(light, { // 点灯
                    duration: pointLightsData[i]?.duration?.on,
                    onUpdate: () => light.power = pointLightsData[i]?.power?.on
                })
                animation.to(light, { // 消灯
                    duration: pointLightsData[i]?.duration?.off1,
                    onUpdate: () => light.power = pointLightsData[i]?.power?.off
                })
                animation.to(light, { // 点灯
                    duration: pointLightsData[i]?.duration?.on,
                    onUpdate: () => light.power = pointLightsData[i]?.power?.on
                })
                animation.to(light, { // 消灯（完了後リピート再生）
                    duration: pointLightsData[i]?.duration?.off2,
                    onUpdate: () => light.power = pointLightsData[i]?.power?.off
                })
            }
            else { // ライト白
                animation.to(light, { // 1.5秒点灯
                    duration: pointLightsData[i]?.duration?.on,
                    onUpdate: () => light.power = pointLightsData[i]?.power?.on
                })
                animation.to(light, { // 1.5秒消灯（完了後リピート再生）
                    duration: pointLightsData[i]?.duration?.off1,
                    onUpdate: () => light.power = pointLightsData[i]?.power?.off
                })
            }
            animation.play()

            return animation

        } else if (pointLightsData[i]?.type === 'light') { // 点滅なし
            const animation = gsap.timeline({ paused: true })

            animation.to(light, { // 点灯
                duration: pointLightsData[i].duration,
                ease: 'none',
                onUpdate: () => light.power = pointLightsData[i].power
            })
            animation.play()

            return animation
        }
    })

    return () => {
        animations.forEach(animation => {
            animation && animation.kill()
        })
    }
}