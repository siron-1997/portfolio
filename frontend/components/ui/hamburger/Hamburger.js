import Image from 'next/image'
import g from '@styles/global.module.css'
import s from '@styles/ui/Hamburger.module.css'

export default function Hamburger({ onOpen  }) {
    return (
        <div className={`${g.image_container} ${s.hamburger}`} onClick={onOpen}>
            <Image
                src='icons/hamburger.svg'
                alt='Menu'
                fill
            />
        </div>
    )
}