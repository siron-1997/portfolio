import cn from 'classnames'
import s from '@styles/ui/container/Container.module.css'

export default function Container({ children, className, style }) {
    const rootClassName = cn(s.container, className)

    return (
        <div className={rootClassName} style={style}>
            {children}
        </div>
    )
}