import React, { useEffect, useRef } from 'react'
import s from '@styles/home/Portal.module.css'

export default function Rain() {
    const rainRef = useRef()

    const nbDrop = 858

    const randRange = (minNum, maxNum) => {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum)
    }

    useEffect(() => {
        const rain = rainRef.current
        for (let i = 0; i < nbDrop; i ++) {
            const dropLeft = randRange(0, 1000)
            const dropTop = randRange(- 1400, 1800)
            const drop = document.createElement('div')
            drop.className = s.drop
            drop.style.top = String(dropTop)
            drop.style.left = String(dropLeft)


            rain.appendChild(drop)
        }

        console.log(rain)
    }, [])

    return <div ref={rainRef} className={s.rain} />
}