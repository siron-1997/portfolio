import Image from 'next/image'
import { useRef, useEffect } from 'react'
import cn from 'classnames'
import { Container } from '@/components/ui'
import { mainImageAnimation } from '@/animations/components/works/work'
import s from '@/styles/works/work/normalViewer/MainImage.module.css'
import g from '@/styles/global.module.css'

export default function MainImage({ post }) {
    const mainImageRef = useRef(null)
    const classNames = cn(g.image_container, s.main_image)

    const url = post?.attributes?.main?.data?.attributes?.url,
          alternativeText = post?.attributes?.main?.data?.attributes?.alternativeText

    useEffect(() => {
        const ctx = mainImageAnimation(mainImageRef)

        return () => ctx.revert()
    }, [mainImageRef])

    return (
        <Container>
            <div ref={mainImageRef}>
                <div className={classNames}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
                        alt={alternativeText}
                        fill
                        quality={100}
                        placeholder='blur'
                        blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
                    />
                </div>
            </div>
        </Container>
    )
}