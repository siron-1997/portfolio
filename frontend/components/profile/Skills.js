import Image from 'next/image'
import { Container } from '@/components/ui'
import { programmingLanguages, frameWorks, developmentTools } from '@/assets/profile-skills'
import s from '@/styles/profile/Profile.module.css'
import g from '@/styles/global.module.css'

export default function Skills() {
    return (
        <div className={s.skills}>
            <Container>
                <div className={s.contents}>
                    <h1>Skills</h1>
                    {/* Programming Language */}
                    <div className={s.skills_container}>
                        <h2 className={s.skills_headline}>{programmingLanguages.title}</h2>
                        <div className={s.skills_contents}>
                            {programmingLanguages.languages.map((item, i) => (
                                <div className={s.skills_content} key={i}>
                                    <div className={`${s.skills_image_container} ${g.image_container}`}>
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            quality={1}
                                        />
                                    </div>
                                    <div className={s.skills_txt_container}>
                                        <p className={s.title}>{item.title}</p>
                                        <p className={s.text}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Frameworks */}
                    <div className={s.skills_contents}>
                        <h2 className={s.skills_headline}>{frameWorks.title}</h2>
                        {frameWorks.frameworks.map((item, i) => (
                            <div className={s.skills_content} key={i}>
                                <div className={`${s.skills_image_container} ${g.image_container}`}>
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        quality={1}
                                    />
                                </div>
                                <div className={s.skills_txt_container}>
                                    <p className={s.title}>{item.title}</p>
                                    <p className={s.text}>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Development Tools */}
                    <div className={s.skills_contents}>
                        <h2 className={s.skills_headline}>{developmentTools.title}</h2>
                        {developmentTools.tools.map((item, i) => (
                            <div className={s.skills_content} key={i}>
                                <div className={`${s.skills_image_container} ${g.image_container}`}>
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        quality={1}
                                    />
                                </div>
                                <div className={s.skills_txt_container}>
                                    <p className={s.title}>{item.title}</p>
                                    <p className={s.text}>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}