import { useState, useEffect } from 'react'

export default function useIsIos() {
    const [isIos, setIsIos] = useState(false)

    useEffect(() => {
        setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
    }, [isIos])

    return isIos
}