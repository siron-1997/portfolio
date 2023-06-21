import { useEffect, useState } from 'react'

export default function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('')

    useEffect(() => {
        let lastScrollTop = window.scrollY
        
        function handleScroll() {
            const scrollTop = window.scrollY

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