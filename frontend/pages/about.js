import { useRef, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { ProfileImage, Introduction, SkillList } from '@/components/about'
import { aboutAnimation } from '@/animations/pages/about'
import { colors } from '@/assets/colors'
import s from '@/styles/about/index.module.css'
import g from '@/styles/global.module.css'

export default function AboutPage() {
    const profileImageRef = useRef(null),
          introductionRef = useRef(null),
          skillListRef = useRef(null)

    useEffect(() => {
        const profileImage = profileImageRef.current.children[0],
              introduction = introductionRef.current.children[0],
              skillList = skillListRef.current

        const cleanup = aboutAnimation(profileImage, introduction, skillList)

        return () => cleanup()
    }, [])

    return (
        <Layout metaProps={{
            title: 'Junpei Oue | About',
            description: '自己紹介。',
            image_path: '/images/siron/siron.webp',
            type: 'website'
        }}>
            <div className={g.global_root_container}>
                <Container>
                    <Typography
                        component='div'
                        className={g.global_shadow_container}
                        sx={{ bgcolor: colors.bgColor.dark.sub }}
                    >
                        <ProfileImage profileImageRef={profileImageRef} />
                        <div className={s.profile_info}>
                            <Introduction introductionRef={introductionRef} />
                            <SkillList skillListRef={skillListRef} />
                        </div>
                    </Typography>
                </Container>
            </div>
        </Layout>
    )
}