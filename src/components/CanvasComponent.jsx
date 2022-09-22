// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

import { render } from '@testing-library/react'
import React, { useRef, useEffect } from 'react'

const CanvasComponent = props => {

  const { draw, ...rest } = props
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />
}

export default CanvasComponent