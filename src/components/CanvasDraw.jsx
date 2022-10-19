import React from 'react'
import CanvasComponent from './CanvasComponent'

const CanvasDraw = () => {

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#00ff00'
    ctx.beginPath()
    ctx.arc(100, 100, 50 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <div className="CanvasComponent" ><CanvasComponent draw={draw} /></div>
  )
}

export default CanvasDraw