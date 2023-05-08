import { useRef, useEffect } from 'react'
import cn from 'classnames'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui'
import { ProfileImage, ProfileText, Skills } from '@/components/about'
import { aboutAnimate } from '@/animations/about'
import s from '@/styles/About.module.css'
import g from '@/styles/global.module.css'

export default function About() {
    const aboutRef = useRef(null),
          imageRef = useRef(null),
          textRef = useRef(null),
          skillsRef = useRef(null)

    const classNames = cn(g.custom_container, s.about_container)

    useEffect(() => {
        const image = imageRef.current.children[0],
              text = textRef.current.children[0],
              skills = skillsRef.current

        const ctx = aboutAnimate(aboutRef, image, text, skills)

        return () => ctx.revert()
    }, [])

    return (
        <Layout>
            <div className={g.global_container} ref={aboutRef}>
                <Container>
                    <div className={classNames}>
                        <ProfileImage imageRef={imageRef} />
                        <div className={s.profile_info}>
                            <ProfileText textRef={textRef} />
                            <Skills skillsRef={skillsRef} />
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}