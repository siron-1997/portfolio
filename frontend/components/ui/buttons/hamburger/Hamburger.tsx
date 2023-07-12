import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { useIconSize } from '@/utils/hooks'
import s from '@/styles/ui/buttons/Hamburger.module.css'

type CustomProps = {
    className?: string,
    onOpen: any
}

const Hamburger: React.FC<CustomProps> = ({ className, onOpen }) => {
    const iconSize = useIconSize(40, 50, 50)

    const classNames = cn(className, s.hamburger)

    return (
        <div className={classNames} onClick={onOpen}>
            <Image
                src='/icons/hamburger.svg'
                alt='hamburger menu'
                width={iconSize}
                height={iconSize}
                quality={1}
                priority={true}
            />
        </div>
    )
}

export default Hamburger