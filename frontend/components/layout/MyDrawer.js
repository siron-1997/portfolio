import { Drawer, Paper, Box } from '@mui/material'
import Navigation from './Navigation'
import { Close } from '@/components/ui'
import { useWindowSize } from '@/utils/hooks'
import { BREAK_POINT_MB } from '@/assets/break-points'
import { colors } from '@/assets/colors'
import s from '@/styles/layout/MyDrawer.module.css'

export default function MyDrawer({ open, onClose }) {
    const { width } = useWindowSize()

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={onClose}
            sx={{ zIndex: 8200 }}
        >
            <Paper sx={{ bgcolor: colors.bgColor.dark.sub, borderRadius: 0 }} className={s.paper}>
                <div className={s.close_container}>
                    <Close onClose={onClose} />
                </div>
                <Box sx={{
                    width: `${width / 1.4}px`,
                    [`@media (min-width: ${BREAK_POINT_MB}px)`]: { width: `${width / 2}px` }
                }}>
                    <Navigation />
                </Box>
            </Paper>
        </Drawer>
    )
}