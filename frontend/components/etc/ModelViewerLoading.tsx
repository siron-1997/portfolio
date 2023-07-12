import Image from 'next/image'
import React, { useEffect } from 'react'
import cn from 'classnames'
import { disableScroll } from '@/utils'
import { useIconSize, useWindowSize } from '@/utils/hooks'
import s from '@/styles/etc/ModelViewerLoading.module.css'
import g from '@/styles/global.module.css'

type CustomProps = {
    readonly isLoading: boolean
}

const ModelViewerLoading: React.FC<CustomProps> = ({ isLoading }) => {
    const iconSize = useIconSize(150, 150, 150)
    const { height } = useWindowSize()

    const imageClassNames = cn(g.image_container, s.image_container)

    useEffect(() => {
        const cleanup = disableScroll(isLoading)

        return () => cleanup()
    }, [isLoading, height])

    return (
        <div className={s.loading} style={{ display: isLoading ? 'flex' : 'none' }}>
            <div className={imageClassNames}>
                <Image
                    src='/icons/model_viewer_loading.svg'
                    alt='loading'
                    width={iconSize}
                    height={iconSize}
                    quality={1}
                    priority={true}
                />
            </div>
        </div>
    )
}

export default ModelViewerLoading