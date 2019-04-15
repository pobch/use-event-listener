import React, { useState, useEffect } from 'react'

const MousePage = () => {
  const [coords, setCoords] = useState([0, 0])

  useEffect(() => {
    const mouseListener = e => {
      setCoords([e.clientX, e.clientY])
    }

    window.addEventListener('mousemove', mouseListener)
    console.log('event added')

    return () => {
      window.removeEventListener('mousemove', mouseListener)
      console.log('event removed')
    }
  }, [])

  return (
    <div>
      <div>Your cursor is on:</div>
      <div>X: {coords[0]}</div>
      <div>Y: {coords[1]}</div>
    </div>
  )
}

export default MousePage
