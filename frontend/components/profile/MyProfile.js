import Image from 'next/image'
import { Container } from '@/components/ui'
import s from '@/styles/profile/Profile.module.css'
import g from '@styles/global.module.css'

export default function MyProfile() {
    return (
        <div className={s.my_profile}>
            <Container>
                <div className={s.contents}>
                    <div className={`${g.image_container} ${s.my_profile_image_container}`}>
                        <Image
                            src={'/images/siron/siron.jpg'}
                            alt='profile image'
                            fill
                            quality={90}
                        />
                    </div>
                    <section className={s.my_profile_txt_container}>
                        <h1>Siron-1997</h1>
                        <p>my profile</p>
                    </section>
                </div>
            </Container>
        </div>
    )
}