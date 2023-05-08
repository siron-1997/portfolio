import { Fab } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import s from '@/styles/ui/button.module.css'

export default function ScrollToTopButton() {
    const handleClick = () => {
        // ページトップにスクロール
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Fab
            color='primary'
            onClick={handleClick}
            className={s.scroll_to_top}
        >
            <KeyboardArrowUp />
        </Fab>
    )
}