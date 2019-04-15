import React, { useState, useEffect, useRef } from 'react'

const useEventListener = (eventName, listener, element) => {
  const listenerRef = useRef()

  useEffect(() => {
    listenerRef.current = listener
  }, [listener])

  useEffect(() => {
    const listenerWrapper = e => {
      listenerRef.current(e)
    }

    element.addEventListener(eventName, listenerWrapper)
    console.log('event added', listenerWrapper)

    return () => {
      element.removeEventListener(eventName, listenerWrapper)
      console.log('event removed', listenerWrapper)
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
