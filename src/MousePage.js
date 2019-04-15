import React, { useState, useEffect, useRef } from 'react'

const useEventListener = (eventName, listener, element) => {
  const listenerRef = useRef()

  useEffect(() => {
    listenerRef.current = listener
    console.log('listener changed')
  }, [listener])

  useEffect(() => {
    element.addEventListener(eventName, listenerRef.current)
    console.log('event added', listenerRef.current)

    return () => {
      element.removeEventListener(eventName, listenerRef.current)
      console.log('event removed', listenerRef.current)
    }
  }, [eventName, element])
}

const MousePage = () => {
  const [coords, setCoords] = useState([0, 0])

  useEventListener(
    'mousemove',
    e => {
      setCoords([e.clientX, e.clientY])
    },
    window
  )

  return (
    <div>
      <div>Your cursor is on:</div>
      <div>X: {coords[0]}</div>
      <div>Y: {coords[1]}</div>
    </div>
  )
}

export default MousePage
