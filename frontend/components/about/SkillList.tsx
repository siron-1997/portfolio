import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import cn from 'classnames'
import { useIconSize, useWindowSize } from '@/utils/hooks'
import { skillsListAnimation } from '@/animations/components/about'
import { skillsList } from '@/assets/about-contents'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'
import s from '@/styles/about/SkillList.module.css'

const SkillsList: React.FC = () => {
    const skillsListRef = useRef<HTMLDivElement | null>(null)
    const classNames = cn(s.skills_list_container, 'skills-list-container')

    useEffect(() => {
        const ctx = skillsListAnimation({
            skillList: skillsListRef.current.querySelectorAll('.skills-list-container'),
            skillsListRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className={s.skills_list} ref={skillsListRef}>
            {skillsList.map((item, i) => (
                <div className={classNames} key={i}>
                    <Typography component='h3' variant='h3'>{item.title}</Typography>
                    <SkillList skillList={item.skills} />
                </div>
            ))}
        </div>
    )
}

const SkillList: React.FC<any> = ({ skillList }) => {
    const iconSize = useIconSize(45, 60, 50)
    const { width } = useWindowSize()
    const skillListClassNames = cn(s.skill_list, 'skill-list')
    const skillClassNames = cn(s.skill, { [s.active]: width > BREAK_POINT_TB })

    return (
        <List className={skillListClassNames}>
            {skillList.map((item: any, i: number) => (
                <ListItem className={skillClassNames} style={{ padding: 0 }} key={i}>
                    {/* Icon */}
                    <ListItemAvatar>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={iconSize}
                            height={iconSize}
                            className={s.image}
                            quality={item.title === 'Three.js' ? 75 : 1}
                            placeholder='blur'
                            blurDataURL={item.image}
                        />
                    </ListItemAvatar>
                    {/* Title & Text */}
                    <ListItemText
                        className={s.txt}
                        primary={item.title}
                        secondary={item.text}
                        primaryTypographyProps={{
                            sx: {
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: 500,
                                paddingBottom: '8px',
                                paddingLeft: '5px',
                                [`@media (min-width: ${BREAK_POINT_MB}px)`]: { fontSize: '18px', paddingLeft: '10px' },
                                [`@media (min-width: ${BREAK_POINT_TB}px)`]: { fontSize: '15px', paddingTop: '4px' },
                                lineHeight: '1.2',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
                                opacity: '0.9'
                            }
                        }}
                        secondaryTypographyProps={{
                            sx: {
                                color: '#fff',
                                fontSize: '15px',
                                paddingTop: '6px',
                                paddingLeft: '5px',
                                [`@media (min-width: ${BREAK_POINT_MB}px)`]: { fontSize: '16px', paddingTop: '8px', paddingLeft: '10px' },
                                [`@media (min-width: ${BREAK_POINT_TB}px)`]: { fontSize: '15px', paddingTop: '4px' },
                                fontWeight: 'normal',
                                opacity: '0.65'
                            }
                        }}
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default SkillsList