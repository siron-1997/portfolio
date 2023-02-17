import { Scene, BoxGeometry, MeshLambertMaterial, Mesh, AxesHelper } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Camera, Lights, Renderer } from './modules'
import { sizes } from '@utils/sizes'

export default function experience() {
    const scene = new Scene()
    const mesh = new Mesh(
        new BoxGeometry(5, 5, 5),
        new MeshLambertMaterial({ color: 0xff0000 })
    )
    const axesHelper = new AxesHelper(10)
    const camera = Camera(sizes)
}