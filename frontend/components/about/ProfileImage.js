import Image from 'next/image'
import cn from 'classnames'
import { colors } from '@/assets/colors'
import s from '@/styles/about/ProfileImage.module.css'
import g from '@/styles/global.module.css'

export default function ProfileImage({ profileImageRef }) {
    const imageClassNames = cn(s.profile_image_container, g.image_container)

    const image = '/images/siron/siron.webp'

    return (
        <div className={imageClassNames} ref={profileImageRef}>
            <Image
                src={image}
                alt='profile image'
                className={s.profile_image}
                style={{ border: `3px solid ${colors.navigation}` }}
                fill
                quality={100}
                priority={true}
                placeholder='blur'
                blurDataURL={image}
                sizes={'(max-width: 1024px) 90vw, (max-width: 768px) 50vw, 100vw'}
            />
        </div>
    )
}