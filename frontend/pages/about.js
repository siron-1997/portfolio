import { useRef, useEffect } from 'react'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { ProfileImage, Introduction, SkillList } from '@/components/about'
import { aboutAnimation } from '@/animations/pages/about'
import { colors } from '@/assets/colors'
import s from '@/styles/about/index.module.css'
import g from '@/styles/global.module.css'

export default function AboutPage() {
    const aboutRef = useRef(null),
          profileImageRef = useRef(null),
          introductionRef = useRef(null),
          skillListRef = useRef(null)

    useEffect(() => {
        const ctx = aboutAnimation({
            profileImage: profileImageRef.current.children[0],
            introduction: introductionRef.current.children[0],
            skillList: skillListRef.current,
            aboutRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <Layout metaProps={{
            title: 'Junpei Oue | About',
            description: '自己紹介。',
            image_path: '/images/siron/siron.webp',
            type: 'website'
        }}>
            <div className={g.root_container} ref={aboutRef}>
                <Container className={g.top_container}>
                    <div
                        className={g.shadow_container}
                        style={{ backgroundColor: colors.bgColor.dark.sub }}
                    >
                        <ProfileImage profileImageRef={profileImageRef} />
                        <div className={s.profile_info}>
                            <Introduction introductionRef={introductionRef} />
                            <SkillList skillListRef={skillListRef} />
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}