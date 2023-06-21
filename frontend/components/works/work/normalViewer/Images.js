import Image from 'next/image'
import cn from 'classnames'
import { Container } from '@/components/ui'
import { target } from '@/utils/strapi'
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
                            src={`${target}${item?.attributes?.url}`}
                            alt={`${target}${item?.attributes?.alternativeText}`}
                            fill
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </Container>
    )
}