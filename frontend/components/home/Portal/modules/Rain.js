import { useRef, useEffect } from 'react'
import { getRainState } from '@/utils/environment'
import s from '@styles/Canvas.module.css'

export default function Rain({ currentWeather, data }) {
    const canvasRef = useRef(null)
    const windSpeed = data?.wind?.speed

    useEffect(() => {
        if (data) {
            const canvas = canvasRef.current
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
    
            const { color, lineWidth, xSpeed, ySpeed } = getRainState({
                currentWeather, lineWidth: 2.5, xSpeed: 2,  ySpeed: 20
            })

            const rainFall = data.rain ? data.rain['1h'] * 3.3 : 0
    
            if (canvas.getContext) {
                const ctx = canvas.getContext('2d')
                const w = canvas.width,
                      h = canvas.height
    
                ctx.strokeStyle = color
                ctx.lineWidth = lineWidth
                ctx.lineCap = 'round'
    
                const init = []
                const maxParts = rainFall
    
                for (let i = 0; i < maxParts; i ++) {
                    const { length } = getRainState({ currentWeather, length: 1.2 })
                    init.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        l: Math.random() * length,
                        xs: - 4 + Math.random() * xSpeed + 1,
                        ys: Math.random() * 10 + ySpeed
                    })
                }
    
                const particles = []
    
                for (let i = 0; i < maxParts; i ++) {
                    particles[i] = init[i]
                }
    
                const move = () => {
                    for (let i = 0; i < particles.length; i ++) {
                        var p = particles[i]
                        p.x += p.xs
                        p.y += p.ys
    
                        if (p.x > w || p.y > h) {
                            p.x = Math.random() * w
                            p.y = - 30
                        }
                    }
                }
    
                const draw = () => {
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
    }, [currentWeather, data])

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