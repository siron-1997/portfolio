import React, { lazy, useState, useContext} from 'react'
import { Canvas } from '@react-three/fiber'
import { ACESFilmicToneMapping } from 'three'
import { MyCamera, MyControls } from './modules'
import { useWindowSize } from '@/utils/hooks'
import { WorkDataContext } from '@/pages/works/[slug]'
import { BREAK_POINT_TB } from '@/assets/break-points'
import s from '@/styles/works/work/index.module.css'

const MyModel = lazy(() => import('./modules/MyModel'))

type Props = {
    post: any
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Work: React.FC<Props> = ({ post, setIsLoading }) => {
    const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(false)
    const { setIsFingerVisible } = useContext(WorkDataContext)
    const { width } = useWindowSize()

    const modelUrl: any = post?.attributes?.model?.data?.attributes?.url

    return (
        <div className={s.portal}>
            <Canvas
                shadows
                dpr={[ 1, 2 ]}
                gl={{
                    antialias: true,
                    toneMapping: ACESFilmicToneMapping,
                    useLegacyLights: true
                }}
                className={s.canvas}
                onCreated={() => setIsLoading(false)}
                onMouseDown={() => setIsFingerVisible(false)}
                onTouchStart={() => setIsFingerVisible(false)}
            >   
                <MyCamera setIsNavigationVisible={setIsNavigationVisible} />
                <ambientLight color={'#3F1F4E'} intensity={6} />
                <directionalLight
                    color={0xECE0F8}
                    intensity={0.9}
                    position={[- 4, 15, - 8]}
                />
                <fog
                    attach='fog'
                    color={'#1D1730'}
                    near={width > BREAK_POINT_TB ? 20 : 30}
                    far={width > BREAK_POINT_TB ? 90 : 110}
                />
                <MyModel
                    modelUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${modelUrl}`}
                    isNavigationVisible={isNavigationVisible}
                />
                <MyControls />
                {/* 軸ヘルパー */}
                <axesHelper args={[10]} visible={false} />
            </Canvas>
        </div>
    )
}

export default React.memo(Work)