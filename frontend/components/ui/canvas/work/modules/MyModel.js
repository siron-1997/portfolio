import React, { useRef, useEffect, useContext } from 'react'
import { useLoader, useThree, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { PointLightHelper, AnimationMixer, LoopOnce } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { WorkDataContext } from '@/pages/works/[work]'
import { NumberedCircled } from '@/components/ui'
import { useWindowSize } from '@/utils/hooks'
import { pointLightsAnimation } from '@/animations/components/ui/canvas/work'
import { BREAK_POINT_MB } from '@/assets/break-points'
import { colors } from '@/assets/colors'

export default function MyModel({ modelUrl, isNavigationVisible }) {
    const pointLightsRef = useRef(null)
    const {
        isInitialControl,
        setIsInitialControl,
        isStartControls,
        currentIndex,
        setCurrentIndex,
        controlsData,
        pointLightsData
    } = useContext(WorkDataContext)
    const { width } = useWindowSize()
    const { scene } = useThree()

    const scale = 1 / 60

    const handleClick = index => {
        setIsInitialControl(false)
        setCurrentIndex(index)
    }

    useEffect(() => {
        const pointLights = pointLightsRef.current
        if (pointLights !== null) {
            const cleanup = pointLightsAnimation(pointLights, pointLightsData)
    
            pointLights.children.forEach(light => {
                const helper = new PointLightHelper(light, 10)
                helper.visible = false
                scene.add(helper)
            })
    
            return () => cleanup()
        }
    }, [])

    return (
        <group name='import-model' scale={[scale, scale, scale]}>
            <group name='navigations'>
                {controlsData.control_list.map((item, i) => (
                    <Html
                        key={i}
                        position={[ item?.position.x, item?.position.y, item?.position.z ]}
                    >
                        <NumberedCircled
                            index={i}
                            sx={{
                                fontSize: width >= BREAK_POINT_MB ? 15 : 13,
                                borderWidth: 2,
                                borderStyle: 'solid',
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                transition: 'all 0.2s',
                                padding: width >= BREAK_POINT_MB ? '5px 9px' : '3.5px 8px',
                                '&:hover': {
                                    borderColor: colors.navigation,
                                    color: colors.navigation
                                }
                            }}
                            onClick={() => handleClick(i)}
                            isNavigationVisible={isNavigationVisible}
                        />
                    </Html>
                ))}
            </group>
            <Model
                modelUrl={modelUrl}
                currentIndex={currentIndex}
                controlsData={controlsData}
                isInitialControl={isInitialControl}
                isStartControls={isStartControls}
            />
            {pointLightsData && (
                <group name='point-lights' ref={pointLightsRef}>
                    {pointLightsData?.map((light, i) => {
                        if (light?.name?.match(/^env/)) { // 静的ライト
                            return (
                                <pointLight
                                    key={i}
                                    name={light?.name}
                                    color={light?.color}
                                    power={light?.power}
                                    position={[light?.position?.x, light?.position?.y, light?.position?.z]}
                                />
                            )
                        } else { // 動的ライト 
                            return (
                                <pointLight
                                    key={i}
                                    name={light?.name}
                                    color={light?.color}
                                    intensity={0.2}
                                    distance={13}
                                    // blenderのz軸はy軸に指定し、three.jsのz軸はy軸の値をプラスマイナスを反転
                                    position={[light?.position?.x, light?.position?.z, - light?.position?.y]}
                                />
                            )
                        }
                    })}
                </group>
            )}
        </group>
    )
}

const Model = React.memo(({
    modelUrl, currentIndex, controlsData, isInitialControl, isStartControls
}) => {
    const groupRef = useRef(null)
    const gltf = useLoader(GLTFLoader, modelUrl, loader => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
        dracoLoader.preload()
        loader.setDRACOLoader(dracoLoader)
    })

    let actions = null

    if (groupRef.current !== null) {
        actions = new AnimationMixer(groupRef.current)
        /* 名前がマッチするアニメーションを再生 */
        gltf.animations.forEach(animation => {
            const prefix = animation.name.split('_')[0], 
                  endPrefix = animation.name.split('_')[1]
            const patternName = new RegExp(`^${prefix}`),
                  endPatternName = new RegExp(`^end_${endPrefix}`)
            const pattern = controlsData?.control_list[currentIndex]?.animationName?.match(patternName),
                  endPattern = `end_${controlsData?.control_list[currentIndex]?.animationName}`.match(endPatternName)
            const action = actions.clipAction(animation)
            if (isStartControls && !isInitialControl) {
                if (pattern) { // マッチするアニメーション名を再生
                    if (!controlsData?.control_list[currentIndex]?.loop){
                        action.clampWhenFinished = true
                        action.setLoop(LoopOnce, 0)
                    }
                    action.startAt(1) // 遅延再生
                    action.play()
                } else if (!endPattern && animation.name.match(/^end_/)) { // 再生中以外の終了アニメーションを再生
                    prefix !== 'toggle' && action.play() // toggleアニメーションは再生しない
                }
            } else { // Controlsセクションから離れたとき終了アニメーションを再生し初期位置に戻す
                'end'.match(patternName) && action.reset().play()
            }
        })
    }

    useFrame((_, delta) => {
        if (actions !== null) actions.update(delta)
    })

    return (
        <group name='model-container' ref={groupRef}>
            <primitive object={gltf.scene} />
        </group>
    )
})