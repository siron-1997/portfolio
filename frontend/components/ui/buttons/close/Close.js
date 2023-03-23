import Image from 'next/image'
import g from '@styles/global.module.css'
import s from '@styles/ui/button.module.css'

export default function Close({ onClose }) {
    return (
        <div className={`${g.image_container} ${s.close}`} onClick={onClose}>
            <Image
                src='icons/close.svg'
                alt='close'
                fill
            />
        </div>
    )
}