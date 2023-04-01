import Image from 'next/image'
import s from '@styles/etc/Loading.module.css'
import g from '@styles/global.module.css'

export default function Loading() {
    return (
        <div className={s.loading}>
            <div className={`${g.image_container} ${s.image_container}`}>
                <Image
                    src='images/loading-1.svg'
                    alt='loading...'
                    fill
                    quality={1}
                    priority={true}
                />
            </div>
        </div>
    )
}