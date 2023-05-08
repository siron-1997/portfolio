import Image from 'next/image'
import cn from 'classnames'
import { useIconSize } from '@/utils/hooks'
import g from '@/styles/global.module.css'
import s from '@/styles/ui/button.module.css'

export default function Close({ onClose }) {
    const iconSize = useIconSize(40, 40, 40)

    const classNames = cn(g.image_container, s.close)

    return (
        <div className={classNames} onClick={onClose}>
            <Image
                src='icons/close.svg'
                alt='close'
                width={iconSize}
                height={iconSize}
                quality={1}
            />
        </div>
    )
}