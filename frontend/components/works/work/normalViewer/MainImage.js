import Image from 'next/image'
import { useRef, useEffect } from 'react'
import cn from 'classnames'
import { Container } from '@/components/ui'
import { mainImageAnimation } from '@/animations/components/works/work'
import s from '@/styles/works/work/normalViewer/MainImage.module.css'
import g from '@/styles/global.module.css'

export default function MainImage({ post, isLoadImage, setIsLoadImage }) {
    const mainImageRef = useRef(null)

    const classNames = cn(g.image_container, s.main_image)

    const url = post?.attributes?.main?.data?.attributes?.url,
          alternativeText = post?.attributes?.main?.data?.attributes?.alternativeText

    // useEffect(() => {
    //     if (isLoadImage) {
    //         const ctx = mainImageAnimation(mainImageRef)

    //         return () => ctx.revert()
    //     }
    // }, [mainImageRef, isLoadImage])

    return (
        <Container>
            <div className={classNames} ref={mainImageRef}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
                    alt={alternativeText}
                    fill
                    quality={100}
                    placeholder='blur'
                    blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
                    // onLoad={() => setIsLoadImage(true)}
                />
            </div>
        </Container>
    )
}