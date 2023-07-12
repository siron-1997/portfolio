import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { useIconSize } from '@/utils/hooks'
import s from '@/styles/ui/buttons/Close.module.css'

type CustomProps = {
    className?: string,
    onClose: any
}

const Close: React.FC<CustomProps> = ({ className, onClose }) => {
    const iconSize = useIconSize(35, 40, 50)

    const rootClassNames = cn(className, s.close)

    return (
        <div className={rootClassNames} onClick={onClose}>
            <Image
                src='/icons/close.svg'
                alt='close'
                width={iconSize}
                height={iconSize}
                quality={1}
                priority={true}
            />
        </div>
    )
}

export default Close