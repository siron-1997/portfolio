import React from 'react'
import cn from 'classnames'
import s from '@/styles/ui/container/Container.module.css'

type CustomProps = {
    children?: any,
    className?: any,
    style?: any
}

const Container: React.FC<CustomProps> = ({ children, className, style }) => {
    const rootClassName = cn(s.container, className)

    return (
        <div className={rootClassName} style={style}>
            {children}
        </div>
    )
}

export default Container