import { gsap } from 'gsap'
import { MathUtils, Group, Mesh, Material } from 'three'
import { BREAK_POINT_MB } from '@/assets/break-points'

type Props = {
    startPosition: any,
    endPosition: any,
    pageHeader: HTMLElement | null,
    door: Group,
    room: Mesh,
    cameraContainerRef: any,
    camera: any,
    width: number
}

const rigCameraAnimation = ({ startPosition, endPosition, pageHeader, door, room, cameraContainerRef, camera, width }: Props) => {
    const ctx = gsap.context(() => {
        const cameraAnimation = gsap.timeline({ // カメラ位置アニメーション
            scrollTrigger: {
                trigger: pageHeader,
                start: 'top',
                markers: false,
                scrub: true,
                toggleActions: 'play pause resume pause',
            }
        })
        const doorAnimation = gsap.timeline({ // ドア開閉アニメーション
            scrollTrigger: {
                trigger: pageHeader,
                start: width > BREAK_POINT_MB ? '70%' : '74%',
                end: width > BREAK_POINT_MB ? '120%' : '124%',
                markers: false,
                scrub: true,
                toggleActions: 'play pause resume pause',
            }
        })
    
        let lastScrollTop = window.scrollY
    
        const handleUpdate = () => {
            const scrollTop = window.scrollY
            if (scrollTop > lastScrollTop) { // スクロールダウン
                /* 扉の角度が0°より大きい場合、部屋を表示 */
                if (door.rotation.y > MathUtils.degToRad(0)) {
                    if (room.material instanceof Material) {
                        room.material.opacity = 1
                        room.material.needsUpdate = true
                    }
                }
            } else if (scrollTop < lastScrollTop) { // スクロールアップ
                /* 扉の角度が0°の場合、部屋を非表示 */
                if (door.rotation.y === MathUtils.degToRad(0)) {
                    if (room.material instanceof Material) {
                        room.material.opacity = 0
                        room.material.needsUpdate = true
                    }
                }
            }
            lastScrollTop = scrollTop
        }
    
        cameraAnimation.fromTo(camera.position, { ...startPosition }, { ...endPosition })
        doorAnimation.to(door.rotation, { y: MathUtils.degToRad(100), onUpdate: () => handleUpdate() })

    }, cameraContainerRef)

    return ctx
}

export default rigCameraAnimation