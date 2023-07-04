import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import cn from 'classnames'
import { Container } from '@/components/ui'
// import { imagesAnimation } from '@/animations/components/works/work'
import s from '@/styles/works/work/normalViewer/Images.module.css'
import g from '@/styles/global.module.css'

export default function Images({ post }) {
    const imagesRef = useRef(null)
    // const [isLoadLastImage, setIsLoadLastImage] = useState(false)

    const classNames = cn(g.image_container, s.thumbnail)

    const thumbnail = post?.attributes?.thumbnail?.data

    // useEffect(() => {
    //     if (isLoadLastImage) {
    //         const ctx = imagesAnimation(imagesRef)
    
    //         return () => ctx.revert()
    //     }
    // }, [imagesRef, isLoadLastImage])

    return (
        <Container>
            <div ref={imagesRef}>
                {thumbnail?.map((item, i) => (
                    <div key={i} className={classNames}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.url}`}
                            alt={item?.attributes?.alternativeText}
                            fill
                            quality={100}
                            priority={false}
                            placeholder='blur'
                            blurDataURL={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.url}`}
                            // onLoad={() => i ===  thumbnail.length - 1 && setIsLoadLastImage(true)}
                        />
                    </div>
                ))}
            </div>
        </Container>
    )
}