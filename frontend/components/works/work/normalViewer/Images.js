import Image from 'next/image'
import cn from 'classnames'
import { Container } from '@/components/ui'
import s from '@/styles/works/work/normalViewer/Images.module.css'
import g from '@/styles/global.module.css'

export default function Images({ thumbnail, imagesRef }) {
    const classNames = cn(g.image_container, s.thumbnail)

    return (
        <Container>
            <div ref={imagesRef}>
                {thumbnail?.map((item, i) => (
                    <div className={classNames} key={i}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.url}`}
                            alt={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item?.attributes?.alternativeText}`}
                            fill
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </Container>
    )
}