import Image from 'next/image'
import { Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import cn from 'classnames'
import { useIconSize, useWindowSize } from '@/utils/hooks'
import { profileSkills } from '@/assets/profile-skills'
import { BREAK_POINT_MB, BREAK_POINT_TB } from '@/assets/break-points'
import s from '@/styles/about/SkillList.module.css'

export default function SkillList({ skillListRef }) {
    const iconSize = useIconSize(45, 60, 50)
    const { width } = useWindowSize()

    const contentClassNames = cn(s.content, width > BREAK_POINT_TB && s.active)

    return (
        <div className={s.skill_list} ref={skillListRef}>
            {profileSkills.map((item, i_1) => (
                <div className={s.skill_list_container} key={i_1}>
                    <Typography component='h3' variant='h3'>{item.title}</Typography>
                    <List className={s.contents}>
                        {item.skills.map((skill, i_2) => (
                            <ListItem className={contentClassNames} style={{ padding: 0 }} key={i_2}>
                                <ListItemAvatar>
                                    <Image
                                        src={skill.image}
                                        alt={skill.alt}
                                        width={iconSize}
                                        height={iconSize}
                                        className={s.image}
                                        quality={skill.title === 'Three.js' ? 75 : 1}
                                        placeholder='blur'
                                        blurDataURL={skill.image}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={s.txt}
                                    primary={skill.title}
                                    secondary={skill.text}
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
                </div>
            ))}
        </div>
    )
}