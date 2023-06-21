import { useContext } from 'react'
import { extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { MathUtils } from 'three'
import { WorkDataContext } from '@/pages/works/[work]'

extend({ OrbitControls })

export default function MyControls() {
    const { isViewerActive } = useContext(WorkDataContext)

    return (
        <OrbitControls
            enabled={isViewerActive} // コントロール制御の許可
            enablePan={false} // 水平移動の制御
            enableZoom={false} // ズーム移動の制御
            enableDamping={true} // 減衰効果の許可
            dampingFactor={0.07} // 減衰効果の強さ
            minAzimuthAngle={MathUtils.degToRad(- 180)} // 最少水平角度を-180degに制限
            maxAzimuthAngle={MathUtils.degToRad(180)} // 最大水平角度を180degに制限
            maxPolarAngle={MathUtils.degToRad(85)} // 最大垂直角度を90degに制限 
        />
    )
}