import Image from 'next/image'
import React, { useEffect } from 'react'
import { disableScroll } from '@/utils'
import { useIconSize, useWindowSize } from '@/utils/hooks'
import s from '@/styles/etc/PageLoading.module.css'

type CustomProps = {
    readonly isLoading: boolean
}

const PageLoading: React.FC<CustomProps> = ({ isLoading }) => {
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

export default PageLoading