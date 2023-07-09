import React, { useContext } from 'react'
import { Typography, List, ListItem } from '@mui/material'
import cn from 'classnames'
import { Container } from '@/components/ui'
import { useWindowSize } from '@/utils/hooks'
import { WorkDataContext, SectionsContext } from '@/pages/works/[slug]'
import { BREAK_POINT_MB, BREAK_POINT_TB, BREAK_POINT_LG } from '@/assets/break-points'
import { colors } from '@/assets/colors'
import s from '@/styles/works/work/modelViewer/Controls.module.css'
import g from '@/styles/global.module.css'

type ControlsProps = {
    data: any
}
type SectionTitleDescriptionProps = {
    title: string,
    description: string
}
type ControlListItemProps = {
    title: string,
    description: string,
    index: number,
    className: any,
    style?: any,
    onClick: any
}

const Controls: React.FC<ControlsProps> = ({ data }) => {
    const { setIsInitialControl, currentIndex, setCurrentIndex } = useContext(WorkDataContext)
    const { controlsRef } = useContext(SectionsContext)
    const { width } = useWindowSize()

    const rootClassNames = cn(g.root_container, s.controls)

    const handleClick = (index: number): void => {
        setIsInitialControl(false)
        setCurrentIndex(index)
    }

    return (
        <div className={rootClassNames} id='controls' ref={controlsRef}>
            <Container>
                <div>
                    <SectionTitleDescription title={data?.title} description={data?.description} />
                    {/* PC */}
                    <div
                        id='contents-pc'
                        className={s.controls_contents_pc}
                        style={{ display: width >= BREAK_POINT_TB ? 'flex' : 'none' }}
                    >
                        <List
                            sx={{ width: 350, padding: 0, mt: width >= BREAK_POINT_TB && width < BREAK_POINT_LG ? 6 : width >= BREAK_POINT_LG ? 7 : 0 }}
                        >
                            {data?.control_list?.map((item: any, i: number) => (
                                <ControlListItem
                                    key={i}
                                    index={i}
                                    title={item?.title}
                                    description={item?.description}
                                    className={`${s.control_list} ${currentIndex === i && s.current}`}
                                    onClick={() => handleClick(i)}
                                />
                            ))}
                        </List>
                    </div>
                    {/* Mobile */}
                    <div
                        id='contents-mb'
                        className={s.controls_contents_mb}
                        style={{ display: width < BREAK_POINT_TB ? 'flex' : 'none' }}
                    >
                        <List sx={{ width: width > BREAK_POINT_LG ? 350 : 300 }}>
                            {data?.control_list?.map((item: any, i: number) => (
                                <ControlListItem
                                    key={i}
                                    index={i}
                                    title={item?.title}
                                    description={item?.description}
                                    className={`${s.control_list} ${s.work_shadow} ${currentIndex === i && s.current}`}
                                    style={{ display: currentIndex === i ? 'flex' : 'none' }}
                                    onClick={() => handleClick(i)}
                                />
                            ))}
                        </List>
                        <List sx={{
                            display: 'flex',
                            gap:  width >= BREAK_POINT_MB ? 2.3 : 1.6,
                            margin: '0 auto 30px auto',
                            padding: '8px 16px'
                        }}>
                            {data?.control_list?.map((_: any, i: number) => (
                                <Typography
                                    key={i}
                                    component='span'
                                    sx={{
                                        width: width >= BREAK_POINT_MB ? 50 : 35,
                                        height: width >= BREAK_POINT_MB ? 6 : 8,
                                        borderRadius: 0.2,
                                        bgcolor: currentIndex === i ? colors.navigation : colors.text.dark,
                                        opacity: currentIndex === i ? 1 : 0.35,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => handleClick(i)}
                                />
                            ))}
                        </List>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const SectionTitleDescription: React.FC<SectionTitleDescriptionProps> = ({ title, description }) => {
    return (
        <section className={s.work_shadow}>
            <Typography component='h2' variant='h2'>{title}</Typography>
            <Typography component='p' variant='body1' sx={{ maxWidth: 650 }}>{description}</Typography>
        </section>
    )
}

const ControlListItem: React.FC<ControlListItemProps> = ({ title, description, index, className, style, onClick }) => {
    return (
        <ListItem className={className} style={style} onClick={onClick}>
            <Typography
                component='h5'
                variant='h5'
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 'auto' }}
            >
                <Typography
                    component='span'
                    sx={{
                        fontSize: 15,
                        lineHeight: 1.2,
                        letterSpacing: 1,
                        borderRadius: 10,
                        cursor: 'pointer',
                        border: '2px solid rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgb(0, 0, 0, 0.3)',
                        padding: '2px 7px 3px 7px'
                    }}
                >
                        {index + 1}
                </Typography>
                {title}
            </Typography>
            <Typography component='p' variant='body1' sx={{ fontSize: 13, mr: 'auto' }}>{description}</Typography>
        </ListItem>
    )
}

export default Controls