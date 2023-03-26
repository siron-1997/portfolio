import React, { useEffect, useRef } from 'react'
import s from '@styles/home/Portal.module.css'

export default function Rain() {
    const rainRef = useRef()

    useEffect(() => {
        const rain = rainRef.current

        let hrElement

        const counter = 100

        for (let i = 0; i < counter; i ++) {
            hrElement = document.createElement('hr')
            hrElement.className = s.drop
            hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'
            hrElement.style.animationDuration = 0.2 + Math.random() * 0.8 + 's'
            hrElement.style.animationDelay = Math.random() * 5 + 's'
            rain.appendChild(hrElement)
        }
        rain.style.transform = 'rotate(45deg) scale(2.2)'
    }, [])

    return <div ref={rainRef} className={s.rain} />
}