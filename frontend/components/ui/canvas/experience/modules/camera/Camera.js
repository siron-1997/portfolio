import { PerspectiveCamera } from "three"

export default function Camera(sizes) {
    const aspectRatio = sizes.width / sizes.height
    const camera = new PerspectiveCamera(45, aspectRatio, 1, 1000)
    camera.position.set(10, 10, 10)
    
    return camera
}