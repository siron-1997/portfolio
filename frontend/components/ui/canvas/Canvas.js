import { useEffect, useRef } from 'react'

export default function Canvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
    }, [])

    return (
        <canvas ref={canvasRef} />
    )
}