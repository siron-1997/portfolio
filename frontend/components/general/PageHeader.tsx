import React from 'react'
import cn from 'classnames'
import { Container } from '@/components/ui'
import s from '@/styles/general/PageHeader.module.css'

type Props = {
    id?: string
    pageHeaderRef?: React.RefObject<HTMLElement | null>
    Background?: any
    children?: any
    figureClassName?: string
    figcaptionClassName?: string
}

const PageHeader: React.FC<Props> = ({
    id,
    pageHeaderRef,
    Background,
    children,
    figureClassName,
    figcaptionClassName
}) => {
    const figureClassNames = cn(s.figure, figureClassName),
          figcaptionClassNames = cn(s.figcaption, figcaptionClassName)

    return (
        <figure className={figureClassNames} ref={pageHeaderRef} id={id}>
            {Background && Background}
            <figcaption className={figcaptionClassNames}>
                <Container>{children}</Container>
            </figcaption>
        </figure>
    )
}

export default PageHeader