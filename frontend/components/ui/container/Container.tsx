import React from 'react'
import cn from 'classnames'
import s from '@/styles/ui/container/Container.module.css'

type CustomProps = {
    children?: any,
    className?: string,
    id?: string,
    style?: React.CSSProperties
}

const Container: React.FC<CustomProps> = ({ children, className, id, style }) => {
    const rootClassName = cn(s.container, className)

    return (
        <div className={rootClassName} id={id} style={style}>
            {children}
        </div>
    )
}

export default Container