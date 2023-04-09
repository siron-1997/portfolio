import { useRef, useEffect } from "react"
import { useWindowSize } from "@/utils/hooks"

class RainDrop {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this.speed = speed
        this.rainDrops = []
    }

    draw() {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y + 10)
        ctx.stroke()
    }

    updata() {
        this.y += this.speed
        if (this.y > height) {
            this.y = - 10
        }
    }

    createRainDrops() {
        for (let i = 0; i < width * options.density; i ++) {
            const x = Math.random() * width
            const y = Math.random() * height
            const speed = options.speed.Math.random() * 5
            const raindrop = new raindrop
        }
    }
}

export default function Rain2() {
    const canvasRef = useRef()
    const { width, height } = useWindowSize()

    useEffect(() => {
        const canvas = canvasRef.current

        const createRainAnimation = (canvas, options) => {
            const ctx = canvas.getContext('2d')
            const defaultOptions = {
                speed: 30,
                density: 0.1,
                color: '#fff'
            }
            options = Object.assign(defaultOptions, options)
        }

        
    }, [])

    return <canvas ref={canvasRef} />
}