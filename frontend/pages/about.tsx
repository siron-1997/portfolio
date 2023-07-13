import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { ProfileImage, Introduction, SkillList } from '@/components/about'
import { introduction } from '@/assets/about-contents'
import { colors } from '@/assets/colors'
import s from '@/styles/about/index.module.css'
import g from '@/styles/global.module.css'

export default function AboutPage() {
    return (
        <Layout metaProps={{
            title: `Junpei Oue | ${introduction.title}`,
            description: introduction.description,
            image_path: '/images/siron/siron.webp',
            type: 'website'
        }}>
            <div className={g.root_container}>
                <Container className={g.top_container}>
                    <div
                        className={g.shadow_container}
                        style={{ backgroundColor: colors.bgColor.dark.sub }}
                    >
                        <ProfileImage />
                        <div className={s.profile_info}>
                            <Introduction />
                            <SkillList />
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}