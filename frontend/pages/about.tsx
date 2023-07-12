import { useRef, useEffect } from 'react'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { ProfileImage, Introduction, SkillList } from '@/components/about'
import { aboutAnimation } from '@/animations/pages/about'
import { introduction } from '@/assets/about-contents'
import { colors } from '@/assets/colors'
import s from '@/styles/about/index.module.css'
import g from '@/styles/global.module.css'

export default function AboutPage() {
    const aboutRef = useRef<HTMLDivElement | null>(null),
          profileImageRef = useRef<HTMLDivElement | null>(null),
          introductionRef = useRef<HTMLDivElement | null>(null),
          skillListRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = aboutAnimation({
            profileImage: profileImageRef.current.querySelector('img'),
            introduction: introductionRef.current.querySelector('section'),
            skillList: skillListRef.current,
            aboutRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <Layout metaProps={{
            title: `Junpei Oue | ${introduction.title}`,
            description: introduction.description,
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