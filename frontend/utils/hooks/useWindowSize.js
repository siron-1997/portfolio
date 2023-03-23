import { useEffect, useState } from 'react'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (window !== undefined) {
      const handler = () => {
        setWindowSize({
          width: window.innerWidth,
          height: Math.ceil(window.scrollY),
        })
      }

      handler()
  
      window.addEventListener('resize', handler)
      window.addEventListener('scroll', handler, {passive: true})
  
      return () => {
        window.removeEventListener('resize', handler)
      }
    }
  }, [])

  return windowSize
}