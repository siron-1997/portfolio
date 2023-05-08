import Image from 'next/image'
import { Typography, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core'
import cn from 'classnames'
import { useIconSize, useWindowSize } from '@/utils/hooks'
import { profileSkills } from '@/assets/profile-skills'
import s from '@/styles/About.module.css'

const useStyles = makeStyles(theme => ({
    primaryText: {
        color: '#fff',
        fontSize: '18px',
        paddingBottom: '8px',
        paddingLeft: '5px',
        [theme.breakpoints.up('sm')]: { fontSize: '24px', paddingBottom: '10px', paddingLeft: '10px' },
        [theme.breakpoints.up('md')]: { fontSize: '16px', paddingBottom: '5px' },
        lineHeight: '1.2',
        borderBottom: '1px solid #999',
        opacity: '0.85'
    },
    secondaryText: {
        color: '#fff',
        fontSize: '15px',
        paddingTop: '6px',
        paddingLeft: '5px',
        [theme.breakpoints.up('sm')]: { fontSize: '16px', paddingTop: '8px', paddingLeft: '10px' },
        [theme.breakpoints.up('md')]: { fontSize: '15px', paddingTop: '4px' },
        fontWeight: 'normal',
        opacity: '0.65'
    }
}))

export default function Skills({ skillsRef }) {
    const iconSize = useIconSize(50, 65, 50)
    const { width } = useWindowSize()
    const classes = useStyles()

    const contentClassNames = cn('list', s.skills_content, width > 1024 && s.active),
          txtClassNames = cn('skill_text', s.skills_txt)

    return (
        <div className={s.skills} ref={skillsRef}>
            {profileSkills.map((item, i_1) => (
                <div className={s.skills_container} key={i_1}>
                    <Typography className='title' component='h3'>{item.title}</Typography>
                    <List className={s.skills_contents}>
                        {item.skills.map((skill, i_2) => (
                            <ListItem className={contentClassNames} style={{ padding: 0 }} key={i_2}>
                                <ListItemAvatar>
                                    <Image
                                        src={skill.image}
                                        alt={skill.alt}
                                        width={iconSize}
                                        height={iconSize}
                                        className={s.skills_image}
                                        quality={skill.title === 'Three.js' ? 75 : 1}
                                        placeholder='blur'
                                        blurDataURL={skill.image}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    className={txtClassNames}
                                    primary={skill.title}
                                    secondary={skill.text}
                                    primaryTypographyProps={{ className: classes.primaryText }}
                                    secondaryTypographyProps={{ className: classes.secondaryText }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            ))}
        </div>
    )
}