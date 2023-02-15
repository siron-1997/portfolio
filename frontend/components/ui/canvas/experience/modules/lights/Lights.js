import { AmbientLight, DirectionalLight, DirectionalLightHelper, CameraHelper, SpotLight, SpotLightHelper } from 'three'

export default function Lights() {
    const ambient = new AmbientLight(0.2, 0xfff)

    const directional = new DirectionalLight(0.7, 0xfff),
          directionalHelper = new DirectionalLightHelper(directional),
          directionalCameraHelper = new CameraHelper(directional.shadow.camera)

    const spot = new SpotLight(0.6, #fff),
          spotHelper = new SpotLightHelper(spot),
          spotCameraHelper = new CameraHelper(Spot.shadow.camera)

    return {
        ambient,
        spot, spotHelper, spotCameraHelper,
        directional, directionalHelper, directionalCameraHelper,
    }
}