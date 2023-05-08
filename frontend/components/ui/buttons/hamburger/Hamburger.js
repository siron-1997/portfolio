import Image from 'next/image'
import cn from 'classnames'
import { useIconSize } from '@/utils/hooks'
import g from '@/styles/global.module.css'
import s from '@/styles/ui/button.module.css'

export default function Hamburger({ onOpen }) {
    const iconSize = useIconSize(40, 40, 50)

    const classNames = cn(g.image_container, s.hamburger)

    return (
        <div className={classNames} onClick={onOpen}>
            <Image
                src='icons/hamburger.svg'
                alt='Menu'
                width={iconSize}
                height={iconSize}
                quality={1}
            />
        </div>
    )
}