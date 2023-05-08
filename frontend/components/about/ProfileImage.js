import Image from 'next/image'
import cn from 'classnames'
import s from '@/styles/About.module.css'
import g from '@/styles/global.module.css'

export default function ProfileImage({ imageRef }) {
    const classNames = cn('image', s.profile_image),
          imageClassNames = cn(s.profile_image_container, g.image_container)

    const image = '/images/siron/siron.webp'

    return (
        <div className={imageClassNames} ref={imageRef}>
            <Image
                src={image}
                alt='profile image'
                className={classNames}
                fill
                quality={100}
                placeholder='blur'
                blurDataURL={image}
                sizes={'(max-width: 1024px) 90vw, (max-width: 768px) 50vw, 100vw'}
            />
        </div>
    )
}