import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import cn from 'classnames'
import { profileImageAnimation } from '@/animations/components/about'
import { colors } from '@/assets/colors'
import s from '@/styles/about/ProfileImage.module.css'
import g from '@/styles/global.module.css'

const ProfileImage: React.FC = () => {
    const profileImageRef = useRef<HTMLDivElement | null>(null)
    const imageClassNames = cn(s.profile_image_container, g.image_container)
    const image = '/images/siron/siron.webp'

    useEffect(() => {
        const ctx = profileImageAnimation({
            image: profileImageRef.current.querySelector('#profile-image'),
            profileImageRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className={imageClassNames} ref={profileImageRef}>
            <Image
                src={image}
                alt='profile image'
                className={s.profile_image}
                id='profile-image'
                style={{ border: `3px solid ${colors.navigation}` }}
                fill
                quality={100}
                placeholder='blur'
                blurDataURL={image}
                sizes={'(max-width: 1024px) 90vw, (max-width: 768px) 50vw, 100vw'}
            />
        </div>
    )
}

export default ProfileImage