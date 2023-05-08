import { useState, useEffect } from 'react'

export default function useIconSize(mb, tb, pc) {
    const [iconSize, setIconSize] = useState(0)

    const resize = () => {
        const width = window.innerWidth
        switch (true) {
            case width > 768 && width < 1024:
                setIconSize(tb)
                break
            case width > 1024:
                setIconSize(pc)
                break
            default:
                setIconSize(mb)
                break
        }
    }

    useEffect(() => {
        resize()
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])

    return iconSize
}