import React, { useState, useEffect, useCallback } from 'react'

const useEventListener = (eventName, listener, element) => {
  useEffect(() => {
    element.addEventListener(eventName, listener)
    console.log('event added', listener)

    return () => {
      element.removeEventListener(eventName, listener)
      console.log('event removed', listener)
    }
  }, [eventName, listener, element])
}

const MousePage = () => {
  const [coords, setCoords] = useState([0, 0])

  const listener = useCallback(e => {
    setCoords([e.clientX, e.clientY])
  }, [])

  useEventListener('mousemove', listener, window)

  return (
    <div>
      <div>Your cursor is on:</div>
      <div>X: {coords[0]}</div>
      <div>Y: {coords[1]}</div>
    </div>
  )
}

export default MousePage
