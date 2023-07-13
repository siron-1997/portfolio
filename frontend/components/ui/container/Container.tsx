import React from 'react'
import cn from 'classnames'
import s from '@/styles/ui/container/Container.module.css'

type Props = {
    children?: any
    className?: string
    id?: string
    style?: React.CSSProperties
    ref?: React.RefObject<HTMLDivElement | null>
}

const Container: React.FC<Props> = ({ children, className, id, style, ref }) => {
    const rootClassName = cn(s.container, className)

    return (
        <div className={rootClassName} id={id} style={style} ref={ref}>
            {children}
        </div>
    )
}

export default Container