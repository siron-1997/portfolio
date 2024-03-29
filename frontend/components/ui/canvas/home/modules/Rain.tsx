import React, { useRef, useEffect } from 'react'
import { useWindowSize } from '@/utils/hooks'
import { getRainState } from '@/utils/environment'
import { BREAK_POINT_MB } from '@/assets/break-points'
import s from '@/styles/Home.module.css'

type Props = {
    currentWeathers: any
    data: any
}

const Rain: React.FC<Props> = ({ currentWeathers, data }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const { width, height } = useWindowSize()
    const windSpeed: number = data?.wind?.speed

    const currentWeather: any = currentWeathers.filter((w: any) => 
        w.main === 'Clouds' || w.main === 'Rain' || w.main === 'Drizzle' || w.main === 'Thunderstorm' || w.main === 'Clear'
    )[0]

    useEffect(() => {
        if (data) {
            const canvas = canvasRef.current
            canvas.width = window.outerWidth
            canvas.height = window.outerHeight
    
            const { color, lineWidth, xSpeed, ySpeed } = getRainState({
                currentWeather,
                lineWidth: 2.5,
                xSpeed: width < BREAK_POINT_MB ? 1.5 : 2,
                ySpeed: width < BREAK_POINT_MB ? 15 : 20
            })

            const rainFall: number = data.rain ? data.rain['1h'] * (width < BREAK_POINT_MB ? 180 : 250) : 0
    
            if (canvas.getContext) {
                const ctx = canvas.getContext('2d')
                const w: number = canvas.width,
                      h: number = canvas.height
    
                ctx.strokeStyle = color
                ctx.lineWidth = lineWidth
                ctx.lineCap = 'round'
    
                const init: any = []
                const maxParts = rainFall
    
                for (let i: number; i < maxParts; i ++) {
                    const { length } = getRainState({ currentWeather, length: 1.2 })
                    init.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        l: Math.random() * length,
                        xs: - 4 + Math.random() * xSpeed + 1,
                        ys: Math.random() * 10 + ySpeed
                    })
                }
    
                const particles: any = []
    
                for (let i: number; i < maxParts; i ++) {
                    particles[i] = init[i]
                }
    
                const move = (): void => {
                    for (let i: number; i < particles.length; i ++) {
                        var p: any = particles[i]
                        p.x += p.xs
                        p.y += p.ys
    
                        if (p.x > w || p.y > h) {
                            p.x = Math.random() * w
                            p.y = - 30
                        }
                    }
                }
    
                const draw = (): void => {
                    ctx.clearRect(0, 0, w, h)
    
                    for (let i = 0; i < particles.length; i ++) {
                        const p = particles[i]
                        ctx.beginPath() // 新しいパスを作成
                        ctx.moveTo(p.x, p.y) // サブパスの開始点
                        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys) // サブパスの終点
                        ctx.stroke()
                    }
                    move()
                    requestAnimationFrame(draw)
                }
                draw()
            }
        }
    }, [currentWeather, data, width, height])

    return (
        <div className={s.rain_container}>
            <canvas
                ref={canvasRef}
                className={s.rain_canvas}
                style={{ transform: `rotateZ(${windSpeed}deg)` }}
            />
        </div>
    )
}

export default Rain