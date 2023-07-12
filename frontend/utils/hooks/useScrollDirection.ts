import { useEffect, useState } from 'react'

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<string>('')

    useEffect(() => {
        let lastScrollTop: number = window.scrollY

        const handleScroll = (): void => {
            const scrollTop: number = window.scrollY
            if (scrollTop > lastScrollTop) {
                setScrollDirection('down')
            } else if (scrollTop < lastScrollTop) {
                setScrollDirection('up')
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollDirection
}

export default useScrollDirection