import React, { useEffect, useRef } from 'react'
import s from '@styles/home/Portal.module.css'

export default function Rain({ data }) {
    const rainRef = useRef(null)

    useEffect(() => {
        const rain = rainRef.current
        const rainFall = data?.rain !== undefined ? data.rain['h1'] : 0,
              windSpeed = data?.wind?.speed || 0

        for (let i = 0; i < rainFall; i ++) {
            const hrElement = document.createElement('hr')
            hrElement.className = s.drop
            hrElement.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`
            hrElement.style.animationDuration = 0.2 + Math.random() * 0.6 + 's'
            hrElement.style.animationDelay = Math.random() * 0.8 + 's'

            rain.appendChild(hrElement)
        }
    
        rain.style.transform = `rotate(${windSpeed * 1.6}deg) scale(2.2)`
    }, [])

    return <div ref={rainRef} className={s.rain} />
}