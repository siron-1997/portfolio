import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import cn from 'classnames'
import { Container } from '@/components/ui'
import { imagesAnimation } from '@/animations/components/works/work'
import s from '@/styles/works/work/normalViewer/Images.module.css'
import g from '@/styles/global.module.css'

type CustomProps = {
    post: any
}

const Images: React.FC<CustomProps> = ({ post }) => {
    const imagesRef = useRef<HTMLDivElement | null>(null)
    const classNames = cn(g.image_container, s.thumbnail)

    const thumbnail = post?.attributes?.thumbnail?.data

    useEffect(() => {
        const ctx = imagesAnimation(imagesRef)

        return () => ctx.revert()
    }, [imagesRef])

    return (
        <Container>
            <div ref={imagesRef}>
                {thumbnail?.map((item: any, i: number) => (
                    <div key={i} className={classNames}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.url}`}
                            alt={item?.attributes?.alternativeText}
                            fill
                            quality={100}
                            placeholder='blur'
                            blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.url}`}
                        />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Images