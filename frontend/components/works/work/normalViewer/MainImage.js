import Image from 'next/image'
import cn from 'classnames'
import { Container } from '@/components/ui'
import s from '@/styles/works/work/normalViewer/MainImage.module.css'
import g from '@/styles/global.module.css'

export default function MainImage({ url, alternativeText, mainImageRef }) {
    const classNames = cn(g.image_container, s.main_image)

    return (
        <Container>
            <div className={classNames} ref={mainImageRef}>
                <Image
                    src={url}
                    alt={alternativeText}
                    fill
                    quality={100}
                    priority={true}
                />
            </div>
        </Container>
    )
}