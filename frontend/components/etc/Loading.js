import Image from 'next/image'
import { useEffect } from 'react'
import cn from 'classnames'
import { useIconSize, useWindowSize } from '@/utils/hooks'
import s from '@styles/etc/Loading.module.css'
import g from '@styles/global.module.css'

const disableScroll = isLoading => {
    const html = document.getElementsByTagName('html')[0]

    if (isLoading) {
        html.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
        window.scrollTo(0, 0)
    } else {
        html.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
    }

    return () => {
        html.style.overflow = 'atuo'
        document.body.style.overflow = 'auto'
    }
}

export const ModelViewerLoading = ({ isLoading }) => {
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

export const PageLoading = ({ isLoading }) => {
    const iconSize = useIconSize(70, 90, 110)
    const { height } = useWindowSize()

    useEffect(() => {
        const cleanup = disableScroll(isLoading)

        return () => cleanup()
    }, [isLoading, height])

    return (
        <div className={s.page_loading} style={{ display: isLoading ? 'flex' : 'none' }}>
            <div className={s.page_loading_container}>
                <div className={s.loading_text}>Loading...</div>
                <Image
                    src='/icons/circle_loading.svg'
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