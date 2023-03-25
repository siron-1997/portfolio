import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import s from '@styles/home/Portal.module.css'

export default function Rain() {

    let v = 0
    const angle = 90

    const counter = [...Array(100)].map(() => {
        const Hr = styled.hr`
            width: 50px;
            height: 1px;
            border-color: transparent;
            border-right-color: rgba(255, 255, 255, 0.7);
            border-right-width: 40px;
            position: absolute;
            left: ${Math.floor(Math.random() * window.innerWidth)}px;
            bottom: 100%;
            transform-origin: 0% 50%;
            animation-name: rain;
            animation-duration: ${0.2 + Math.random() * 0.8}s;
            animation-delay: ${Math.random() * 0.1}s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            opacity: 0.5;
        
            @keyframes rain {
                from {
                    transform: rotate(${angle}deg) translateX(0);
                } 
                to {
                    transform: rotate(${angle}deg) translateX(100vh);
                }
            }
        `
        return Hr
    })

    console.log(counter)

    return (
        <div className={s.rain}>
            
        </div>
    )
}