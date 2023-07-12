import React from 'react'
import { Typography } from '@mui/material'
import { introduction } from '@/assets/about-contents'
import s from '@/styles/about/Introduction.module.css'

type CustomProps = {
    introductionRef: any
}

const Introduction: React.FC<CustomProps> = ({ introductionRef }) => {
    return (
        <div ref={introductionRef} className={s.introduction}>
            <section className={s.profile_text}>
                <Typography component='h1' variant='h1'>{introduction.title}</Typography>
                <Typography component='p' variant='p'>{introduction.description}</Typography>
            </section>
        </div>
    )
}

export default Introduction